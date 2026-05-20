import Link from "next/link";
import { Sparkles } from "lucide-react";
import { MobileShell } from "@/components/mobile-shell";
import { Button } from "@/components/ui/button";
import { Card, Badge } from "@/components/ui/card";

const examples = ["국민은행 대외계 API 구축", "Java/Spring/Oracle", "즉시투입 가능"];

export default function DeveloperProfilePage() {
  return (
    <MobileShell className="px-5 py-6">
      <header className="pt-8">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">3분 프로필</p>
        <h1 className="mt-3 text-3xl font-black leading-tight tracking-tight">경력 한 줄이면 충분해요</h1>
        <p className="mt-3 text-sm font-medium leading-6 text-slate-500">
          긴 이력서 대신 핵심 경력만 적으면 AI가 산업·역할·기술을 정리합니다.
        </p>
      </header>

      <Card className="mt-8">
        <div className="flex flex-wrap gap-2">
          {examples.map((example) => (
            <Badge key={example}>{example}</Badge>
          ))}
        </div>

        <label className="mt-5 block text-sm font-bold text-slate-700" htmlFor="career">
          핵심 경력
        </label>
        <textarea
          id="career"
          rows={5}
          placeholder="예: 국민은행 대외계 API 구축 및 운영, Java/Spring/Oracle 8년"
          className="mt-2 w-full resize-none rounded-2xl border border-border bg-white p-4 text-base leading-6 outline-none focus:border-primary"
        />

        <div className="mt-4 grid grid-cols-2 gap-2">
          <input
            aria-label="희망 단가"
            placeholder="희망 단가"
            className="h-12 rounded-2xl border border-border px-4 outline-none focus:border-primary"
          />
          <input
            aria-label="지역"
            placeholder="지역"
            className="h-12 rounded-2xl border border-border px-4 outline-none focus:border-primary"
          />
        </div>

        <Button asChild className="mt-4 w-full" size="lg">
          <Link href="/developer">
            <Sparkles size={18} aria-hidden /> AI 분석하고 추천 보기
          </Link>
        </Button>
      </Card>
    </MobileShell>
  );
}
