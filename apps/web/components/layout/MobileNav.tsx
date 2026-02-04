"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "./navlinks";

export default function MobileNav({ onClose }: { onClose: () => void }) {
  const pathname = usePathname();

  return (
    <div className="fixed inset-0 bg-background z-40 flex flex-col p-6 gap-6">
      {navLinks.map((link) => {
        const active = pathname === link.href;
        return (
          <Link
            key={link.name}
            href={link.href}
            onClick={onClose}
            className={`text-lg font-medium ${
              active ? "text-primary" : "text-muted-foreground"
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}
