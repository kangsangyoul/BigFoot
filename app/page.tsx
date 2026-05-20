"use client";

import { ProjectCard } from "@/components/cards/project-card";
import { BottomNavigation } from "@/components/layout/bottom-navigation";
import { projects } from "@/mock/projects";

export default function Page() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-sm bg-slate-50 px-5 pb-24 pt-6 text-slate-900">
      <header className="mb-5 space-y-3">
        <p className="text-xs font-semibold tracking-[0.2em] text-blue-600/80">BIGFOOT HOME</p>
        <div className="flex items-end justify-between">
          <div>
            <h1 className="text-2xl font-bold leading-tight text-slate-900">추천 프로젝트</h1>
            <p className="mt-1 text-sm text-slate-500">빠르게 보고 바로 지원해보세요</p>
          </div>
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">TOP</span>
        </div>
      </header>

      <section className="space-y-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </section>

      <BottomNavigation />
    </main>
  );
}
