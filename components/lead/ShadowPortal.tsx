"use client";

import { type CSSProperties, type ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

/**
 * Renders children into an open shadow root so site CSS and lead-form CSS never collide.
 * mount="body" appends a host to <body> (popup); mount="inline" renders the host in place.
 */
export function ShadowPortal({ css, children, mount = "inline", id, style }: {
  css: string;
  children: ReactNode;
  mount?: "inline" | "body";
  id?: string;
  style?: CSSProperties;
}) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [root, setRoot] = useState<ShadowRoot | null>(null);

  useEffect(() => {
    if (mount === "body") {
      const host = document.createElement("div");
      if (id) host.id = id;
      document.body.appendChild(host);
      setRoot(host.attachShadow({ mode: "open" }));
      return () => host.remove();
    }
    const host = hostRef.current;
    if (host) setRoot(host.shadowRoot || host.attachShadow({ mode: "open" }));
  }, [mount, id]);

  const content = root ? createPortal(<><style>{css}</style>{children}</>, root) : null;
  if (mount === "body") return content;
  return <div ref={hostRef} id={id} style={style}>{content}</div>;
}
