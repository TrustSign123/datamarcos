import type React from "react";
import { Bot, Database, FileText, GitBranch, Hand, LockKeyhole, MessagesSquare, Rocket, ShieldCheck, Activity } from "lucide-react";

const inputs = [
  { icon: FileText, label: "Policy PDFs & scans" },
  { icon: Database, label: "Legacy SQL & ERP" },
  { icon: MessagesSquare, label: "Jira · Slack" },
  { icon: LockKeyhole, label: "Locked-down VPC" }
];

const outputs = [
  { icon: Bot, label: "Copilot in prod" },
  { icon: ShieldCheck, label: "SSO · RBAC · PII" },
  { icon: Activity, label: "Evals & traces" },
  { icon: Rocket, label: "Handed over" }
];

const day = [
  { time: "09:30", text: "Discovery call with ops leads" },
  { time: "12:00", text: "Wire hybrid RAG to policy docs" },
  { time: "15:30", text: "Debug IAM in the client VPC" },
  { time: "18:00", text: "Demo + ROI update to the CIO" }
];

/** Hero illustration: customer reality → FDE → production, with a "day in the life" strip. Pure HTML/CSS, no JS. */
export function FdeHeroVisual() {
  return (
    <figure className="fx-map" aria-label="Illustration: a forward deployed engineer takes messy customer systems to a governed AI system in production">
      <div className="fx-map-top" aria-hidden="true"><span className="fx-dot" /> client-engagement.live <em>week 9 of 22</em></div>
      <div className="fx-map-stage" aria-hidden="true">
        <div className="fx-map-col">
          <p>Customer reality</p>
          {inputs.map((item, i) => <span className="fx-chip" key={item.label} style={{ "--i": i } as React.CSSProperties}><item.icon size={15} />{item.label}</span>)}
        </div>
        <div className="fx-map-core">
          <svg className="fx-map-wires" viewBox="0 0 100 100" preserveAspectRatio="none">
            {[14, 38, 62, 86].map((y) => <path key={`l${y}`} d={`M0 ${y} C 30 ${y}, 30 50, 50 50`} />)}
            {[14, 38, 62, 86].map((y) => <path key={`r${y}`} d={`M50 50 C 70 50, 70 ${y}, 100 ${y}`} />)}
          </svg>
          <span className="fx-core">
            <span className="fx-core-ring" />
            <Hand size={26} strokeWidth={1.6} />
            <b>FDE</b>
            <small>owns the outcome</small>
          </span>
        </div>
        <div className="fx-map-col fx-map-out">
          <p>In production</p>
          {outputs.map((item, i) => <span className="fx-chip" key={item.label} style={{ "--i": i + 4 } as React.CSSProperties}><item.icon size={15} />{item.label}</span>)}
        </div>
      </div>
      <figcaption className="fx-day">
        <span className="fx-day-label"><GitBranch size={13} aria-hidden="true" /> A day in the life of an FDE</span>
        <ol>{day.map((d) => <li key={d.time}><time>{d.time}</time>{d.text}</li>)}</ol>
      </figcaption>
    </figure>
  );
}
