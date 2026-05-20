"use client";

import Link from "next/link";
import { BriefcaseBusiness, Code2 } from "lucide-react";
import { MobileShell } from "@/components/mobile-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useOnboardingStore } from "@/hooks/use-onboarding-store";
import type { UserRole } from "@/types/domain";

const roles: Array<{
  role: UserRole;
  title: string;
  description: string;
  href: string;
  icon: typeof Code2;
}> = [
  {
    role: "developer",
    title: "개발자 / 프리랜서",
    description: "추천 프로젝트를 먼저 봅니다.",
    href: "/developer",
    icon: Code2
  },
  {
    role: "company",
    title: "기업 / 에이전시",
    description: "프로젝트 등록 흐름으로 이동합니다.",
    href: "/company",
    icon: BriefcaseBusiness
  }
];

export default function RolePage() {
  const setRole = useOnboardingStore((state) => state.setRole);

  return (
    <MobileShell className="px-5 py-6">
      <header className="pt-8">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">STEP 1</p>
        <h1 className="mt-3 text-3xl font-black tracking-tight">어떤 사용자로 시작할까요?</h1>
        <p className="mt-3 text-sm font-medium leading-6 text-slate-500">복잡한 설정 없이 역할만 선택하면 다음 화면으로 이동합니다.</p>
      </header>

      <section className="mt-8 space-y-3">
        {roles.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.role} className="p-4">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-blue-50 p-3 text-primary">
                  <Icon size={24} aria-hidden />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="font-extrabold">{item.title}</h2>
                  <p className="mt-1 text-sm font-medium text-slate-500">{item.description}</p>
                </div>
              </div>
              <Button asChild className="mt-4 w-full">
                <Link href={item.href} onClick={() => setRole(item.role)}>선택하기</Link>
              </Button>
            </Card>
          );
        })}
      </section>
    </MobileShell>
  );
}
