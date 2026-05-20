import { CheckCircle2, Sparkles } from "lucide-react";
import { BottomTabs } from "@/components/navigation/bottom-tabs";
import { ProjectCard } from "@/components/project-card";
import { Badge, Card } from "@/components/ui/card";
import { MobileShell } from "@/components/mobile-shell";
import { currentDeveloper, recommendedProjects } from "@/lib/demo-data";

export default function DeveloperHomePage() {
  return (
    <MobileShell className="safe-bottom">
      <header className="sticky top-0 z-20 border-b border-border/70 bg-background/95 px-5 pb-4 pt-5 backdrop-blur">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Developer Home</p>
            <h1 className="mt-1 text-2xl font-extrabold tracking-tight">추천 프로젝트</h1>
          </div>
          <Badge className="bg-emerald-50 text-emerald-600">즉시투입</Badge>
        </div>
      </header>

      <section className="space-y-4 px-5 py-5">
        <Card className="bg-gradient-to-br from-primary to-blue-500 text-white">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-1 shrink-0 text-blue-100" size={26} aria-hidden />
            <div>
              <p className="text-sm font-semibold text-blue-100">{currentDeveloper.name}님 기준</p>
              <h2 className="mt-1 text-xl font-black">{recommendedProjects.length}개 프로젝트 추천</h2>
              <p className="mt-2 text-sm leading-6 text-blue-50">{currentDeveloper.careerSummary}</p>
            </div>
          </div>
        </Card>

        <div className="flex items-center justify-between">
          <p className="flex items-center gap-2 text-sm font-bold text-slate-600">
            <Sparkles size={16} className="text-primary" aria-hidden /> 적합도 높은 순
          </p>
          <p className="text-xs font-bold text-slate-400">카드 선택 → 상세</p>
        </div>

        <div className="space-y-3">
          {recommendedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <BottomTabs active="홈" />
    </MobileShell>
  );
}
