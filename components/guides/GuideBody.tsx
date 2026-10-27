import Link from "next/link";
import type { ReactNode } from "react";
import type { GuideBlock } from "@/content/guides/types";

/** Renders **bold** and [label](href). Internal hrefs use next/link; external ones open in a new tab. */
export function Inline({ text }: { text: string }) {
  const out: ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1] !== undefined) out.push(<strong key={i++}><Inline text={m[1]} /></strong>);
    else {
      const [label, href] = [m[2], m[3]];
      out.push(href.startsWith("/")
        ? <Link key={i++} href={href}>{label}</Link>
        : <a key={i++} href={href} target="_blank" rel="noopener noreferrer">{label}</a>);
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return <>{out}</>;
}

export function GuideBody({ blocks }: { blocks: GuideBlock[] }) {
  return (
    <>
      {blocks.map((b, idx) => {
        switch (b.type) {
          case "p": return <p key={idx}><Inline text={b.text} /></p>;
          case "h2": return <h2 key={idx} id={b.id}>{b.text}</h2>;
          case "ul": return <ul key={idx}>{b.items.map((t) => <li key={t}><Inline text={t} /></li>)}</ul>;
          case "ol": return <ol key={idx}>{b.items.map((t) => <li key={t}><Inline text={t} /></li>)}</ol>;
          case "note": return <p key={idx} className="guide-note"><Inline text={b.text} /></p>;
          case "table": return (
            <div key={idx} className="guide-table-wrap" role="region" aria-label={b.caption} tabIndex={0}>
              <table className="guide-table">
                <caption>{b.caption}</caption>
                <thead><tr>{b.head.map((h) => <th key={h} scope="col">{h}</th>)}</tr></thead>
                <tbody>{b.rows.map((r) => <tr key={r[0]}>{r.map((c, ci) => ci === 0
                  ? <th key={ci} scope="row"><Inline text={c} /></th>
                  : <td key={ci}><Inline text={c} /></td>)}</tr>)}</tbody>
              </table>
            </div>
          );
        }
      })}
    </>
  );
}
