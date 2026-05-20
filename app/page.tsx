"use client";

import { ProjectCard } from "@/components/cards/project-card";
import { BottomNavigation } from "@/components/layout/bottom-navigation";
import { projects } from "@/mock/projects";

export default function Page() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-sm bg-slate-950 px-5 pb-24 pt-6 text-slate-50">
      <header className="mb-5 space-y-3">
        <p className="text-xs font-semibold tracking-[0.24em] text-cyan-200/80">BIGFOOT HOME</p>
        <div className="flex items-end justify-between">
          <div>
            <h1 className="text-2xl font-semibold leading-tight">추천 프로젝트</h1>
            <p className="mt-1 text-sm text-slate-300">지금 바로 투입 가능한 포지션이에요</p>
          </div>
          <span className="rounded-full bg-emerald-300/20 px-3 py-1 text-xs font-semibold text-emerald-200">NEW</span>
        </div>
      </header>

      <section className="space-y-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>

      <BottomNavigation />
    </main>
  );
}
