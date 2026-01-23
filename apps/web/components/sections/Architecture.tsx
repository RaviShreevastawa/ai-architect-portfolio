"use client";

import FlowNode from "@/components/ui/FlowNode";
import { useReveal } from "@/hooks/useReveal";

export default function Architecture() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      ref={ref}
      className={`mx-auto max-w-7xl px-4 py-28 transition-all duration-700
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <h2 className="text-3xl font-bold mb-12">
        How I Architect AI Systems
      </h2>

      <div className="grid gap-6 md:grid-cols-4">
        <FlowNode
          title="User Intent"
          description="Every system starts by understanding intent, not clicks."
        />
        <FlowNode
          title="API Gateway"
          description="Auth, rate limits, validation, and routing."
        />
        <FlowNode
          title="AI Decision Engine"
          description="LLMs + rules + vector memory working together."
        />
        <FlowNode
          title="Data & Automation"
          description="Pipelines, triggers, and measurable outcomes."
        />
      </div>
    </section>
  );
}
