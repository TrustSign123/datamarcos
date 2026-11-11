import { FEES_SECTION_ID, VIEW_FEES_LABEL } from "@/config/fees";

/** Hero stand-in for the old fee line: jumps to Fees & enrolment further down the page. */
export function ViewFeesLink({ className = "" }: { className?: string }) {
  return (
    <p className={`dm-view-fees ${className}`.trim()}>
      <a href={`#${FEES_SECTION_ID}`}>{VIEW_FEES_LABEL}</a>
    </p>
  );
}
