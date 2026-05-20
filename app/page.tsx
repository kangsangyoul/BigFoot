"use client";

import { ProjectCard } from "@/components/cards/project-card";
import { MatchScore } from "@/components/common/match-score";
import { BottomNavigation } from "@/components/layout/bottom-navigation";
import { projects } from "@/mock/projects";

export default function Page() {
  const averageScore = Math.round(projects.reduce((acc, project) => acc + project.score, 0) / projects.length);

  return (
    <main className="mx-auto min-h-screen w-full max-w-sm bg-slate-50 px-5 pb-24 pt-6 text-slate-900">
      <header className="mb-6 space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1">
            <p className="text-xs font-semibold tracking-[0.2em] text-blue-600/80">BIGFOOT HOME</p>
            <h1 className="text-2xl font-bold leading-tight text-slate-900">추천 프로젝트</h1>
            <p className="text-sm text-slate-500">빠르게 보고 바로 지원해보세요</p>
          </div>
          <MatchScore score={averageScore} className="mt-0.5 shrink-0 bg-white ring-blue-200 shadow-[0_12px_24px_-18px_rgba(37,99,235,0.55)]" />
        </div>

        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-sky-500 px-4 py-3 text-white shadow-[0_16px_30px_-22px_rgba(37,99,235,0.85)]">
          <p className="text-xs text-blue-100">오늘의 추천</p>
          <p className="mt-0.5 text-sm font-semibold">매칭 점수 높은 프로젝트 {projects.length}건</p>
        </div>
      </header>

      <section className="space-y-3 pb-1">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </section>

      <BottomNavigation />
    </main>
  );
}
