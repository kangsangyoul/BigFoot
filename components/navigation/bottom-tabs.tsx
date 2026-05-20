import Link from "next/link";
import { Home, Search, Sparkles, UserRound } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { label: "홈", href: "/developer", icon: Home },
  { label: "탐색", href: "/developer", icon: Search },
  { label: "매칭", href: "/developer", icon: Sparkles },
  { label: "마이", href: "/role", icon: UserRound }
];

export function BottomTabs({ active = "홈" }: { active?: string }) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 mx-auto max-w-md border-t border-border bg-white/95 px-4 pb-[calc(env(safe-area-inset-bottom)+10px)] pt-2 backdrop-blur">
      <div className="grid grid-cols-4 gap-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const selected = tab.label === active;
          return (
            <Link
              key={tab.label}
              href={tab.href}
              className={cn(
                "rounded-2xl px-2 py-2 text-center text-slate-400",
                selected && "bg-blue-50 text-primary"
              )}
            >
              <Icon className="mx-auto" size={20} aria-hidden />
              <span className="mt-1 block text-xs font-bold">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
