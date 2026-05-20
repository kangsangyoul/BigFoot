import { MatchScore } from "@/components/common/match-score";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
    <Card className="rounded-2xl border border-slate-200/80 bg-white shadow-[0_10px_30px_-20px_rgba(15,23,42,0.22)] transition-all duration-200 active:scale-[0.99]">
      <CardContent className="space-y-3 px-4 py-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-semibold leading-snug text-slate-900">{project.title}</p>
            <p className="mt-0.5 text-xs text-slate-500">{project.company}</p>
          </div>
          <MatchScore score={project.score} />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-xl bg-slate-50 px-3 py-2.5">
            <p className="text-[11px] text-slate-500">월 단가</p>
            <p className="text-sm font-semibold text-slate-900">{project.monthlyRate}</p>
          </div>
          <div className="rounded-xl bg-slate-50 px-3 py-2.5">
            <p className="text-[11px] text-slate-500">근무지</p>
            <p className="text-sm font-semibold text-slate-900">{project.location}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.skills.map((skill) => (
            <Badge key={`${project.id}-${skill}`} className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs text-blue-700">
              {skill}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2 pt-1">
          <Button className="h-11 rounded-xl bg-blue-600 text-white shadow-[0_10px_24px_-14px_rgba(37,99,235,0.7)] active:scale-[0.98] active:bg-blue-700">
            바로지원
          </Button>
          <Button
            variant="secondary"
            className="h-11 rounded-xl border border-slate-200 bg-white text-slate-700 active:scale-[0.98] active:bg-slate-50"
          >
            상세보기
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
