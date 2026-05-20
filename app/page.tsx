"use client";

import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type Step = 1 | 2 | 3 | 4;

const aiTags = ["금융권", "API", "Oracle", "운영"];

export default function Page() {
  const [step, setStep] = useState<Step>(1);
  const [isAvailableNow, setIsAvailableNow] = useState(true);
  const [careerLine, setCareerLine] = useState("카드사 API 구축 및 운영 5년");

  const progress = useMemo(() => (step / 4) * 100, [step]);

  return (
    <main className="mx-auto min-h-screen w-full max-w-sm bg-slate-950 px-5 pb-8 pt-6 text-slate-50">
      <header className="mb-6 space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>온보딩 {step}/4</span>
          <span>약 3분</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      <section className="min-h-[74vh]">
        {step === 1 && (
          <Card className="rounded-3xl border border-white/10 bg-white/[0.04] transition-all duration-300">
            <CardContent className="space-y-6 px-5 py-6">
              <p className="text-xs font-semibold tracking-[0.22em] text-cyan-200/80">STEP 1</p>
              <h1 className="text-2xl font-semibold leading-tight">지금 바로 투입 가능하신가요?</h1>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setIsAvailableNow(true)}
                  className={`h-16 rounded-2xl text-base font-semibold transition-all duration-200 active:scale-[0.98] ${
                    isAvailableNow
                      ? "bg-cyan-300 text-slate-950 shadow-[0_12px_28px_-14px_rgba(34,211,238,0.95)]"
                      : "border border-white/20 bg-white/5 text-white"
                  }`}
                >
                  네, 가능해요
                </button>
                <button
                  type="button"
                  onClick={() => setIsAvailableNow(false)}
                  className={`h-16 rounded-2xl text-base font-semibold transition-all duration-200 active:scale-[0.98] ${
                    !isAvailableNow
                      ? "bg-cyan-300 text-slate-950 shadow-[0_12px_28px_-14px_rgba(34,211,238,0.95)]"
                      : "border border-white/20 bg-white/5 text-white"
                  }`}
                >
                  아니요
                </button>
              </div>
            </CardContent>
          </Card>
        )}

        {step === 2 && (
          <Card className="rounded-3xl border border-white/10 bg-white/[0.04] transition-all duration-300">
            <CardContent className="space-y-6 px-5 py-6">
              <p className="text-xs font-semibold tracking-[0.22em] text-cyan-200/80">STEP 2</p>
              <h1 className="text-2xl font-semibold leading-tight">한 줄 경력을 알려주세요</h1>
              <p className="text-sm text-slate-300">짧고 간단하게 입력해도 충분해요.</p>
              <label className="block">
                <span className="sr-only">한 줄 경력 입력</span>
                <input
                  value={careerLine}
                  onChange={(e) => setCareerLine(e.target.value)}
                  className="h-14 w-full rounded-2xl border border-white/15 bg-slate-900/80 px-4 text-base outline-none transition-all placeholder:text-slate-500 focus:border-cyan-200/70"
                  placeholder="예: 카드사 API 구축 및 운영 5년"
                />
              </label>
            </CardContent>
          </Card>
        )}

        {step === 3 && (
          <Card className="rounded-3xl border border-cyan-100/20 bg-gradient-to-br from-cyan-300/10 to-slate-900 transition-all duration-300">
            <CardContent className="space-y-6 px-5 py-6">
              <p className="text-xs font-semibold tracking-[0.22em] text-cyan-200/80">STEP 3</p>
              <h1 className="text-2xl font-semibold leading-tight">AI 분석 완료</h1>
              <p className="text-sm text-slate-300">입력하신 경력을 바탕으로 핵심 태그를 추출했어요.</p>
              <div className="flex flex-wrap gap-2">
                {aiTags.map((tag) => (
                  <Badge
                    key={tag}
                    className="rounded-full border border-cyan-100/30 bg-cyan-300/15 px-4 py-2 text-sm text-cyan-100"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-xs text-slate-400">요약</p>
                <p className="mt-1 text-sm font-medium text-white">{careerLine || "경력을 입력해 주세요"}</p>
              </div>
            </CardContent>
          </Card>
        )}

        {step === 4 && (
          <Card className="rounded-3xl border border-emerald-200/20 bg-gradient-to-b from-emerald-300/10 to-slate-900 transition-all duration-300">
            <CardContent className="space-y-6 px-5 py-7 text-center">
              <p className="text-xs font-semibold tracking-[0.22em] text-emerald-200/80">COMPLETE</p>
              <h1 className="text-2xl font-semibold leading-tight">온보딩 완료!</h1>
              <div className="space-y-1">
                <p className="text-sm text-slate-300">추천 프로젝트</p>
                <p className="text-5xl font-semibold leading-none text-emerald-200">18개</p>
              </div>
              <p className="text-sm text-slate-300">지금 바로 맞춤 프로젝트를 확인해보세요.</p>
            </CardContent>
          </Card>
        )}
      </section>

      <footer className="sticky bottom-0 mt-4 border-t border-white/10 bg-slate-950/95 pb-2 pt-3 backdrop-blur-xl">
        {step < 4 ? (
          <Button
            onClick={() => setStep((prev) => (prev < 4 ? ((prev + 1) as Step) : prev))}
            className="h-14 w-full rounded-2xl bg-cyan-300 text-base text-slate-950 transition-all duration-200 active:scale-[0.99]"
          >
            다음
          </Button>
        ) : (
          <Button className="h-14 w-full rounded-2xl bg-emerald-300 text-base text-slate-950 transition-all duration-200 active:scale-[0.99]">
            홈으로 이동
          </Button>
        )}
      </footer>
    </main>
  );
}
