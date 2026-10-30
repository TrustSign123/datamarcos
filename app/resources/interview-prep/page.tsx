import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { atsCheckUrl } from "@/config/navigation";

export const metadata: Metadata = {
  title: "Interview Prep for Data, GenAI & Agentic AI Roles | Datamarcos",
  description: "Scenario-based interview questions with practical answers for data engineering, GenAI, RAG and agentic AI roles, from pipeline design to evals and agent safety.",
  alternates: { canonical: "/resources/interview-prep" }
};

const answerSteps = [
  ["Clarify", "Ask about scale, latency, data quality and constraints before you design."],
  ["Structure", "Walk through the flow end to end in a few clear steps."],
  ["Trade-offs", "Name the options you rejected and why."],
  ["Failure modes", "Say what breaks first and how you would detect it."],
  ["Measure", "Define the metric that proves the fix worked."]
];

const tracks = [
  {
    id: "data-engineering",
    title: "Data engineering",
    intro: "Pipeline reliability, performance and trust in the data.",
    questions: [
      ["A daily pipeline loaded duplicate rows after a retry. How do you fix it and stop it recurring?", "Make the load idempotent so a rerun produces the same result. Upsert with MERGE on a business key, or overwrite the target partition for the run date, instead of blindly appending. Land data in a staging table first, then swap or merge. If duplicates already exist, deduplicate with ROW_NUMBER() over the key ordered by ingestion time. Add a uniqueness check so the next duplicate fails the run rather than reaching a dashboard."],
      ["A Spark job is slow because a few tasks run far longer than the rest. What do you check?", "This usually points to data skew. Open the Spark UI and compare task durations within the slow stage. Common fixes are broadcasting the small side of a join, salting the hot keys, enabling adaptive query execution skew handling, or repartitioning on a better key. Also look for avoidable shuffles and wide collects to the driver."],
      ["Design an incremental load from an operational database into a lakehouse.", "Use change data capture, or a reliable updated-at watermark if CDC is not available. Land raw changes unchanged in a bronze layer, then merge into a cleaned silver table. Store the watermark in a control table, re-read a small lookback window to catch late data, and carry delete flags so removals are applied. Keep backfills as a separate, parameterised run."],
      ["An upstream team changed a column type without warning. How should the pipeline behave?", "Fail loudly on breaking changes and tolerate additive ones. Keep the raw layer immutable so you can reprocess, use schema evolution or a rescued-data column for new fields, and agree a data contract with the producer. Alert the owner with the failing field so the fix is quick."],
      ["How do you show stakeholders that a dataset can be trusted?", "Automate checks for freshness, volume, nulls, uniqueness, accepted values and referential integrity, plus reconciliation totals against the source. Tools such as dbt tests or Great Expectations run these on every load. Publish the results, track lineage, and agree an SLA so people know what to expect."]
    ]
  },
  {
    id: "genai-rag",
    title: "GenAI and RAG",
    intro: "Retrieval quality, evaluation and keeping answers grounded.",
    questions: [
      ["A RAG assistant sounds confident but gets answers wrong on company documents. Where do you start?", "Separate retrieval failures from generation failures. Check whether the right passages were retrieved at all, for example with recall at k on a labelled question set. If not, improve chunking, metadata, hybrid keyword and vector search, and add a reranker. If the right context was retrieved, tighten the prompt to answer only from the context, require citations, and let the model say it does not know."],
      ["How do you choose chunk size and overlap?", "Start from the structure of the content, such as headings and sections, rather than a fixed number. A few hundred tokens with modest overlap is a common baseline, but the right value is whatever scores best on your own retrieval evaluation. Parent-document retrieval helps when small chunks match well but need more surrounding context."],
      ["How do you evaluate a RAG system before and after release?", "Build a golden set of real questions with expected sources. Measure retrieval with recall at k and MRR, and generation with faithfulness to the retrieved context and answer relevance, using tools such as RAGAS or DeepEval alongside human review. Run the set in CI as a regression gate, and in production trace requests and collect user feedback."],
      ["How do you reduce hallucinations in practice?", "Ground answers in retrieved sources and show citations. Abstain when retrieval confidence is low. Constrain outputs with a structured schema, keep temperature low for factual tasks, and add a verification step for high-risk claims. Then measure the change on your evaluation set rather than trusting a single example."],
      ["Latency and cost are too high. What do you change first?", "Route simple requests to a smaller model, cache repeated prompts and results, send fewer but better chunks by reranking, trim the prompt, and stream the response. Measure tokens and latency per step so you fix the largest contributor first."]
    ]
  },
  {
    id: "agentic-ai",
    title: "Agentic AI",
    intro: "Tool use, safety, observability and when to use agents at all.",
    questions: [
      ["When would you use an agent instead of a fixed workflow?", "Use a fixed workflow when the steps are known in advance, because it is cheaper, faster and more predictable. Use an agent when the next step depends on intermediate results and cannot be scripted. Start with the simplest design that works and add autonomy only where it earns its cost."],
      ["How do you stop an agent from taking a harmful action?", "Give each tool the least privilege it needs, validate every tool argument, and use allowlists. Require human approval for irreversible or high-impact actions, cap steps and spend, run risky code in a sandbox, and keep an audit log of every call."],
      ["What is MCP and why would a team adopt it?", "The Model Context Protocol is an open standard for connecting AI applications to tools and data through servers that expose tools, resources and prompts. It reduces one-off integrations because any compatible client can use the same server. It does not replace authentication, scoping and review of what each tool can do."],
      ["An agent loops or keeps choosing the wrong tool. How do you debug it?", "Trace every step with an observability tool so you can see the model input, tool call and result at each turn. Set a maximum number of iterations and clear stop conditions, rewrite tool names and descriptions so they are unambiguous, and give the agent fewer tools. Evaluate the full trajectory, not just the final answer."],
      ["How do you defend against prompt injection from retrieved documents or tool output?", "Treat retrieved and tool content as untrusted data, never as instructions. Keep privileged actions behind explicit approval, limit what tools can do, and filter or flag suspicious output. No single control removes the risk, so layer them and test with adversarial examples."]
    ]
  }
];

export default function InterviewPrepPage() {
  return (
    <>
      <section className="hero-simple">
        <div className="container">
          <p className="eyebrow">Resources</p>
          <h1 className="section-title">Interview prep for data and AI roles</h1>
          <p className="section-copy">Scenario-based questions of the kind asked in real engineering interviews, with practical answers you can adapt to your own experience.</p>
          <div className="prep-actions">
            <a className="button primary" href={atsCheckUrl} target="_blank" rel="noopener noreferrer">Check your resume with ATS <ArrowUpRight size={17} aria-hidden="true" /></a>
            <Link className="button secondary" href="/programs">See learning programs</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">How to answer</p>
          <h2 className="section-title">A simple frame for any scenario question</h2>
          <ol className="prep-steps">
            {answerSteps.map(([title, copy], index) => <li key={title}><span>0{index + 1}</span><strong>{title}</strong><p>{copy}</p></li>)}
          </ol>
        </div>
      </section>

      {tracks.map((track, trackIndex) => (
        <section className={trackIndex % 2 === 0 ? "section alt" : "section"} id={track.id} key={track.id}>
          <div className="container">
            <p className="eyebrow">{track.title}</p>
            <h2 className="section-title">{track.intro}</h2>
            <div className="prep-list">
              {track.questions.map(([question, answer], index) => (
                <details className="prep-item" key={question} open={index === 0}>
                  <summary><span>{String(index + 1).padStart(2, "0")}</span>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section alt" id="fde-interviews">
        <div className="container">
          <p className="eyebrow">FDE interviews</p>
          <h2 className="section-title">What forward deployed engineer interview loops test</h2>
          <p className="section-copy">FDE loops mix engineering and customer work. Expect system design with an ambiguous brief, live debugging, and customer scenarios where you scope the problem before you build. Practise the scenario questions above, then add a short discovery step to every answer: who the stakeholders are, what success looks like and what the constraints are.</p>
          <p className="section-copy">New to the role? Read <Link className="prep-inline-link" href="/guides/what-is-a-forward-deployed-engineer">what a forward deployed engineer does</Link>.</p>
          <div className="prep-actions">
            <Link className="button secondary" href="/programs/forward-deployed-ai-engineer">Prepare for forward deployed engineer interviews</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container prep-cta">
          <div>
            <p className="eyebrow">Next step</p>
            <h2 className="section-title">Practice with mentors who do this work.</h2>
            <p className="section-copy">Our programs include mock interview loops and project reviews for data, GenAI and agentic AI roles.</p>
          </div>
          <div className="prep-actions">
            <Link className="button primary" href="/programs">Explore programs</Link>
            <Link className="button secondary" href="/contact" data-dm-lead>Talk to admissions</Link>
          </div>
        </div>
      </section>
    </>
  );
}
