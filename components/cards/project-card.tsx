import { MatchScore } from "@/components/common/match-score";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type ProjectMeta = {
  location: string;
  duration: string;
};

export type Project = {
  id: number;
  title: string;
  company: string;
  score: number;
  monthlyRate: string;
  meta: ProjectMeta;
  skills: string[];
};

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const visibleSkills = project.skills.slice(0, 3);

  return (
    <Card
      className="group rounded-3xl border-0 bg-gradient-to-br from-blue-50 via-white to-sky-50/70 shadow-[0_14px_34px_-24px_rgba(37,99,235,0.42)] ring-1 ring-blue-100/70 transition-all duration-300 animate-in fade-in slide-in-from-bottom-2 active:scale-[0.985]"
      style={{ animationDelay: `${index * 70}ms`, animationFillMode: "both" }}
    >
      <CardContent className="space-y-4 px-4 py-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 space-y-1">
            <p className="truncate text-[15px] font-semibold leading-tight tracking-tight text-slate-900">{project.title}</p>
            <p className="text-xs text-slate-500">{project.company}</p>
          </div>
          <MatchScore score={project.score} className="shrink-0 shadow-[0_10px_18px_-14px_rgba(37,99,235,0.75)]" />
        </div>

        <div className="rounded-2xl bg-blue-600 px-3 py-2.5 text-white shadow-[0_12px_20px_-16px_rgba(37,99,235,0.75)]">
          <p className="text-[11px] text-blue-100">월 단가</p>
          <p className="text-base font-bold leading-tight">{project.monthlyRate}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {visibleSkills.map((skill) => (
            <Badge key={`${project.id}-${skill}`} className="rounded-full bg-white px-3 py-1 text-[11px] font-medium text-blue-700 ring-1 ring-blue-100">
              {skill}
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span className="rounded-full bg-white px-2.5 py-1 ring-1 ring-slate-200">{project.meta.location}</span>
          <span className="rounded-full bg-white px-2.5 py-1 ring-1 ring-slate-200">{project.meta.duration}</span>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-0.5">
          <Button className="h-10 rounded-xl bg-blue-600 text-sm text-white shadow-[0_10px_20px_-14px_rgba(37,99,235,0.8)] transition-all duration-200 active:scale-[0.98] active:bg-blue-700">
            바로지원
          </Button>
          <Button
            variant="secondary"
            className="h-10 rounded-xl border border-blue-100 bg-white text-sm text-slate-700 transition-all duration-200 group-active:bg-slate-50 active:scale-[0.98]"
          >
            상세보기
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
