import { IntlCoursePage } from "@/components/program/IntlCoursePage";
import { cybersecurityCourse } from "@/config/intl-course-data/cybersecurity";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: cybersecurityCourse.path,
  title: cybersecurityCourse.metaTitle,
  description: cybersecurityCourse.metaDescription,
  image: cybersecurityCourse.image
});

export default function Page() {
  return <IntlCoursePage course={cybersecurityCourse} />;
}
