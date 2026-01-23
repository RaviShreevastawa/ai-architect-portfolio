"use client";

import { toggleTheme } from "@/lib/theme";

export default function ThemeToggle() {
  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-1 rounded-md border text-sm hover:bg-muted transition"
    >
      Toggle
    </button>
  );
}
