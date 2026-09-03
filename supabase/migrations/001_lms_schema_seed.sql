create extension if not exists pgcrypto;

do $$ begin
  create type public.lms_role as enum ('ADMIN', 'STUDENT', 'INSTRUCTOR');
exception when duplicate_object then null;
end $$;

do $$ begin
  create type public.lms_course_status as enum ('DRAFT', 'UPCOMING', 'LIVE', 'ARCHIVED');
exception when duplicate_object then null;
end $$;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique,
  full_name text,
  phone text,
  country text,
  role public.lms_role not null default 'STUDENT',
  status text not null default 'ACTIVE',
  created_at timestamptz not null default now()
);

create table if not exists public.courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  short_name text,
  slug text not null unique,
  description text,
  category text,
  level text,
  status public.lms_course_status not null default 'DRAFT',
  classroom_url text,
  main_course_url text,
  orientation_url text,
  created_at timestamptz not null default now()
);

create table if not exists public.cohorts (
  id uuid primary key default gen_random_uuid(),
  course_id uuid not null references public.courses(id) on delete cascade,
  name text not null,
  start_date date,
  end_date date,
  timezone text default 'Asia/Kolkata',
  class_frequency text,
  class_duration text,
  created_at timestamptz not null default now()
);

create table if not exists public.enrollment_codes (
  id uuid primary key default gen_random_uuid(),
  course_id uuid not null references public.courses(id) on delete cascade,
  cohort_id uuid references public.cohorts(id) on delete set null,
  code_hash text not null,
  code_type text not null check (code_type in ('STUDENT_SPECIFIC', 'GENERAL')),
  student_email text,
  max_uses integer,
  used_count integer not null default 0,
  expires_at timestamptz,
  revoked_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.enrollments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  course_id uuid not null references public.courses(id) on delete cascade,
  cohort_id uuid references public.cohorts(id) on delete set null,
  status text not null default 'ACTIVE',
  progress integer not null default 0 check (progress >= 0 and progress <= 100),
  activated_at timestamptz not null default now(),
  revoked_at timestamptz,
  unique (user_id, course_id, cohort_id)
);

create table if not exists public.modules (
  id uuid primary key default gen_random_uuid(),
  course_id uuid not null references public.courses(id) on delete cascade,
  title text not null,
  description text,
  display_order integer not null default 1
);

create table if not exists public.class_sessions (
  id uuid primary key default gen_random_uuid(),
  course_id uuid not null references public.courses(id) on delete cascade,
  cohort_id uuid references public.cohorts(id) on delete cascade,
  module_id uuid references public.modules(id) on delete set null,
  title text not null,
  starts_at timestamptz,
  ends_at timestamptz,
  timezone text default 'Asia/Kolkata',
  instructor text,
  meeting_url text,
  recording_url text,
  classroom_url text,
  material_url text,
  quiz_url text,
  status text not null default 'UPCOMING'
);

create table if not exists public.resources (
  id uuid primary key default gen_random_uuid(),
  course_id uuid not null references public.courses(id) on delete cascade,
  module_id uuid references public.modules(id) on delete set null,
  title text not null,
  description text,
  type text not null,
  url text not null,
  published boolean not null default true
);

create table if not exists public.recordings (
  id uuid primary key default gen_random_uuid(),
  course_id uuid not null references public.courses(id) on delete cascade,
  class_session_id uuid references public.class_sessions(id) on delete set null,
  title text not null,
  youtube_url text not null,
  thumbnail_url text,
  description text,
  published boolean not null default true
);

create table if not exists public.quizzes (
  id uuid primary key default gen_random_uuid(),
  course_id uuid not null references public.courses(id) on delete cascade,
  module_id uuid references public.modules(id) on delete set null,
  title text not null,
  description text,
  google_form_url text not null,
  duration text,
  published boolean not null default true
);

create table if not exists public.progress_events (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  enrollment_id uuid not null references public.enrollments(id) on delete cascade,
  class_session_id uuid references public.class_sessions(id) on delete set null,
  quiz_id uuid references public.quizzes(id) on delete set null,
  completed_at timestamptz not null default now()
);

create table if not exists public.audit_logs (
  id uuid primary key default gen_random_uuid(),
  actor_id uuid references auth.users(id) on delete set null,
  action text not null,
  table_name text,
  record_id uuid,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create or replace function public.current_lms_role()
returns public.lms_role
language sql
stable
security definer
set search_path = public
as $$
  select coalesce((select role from public.profiles where id = auth.uid()), 'STUDENT'::public.lms_role);
$$;

create or replace function public.is_lms_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select public.current_lms_role() = 'ADMIN'::public.lms_role;
$$;

create or replace function public.handle_new_lms_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name, role)
  values (new.id, new.email, coalesce(new.raw_user_meta_data->>'full_name', split_part(new.email, '@', 1)), 'STUDENT')
  on conflict (id) do update set email = excluded.email;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created_lms_profile on auth.users;
create trigger on_auth_user_created_lms_profile
after insert on auth.users
for each row execute function public.handle_new_lms_user();

create or replace function public.redeem_lms_access_code(input_code text)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  matched_code public.enrollment_codes%rowtype;
  created_enrollment uuid;
  current_email text;
begin
  if auth.uid() is null then
    raise exception 'Please sign in before activating an enrollment code.';
  end if;

  select email into current_email from auth.users where id = auth.uid();

  select *
  into matched_code
  from public.enrollment_codes
  where revoked_at is null
    and (expires_at is null or expires_at > now())
    and crypt(upper(trim(input_code)), code_hash) = code_hash
  limit 1;

  if matched_code.id is null then
    raise exception 'Invalid or expired enrollment code.';
  end if;

  if matched_code.student_email is not null and lower(matched_code.student_email) <> lower(current_email) then
    raise exception 'Invalid or expired enrollment code.';
  end if;

  if matched_code.max_uses is not null and matched_code.used_count >= matched_code.max_uses then
    raise exception 'Invalid or expired enrollment code.';
  end if;

  insert into public.enrollments (user_id, course_id, cohort_id, status, progress)
  values (auth.uid(), matched_code.course_id, matched_code.cohort_id, 'ACTIVE', 62)
  on conflict (user_id, course_id, cohort_id)
  do update set status = 'ACTIVE', revoked_at = null
  returning id into created_enrollment;

  update public.enrollment_codes
  set used_count = used_count + 1
  where id = matched_code.id;

  insert into public.audit_logs (actor_id, action, table_name, record_id)
  values (auth.uid(), 'REDEEM_ACCESS_CODE', 'enrollments', created_enrollment);

  return created_enrollment;
end;
$$;

alter table public.profiles enable row level security;
alter table public.courses enable row level security;
alter table public.cohorts enable row level security;
alter table public.enrollment_codes enable row level security;
alter table public.enrollments enable row level security;
alter table public.modules enable row level security;
alter table public.class_sessions enable row level security;
alter table public.resources enable row level security;
alter table public.recordings enable row level security;
alter table public.quizzes enable row level security;
alter table public.progress_events enable row level security;
alter table public.audit_logs enable row level security;

drop policy if exists "profiles read own or admin" on public.profiles;
create policy "profiles read own or admin" on public.profiles for select using (id = auth.uid() or public.is_lms_admin());
drop policy if exists "profiles admin update" on public.profiles;
create policy "profiles admin update" on public.profiles for update using (public.is_lms_admin()) with check (public.is_lms_admin());

drop policy if exists "courses read by enrolled or admin" on public.courses;
create policy "courses read by enrolled or admin" on public.courses for select using (public.is_lms_admin() or exists (select 1 from public.enrollments e where e.course_id = courses.id and e.user_id = auth.uid() and e.status = 'ACTIVE'));
drop policy if exists "courses admin write" on public.courses;
create policy "courses admin write" on public.courses for all using (public.is_lms_admin()) with check (public.is_lms_admin());

drop policy if exists "cohorts read by enrolled or admin" on public.cohorts;
create policy "cohorts read by enrolled or admin" on public.cohorts for select using (public.is_lms_admin() or exists (select 1 from public.enrollments e where e.cohort_id = cohorts.id and e.user_id = auth.uid() and e.status = 'ACTIVE'));
drop policy if exists "cohorts admin write" on public.cohorts;
create policy "cohorts admin write" on public.cohorts for all using (public.is_lms_admin()) with check (public.is_lms_admin());

drop policy if exists "enrollments read own or admin" on public.enrollments;
create policy "enrollments read own or admin" on public.enrollments for select using (user_id = auth.uid() or public.is_lms_admin());
drop policy if exists "enrollments admin write" on public.enrollments;
create policy "enrollments admin write" on public.enrollments for all using (public.is_lms_admin()) with check (public.is_lms_admin());

drop policy if exists "codes admin read" on public.enrollment_codes;
create policy "codes admin read" on public.enrollment_codes for select using (public.is_lms_admin());
drop policy if exists "codes admin write" on public.enrollment_codes;
create policy "codes admin write" on public.enrollment_codes for all using (public.is_lms_admin()) with check (public.is_lms_admin());

drop policy if exists "modules read by enrolled or admin" on public.modules;
create policy "modules read by enrolled or admin" on public.modules for select using (public.is_lms_admin() or exists (select 1 from public.enrollments e where e.course_id = modules.course_id and e.user_id = auth.uid() and e.status = 'ACTIVE'));
drop policy if exists "modules admin write" on public.modules;
create policy "modules admin write" on public.modules for all using (public.is_lms_admin()) with check (public.is_lms_admin());

drop policy if exists "sessions read by enrolled or admin" on public.class_sessions;
create policy "sessions read by enrolled or admin" on public.class_sessions for select using (public.is_lms_admin() or exists (select 1 from public.enrollments e where e.course_id = class_sessions.course_id and e.user_id = auth.uid() and e.status = 'ACTIVE'));
drop policy if exists "resources read by enrolled or admin" on public.resources;
create policy "resources read by enrolled or admin" on public.resources for select using (published and exists (select 1 from public.enrollments e where e.course_id = resources.course_id and e.user_id = auth.uid() and e.status = 'ACTIVE') or public.is_lms_admin());
drop policy if exists "recordings read by enrolled or admin" on public.recordings;
create policy "recordings read by enrolled or admin" on public.recordings for select using (published and exists (select 1 from public.enrollments e where e.course_id = recordings.course_id and e.user_id = auth.uid() and e.status = 'ACTIVE') or public.is_lms_admin());
drop policy if exists "quizzes read by enrolled or admin" on public.quizzes;
create policy "quizzes read by enrolled or admin" on public.quizzes for select using (published and exists (select 1 from public.enrollments e where e.course_id = quizzes.course_id and e.user_id = auth.uid() and e.status = 'ACTIVE') or public.is_lms_admin());

drop policy if exists "sessions admin write" on public.class_sessions;
create policy "sessions admin write" on public.class_sessions for all using (public.is_lms_admin()) with check (public.is_lms_admin());
drop policy if exists "resources admin write" on public.resources;
create policy "resources admin write" on public.resources for all using (public.is_lms_admin()) with check (public.is_lms_admin());
drop policy if exists "recordings admin write" on public.recordings;
create policy "recordings admin write" on public.recordings for all using (public.is_lms_admin()) with check (public.is_lms_admin());
drop policy if exists "quizzes admin write" on public.quizzes;
create policy "quizzes admin write" on public.quizzes for all using (public.is_lms_admin()) with check (public.is_lms_admin());

drop policy if exists "progress read own or admin" on public.progress_events;
create policy "progress read own or admin" on public.progress_events for select using (user_id = auth.uid() or public.is_lms_admin());
drop policy if exists "progress insert own" on public.progress_events;
create policy "progress insert own" on public.progress_events for insert with check (user_id = auth.uid());
drop policy if exists "audit admin read" on public.audit_logs;
create policy "audit admin read" on public.audit_logs for select using (public.is_lms_admin());

with inserted_course as (
  insert into public.courses (title, short_name, slug, description, category, level, status, classroom_url, main_course_url, orientation_url)
  values ('Generative AI Engineering', 'GENAI', 'generative-ai-engineering', 'Dummy course for Datamarcos LMS testing.', 'AI', 'Intermediate', 'LIVE', 'https://classroom.google.com/', '/programs', '/programs')
  on conflict (slug) do update set title = excluded.title, status = excluded.status
  returning id
),
inserted_cohort as (
  insert into public.cohorts (course_id, name, start_date, end_date, timezone, class_frequency, class_duration)
  select id, 'GENAI-SEP-2026', '2026-09-10', '2026-11-30', 'Asia/Kolkata', 'Twice weekly', '2 hours' from inserted_course
  returning id, course_id
),
inserted_module as (
  insert into public.modules (course_id, title, description, display_order)
  select course_id, 'LLM Foundations', 'Dummy module for LMS testing.', 1 from inserted_cohort
  returning id, course_id
)
insert into public.class_sessions (course_id, cohort_id, module_id, title, starts_at, ends_at, instructor, meeting_url, recording_url, classroom_url, material_url, quiz_url)
select m.course_id, c.id, m.id, 'Introduction to LLM Engineering', '2026-09-10 19:00:00+05:30', '2026-09-10 21:00:00+05:30', 'Datamarcos Faculty', 'https://meet.google.com/dummy-class', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'https://classroom.google.com/', 'https://drive.google.com/', 'https://forms.google.com/'
from inserted_module m join inserted_cohort c on c.course_id = m.course_id;

insert into public.enrollment_codes (course_id, cohort_id, code_hash, code_type, max_uses, expires_at)
select c.id, co.id, crypt('DM-GENAI-8F42K', gen_salt('bf')), 'GENERAL', 10, now() + interval '1 year'
from public.courses c
join public.cohorts co on co.course_id = c.id
where c.slug = 'generative-ai-engineering'
  and not exists (
    select 1 from public.enrollment_codes ec
    where ec.course_id = c.id and crypt('DM-GENAI-8F42K', ec.code_hash) = ec.code_hash
  );

insert into auth.users (id, instance_id, aud, role, email, encrypted_password, email_confirmed_at, raw_user_meta_data, created_at, updated_at)
values
  ('10000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', 'admin@datamarcos.test', crypt('Admin@12345', gen_salt('bf')), now(), '{"full_name":"Datamarcos Admin"}', now(), now()),
  ('10000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', 'student@datamarcos.test', crypt('Student@12345', gen_salt('bf')), now(), '{"full_name":"Demo Student"}', now(), now())
on conflict (id) do nothing;

insert into auth.identities (id, user_id, provider_id, identity_data, provider, last_sign_in_at, created_at, updated_at)
values
  ('10000000-0000-0000-0000-000000000001', '10000000-0000-0000-0000-000000000001', 'admin@datamarcos.test', '{"sub":"10000000-0000-0000-0000-000000000001","email":"admin@datamarcos.test"}', 'email', now(), now(), now()),
  ('10000000-0000-0000-0000-000000000002', '10000000-0000-0000-0000-000000000002', 'student@datamarcos.test', '{"sub":"10000000-0000-0000-0000-000000000002","email":"student@datamarcos.test"}', 'email', now(), now(), now())
on conflict (provider, provider_id) do nothing;

insert into public.profiles (id, email, full_name, role)
values
  ('10000000-0000-0000-0000-000000000001', 'admin@datamarcos.test', 'Datamarcos Admin', 'ADMIN'),
  ('10000000-0000-0000-0000-000000000002', 'student@datamarcos.test', 'Demo Student', 'STUDENT')
on conflict (id) do update set role = excluded.role, full_name = excluded.full_name, email = excluded.email;

insert into public.enrollments (user_id, course_id, cohort_id, status, progress)
select '10000000-0000-0000-0000-000000000002', c.id, co.id, 'ACTIVE', 62
from public.courses c
join public.cohorts co on co.course_id = c.id
where c.slug = 'generative-ai-engineering'
on conflict (user_id, course_id, cohort_id) do update set status = 'ACTIVE', progress = 62;
