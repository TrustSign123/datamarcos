import { IntlCoursePage } from "@/components/program/IntlCoursePage";
import { dataScienceCourse } from "@/config/intl-course-data/data-science-ai-genai";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: dataScienceCourse.path,
  title: dataScienceCourse.metaTitle,
  description: dataScienceCourse.metaDescription,
  image: dataScienceCourse.image
});

export default function Page() {
  return <IntlCoursePage course={dataScienceCourse} />;
}
