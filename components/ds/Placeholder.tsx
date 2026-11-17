import { SHOW_PLACEHOLDERS } from "@/lib/placeholders";

/** Labelled design slot for a real asset we still need. Hidden on production. */
export function Placeholder({ label, need, className = "" }: { label: string; need: string; className?: string }) {
  if (!SHOW_PLACEHOLDERS) return null;
  return (
    <div className={`ds-placeholder ${className}`} role="note" aria-label={`Placeholder: ${label}`}>
      <span className="ds-placeholder-tag">Placeholder · preview only</span>
      <strong>{label}</strong>
      <small>Needs: {need}</small>
    </div>
  );
}
