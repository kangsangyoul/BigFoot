import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const reasons = ["금융권 경험 있음", "Oracle 경험 있음", "API 구축 경험 있음"];

const projectInfo = [
  { label: "월 단가", value: "1,100만원" },
  { label: "근무지", value: "여의도" },
  { label: "기간", value: "8개월" },
  { label: "근무형태", value: "주 3회 재택" },
];

const skillBadges = ["Java", "Spring Boot", "Oracle", "REST API", "AWS"];

export default function Page() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-sm bg-slate-950 pb-28 text-slate-50">
      <section className="space-y-6 px-5 pb-8 pt-8">
        <Card className="overflow-hidden rounded-3xl border-0 bg-gradient-to-br from-emerald-400/20 via-cyan-300/10 to-slate-900 shadow-[0_20px_80px_-25px_rgba(6,182,212,0.55)]">
          <CardContent className="space-y-2 px-6 py-8 text-center">
            <p className="text-xs font-medium tracking-[0.24em] text-cyan-200/80">MATCH SCORE</p>
            <div className="text-7xl font-semibold leading-none tracking-tight">92%</div>
            <p className="text-sm text-slate-300">프로젝트 적합도가 매우 높아요</p>
          </CardContent>
        </Card>

        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-200">매칭 포인트</h2>
          <div className="grid gap-3">
            {reasons.map((reason) => (
              <Card
                key={reason}
                className="rounded-2xl border border-white/10 bg-white/[0.04] transition-all duration-200 active:scale-[0.98] active:bg-white/[0.07]"
              >
                <CardContent className="px-4 py-3 text-sm font-medium">{reason}</CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-200">프로젝트 정보</h2>
          <div className="grid grid-cols-2 gap-3">
            {projectInfo.map((item) => (
              <Card
                key={item.label}
                className="rounded-2xl border border-white/10 bg-slate-900/80 transition-all duration-300 hover:border-cyan-200/40"
              >
                <CardContent className="space-y-1 px-4 py-4">
                  <p className="text-xs text-slate-400">{item.label}</p>
                  <p className="text-sm font-semibold text-white">{item.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-200">핵심 스킬</h2>
          <div className="flex flex-wrap gap-2">
            {skillBadges.map((skill) => (
              <Badge
                key={skill}
                className="rounded-full border border-cyan-100/25 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </section>
      </section>

      <div className="fixed bottom-0 left-1/2 z-50 w-full max-w-sm -translate-x-1/2 border-t border-white/10 bg-slate-950/90 px-5 pb-6 pt-3 backdrop-blur-xl">
        <div className="grid grid-cols-2 gap-3">
          <Button className="h-12 rounded-2xl bg-cyan-300 text-slate-950 transition-all duration-200 active:scale-[0.98] active:brightness-95">
            바로지원
          </Button>
          <Button
            variant="secondary"
            className="h-12 rounded-2xl border border-white/15 bg-white/10 text-white transition-all duration-200 active:scale-[0.98] active:bg-white/20"
          >
            담당자 연락
          </Button>
        </div>
      </div>
    </main>
  );
}
