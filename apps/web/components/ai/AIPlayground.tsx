"use client";

import { useState } from "react";
import AIOutput from "./AIOutput";
// import { runPrompt } from "@/lib/openai"; // uncomment for real AI

export default function AIPlayground() {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");

  const handleRun = async () => {
    if (!prompt) return;

    // MOCKED RESPONSE for portfolio demo
    setOutput(`Analyzing prompt: "${prompt}"...\nDecision flow:\n1️⃣ Intent identified\n2️⃣ Data fetched\n3️⃣ AI Decision generated\n4️⃣ Outcome ready`);

    // For real API uncomment below:
    // const res = await runPrompt(prompt);
    // setOutput(res);
  };

  return (
    <section className="mx-auto max-w-3xl px-4 py-28">
      <h2 className="text-3xl font-bold mb-6">AI Playground</h2>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Type a user intent or question..."
        className="w-full p-4 border rounded-xl bg-background/50 text-foreground focus:outline-none"
        rows={4}
      />
      <button
        onClick={handleRun}
        className="mt-4 px-4 py-2 border rounded-md hover:bg-muted transition"
      >
        Run AI
      </button>
      {output && <AIOutput output={output} />}
    </section>
  );
}
