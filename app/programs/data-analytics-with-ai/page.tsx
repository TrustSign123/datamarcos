import { IntlCoursePage } from "@/components/program/IntlCoursePage";
import { analyticsCourse } from "@/config/intl-course-data/data-analytics";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: analyticsCourse.path,
  title: analyticsCourse.metaTitle,
  description: analyticsCourse.metaDescription,
  image: analyticsCourse.image
});

export default function Page() {
  return <IntlCoursePage course={analyticsCourse} />;
}
