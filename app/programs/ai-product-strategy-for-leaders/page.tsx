import { IntlCoursePage } from "@/components/program/IntlCoursePage";
import { leadersCourse } from "@/config/intl-course-data/ai-product-strategy";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: leadersCourse.path,
  title: leadersCourse.metaTitle,
  description: leadersCourse.metaDescription,
  image: leadersCourse.image
});

export default function Page() {
  return <IntlCoursePage course={leadersCourse} />;
}
