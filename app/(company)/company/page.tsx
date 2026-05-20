import { SendHorizonal } from "lucide-react";
import { MobileShell } from "@/components/mobile-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function CompanyPage() {
  return (
    <MobileShell className="px-5 py-6">
      <header className="pt-8">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">1분 등록</p>
        <h1 className="mt-3 text-3xl font-black tracking-tight">카톡 보내듯 등록</h1>
        <p className="mt-3 text-sm font-medium leading-6 text-slate-500">
          공고 양식은 나중에. 지금은 필요한 사람을 한 문장으로 보내세요.
        </p>
      </header>

      <section className="mt-8 space-y-3">
        <div className="max-w-[82%] rounded-3xl rounded-bl-md bg-white p-4 text-sm font-semibold leading-6 text-slate-600 shadow-card">
          어떤 개발자가 필요하신가요?
        </div>
        <Card className="ml-auto max-w-[92%] p-4">
          <label className="sr-only" htmlFor="project-summary">
            프로젝트 설명
          </label>
          <textarea
            id="project-summary"
            rows={6}
            placeholder="예: 금융권 MCI API 구축, Java/Spring/Oracle, 여의도 주 3일, 월 900"
            className="w-full resize-none border-0 bg-transparent text-base leading-6 outline-none placeholder:text-slate-400"
          />
          <Button className="mt-3 w-full" size="lg">
            <SendHorizonal size={18} aria-hidden /> AI로 분석하기
          </Button>
        </Card>
      </section>
    </MobileShell>
  );
}
