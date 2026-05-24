import { cn } from "@/components/ui/utils";

type MatchScoreProps = {
  score: number;
  className?: string;
};

export function MatchScore({ score, className }: MatchScoreProps) {
  return (
    <div className={cn("rounded-xl bg-blue-50 px-3 py-1.5 text-center ring-1 ring-blue-100", className)}>
      <p className="text-[10px] font-semibold tracking-wide text-blue-500">MATCH</p>
      <p className="text-lg font-bold leading-none text-blue-700">{score}%</p>
    </div>
  );
}
