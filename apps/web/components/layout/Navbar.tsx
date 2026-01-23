"use client";

import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur z-50">
      <nav className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <span className="font-semibold text-lg">
          Ravi<span className="opacity-60">.ai</span>
        </span>
        <ThemeToggle />
      </nav>
    </header>
  );
}
