import { Radio, Sparkles, ToggleRight } from "lucide-react";
import { BottomTabs } from "@/components/navigation/bottom-tabs";
import { ProjectCard } from "@/components/project-card";
import { Card } from "@/components/ui/card";
import { MobileShell } from "@/components/mobile-shell";
import { currentDeveloper, recommendedProjects } from "@/lib/demo-data";

export default function DeveloperHomePage() {
  return (
    <MobileShell className="safe-bottom">
      <header className="sticky top-0 z-20 border-b border-border/70 bg-background/95 px-5 pb-4 pt-5 backdrop-blur">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Developer Home</p>
        <div className="mt-3 rounded-3xl bg-slate-950 p-4 text-white shadow-card">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-400 text-slate-950">
                <ToggleRight size={26} aria-hidden />
              </span>
              <div>
                <p className="text-lg font-black leading-tight">즉시투입 ON</p>
                <p className="text-xs font-semibold text-slate-300">{currentDeveloper.preferredRate} · {currentDeveloper.location}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-black leading-none text-emerald-300">14개</p>
              <p className="text-xs font-bold text-slate-300">추천 프로젝트</p>
            </div>
          </div>
        </div>
      </header>

      <section className="space-y-4 px-5 py-5">
        <Card className="p-4 shadow-none">
          <p className="flex items-center gap-2 text-sm font-bold text-slate-600">
            <Radio size={16} className="text-primary" aria-hidden /> 오늘 바로 연결 가능한 순서
          </p>
          <p className="mt-1 text-xs font-semibold text-slate-400">단가 · 위치 · 기간을 3초 안에 확인하세요.</p>
        </Card>

        <div className="flex items-center justify-between">
          <p className="flex items-center gap-2 text-sm font-black text-slate-700">
            <Sparkles size={16} className="text-primary" aria-hidden /> 추천 카드
          </p>
          <p className="text-xs font-bold text-slate-400">적합도 높은 순</p>
        </div>

        <div className="space-y-3">
          {recommendedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <BottomTabs active="홈" />
    </MobileShell>
  );
}
