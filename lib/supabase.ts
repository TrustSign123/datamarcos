import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Profile = {
  id: string;
  full_name: string | null;
  role: "ADMIN" | "STUDENT" | "INSTRUCTOR";
  email: string | null;
};

export type LmsCourseRecord = {
  id: string;
  title: string;
  slug: string;
  short_name: string | null;
  description: string | null;
  status: string;
  classroom_url: string | null;
  main_course_url: string | null;
};

export type LmsEnrollmentRecord = {
  id: string;
  status: string;
  progress: number;
  courses: LmsCourseRecord | null;
  cohorts: { name: string; timezone: string | null } | null;
};
