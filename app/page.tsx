"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type Project = {
  id: number;
  title: string;
  company: string;
  score: number;
  monthlyRate: string;
  location: string;
  skills: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "카드사 결제 API 고도화",
    company: "A 금융그룹",
    score: 96,
    monthlyRate: "1,250만원",
    location: "여의도",
    skills: ["금융권", "API", "Oracle", "Java"],
  },
  {
    id: 2,
    title: "증권 MTS 백엔드 전환",
    company: "B 증권",
    score: 92,
    monthlyRate: "1,120만원",
    location: "강남",
    skills: ["Java", "Spring", "MSA", "상주"],
  },
  {
    id: 3,
    title: "핀테크 정산 플랫폼 운영",
    company: "C 핀테크",
    score: 89,
    monthlyRate: "980만원",
    location: "원격",
    skills: ["운영", "Oracle", "Batch", "원격"],
  },
];

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
          <Card
            key={project.id}
            className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] transition-all duration-200 active:scale-[0.99]"
          >
            <CardContent className="space-y-3 px-4 py-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold leading-snug">{project.title}</p>
                  <p className="mt-0.5 text-xs text-slate-400">{project.company}</p>
                </div>
                <div className="rounded-xl bg-cyan-300/20 px-3 py-1.5 text-center">
                  <p className="text-[10px] font-medium tracking-wide text-cyan-100/80">MATCH</p>
                  <p className="text-lg font-semibold leading-none text-cyan-100">{project.score}%</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-xl bg-slate-900/80 px-3 py-2.5">
                  <p className="text-[11px] text-slate-400">월 단가</p>
                  <p className="text-sm font-semibold text-white">{project.monthlyRate}</p>
                </div>
                <div className="rounded-xl bg-slate-900/80 px-3 py-2.5">
                  <p className="text-[11px] text-slate-400">근무지</p>
                  <p className="text-sm font-semibold text-white">{project.location}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <Badge
                    key={`${project.id}-${skill}`}
                    className="rounded-full border border-cyan-100/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <Button className="h-11 rounded-xl bg-cyan-300 text-slate-950 active:scale-[0.98] active:brightness-95">바로지원</Button>
                <Button
                  variant="secondary"
                  className="h-11 rounded-xl border border-white/15 bg-white/10 text-white active:scale-[0.98] active:bg-white/20"
                >
                  상세보기
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <nav className="fixed bottom-0 left-1/2 z-50 w-full max-w-sm -translate-x-1/2 border-t border-white/10 bg-slate-950/95 px-4 pb-5 pt-3 backdrop-blur-xl">
        <div className="grid grid-cols-3 gap-2 text-center text-xs">
          <button className="rounded-xl bg-cyan-300/15 px-2 py-2.5 font-semibold text-cyan-100">홈</button>
          <button className="rounded-xl bg-white/[0.04] px-2 py-2.5 text-slate-300">매칭</button>
          <button className="rounded-xl bg-white/[0.04] px-2 py-2.5 text-slate-300">프로필</button>
        </div>
      </nav>
    </main>
  );
}
