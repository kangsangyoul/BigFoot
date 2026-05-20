"use client";

import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const quickFilters = ["금융권", "API", "상주", "원격", "고단가"];

const projects = [
  { id: 1, title: "카드사 결제 API 고도화", score: 95, rate: "1,200만원", location: "여의도", tags: ["금융권", "API"] },
  { id: 2, title: "보험 코어 Java 전환", score: 91, rate: "1,050만원", location: "강남", tags: ["Java", "상주"] },
  { id: 3, title: "핀테크 정산 플랫폼 운영", score: 88, rate: "980만원", location: "원격", tags: ["운영", "원격"] },
];

const suggestions = ["Oracle", "Spring", "증권", "백엔드"];

export default function Page() {
  const [query, setQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return projects.filter((project) => {
      const byQuery =
        query.length === 0 ||
        project.title.toLowerCase().includes(query.toLowerCase()) ||
        project.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()));
      const byFilter = !selectedFilter || project.tags.includes(selectedFilter) || project.location === selectedFilter;
      return byQuery && byFilter;
    });
  }, [query, selectedFilter]);

  return (
    <main className="mx-auto min-h-screen w-full max-w-sm bg-slate-950 px-5 pb-24 pt-6 text-slate-50">
      <header className="mb-5 space-y-3">
        <p className="text-xs font-semibold tracking-[0.24em] text-cyan-200/80">BIGFOOT DISCOVERY</p>
        <h1 className="text-2xl font-semibold leading-tight">딱 맞는 프로젝트를 찾아볼까요?</h1>

        <label className="block">
          <span className="sr-only">프로젝트 검색</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-14 w-full rounded-2xl border border-white/15 bg-white/[0.04] px-4 text-base outline-none transition-all placeholder:text-slate-500 focus:border-cyan-200/70"
            placeholder='예: "MCI" "금융권 API" "Java"'
          />
        </label>
      </header>

      <section className="mb-5">
        <div className="flex gap-2 overflow-x-auto pb-1">
          {quickFilters.map((filter) => {
            const active = selectedFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setSelectedFilter(active ? null : filter)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 active:scale-[0.97] ${
                  active
                    ? "bg-cyan-300 text-slate-950 shadow-[0_8px_20px_-10px_rgba(34,211,238,0.9)]"
                    : "border border-white/15 bg-white/[0.03] text-slate-200"
                }`}
                type="button"
              >
                {filter}
              </button>
            );
          })}
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-slate-200">추천 프로젝트</h2>
          <p className="text-xs text-slate-400">{filtered.length}개</p>
        </div>

        {filtered.length > 0 ? (
          <div className="space-y-3">
            {filtered.map((project) => (
              <Card
                key={project.id}
                className="rounded-2xl border border-white/10 bg-white/[0.04] transition-all duration-200 active:scale-[0.99]"
              >
                <CardContent className="space-y-3 px-4 py-4">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm font-semibold leading-snug">{project.title}</p>
                    <div className="rounded-xl bg-cyan-300/20 px-2.5 py-1 text-sm font-semibold text-cyan-100">
                      {project.score}%
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="rounded-xl bg-slate-900/80 px-3 py-2">
                      <p className="text-[11px] text-slate-400">월 단가</p>
                      <p className="font-semibold text-white">{project.rate}</p>
                    </div>
                    <div className="rounded-xl bg-slate-900/80 px-3 py-2">
                      <p className="text-[11px] text-slate-400">근무지</p>
                      <p className="font-semibold text-white">{project.location}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-xs text-slate-200">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent">
            <CardContent className="space-y-4 px-4 py-6 text-center">
              <p className="text-base font-semibold">검색 결과가 없어요</p>
              <p className="text-sm text-slate-300">다른 키워드로 가볍게 찾아볼까요?</p>
              <div className="flex flex-wrap justify-center gap-2">
                {suggestions.map((keyword) => (
                  <button
                    key={keyword}
                    type="button"
                    onClick={() => setQuery(keyword)}
                    className="rounded-full border border-cyan-100/25 bg-cyan-300/10 px-3 py-1.5 text-xs text-cyan-100 transition active:scale-[0.97]"
                  >
                    {keyword}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </section>

      <nav className="fixed bottom-0 left-1/2 z-50 w-full max-w-sm -translate-x-1/2 border-t border-white/10 bg-slate-950/95 px-4 pb-5 pt-3 backdrop-blur-xl">
        <div className="grid grid-cols-3 gap-2 text-center text-xs">
          <button className="rounded-xl bg-cyan-300/15 px-2 py-2.5 font-semibold text-cyan-100">탐색</button>
          <button className="rounded-xl bg-white/[0.04] px-2 py-2.5 text-slate-300">매칭</button>
          <button className="rounded-xl bg-white/[0.04] px-2 py-2.5 text-slate-300">내 정보</button>
        </div>
      </nav>
    </main>
  );
}
