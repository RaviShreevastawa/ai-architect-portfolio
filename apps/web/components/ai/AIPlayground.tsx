"use client";

import { useState } from "react";

/* ------------------ Typing Effect ------------------ */
const typeWriter = async (
  text: string,
  onUpdate: (value: string) => void
) => {
  let current = "";
  for (let char of text) {
    current += char;
    onUpdate(current);
    await new Promise((r) => setTimeout(r, 15));
  }
};

/* ------------------ Types ------------------ */
type ChatMessage = {
  role: "user" | "ai";
  content: string;
  sources?: string[];
};

/* ------------------ Component ------------------ */
export default function AIPlayground() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [stage, setStage] = useState<
    "idle" | "retrieving" | "generating" | "done"
  >("idle");

  const askAI = async () => {
    if (!input.trim() || loading) return;

    const userMessage: ChatMessage = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);
    setStage("retrieving");

    try {
      const res = await fetch("http://127.0.0.1:8000/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: userMessage.content }),
      });

      if (!res.ok) throw new Error("API Error");

      setStage("generating");
      const data = await res.json();

      let tempMessage: ChatMessage = {
        role: "ai",
        content: "",
        sources: data.sources || [],
      };

      setMessages((prev) => [...prev, tempMessage]);

      await typeWriter(data.answer, (value) => {
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            ...updated[updated.length - 1],
            content: value,
          };
          return updated;
        });
      });

      setStage("done");
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content: "⚠️ Something went wrong. Please try again.",
        },
      ]);
      setStage("idle");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto max-w-4xl px-4 py-24">
      <h2 className="text-3xl font-bold mb-6">Ask My Portfolio 🤖</h2>

      {/* Chat Window */}
      <div className="h-[420px] overflow-y-auto border rounded-xl p-4 space-y-4 bg-background/40">
        {messages.length === 0 && (
          <div className="text-center text-sm text-muted-foreground mt-20">
            Ask anything about my skills, projects, or experience 👋
          </div>
        )}

        {messages.map((msg, i) => (
          <div key={i}>
            <div
              className={`max-w-[80%] rounded-xl px-4 py-3 text-sm leading-relaxed ${
                msg.role === "user"
                  ? "ml-auto bg-blue-600 text-white"
                  : "mr-auto bg-muted text-foreground"
              }`}
            >
              {msg.content}
            </div>

            {/* Sources */}
            {msg.role === "ai" && msg.sources && msg.sources.length > 0 && (
              <div className="mr-auto mt-2 text-xs opacity-70">
                <p className="font-semibold">Sources:</p>
                <ul className="list-disc pl-4">
                  {msg.sources.map((src, idx) => (
                    <li key={idx}>{src}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}

        {loading && (
          <div className="mr-auto bg-muted px-4 py-3 rounded-xl text-sm animate-pulse">
            AI is thinking...
          </div>
        )}
      </div>

      {/* Reasoning Pipeline */}
      <div className="mt-6 flex items-center justify-between text-sm text-muted-foreground">
        <PipelineStep label="Input" active={stage !== "idle"} />
        <PipelineStep label="Retrieve Context" active={stage === "retrieving"} />
        <PipelineStep label="Generate Answer" active={stage === "generating"} />
        <PipelineStep label="Done" active={stage === "done"} />
      </div>

      {/* Input */}
      <div className="mt-6 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about my skills, projects, experience..."
          disabled={loading}
          className="flex-1 rounded-xl border px-4 py-3 bg-background focus:outline-none disabled:opacity-50"
          onKeyDown={(e) => e.key === "Enter" && askAI()}
        />
        <button
          onClick={askAI}
          disabled={loading}
          className="rounded-xl px-6 py-3 border hover:bg-muted transition disabled:opacity-50"
        >
          {loading ? "Thinking..." : "Ask"}
        </button>
      </div>
    </section>
  );
}

/* ------------------ Pipeline Step ------------------ */
function PipelineStep({
  label,
  active,
}: {
  label: string;
  active: boolean;
}) {
  return (
    <div
      className={`px-3 py-1 rounded-full border transition ${
        active ? "bg-green-500/20 text-green-600 border-green-500" : ""
      }`}
    >
      {label}
    </div>
  );
}
