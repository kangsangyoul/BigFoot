import Link from "next/link";
import { MapPin, Sparkles } from "lucide-react";
import { Badge, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types/domain";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex min-h-[276px] flex-col">
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
        {project.tags.slice(0, 4).map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 text-sm font-semibold text-slate-600">
        <div className="rounded-xl bg-muted p-3">{project.rate}</div>
        <div className="flex items-center gap-1 rounded-xl bg-muted p-3">
          <MapPin size={14} aria-hidden /> {project.location}
        </div>
      </div>

      <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-slate-600">
        <Sparkles size={14} className="text-primary" aria-hidden /> {project.reasons.join(" · ")}
      </p>

      <div className="mt-auto pt-5">
        <Button asChild className="w-full">
          <Link href={`/projects/${project.id}`}>상세 보기</Link>
        </Button>
      </div>
    </Card>
  );
}
