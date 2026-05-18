import { BriefcaseBusiness } from "lucide-react";
import { MobileShell } from "@/components/mobile-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function CompanyPage() {
  return (
    <MobileShell className="px-5 py-6">
      <header className="pt-8">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Company</p>
        <h1 className="mt-3 text-3xl font-black tracking-tight">1분 프로젝트 등록</h1>
        <p className="mt-3 text-sm font-medium leading-6 text-slate-500">긴 폼 대신 설명 하나만 먼저 받고 AI가 기술과 역할을 추출합니다.</p>
      </header>

      <Card className="mt-8">
        <div className="mb-4 rounded-2xl bg-blue-50 p-3 text-primary">
          <BriefcaseBusiness size={26} aria-hidden />
        </div>
        <label className="text-sm font-bold text-slate-700" htmlFor="project-summary">
          프로젝트 설명
        </label>
        <textarea
          id="project-summary"
          rows={6}
          placeholder="예: 금융권 대외계 API 구축, Java/Spring/Oracle, 여의도 주 3일 상주"
          className="mt-2 w-full resize-none rounded-2xl border border-border bg-white p-4 text-base leading-6 outline-none focus:border-primary"
        />
        <Button className="mt-4 w-full" size="lg">AI로 분석하기</Button>
      </Card>
    </MobileShell>
  );
}
