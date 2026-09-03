import { BookOpen, CalendarDays, ClipboardCheck, ExternalLink, FileText, GraduationCap, KeyRound, LayoutDashboard, Library, PlayCircle, Settings, ShieldCheck, Users } from "lucide-react";

export type LmsStatus = "DRAFT" | "UPCOMING" | "LIVE" | "ARCHIVED" | "COMPLETED";

export const lmsNav = [
  { label: "Dashboard", href: "/lms/dashboard", icon: LayoutDashboard },
  { label: "Courses", href: "/lms/courses", icon: GraduationCap },
  { label: "Classes", href: "/lms/courses/generative-ai-engineering/classes", icon: CalendarDays },
  { label: "Recordings", href: "/lms/courses/generative-ai-engineering/recordings", icon: PlayCircle },
  { label: "Materials", href: "/lms/courses/generative-ai-engineering/materials", icon: Library },
  { label: "Quizzes", href: "/lms/courses/generative-ai-engineering/quizzes", icon: ClipboardCheck },
  { label: "Profile", href: "/lms/profile", icon: Users }
];

export const adminNav = [
  { label: "Overview", href: "/lms/admin", icon: LayoutDashboard },
  { label: "Courses", href: "/lms/admin/courses", icon: BookOpen },
  { label: "Students", href: "/lms/admin/students", icon: Users },
  { label: "Enrollments", href: "/lms/admin/enrollments", icon: ShieldCheck },
  { label: "Access Codes", href: "/lms/admin/access-codes", icon: KeyRound },
  { label: "Classes", href: "/lms/admin/classes", icon: CalendarDays },
  { label: "Resources", href: "/lms/admin/resources", icon: FileText },
  { label: "Quizzes", href: "/lms/admin/quizzes", icon: ClipboardCheck },
  { label: "Settings", href: "/lms/admin/settings", icon: Settings }
];

export const lmsCourses = [
  {
    title: "Generative AI Engineering",
    slug: "generative-ai-engineering",
    cohort: "GENAI-SEP-2026",
    status: "LIVE" as LmsStatus,
    progress: 62,
    nextClass: "Advanced RAG Architecture",
    nextClassDate: "10 September 2026, 7:00 PM IST",
    classroomUrl: "https://classroom.google.com/",
    mainCourseUrl: "/programs",
    orientationUrl: "/programs"
  },
  {
    title: "Advanced AI Data Engineering & Agentic AI Engineering",
    slug: "advanced-ai-data-engineering-agentic-ai",
    cohort: "AIDE-OCT-2026",
    status: "UPCOMING" as LmsStatus,
    progress: 8,
    nextClass: "Orientation and Platform Walkthrough",
    nextClassDate: "5 October 2026, 8:00 PM IST",
    classroomUrl: "https://classroom.google.com/",
    mainCourseUrl: "/lp/advanced-ai-data-engineering-agentic-ai",
    orientationUrl: "/lp/advanced-ai-data-engineering-agentic-ai"
  }
];

export const modules = [
  { title: "LLM Foundations", description: "Model behavior, prompting patterns, retrieval basics.", completed: 3, total: 4 },
  { title: "Production RAG", description: "Chunking, vector search, evaluation and deployment.", completed: 2, total: 5 },
  { title: "Agent Engineering", description: "Tool use, workflows, MCP patterns and observability.", completed: 0, total: 6 }
];

export const classes = [
  { title: "Introduction to LLM Engineering", module: "LLM Foundations", date: "10 September 2026", time: "7:00 PM - 9:00 PM IST", status: "UPCOMING" as LmsStatus, instructor: "Datamarcos Faculty", url: "https://meet.google.com/" },
  { title: "Advanced RAG Architecture", module: "Production RAG", date: "14 September 2026", time: "7:00 PM - 9:00 PM IST", status: "UPCOMING" as LmsStatus, instructor: "Datamarcos Faculty", url: "https://meet.google.com/" },
  { title: "Agentic Workflow Design", module: "Agent Engineering", date: "18 September 2026", time: "7:00 PM - 9:00 PM IST", status: "UPCOMING" as LmsStatus, instructor: "Datamarcos Faculty", url: "https://meet.google.com/" }
];

export const recordings = [
  { title: "LLM Foundations Replay", classTitle: "Introduction to LLM Engineering", date: "10 September 2026", url: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", published: true },
  { title: "RAG Architecture Walkthrough", classTitle: "Advanced RAG Architecture", date: "14 September 2026", url: "https://www.youtube.com/", published: false }
];

export const resources = [
  { title: "Module 1 Support Material", type: "Google Classroom", module: "LLM Foundations", url: "https://classroom.google.com/", description: "Reading links, slides and lab references." },
  { title: "RAG Design Checklist", type: "Google Drive", module: "Production RAG", url: "https://drive.google.com/", description: "Architecture notes and implementation checklist." }
];

export const quizzes = [
  { title: "LLM Foundations Checkpoint", module: "LLM Foundations", duration: "20 minutes", url: "https://forms.google.com/", status: "NOT_STARTED" },
  { title: "RAG Design Review", module: "Production RAG", duration: "30 minutes", url: "https://forms.google.com/", status: "NOT_STARTED" }
];

export const adminMetrics = [
  ["Active Students", "0"],
  ["Active Courses", "0"],
  ["Active Cohorts", "0"],
  ["Pending Activations", "0"]
];

export const adminRows = [
  ["Courses", "Create, edit, publish and archive course metadata."],
  ["Cohorts", "Manage start dates, timezones and class cadence."],
  ["Access Codes", "Generate, copy, revoke and track enrollment codes."],
  ["Progress", "Review completions and override status when needed."]
];

export function getCourse(slug?: string) {
  return lmsCourses.find((course) => course.slug === slug) || lmsCourses[0];
}

export function normalizedLmsPath(path?: string[]) {
  return path && path.length > 0 ? `/lms/${path.join("/")}` : "/lms";
}

export function externalLabel(url: string) {
  return url.includes("classroom") ? "Open Google Classroom" : url.includes("forms") ? "Open Google Form" : "Open Link";
}

export { ExternalLink };
