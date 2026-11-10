import { IntlCoursePage } from "@/components/program/IntlCoursePage";
import { llmopsCourse } from "@/config/intl-course-data/llmops";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: llmopsCourse.path,
  title: llmopsCourse.metaTitle,
  description: llmopsCourse.metaDescription,
  image: llmopsCourse.image
});

export default function Page() {
  return <IntlCoursePage course={llmopsCourse} />;
}
