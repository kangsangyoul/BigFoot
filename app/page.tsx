import { BriefcaseBusiness, CheckCircle2, Home, MessageCircle, Search, Sparkles, UserRound, UsersRound, Zap } from "lucide-react";
import { Badge, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { developers, projects } from "@/lib/demo-data";

const stats = [
  { label: "추천 프로젝트", value: "12" },
  { label: "평균 적합도", value: "87%" },
  { label: "즉시 연결", value: "5" }
];

const tabs = [
  { label: "홈", icon: Home },
  { label: "탐색", icon: Search },
  { label: "매칭", icon: Sparkles },
  { label: "마이", icon: UserRound }
];

export default function HomePage() {
  return (
    <main className="mx-auto min-h-screen max-w-md bg-background safe-bottom">
      <section className="sticky top-0 z-20 border-b border-border/70 bg-background/95 px-5 pb-4 pt-5 backdrop-blur">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Project Nexus</p>
            <h1 className="mt-1 text-2xl font-extrabold tracking-tight">가장 빠른 IT 매칭</h1>
          </div>
          <div className="rounded-2xl bg-primary p-3 text-white shadow-card">
            <Zap size={22} aria-hidden />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-white p-3 text-center shadow-sm">
              <p className="text-lg font-extrabold text-slate-950">{stat.value}</p>
              <p className="mt-1 text-[11px] font-medium text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-5 px-5 py-5">
        <Card className="overflow-hidden bg-gradient-to-br from-primary to-blue-500 text-white">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-blue-100">개발자 상태</p>
              <h2 className="mt-2 text-2xl font-extrabold">즉시투입 가능</h2>
              <p className="mt-2 text-sm leading-6 text-blue-50">경력 한 줄만 입력하면 AI가 기술·산업·역할을 자동 추출합니다.</p>
            </div>
            <CheckCircle2 className="shrink-0 text-blue-100" size={34} aria-hidden />
          </div>
          <div className="mt-5 grid grid-cols-2 gap-2">
            <Button className="bg-white text-primary hover:bg-blue-50">3분 프로필</Button>
            <Button className="bg-blue-400/40 text-white ring-1 ring-white/30">연락 확인</Button>
          </div>
        </Card>

        <section>
          <div className="mb-3 flex items-end justify-between">
            <div>
              <p className="text-xs font-bold text-primary">DEVELOPER HOME</p>
              <h2 className="text-xl font-extrabold">추천 프로젝트</h2>
            </div>
            <button className="text-sm font-bold text-primary">전체보기</button>
          </div>
          <div className="space-y-3">
            {projects.map((project) => (
              <Card key={project.id}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-500">{project.client}</p>
                    <h3 className="mt-1 text-lg font-extrabold leading-snug">{project.title}</h3>
                  </div>
                  <div className="rounded-2xl bg-blue-50 px-3 py-2 text-center">
                    <p className="text-xs font-bold text-slate-500">적합도</p>
                    <p className="text-xl font-black text-primary">{project.fit}%</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2 text-sm font-semibold text-slate-600">
                  <div className="rounded-xl bg-muted p-3">{project.rate}</div>
                  <div className="rounded-xl bg-muted p-3">{project.location}</div>
                </div>
                <div className="mt-4 space-y-1">
                  {project.reasons.map((reason) => (
                    <p key={reason} className="flex items-center gap-2 text-sm text-slate-600">
                      <Sparkles size={14} className="text-primary" aria-hidden /> {reason}
                    </p>
                  ))}
                </div>
                <div className="mt-5 grid grid-cols-2 gap-2">
                  <Button>지원</Button>
                  <Button variant="secondary">
                    <MessageCircle size={16} aria-hidden /> 연락
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-3 flex items-end justify-between">
            <div>
              <p className="text-xs font-bold text-primary">COMPANY HOME</p>
              <h2 className="text-xl font-extrabold">추천 인재</h2>
            </div>
            <Button size="sm">
              <BriefcaseBusiness size={14} aria-hidden /> 1분 등록
            </Button>
          </div>
          <div className="space-y-3">
            {developers.map((developer) => (
              <Card key={developer.id}>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-extrabold">{developer.name}</h3>
                      {developer.available ? <Badge className="bg-emerald-50 text-emerald-600">즉시투입</Badge> : null}
                    </div>
                    <p className="mt-1 text-sm font-semibold text-slate-500">{developer.headline}</p>
                  </div>
                  <p className="rounded-2xl bg-blue-50 px-3 py-2 text-lg font-black text-primary">{developer.fit}%</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {developer.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-slate-600">
                  <UsersRound size={16} aria-hidden /> {developer.years}년차 · {developer.location}
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <Button>연락</Button>
                  <Button variant="secondary">프로필 보기</Button>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </section>

      <nav className="fixed inset-x-0 bottom-0 z-30 mx-auto max-w-md border-t border-border bg-white/95 px-4 pb-[calc(env(safe-area-inset-bottom)+10px)] pt-2 backdrop-blur">
        <div className="grid grid-cols-4 gap-1">
          {tabs.map((tab, index) => {
            const Icon = tab.icon;
            return (
              <button key={tab.label} className={index === 0 ? "rounded-2xl bg-blue-50 px-2 py-2 text-primary" : "rounded-2xl px-2 py-2 text-slate-400"}>
                <Icon className="mx-auto" size={20} aria-hidden />
                <span className="mt-1 block text-xs font-bold">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </main>
  );
}
