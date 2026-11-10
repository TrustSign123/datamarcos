import { IntlCoursePage } from "@/components/program/IntlCoursePage";
import { literacyCourse } from "@/config/intl-course-data/ai-literacy";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: literacyCourse.path,
  title: literacyCourse.metaTitle,
  description: literacyCourse.metaDescription,
  image: literacyCourse.image
});

export default function Page() {
  return <IntlCoursePage course={literacyCourse} />;
}
