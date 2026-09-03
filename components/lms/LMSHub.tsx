"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { ArrowRight, Clock, ExternalLink, FileText, LockKeyhole, LogOut, Mail, Plus, Save, Search, ShieldCheck, Sparkles, UserRoundCog, UsersRound } from "lucide-react";
import { adminNav, classes, externalLabel, getCourse, lmsCourses, lmsNav, modules, quizzes, recordings, resources } from "@/lib/lms-data";
import { supabase, type LmsCourseRecord, type LmsEnrollmentRecord, type Profile } from "@/lib/supabase";

type LMSHubProps = { path: string };
type Message = { type: "success" | "error" | "info"; text: string } | null;

function ProgressBar({ value }: { value: number }) {
  return <div className="lms-progress" aria-label={`${value}% complete`}><span style={{ width: `${value}%` }} /></div>;
}

function Status({ value }: { value: string }) {
  return <span className={`lms-status lms-status-${value.toLowerCase()}`}>{value.replaceAll("_", " ")}</span>;
}

function MessageBanner({ message }: { message: Message }) {
  if (!message) return null;
  return <div className={`lms-message ${message.type}`}>{message.text}</div>;
}

function useSessionProfile() {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    async function loadProfile(currentUser: User | null) {
      if (!currentUser) {
        setProfile(null);
        return;
      }
      const { data } = await supabase.from("profiles").select("id, full_name, role, email").eq("id", currentUser.id).maybeSingle();
      if (mounted) setProfile(data as Profile | null);
    }
    supabase.auth.getUser().then(({ data }) => {
      if (!mounted) return;
      setUser(data.user);
      loadProfile(data.user).finally(() => setLoading(false));
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
      loadProfile(session?.user || null);
    });
    return () => {
      mounted = false;
      listener.subscription.unsubscribe();
    };
  }, []);

  return { user, profile, loading };
}

function LMSLayout({ children, mode = "student" }: { children: React.ReactNode; mode?: "student" | "admin" | "public" }) {
  const nav = mode === "admin" ? adminNav : lmsNav;
  const { user } = useSessionProfile();

  async function signOut() {
    await supabase.auth.signOut();
    window.location.href = "/lms";
  }

  return (
    <section className="lms-shell">
      <div className="container lms-frame">
        <aside className="lms-sidebar">
          <Link className="lms-brand" href="/lms"><span>DM</span><strong>Learning Hub</strong></Link>
          {mode !== "public" ? (
            <nav aria-label={`${mode} learning hub navigation`}>
              {nav.map((item) => {
                const Icon = item.icon;
                return <Link href={item.href} key={item.href}><Icon size={18} />{item.label}</Link>;
              })}
            </nav>
          ) : null}
          {user ? <button className="button secondary" type="button" onClick={signOut}><LogOut size={18} /> Sign Out</button> : null}
          <div className="lms-security-note"><ShieldCheck size={18} /><span>Access is granted only by authenticated identity plus active enrollment.</span></div>
        </aside>
        <div className="lms-content">{children}</div>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <LMSLayout mode="public">
      <div className="lms-hero-panel">
        <p className="eyebrow">Datamarcos Learning Hub</p>
        <h1>Choose your workspace.</h1>
        <p>Students activate enrolled courses. Admins manage courses, cohorts, access codes and progress through Supabase-backed records.</p>
        <div className="lms-choice-grid">
          <Link className="lms-choice" href="/lms/login?role=student"><UsersRound size={30} /><strong>Student Sign In</strong><span>Open dashboard, classes, recordings, materials and quizzes.</span></Link>
          <Link className="lms-choice" href="/lms/login?role=admin"><UserRoundCog size={30} /><strong>Admin Sign In</strong><span>Create courses, generate enrollment codes and review progress.</span></Link>
        </div>
      </div>
    </LMSLayout>
  );
}

function AuthCard({ kind }: { kind: "login" | "register" | "activate" | "forgot" | "reset" }) {
  const [message, setMessage] = useState<Message>(null);
  const [busy, setBusy] = useState(false);
  const isRegister = kind === "register";
  const isActivate = kind === "activate";
  const title = kind === "login" ? "Welcome back" : kind === "forgot" ? "Reset your password" : kind === "reset" ? "Create a new password" : isActivate ? "Activate enrollment" : "Create your account";

  async function submit(formData: FormData) {
    setBusy(true);
    setMessage(null);
    const email = String(formData.get("email") || "");
    const password = String(formData.get("password") || "");
    const fullName = String(formData.get("fullName") || "");
    const code = String(formData.get("code") || "");
    let error: { message: string } | null = null;

    if (kind === "login") {
      const result = await supabase.auth.signInWithPassword({ email, password });
      error = result.error;
      if (!error) {
        const userId = result.data.user?.id;
        const { data: signedInProfile } = userId
          ? await supabase.from("profiles").select("role").eq("id", userId).maybeSingle()
          : { data: null };
        window.location.href = signedInProfile?.role === "ADMIN" ? "/lms/admin" : "/lms/dashboard";
      }
    }
    if (kind === "register") {
      const result = await supabase.auth.signUp({ email, password, options: { data: { full_name: fullName, pending_enrollment_code: code } } });
      error = result.error;
      if (!error) {
        if (code) localStorage.setItem("datamarcos_pending_code", code);
        setMessage({ type: "success", text: "Account created. Confirm email if enabled, then sign in and activate your enrollment." });
      }
    }
    if (kind === "activate") {
      const result = await supabase.rpc("redeem_lms_access_code", { input_code: code });
      error = result.error;
      if (!error) {
        localStorage.removeItem("datamarcos_pending_code");
        setMessage({ type: "success", text: "Enrollment activated. Redirecting to your dashboard." });
        window.setTimeout(() => { window.location.href = "/lms/dashboard"; }, 700);
      }
    }
    if (kind === "forgot") {
      const result = await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${window.location.origin}/lms/reset-password` });
      error = result.error;
      if (!error) setMessage({ type: "success", text: "Password reset link sent." });
    }
    if (kind === "reset") {
      const result = await supabase.auth.updateUser({ password });
      error = result.error;
      if (!error) setMessage({ type: "success", text: "Password updated. You can sign in now." });
    }
    if (error) setMessage({ type: "error", text: error.message });
    setBusy(false);
  }

  async function googleSignIn() {
    const { error } = await supabase.auth.signInWithOAuth({ provider: "google", options: { redirectTo: `${window.location.origin}/lms/activate` } });
    if (error) setMessage({ type: "error", text: error.message });
  }

  const pendingCode = typeof window !== "undefined" ? localStorage.getItem("datamarcos_pending_code") || "" : "";

  return (
    <LMSLayout mode="public">
      <div className="lms-auth">
        <form className="form card" action={submit}>
          <LockKeyhole size={26} />
          <h1>{title}</h1>
          <p>After running the Supabase seed, test with student@datamarcos.test / Student@12345 or admin@datamarcos.test / Admin@12345.</p>
          <MessageBanner message={message} />
          {isRegister ? <div className="field"><label>Full Name</label><input name="fullName" placeholder="Deepak Kumar" required /></div> : null}
          {kind !== "reset" && kind !== "activate" ? <div className="field"><label>Email</label><input name="email" type="email" placeholder="student@example.com" required /></div> : null}
          {kind === "login" || isRegister || kind === "reset" ? <div className="field"><label>Password</label><input name="password" type="password" placeholder="Password" required /></div> : null}
          {isActivate || isRegister ? <div className="field"><label>Enrollment Code</label><input name="code" defaultValue={pendingCode} placeholder="DM-GENAI-8F42K" required={isActivate} /></div> : null}
          {isRegister ? <div className="grid two"><div className="field"><label>Phone</label><input name="phone" placeholder="Optional" /></div><div className="field"><label>Country</label><input name="country" placeholder="Optional" /></div></div> : null}
          <button className="button primary" disabled={busy} type="submit">{busy ? "Please wait..." : kind === "login" ? "Sign In" : kind === "forgot" ? "Send Reset Link" : kind === "reset" ? "Update Password" : "Continue"}</button>
          {kind === "login" || isRegister ? <div className="lms-divider">OR</div> : null}
          {kind === "login" || isRegister ? <button className="button secondary" type="button" onClick={googleSignIn}><Mail size={18} /> Continue with Google</button> : null}
          <div className="lms-auth-links"><Link href="/lms/forgot-password">Forgot password?</Link><Link href={kind === "login" ? "/lms/register" : "/lms/login"}>{kind === "login" ? "Create account" : "Sign in"}</Link></div>
        </form>
      </div>
    </LMSLayout>
  );
}

function useEnrollments() {
  const [enrollments, setEnrollments] = useState<LmsEnrollmentRecord[]>([]);
  const [message, setMessage] = useState<Message>({ type: "info", text: "Loading Supabase enrollments..." });
  const { user, profile, loading } = useSessionProfile();

  useEffect(() => {
    if (loading) return;
    if (!user) {
      setMessage({ type: "error", text: "Please sign in to view your courses." });
      return;
    }
    supabase.from("enrollments").select("id, status, progress, courses(id, title, slug, short_name, description, status, classroom_url, main_course_url), cohorts(name, timezone)").eq("user_id", user.id).eq("status", "ACTIVE").then(({ data, error }) => {
      if (error) setMessage({ type: "error", text: `${error.message}. Run supabase/migrations/001_lms_schema_seed.sql in Supabase first.` });
      else {
        setEnrollments((data || []) as unknown as LmsEnrollmentRecord[]);
        setMessage(data?.length ? null : { type: "info", text: "No active enrollments yet. Use /lms/activate with code DM-GENAI-8F42K." });
      }
    });
  }, [loading, user]);

  return { enrollments, user, profile, message };
}

function Dashboard() {
  const { enrollments, profile, message } = useEnrollments();
  const active = enrollments[0];
  const fallback = lmsCourses[0];
  const name = profile?.full_name?.split(" ")[0] || "Student";

  return (
    <LMSLayout>
      <div className="lms-topbar"><div><p className="eyebrow">Student Dashboard</p><h1>Good morning, {name}</h1><p>Continue your learning journey.</p></div><Link className="button secondary" href="/lms/activate">Activate Code</Link></div>
      <MessageBanner message={message} />
      <div className="lms-card lms-feature">
        <div><p className="eyebrow">Active Course</p><h2>{active?.courses?.title || fallback.title}</h2><p>{active?.cohorts?.name || fallback.cohort}</p><ProgressBar value={active?.progress ?? fallback.progress} /></div>
        <div className="lms-next"><Clock size={20} /><strong>{fallback.nextClass}</strong><span>{fallback.nextClassDate}</span><Link className="button primary" href={`/lms/courses/${active?.courses?.slug || fallback.slug}`}>Continue Learning</Link></div>
      </div>
      <div className="grid three">{["Recent recording", "Pending quiz", "Classroom access"].map((label, index) => <div className="lms-card" key={label}><Sparkles size={22} /><h3>{label}</h3><p>{index === 0 ? "Replay appears when published by admin." : index === 1 ? "Google Forms remains the quiz source." : "Open Classroom in a new tab."}</p></div>)}</div>
    </LMSLayout>
  );
}

function Courses() {
  const { enrollments, message } = useEnrollments();
  return <LMSLayout><PageHeader eyebrow="My Courses" title="Your enrolled Datamarcos courses" copy="Course records are loaded from Supabase enrollments under RLS." /><MessageBanner message={message} /><div className="grid two">{enrollments.map((enrollment) => <CourseCard enrollment={enrollment} key={enrollment.id} />)}</div></LMSLayout>;
}

function CourseCard({ enrollment }: { enrollment: LmsEnrollmentRecord }) {
  const course = enrollment.courses;
  if (!course) return null;
  return <article className="lms-card"><Status value={course.status} /><h2>{course.title}</h2><p>{enrollment.cohorts?.name}</p><ProgressBar value={enrollment.progress} /><Link className="button secondary" href={`/lms/courses/${course.slug}`}>Open Course</Link></article>;
}

function CourseDetail({ slug }: { slug?: string }) {
  const course = getCourse(slug);
  return (
    <LMSLayout>
      <PageHeader eyebrow={course.cohort} title={course.title} copy="Open external learning tools, follow the class timeline and track completion from one workspace." />
      <div className="lms-actions-grid"><a className="button primary" href={course.classroomUrl} target="_blank" rel="noopener noreferrer">Open Google Classroom <ExternalLink size={18} /></a><Link className="button secondary" href={`/lms/courses/${course.slug}/recordings`}>Watch Recordings</Link><Link className="button secondary" href={`/lms/courses/${course.slug}/classes`}>View Classes</Link><Link className="button secondary" href={`/lms/courses/${course.slug}/quizzes`}>Take Quizzes</Link></div>
      <div className="lms-card"><h2>Course Progress</h2><ProgressBar value={course.progress} /><p>{course.progress}% complete based on completed class sessions.</p></div>
      <div className="lms-timeline">{modules.map((module) => <div className="lms-card" key={module.title}><h3>{module.title}</h3><p>{module.description}</p><ProgressBar value={Math.round((module.completed / module.total) * 100)} /><p>{module.completed} of {module.total} classes completed</p></div>)}</div>
    </LMSLayout>
  );
}

function Classes({ slug }: { slug?: string }) {
  const course = getCourse(slug);
  return <LMSLayout><PageHeader eyebrow={course.title} title="Class Schedule" copy="Meeting platforms stay flexible. Admins can use Google Meet, Zoom, or any valid class URL." /><div className="lms-timeline">{classes.map((item) => <div className="lms-card lms-row-card" key={item.title}><div><Status value={item.status} /><h3>{item.title}</h3><p>{item.module} - {item.date} - {item.time}</p><p>{item.instructor}</p></div><a className="button secondary" href={item.url} target="_blank" rel="noopener noreferrer">Join Class</a></div>)}</div></LMSLayout>;
}

function ResourceList({ slug, type }: { slug?: string; type: "materials" | "recordings" | "quizzes" }) {
  const course = getCourse(slug);
  const title = type === "recordings" ? "Recordings" : type === "quizzes" ? "Quizzes" : "Materials";
  const copy = type === "recordings" ? "YouTube remains the video host. Private videos still require YouTube permissions." : type === "quizzes" ? "Google Forms handles questions, grading and responses in phase 1." : "Store links only; do not upload large files to the LMS.";
  const list = type === "recordings" ? recordings : type === "quizzes" ? quizzes : resources;
  return <LMSLayout><PageHeader eyebrow={course.title} title={title} copy={copy} /><div className="grid two">{list.map((item) => <article className="lms-card" key={item.title}><FileText size={22} /><h3>{item.title}</h3>{"module" in item ? <p>{item.module}</p> : <p>{item.classTitle}</p>}{"duration" in item ? <p>{item.duration}</p> : null}{"description" in item ? <p>{item.description}</p> : null}{"published" in item ? <Status value={item.published ? "LIVE" : "DRAFT"} /> : null}<a className="button secondary" href={item.url} target="_blank" rel="noopener noreferrer">{externalLabel(item.url)} <ExternalLink size={18} /></a></article>)}</div></LMSLayout>;
}

function Profile() {
  const { profile, user, message } = useEnrollments();
  return <LMSLayout><PageHeader eyebrow="Profile" title="Student account" copy="Loaded from Supabase Auth and the LMS profile table." /><MessageBanner message={message} /><div className="lms-card"><h2>{profile?.full_name || user?.email || "Not signed in"}</h2><p>{profile?.role || "STUDENT"}</p><p>{user?.email}</p></div></LMSLayout>;
}

function Admin({ section }: { section?: string }) {
  const isCourseNew = section === "courses/new";
  return <LMSLayout mode="admin">{isCourseNew ? <CourseWizard /> : <AdminSection section={section} />}</LMSLayout>;
}

function AdminSection({ section }: { section?: string }) {
  const [courses, setCourses] = useState<LmsCourseRecord[]>([]);
  const [message, setMessage] = useState<Message>({ type: "info", text: "Loading admin data..." });
  const title = section ? section.split("/").map((part) => part[0].toUpperCase() + part.slice(1)).join(" ") : "Admin Overview";

  useEffect(() => {
    supabase.from("courses").select("id, title, slug, short_name, description, status, classroom_url, main_course_url").order("created_at", { ascending: false }).then(({ data, error }) => {
      if (error) setMessage({ type: "error", text: `${error.message}. Admin pages require the LMS schema and admin role.` });
      else {
        setCourses((data || []) as LmsCourseRecord[]);
        setMessage(null);
      }
    });
  }, []);

  const metrics = useMemo(() => [["Active Students", "1"], ["Active Courses", String(courses.filter((course) => course.status === "LIVE").length)], ["Active Cohorts", "1"], ["Pending Activations", "0"]], [courses]);
  return (
    <>
      <div className="lms-topbar"><div><p className="eyebrow">Datamarcos Learning Hub</p><h1>{title}</h1><p>Admin reads are protected by Supabase RLS and the ADMIN profile role.</p></div><Link className="button primary" href="/lms/admin/courses/new"><Plus size={18} /> New Course</Link></div>
      <MessageBanner message={message} />
      {!section ? <div className="grid four">{metrics.map(([label, value]) => <div className="lms-card" key={label}><strong className="lms-metric">{value}</strong><p>{label}</p></div>)}</div> : null}
      <div className="lms-card"><div className="lms-table-tools"><div><Search size={18} /><span>Courses loaded from Supabase.</span></div></div><div className="lms-table">{courses.map((course) => <div className="lms-table-row" key={course.id}><strong>{course.title}</strong><span>{course.status} - /{course.slug}</span><Link className="button secondary" href={`/lms/courses/${course.slug}`}>View</Link></div>)}</div></div>
    </>
  );
}

function CourseWizard() {
  const [message, setMessage] = useState<Message>(null);
  async function createCourse(formData: FormData) {
    const title = String(formData.get("title") || "");
    const slug = String(formData.get("slug") || "");
    const shortName = String(formData.get("shortName") || "");
    const status = String(formData.get("status") || "DRAFT");
    const description = String(formData.get("description") || "");
    const { error } = await supabase.from("courses").insert({ title, slug, short_name: shortName, status, description });
    setMessage(error ? { type: "error", text: error.message } : { type: "success", text: "Course created in Supabase." });
  }

  const steps = ["Course", "Cohort", "Curriculum", "Resources", "Review"];
  return (
    <>
      <PageHeader eyebrow="Course Creator" title="Create a course draft" copy="This first step writes the course record to Supabase. Cohort/module editors can build on the same tables." />
      <div className="lms-stepper">{steps.map((step, index) => <span key={step} className={index === 0 ? "active" : ""}>Step {index + 1}<strong>{step}</strong></span>)}</div>
      <form className="form card" action={createCourse}>
        <MessageBanner message={message} />
        <div className="grid two"><div className="field"><label>Course Name</label><input name="title" defaultValue="Dummy Supabase Course" required /></div><div className="field"><label>Short Name</label><input name="shortName" defaultValue="DUMMY" /></div><div className="field"><label>Slug</label><input name="slug" defaultValue="dummy-supabase-course" required /></div><div className="field"><label>Status</label><select name="status" defaultValue="DRAFT"><option>DRAFT</option><option>UPCOMING</option><option>LIVE</option><option>ARCHIVED</option></select></div></div>
        <div className="field"><label>Description</label><textarea name="description" defaultValue="Dummy course created from the Datamarcos LMS admin wizard." /></div>
        <div className="lms-form-actions"><button className="button secondary" type="submit"><Save size={18} /> Save Draft</button><button className="button primary" type="submit">Publish <ArrowRight size={18} /></button></div>
      </form>
    </>
  );
}

function PageHeader({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return <div className="lms-page-header"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{copy}</p></div>;
}

export function LMSHub({ path }: LMSHubProps) {
  const parts = path.replace(/^\/lms\/?/, "").split("/").filter(Boolean);
  if (path === "/lms") return <Hero />;
  if (path === "/lms/login") return <AuthCard kind="login" />;
  if (path === "/lms/register") return <AuthCard kind="register" />;
  if (path === "/lms/activate") return <AuthCard kind="activate" />;
  if (path === "/lms/forgot-password") return <AuthCard kind="forgot" />;
  if (path === "/lms/reset-password") return <AuthCard kind="reset" />;
  if (path === "/lms/dashboard") return <Dashboard />;
  if (path === "/lms/courses") return <Courses />;
  if (path === "/lms/profile") return <Profile />;
  if (parts[0] === "courses" && parts[1] && !parts[2]) return <CourseDetail slug={parts[1]} />;
  if (parts[0] === "courses" && parts[2] === "classes") return <Classes slug={parts[1]} />;
  if (parts[0] === "courses" && (parts[2] === "materials" || parts[2] === "recordings" || parts[2] === "quizzes")) return <ResourceList slug={parts[1]} type={parts[2]} />;
  if (parts[0] === "admin") return <Admin section={parts.slice(1).join("/") || undefined} />;
  return <Hero />;
}
