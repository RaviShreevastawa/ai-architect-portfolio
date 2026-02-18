"use client";

import { useEffect, useMemo, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

/* ================= TYPES ================= */

type SkillTuple = [string, number];

interface CareerResponse {
  skills: {
    languages: SkillTuple[];
  };
}

/* ================= CONSTANTS ================= */

const FILTERS = ["ALL", "MERN", "AI"] as const;

const MERN_SKILLS = ["JavaScript", "TypeScript", "MongoDB", "React", "Node"];
const AI_SKILLS = ["Python", "Machine Learning", "Deep Learning", "AI"];

/* ================= COMPONENT ================= */

export default function SkillDashboard() {
  const [data, setData] = useState<CareerResponse | null>(null);
  const [filter, setFilter] =
    useState<(typeof FILTERS)[number]>("ALL");
  const [loading, setLoading] = useState(true);

  /* ================= FETCH ================= */

  useEffect(() => {
    fetch("http://localhost:8000/career")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  /* ================= TRANSFORM ================= */

  const skills = useMemo(() => {
    if (!data) return [];

    let raw = data.skills.languages;

    if (filter === "MERN") {
      raw = raw.filter(([name]) => MERN_SKILLS.includes(name));
    }

    if (filter === "AI") {
      raw = raw.filter(([name]) => AI_SKILLS.includes(name));
    }

    return raw.map(([name, value]) => ({
      name,
      value,
    }));
  }, [data, filter]);

  const maxValue = Math.max(...skills.map((s) => s.value), 1);

  /* ================= STATES ================= */

  if (loading)
    return (
      <div className="flex items-center justify-center h-[400px] text-lg animate-pulse">
        Loading intelligence…
      </div>
    );

  if (!data)
    return (
      <div className="text-center text-red-500">
        Failed to load skill data
      </div>
    );

  /* ================= UI ================= */

  return (
    <section className="p-8 space-y-10 mx-50">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">
          Skill Intelligence Dashboard
        </h1>
        <p className="text-gray-500">
          Real data derived from GitHub + AI analysis
        </p>
      </div>

      {/* Filters */}
      <div className="flex gap-3">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all
              ${
                filter === f
                  ? "bg-gradient-to-r from-black to-gray-700 text-white shadow-lg"
                  : "bg-transparent hover:bg-gray-200"
              }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((s) => (
          <div
            key={s.name}
            className="relative p-5 rounded-xl border bg-transparent backdrop-blur shadow hover:shadow-xl transition-all group"
          >
            <div className="text-sm text-gray-500">{s.name}</div>

            <div className="flex items-end justify-between mt-2">
              <div className="text-3xl font-bold">{s.value}</div>
              <div className="text-xs text-gray-400">repos</div>
            </div>

            {/* Progress bar */}
            <div className="mt-4 h-2 w-full bg-transparent rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all"
                style={{
                  width: `${(s.value / maxValue) * 100}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Bar Chart */}
        <div className="p-6 rounded-xl border shadow bg-transparent">
          <h3 className="font-semibold mb-4">Skill Strength</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={skills}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Radar Chart */}
        <div className="p-6 rounded-xl border shadow bg-transparent">
          <h3 className="font-semibold mb-4">Skill Distribution</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={skills}>
                <PolarGrid />
                <PolarAngleAxis dataKey="name" />
                <PolarRadiusAxis />
                <Radar
                  dataKey="value"
                  stroke="#6366f1"
                  fill="#6366f1"
                  fillOpacity={0.45}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
