import type React from "react";
import { Bot, Cloud, MessageSquareText, type LucideIcon } from "lucide-react";
import {
  siAnthropic, siApachekafka, siAuth0, siCrewai, siDatabricks, siDocker, siElasticsearch, siFastapi, siGithub, siGithubactions,
  siGooglecloud, siGooglegemini, siGrafana, siGraphql, siHuggingface, siJira, siKubernetes, siLangchain, siLanggraph, siLinux,
  siMlflow, siMongodb, siNeo4j, siNvidia, siOkta, siOllama, siOpentelemetry, siOwasp, siPostgresql, siPydantic, siPytest,
  siPython, siRedis, siSap, siSnowflake, siStripe, siTerraform
} from "simple-icons";

/** Same static sprite as the FDE page (public/images/forward-deployed-ai-engineer/tool-icons.svg). */
const TOOL_SPRITE = "/images/forward-deployed-ai-engineer/tool-icons.svg";

type ToolIcon = { slug: string; hex: string };

/** Tools that have an icon in the sprite. Anything else renders as a text chip. */
const ICONS: Partial<Record<string, ToolIcon>> = {
  Claude: siAnthropic, Kafka: siApachekafka, Auth0: siAuth0, CrewAI: siCrewai, Databricks: siDatabricks, Docker: siDocker,
  Elasticsearch: siElasticsearch, FastAPI: siFastapi, GitHub: siGithub, "GitHub Actions": siGithubactions, "Google Cloud": siGooglecloud,
  Gemini: siGooglegemini, "Gemini SDK": siGooglegemini, Grafana: siGrafana, GraphQL: siGraphql, "Hugging Face": siHuggingface, Jira: siJira,
  Kubernetes: siKubernetes, LangChain: siLangchain, LangGraph: siLanggraph, Linux: siLinux, MLflow: siMlflow, MongoDB: siMongodb,
  Neo4j: siNeo4j, NVIDIA: siNvidia, Okta: siOkta, Ollama: siOllama, OpenTelemetry: siOpentelemetry, "OWASP LLM Top 10": siOwasp,
  PostgreSQL: siPostgresql, Pydantic: siPydantic, pytest: siPytest, Python: siPython, Redis: siRedis, SAP: siSap,
  Snowflake: siSnowflake, Stripe: siStripe, Terraform: siTerraform, "Claude SDK": siAnthropic
};
const FALLBACKS: Partial<Record<string, LucideIcon>> = { OpenAI: Bot, "OpenAI SDK": Bot, Slack: MessageSquareText, Salesforce: Cloud };

export type ToolGroup = { category: string; tools: string[] };

export function ToolWall({ groups }: { groups: ToolGroup[] }) {
  return (
    <div className="fx-toolwall">
      {groups.map((group) => (
        <div className="fx-toolrow" key={group.category}>
          <h3>{group.category}</h3>
          <ul>
            {group.tools.map((name) => {
              const icon = ICONS[name];
              const Fallback = FALLBACKS[name];
              return (
                <li key={name} style={icon ? ({ color: `#${icon.hex}` } as React.CSSProperties) : undefined} className={icon || Fallback ? undefined : "fx-tool-text"}>
                  {icon ? <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href={`${TOOL_SPRITE}#si-${icon.slug}`} /></svg> : Fallback && <Fallback size={20} strokeWidth={1.8} aria-hidden="true" />}
                  <span>{name}</span>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
