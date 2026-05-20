"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const skillTags = ["금융권", "API", "Oracle", "Java", "Spring"];

const preferredConditions = [
  { label: "월 희망 단가", value: "1,100만원" },
  { label: "근무 형태", value: "주 3회 재택" },
  { label: "선호 근무지", value: "여의도" },
];

const settings = ["알림 설정", "프로필 공개 범위", "계정 설정"];

export default function Page() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-sm bg-slate-950 px-5 pb-24 pt-6 text-slate-50">
      <header className="mb-5">
        <Card className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-300/15 via-slate-900 to-slate-900 shadow-[0_20px_60px_-30px_rgba(34,211,238,0.6)]">
          <CardContent className="space-y-4 px-5 py-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xl font-semibold">김민수</p>
                <p className="text-sm text-slate-300">시니어 백엔드 개발자</p>
              </div>
              <span className="rounded-full bg-emerald-300/20 px-3 py-1 text-xs font-semibold text-emerald-200">
                즉시 투입 가능
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span>프로필 완성도</span>
                <span className="font-semibold text-cyan-100">86%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[86%] rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300" />
              </div>
            </div>
          </CardContent>
        </Card>
      </header>

      <section className="space-y-4">
        <Card className="rounded-2xl border border-white/10 bg-white/[0.04]">
          <CardContent className="space-y-3 px-4 py-4">
            <h2 className="text-sm font-semibold text-slate-200">AI 스킬 태그</h2>
            <div className="flex flex-wrap gap-2">
              {skillTags.map((tag) => (
                <Badge
                  key={tag}
                  className="rounded-full border border-cyan-100/25 bg-cyan-300/10 px-3 py-1.5 text-xs font-medium text-cyan-100"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border border-white/10 bg-white/[0.04]">
          <CardContent className="space-y-2 px-4 py-4">
            <h2 className="text-sm font-semibold text-slate-200">경력 요약</h2>
            <p className="text-sm text-slate-100">카드사 API 구축 및 운영 6년, Oracle 기반 정산 시스템 고도화 경험.</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border border-white/10 bg-white/[0.04]">
          <CardContent className="space-y-3 px-4 py-4">
            <h2 className="text-sm font-semibold text-slate-200">선호 조건</h2>
            <div className="grid gap-2">
              {preferredConditions.map((item) => (
                <div key={item.label} className="flex items-center justify-between rounded-xl bg-slate-900/80 px-3 py-2.5">
                  <p className="text-xs text-slate-400">{item.label}</p>
                  <p className="text-sm font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border border-white/10 bg-white/[0.04]">
          <CardContent className="space-y-2 px-4 py-4">
            <h2 className="text-sm font-semibold text-slate-200">설정</h2>
            <div className="grid gap-2">
              {settings.map((item) => (
                <button
                  key={item}
                  type="button"
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-3 py-3 text-sm text-slate-200 transition-all duration-200 active:scale-[0.99] active:bg-white/[0.06]"
                >
                  <span>{item}</span>
                  <span className="text-slate-500">›</span>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <nav className="fixed bottom-0 left-1/2 z-50 w-full max-w-sm -translate-x-1/2 border-t border-white/10 bg-slate-950/95 px-4 pb-5 pt-3 backdrop-blur-xl">
        <div className="grid grid-cols-3 gap-2 text-center text-xs">
          <button className="rounded-xl bg-white/[0.04] px-2 py-2.5 text-slate-300">탐색</button>
          <button className="rounded-xl bg-white/[0.04] px-2 py-2.5 text-slate-300">매칭</button>
          <button className="rounded-xl bg-cyan-300/15 px-2 py-2.5 font-semibold text-cyan-100">프로필</button>
        </div>
      </nav>
    </main>
  );
}
