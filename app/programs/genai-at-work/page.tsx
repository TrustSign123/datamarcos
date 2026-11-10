import { IntlCoursePage } from "@/components/program/IntlCoursePage";
import { genaiAtWorkCourse } from "@/config/intl-course-data/genai-at-work";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: genaiAtWorkCourse.path,
  title: genaiAtWorkCourse.metaTitle,
  description: genaiAtWorkCourse.metaDescription,
  image: genaiAtWorkCourse.image
});

export default function Page() {
  return <IntlCoursePage course={genaiAtWorkCourse} />;
}
