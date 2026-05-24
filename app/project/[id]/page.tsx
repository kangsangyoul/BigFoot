import { notFound } from "next/navigation";

import { MatchScore } from "@/components/common/match-score";
import { BottomNavigation } from "@/components/layout/bottom-navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/mock/projects";

const detailByProjectId: Record<
  number,
  {
    overview: string;
    responsibilities: string[];
    requiredSkills: string[];
    preferredExperience: string[];
    startDate: string;
    workType: string;
    gradeLevel: string;
    contractDuration: string;
  }
> = {
  1: {
    overview: "카드 결제 API 성능 개선 및 안정화 중심의 백엔드 고도화 프로젝트",
    responsibilities: ["결제 API 설계/개발", "트랜잭션 성능 최적화", "운영 이슈 대응 및 모니터링"],
    requiredSkills: ["Java", "Spring Boot", "Oracle", "REST API"],
    preferredExperience: ["금융권 결제 도메인", "대용량 트래픽 처리", "장애 대응 자동화"],
    startDate: "즉시 시작",
    workType: "주 3회 재택 + 2회 상주",
    gradeLevel: "시니어",
    contractDuration: "8개월",
  },
  2: {
    overview: "증권 MTS 백엔드 전환 및 API 구조 개선 프로젝트",
    responsibilities: ["기존 서비스 리팩토링", "MSA 전환 지원", "연동 API 품질 개선"],
    requiredSkills: ["Java", "Spring", "MSA", "RDB"],
    preferredExperience: ["증권/거래 시스템", "실시간 데이터 처리", "CI/CD 운영"],
    startDate: "2026-06-01",
    workType: "상주",
    gradeLevel: "중급~시니어",
    contractDuration: "6개월",
  },
  3: {
    overview: "핀테크 정산 배치 고도화 및 운영 안정성 강화 프로젝트",
    responsibilities: ["배치 운영 고도화", "정산 로직 점검/개선", "운영 모니터링 체계 개선"],
    requiredSkills: ["Oracle", "Batch", "SQL", "운영"],
    preferredExperience: ["정산/회계 도메인", "장애 대응 경험", "원격 협업"],
    startDate: "2026-06-15",
    workType: "원격 중심",
    gradeLevel: "중급",
    contractDuration: "10개월",
  },
};

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const numericId = Number(id);
  const project = projects.find((item) => item.id === numericId);

  if (!project) return notFound();

  const detail = detailByProjectId[numericId] ?? {
    overview: "프로젝트 상세 정보가 준비 중입니다.",
    responsibilities: ["요구사항 분석", "개발 및 운영 지원"],
    requiredSkills: project.skills,
    preferredExperience: ["유관 도메인 경험"],
    startDate: "협의",
    workType: "협의",
    gradeLevel: "협의",
    contractDuration: project.meta.duration,
  };

  return (
    <main className="mx-auto min-h-screen w-full max-w-sm bg-slate-50 px-5 pb-24 pt-6 text-slate-900">
      <section className="space-y-4 animate-in fade-in duration-300">
        <p className="text-xs font-semibold tracking-[0.2em] text-blue-600/80">PROJECT DETAIL</p>

        <Card className="rounded-3xl border-0 bg-gradient-to-br from-blue-50 via-white to-sky-50/70 ring-1 ring-blue-100/70 shadow-[0_16px_34px_-24px_rgba(37,99,235,0.38)]">
          <CardContent className="space-y-4 px-5 py-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h1 className="text-lg font-bold leading-tight">{project.title}</h1>
                <p className="mt-1 text-sm text-slate-500">{project.company}</p>
              </div>
              <MatchScore score={project.score} />
            </div>

            <div className="rounded-2xl bg-blue-600 px-4 py-3 text-white">
              <p className="text-xs text-blue-100">월 단가</p>
              <p className="text-lg font-bold">{project.monthlyRate}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.skills.slice(0, 4).map((skill) => (
                <Badge key={skill} className="rounded-full bg-white px-3 py-1 text-xs text-blue-700 ring-1 ring-blue-100">
                  {skill}
                </Badge>
              ))}
            </div>

            <div className="flex gap-2 text-xs text-slate-500">
              <span className="rounded-full bg-white px-2.5 py-1 ring-1 ring-slate-200">{project.meta.location}</span>
              <span className="rounded-full bg-white px-2.5 py-1 ring-1 ring-slate-200">{project.meta.duration}</span>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border border-slate-200/70 bg-white shadow-[0_12px_26px_-22px_rgba(15,23,42,0.26)]">
          <CardContent className="space-y-4 px-4 py-4">
            <h2 className="text-sm font-semibold text-slate-800">프로젝트 상세 정보</h2>

            <div className="space-y-2">
              <p className="text-xs font-semibold text-slate-500">Project overview</p>
              <p className="text-sm text-slate-700">{detail.overview}</p>
            </div>

            <div className="grid gap-3">
              <div>
                <p className="text-xs font-semibold text-slate-500">Responsibilities</p>
                <ul className="mt-1 space-y-1 text-sm text-slate-700">
                  {detail.responsibilities.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold text-slate-500">Required skills</p>
                <div className="mt-1 flex flex-wrap gap-1.5">
                  {detail.requiredSkills.map((skill) => (
                    <span key={skill} className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold text-slate-500">Preferred experience</p>
                <ul className="mt-1 space-y-1 text-sm text-slate-700">
                  {detail.preferredExperience.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
              <div className="rounded-xl bg-slate-50 px-3 py-2">
                <p className="text-slate-500">Start date</p>
                <p className="mt-0.5 font-semibold text-slate-800">{detail.startDate}</p>
              </div>
              <div className="rounded-xl bg-slate-50 px-3 py-2">
                <p className="text-slate-500">Work type</p>
                <p className="mt-0.5 font-semibold text-slate-800">{detail.workType}</p>
              </div>
              <div className="rounded-xl bg-slate-50 px-3 py-2">
                <p className="text-slate-500">Grade level</p>
                <p className="mt-0.5 font-semibold text-slate-800">{detail.gradeLevel}</p>
              </div>
              <div className="rounded-xl bg-slate-50 px-3 py-2">
                <p className="text-slate-500">Contract duration</p>
                <p className="mt-0.5 font-semibold text-slate-800">{detail.contractDuration}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 gap-2">
          <Button className="h-11 rounded-xl bg-blue-600 text-white active:scale-[0.98]">바로지원</Button>
          <Button variant="secondary" className="h-11 rounded-xl border border-slate-200 bg-white text-slate-700 active:scale-[0.98]">
            담당자 연락
          </Button>
        </div>
      </section>
      <BottomNavigation />
    </main>
  );
}
