"use client";

import { useEffect, useState } from "react";
import { socket } from "@/lib/socket";

interface Metrics {
  ai_queries: number;
  project_clicks: number;
  skill_views: number;
}

export default function RealtimeMetrics() {
  const [metrics, setMetrics] = useState<Metrics>({
    ai_queries: 0,
    project_clicks: 0,
    skill_views: 0,
  });

  useEffect(() => {
    socket.connect();

    socket.on("connect", () => {
      console.log("✅ Socket connected:", socket.id);
    }); 

    socket.on("metrics:update", (data: Metrics) => {
      setMetrics(data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-50 mt-10">
      <MetricCard title="AI Queries" value={metrics.ai_queries} />
      <MetricCard title="Project Clicks" value={metrics.project_clicks} />
      <MetricCard title="Skill Views" value={metrics.skill_views} />
    </section>
  );
}

function MetricCard({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  return (
    <div className="p-6 rounded-xl border bg-transparent shadow hover:shadow-xl transition">
      <p className="text-xl text-gray-500">{title}</p>
      <p className="text-4xl font-bold mt-2">{value}</p>
      <p className="text-xs text-green-600 mt-1">● Live</p>
    </div>
  );
}
