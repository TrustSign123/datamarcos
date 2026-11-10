import { IntlCoursePage } from "@/components/program/IntlCoursePage";
import { aiSecuritySecopsCourse } from "@/config/intl-course-data/ai-security-secops";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: aiSecuritySecopsCourse.path,
  title: aiSecuritySecopsCourse.metaTitle,
  description: aiSecuritySecopsCourse.metaDescription,
  image: aiSecuritySecopsCourse.image
});

export default function Page() {
  return <IntlCoursePage course={aiSecuritySecopsCourse} />;
}
