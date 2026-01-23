"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 grid gap-10 md:grid-cols-2 items-center">
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          AI-Powered <br />
          <span className="opacity-70">MERN & Data Architect</span>
        </h1>
        <p className="text-muted-foreground max-w-xl">
          I design systems where data, AI, and full-stack engineering work together.
        </p>
      </motion.div>

      <motion.div
        className="border rounded-xl p-6 text-sm bg-card"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <pre className="opacity-80 leading-relaxed">
{`User Action
   ↓
API Gateway
   ↓
AI Decision Engine
   ↓
Data Layer
   ↓
Automated Outcome`}
        </pre>
      </motion.div>
    </section>
  );
}
