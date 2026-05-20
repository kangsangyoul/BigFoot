import Link from "next/link";
import { Mail, Sparkles } from "lucide-react";
import { MobileShell } from "@/components/mobile-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function LoginPage() {
  return (
    <MobileShell className="flex min-h-screen flex-col px-5 py-6">
      <header className="pt-8">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Project Nexus</p>
        <h1 className="mt-3 text-3xl font-black leading-tight tracking-tight">한국 IT/SI 매칭을 가장 빠르게</h1>
        <p className="mt-3 text-sm font-medium leading-6 text-slate-500">이메일 하나로 시작하고, 역할을 고르면 바로 추천 카드로 이동합니다.</p>
      </header>

      <Card className="mt-auto">
        <div className="mb-5 rounded-2xl bg-blue-50 p-4 text-primary">
          <Sparkles size={28} aria-hidden />
          <p className="mt-3 text-sm font-bold text-slate-700">3분 프로필 · 1분 프로젝트 · AI 적합도 추천</p>
        </div>
        <label className="text-sm font-bold text-slate-700" htmlFor="email">
          이메일
        </label>
        <input
          id="email"
          type="email"
          placeholder="you@company.com"
          className="mt-2 h-12 w-full rounded-2xl border border-border bg-white px-4 text-base outline-none focus:border-primary"
        />
        <Button asChild className="mt-4 w-full" size="lg">
          <Link href="/role">
            <Mail size={18} aria-hidden /> 이메일로 계속
          </Link>
        </Button>
        <Button asChild className="mt-2 w-full" size="lg" variant="secondary">
          <Link href="/role">Google로 계속</Link>
        </Button>
      </Card>
    </MobileShell>
  );
}
