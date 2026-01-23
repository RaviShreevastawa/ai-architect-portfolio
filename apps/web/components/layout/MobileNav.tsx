"use client";

import Link from "next/link";

export default function MobileNav() {
  return (
    <div className="fixed inset-0 bg-background z-40 flex flex-col p-6 gap-4">
      <Link href="/">Home</Link>
      <Link href="/ask">Ask</Link>
      <Link href="/skills">Skills</Link>
      <Link href="/architecture">Architecture</Link>
      <Link href="/lab">Lab</Link>
    </div>
  );
}
