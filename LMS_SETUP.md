# Datamarcos Learning Hub Setup

This phase adds LMS routes inside the existing Datamarcos Next.js app without replacing the marketing website or design system.

## Environment

Set these values locally and in Vercel:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

Keep `SUPABASE_SERVICE_ROLE_KEY` server-only. Never expose it in client components.

## Supabase Setup

Run this SQL in the Supabase SQL Editor:

```bash
supabase/migrations/001_lms_schema_seed.sql
```

It creates the LMS schema, RLS policies, an enrollment-code redemption function, one dummy course, one admin user and one student user.

Test credentials after the SQL is applied:

- Admin: `admin@datamarcos.test` / `Admin@12345`
- Student: `student@datamarcos.test` / `Student@12345`
- Enrollment code: `DM-GENAI-8F42K`

## Supabase Tables

Recommended source-of-truth tables:

- `profiles`: user id, role, full name, phone, country, status
- `courses`: title, slug, category, level, status, classroom url, main course url
- `cohorts`: course id, name, start date, end date, timezone, cadence
- `enrollment_codes`: course id, cohort id, code hash, type, max uses, expires at, revoked at
- `enrollments`: user id, course id, cohort id, status, activated at, revoked at
- `modules`: course id, title, description, display order
- `class_sessions`: module id, cohort id, title, schedule, status, meeting url
- `resources`: course id, module id, title, type, url, published
- `recordings`: class id, title, YouTube url, published
- `quizzes`: module id, title, Google Forms url, published
- `progress_events`: user id, enrollment id, class id, quiz id, completed at
- `audit_logs`: actor id, action, table name, record id, metadata

## Security Rules

RLS should enforce:

- Students can read only their own profiles, enrollments and progress.
- Students can read only courses linked to active enrollments.
- Students cannot read enrollment codes.
- Students cannot create admin records or promote themselves.
- Admin access is determined server-side from `profiles.role`.
- Admin writes create audit log entries where appropriate.

## Auth Flow

- Email/password and Google OAuth are handled by Supabase Auth.
- Google sign-in alone does not grant course access.
- Enrollment code validation must run server-side.
- Store enrollment code hashes, not plaintext codes.
- Show plaintext access codes only immediately after admin generation.

## Local Commands

```bash
npm install
npm run dev
npm run lint
npm run build
```

The current LMS UI uses static placeholder data until Supabase migrations and server actions are connected.
