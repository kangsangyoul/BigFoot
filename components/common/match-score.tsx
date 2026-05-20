import { cn } from "@/components/ui/utils";

type MatchScoreProps = {
  score: number;
  className?: string;
};

export function MatchScore({ score, className }: MatchScoreProps) {
  return (
    <div className={cn("rounded-xl bg-cyan-300/20 px-3 py-1.5 text-center", className)}>
      <p className="text-[10px] font-medium tracking-wide text-cyan-100/80">MATCH</p>
      <p className="text-lg font-semibold leading-none text-cyan-100">{score}%</p>
    </div>
  );
}
