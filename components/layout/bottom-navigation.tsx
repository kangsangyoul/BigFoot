"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { label: "Home", href: "/" },
  { label: "Search", href: "/search" },
  { label: "Profile", href: "/profile" },
];

export function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-1/2 z-50 w-full max-w-sm -translate-x-1/2 border-t border-slate-200 bg-white/95 px-4 pb-5 pt-3 backdrop-blur-xl">
      <div className="grid grid-cols-3 gap-2 text-center text-xs">
        {tabs.map((tab) => {
          const active = pathname === tab.href;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`rounded-xl px-2 py-2.5 transition-all duration-200 active:scale-[0.97] ${
                active ? "bg-blue-50 font-semibold text-blue-700" : "bg-slate-100 text-slate-500"
              }`}
            >
              {tab.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
