import { notFound } from "next/navigation";

import { MatchScore } from "@/components/common/match-score";
import { BottomNavigation } from "@/components/layout/bottom-navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/mock/projects";

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((item) => item.id === Number(id));

  if (!project) return notFound();

  return (
    <main className="mx-auto min-h-screen w-full max-w-sm bg-slate-50 px-5 pb-24 pt-6 text-slate-900">
      <section className="space-y-4 animate-in fade-in duration-300">
        <p className="text-xs font-semibold tracking-[0.2em] text-blue-600/80">PROJECT DETAIL</p>

        <Card className="rounded-3xl border-0 bg-gradient-to-br from-blue-50 via-white to-sky-50/70 ring-1 ring-blue-100/70 shadow-[0_16px_34px_-24px_rgba(37,99,235,0.38)]">
          <CardContent className="space-y-4 px-5 py-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h1 className="text-lg font-bold leading-tight">{project.title}</h1>
                <p className="mt-1 text-sm text-slate-500">{project.company}</p>
              </div>
              <MatchScore score={project.score} />
            </div>

            <div className="rounded-2xl bg-blue-600 px-4 py-3 text-white">
              <p className="text-xs text-blue-100">월 단가</p>
              <p className="text-lg font-bold">{project.monthlyRate}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.skills.slice(0, 4).map((skill) => (
                <Badge key={skill} className="rounded-full bg-white px-3 py-1 text-xs text-blue-700 ring-1 ring-blue-100">
                  {skill}
                </Badge>
              ))}
            </div>

            <div className="flex gap-2 text-xs text-slate-500">
              <span className="rounded-full bg-white px-2.5 py-1 ring-1 ring-slate-200">{project.meta.location}</span>
              <span className="rounded-full bg-white px-2.5 py-1 ring-1 ring-slate-200">{project.meta.duration}</span>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 gap-2">
          <Button className="h-11 rounded-xl bg-blue-600 text-white active:scale-[0.98]">바로지원</Button>
          <Button variant="secondary" className="h-11 rounded-xl border border-slate-200 bg-white text-slate-700 active:scale-[0.98]">
            담당자 연락
          </Button>
        </div>
      </section>
      <BottomNavigation />
    </main>
  );
}
