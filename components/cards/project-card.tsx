import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MatchScore } from "@/components/common/match-score";

export type Project = {
  id: number;
  title: string;
  company: string;
  score: number;
  monthlyRate: string;
  location: string;
  skills: string[];
};

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] transition-all duration-200 active:scale-[0.99]">
      <CardContent className="space-y-3 px-4 py-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-semibold leading-snug">{project.title}</p>
            <p className="mt-0.5 text-xs text-slate-400">{project.company}</p>
          </div>
          <MatchScore score={project.score} />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-xl bg-slate-900/80 px-3 py-2.5">
            <p className="text-[11px] text-slate-400">월 단가</p>
            <p className="text-sm font-semibold text-white">{project.monthlyRate}</p>
          </div>
          <div className="rounded-xl bg-slate-900/80 px-3 py-2.5">
            <p className="text-[11px] text-slate-400">근무지</p>
            <p className="text-sm font-semibold text-white">{project.location}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.skills.map((skill) => (
            <Badge
              key={`${project.id}-${skill}`}
              className="rounded-full border border-cyan-100/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100"
            >
              {skill}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2 pt-1">
          <Button className="h-11 rounded-xl bg-cyan-300 text-slate-950 active:scale-[0.98] active:brightness-95">바로지원</Button>
          <Button
            variant="secondary"
            className="h-11 rounded-xl border border-white/15 bg-white/10 text-white active:scale-[0.98] active:bg-white/20"
          >
            상세보기
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
