"use client";

import { useState } from "react";

type Project = {
  title: string;
  problem: string;
  decisions: string[];
  stack: string[];
  outcome: string;
};

export default function ProjectCard({
  title,
  problem,
  decisions,
  stack,
  outcome,
}: Project) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-xl p-6 bg-card">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="opacity-70 mt-2">{problem}</p>

      <button
        onClick={() => setOpen(!open)}
        className="mt-4 text-sm underline"
      >
        {open ? "Hide architecture" : "View architecture"}
      </button>

      {open && (
        <div className="mt-4 space-y-4 text-sm">
          <div>
            <strong>Key Decisions</strong>
            <ul className="list-disc ml-4 opacity-80">
              {decisions.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>

          <div>
            <strong>Tech Stack</strong>
            <div className="flex flex-wrap gap-2 mt-1">
              {stack.map((s) => (
                <span
                  key={s}
                  className="px-2 py-1 border rounded-full text-xs"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <strong>Outcome</strong>
            <p className="opacity-80">{outcome}</p>
          </div>
        </div>
      )}
    </div>
  );
}
