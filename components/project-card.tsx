import Link from "next/link";
import { CalendarDays, MapPin, WalletCards } from "lucide-react";
import { Badge, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types/domain";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex min-h-[292px] flex-col p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-black leading-snug tracking-tight">{project.title}</h3>
          <p className="mt-1 text-sm font-bold text-slate-500">{project.client}</p>
        </div>
        <div className="shrink-0 rounded-2xl bg-blue-50 px-3 py-2 text-center">
          <p className="text-[11px] font-black text-slate-500">적합도</p>
          <p className="text-2xl font-black leading-none text-primary">{project.fit}%</p>
        </div>
      </div>

      <p className="mt-3 text-sm font-semibold leading-5 text-slate-700">{project.summary}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.slice(0, 6).map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 text-[13px] font-bold text-slate-700">
        <div className="rounded-xl bg-muted p-2.5">
          <WalletCards className="mb-1 text-primary" size={15} aria-hidden />
          {project.rate}
        </div>
        <div className="rounded-xl bg-muted p-2.5">
          <MapPin className="mb-1 text-primary" size={15} aria-hidden />
          {project.location}
        </div>
        <div className="rounded-xl bg-muted p-2.5">
          <CalendarDays className="mb-1 text-primary" size={15} aria-hidden />
          {project.period}
        </div>
      </div>

      <div className="mt-auto grid grid-cols-2 gap-2 pt-4">
        <Button asChild variant="secondary">
          <Link href={`/projects/${project.id}`}>상세보기</Link>
        </Button>
        <Button>바로지원</Button>
      </div>
    </Card>
  );
}
