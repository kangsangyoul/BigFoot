import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, MapPin, Sparkles } from "lucide-react";
import { Badge, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MobileShell } from "@/components/mobile-shell";
import { findProject, recommendedProjects } from "@/lib/demo-data";

export function generateStaticParams() {
  return recommendedProjects.map((project) => ({ id: project.id }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = findProject(id);

  if (!project) {
    notFound();
  }

  return (
    <MobileShell className="pb-[calc(env(safe-area-inset-bottom)+104px)]">
      <header className="px-5 pb-4 pt-5">
        <Button asChild size="sm" variant="ghost" className="-ml-3">
          <Link href="/developer">
            <ArrowLeft size={18} aria-hidden /> 추천으로
          </Link>
        </Button>
        <p className="mt-4 text-sm font-bold text-slate-500">{project.client}</p>
        <h1 className="mt-2 text-3xl font-black leading-tight tracking-tight">{project.title}</h1>
      </header>

      <section className="space-y-4 px-5">
        <Card className="bg-blue-50 shadow-none">
          <p className="text-xs font-bold text-slate-500">적합도</p>
          <div className="mt-1 flex items-end gap-2">
            <strong className="text-5xl font-black text-primary">{project.fit}%</strong>
            <span className="pb-2 text-sm font-bold text-slate-500">지원 추천</span>
          </div>
        </Card>

        <Card>
          <h2 className="font-extrabold">왜 추천됐나요?</h2>
          <div className="mt-3 space-y-2">
            {project.reasons.map((reason) => (
              <p key={reason} className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                <Sparkles size={15} className="text-primary" aria-hidden /> {reason}
              </p>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="font-extrabold">프로젝트 핵심 정보</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
          <div className="mt-5 grid grid-cols-2 gap-2 text-sm font-semibold text-slate-600">
            <div className="rounded-xl bg-muted p-3">{project.rate}</div>
            <div className="rounded-xl bg-muted p-3">{project.workType}</div>
            <div className="flex items-center gap-1 rounded-xl bg-muted p-3">
              <MapPin size={14} aria-hidden /> {project.location}
            </div>
            <div className="flex items-center gap-1 rounded-xl bg-muted p-3">
              <CalendarDays size={14} aria-hidden /> {project.period}
            </div>
          </div>
        </Card>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-30 mx-auto max-w-md border-t border-border bg-white/95 px-5 pb-[calc(env(safe-area-inset-bottom)+12px)] pt-3 backdrop-blur">
        <div className="grid grid-cols-2 gap-2">
          <Button size="lg">지원하기</Button>
          <Button size="lg" variant="secondary">연락하기</Button>
        </div>
      </div>
    </MobileShell>
  );
}
