import type { DeveloperProfile, Project } from "@/types/domain";

export const currentDeveloper: DeveloperProfile = {
  id: "dev-1",
  name: "김민준",
  careerSummary: "국민은행 대외계 API 구축 및 운영, Spring/Oracle 기반 백엔드 8년",
  yearsExp: 8,
  location: "서울",
  availableNow: true,
  preferredRate: "월 850 이상"
};

export const recommendedProjects: Project[] = [
  {
    id: "kb-api",
    title: "대외계 API 고도화",
    client: "KB 계열사",
    description: "금융권 대외계 API를 Spring 기반으로 고도화하고 Oracle 운영 쿼리를 개선하는 프로젝트입니다.",
    fit: 91,
    tags: ["Java", "Spring", "Oracle", "API"],
    rate: "월 850~950",
    location: "서울 여의도",
    workType: "주 3일 상주",
    period: "6개월",
    reasons: ["금융권 경험", "Oracle 운영", "API 구축"]
  },
  {
    id: "commerce-settlement",
    title: "주문/정산 백엔드 구축",
    client: "리테일 스타트업",
    description: "커머스 주문과 정산 도메인의 백엔드 API를 구축하고 PostgreSQL 기반 데이터를 정리합니다.",
    fit: 84,
    tags: ["Node.js", "PostgreSQL", "AWS"],
    rate: "월 750~850",
    location: "판교",
    workType: "원격 가능",
    period: "4개월",
    reasons: ["정산 도메인 유사", "PostgreSQL 경험", "즉시 투입"]
  },
  {
    id: "insurance-mobile",
    title: "보험 모바일 웹 리뉴얼",
    client: "대형 보험사",
    description: "보험 가입 플로우를 모바일 웹 기준으로 재구성하고 Next.js 화면 성능을 개선합니다.",
    fit: 78,
    tags: ["React", "Next.js", "TypeScript"],
    rate: "월 700~820",
    location: "서울 을지로",
    workType: "주 2일 상주",
    period: "5개월",
    reasons: ["금융 산업 이해", "모바일 UX", "React 경험"]
  }
];

export function findProject(projectId: string) {
  return recommendedProjects.find((project) => project.id === projectId);
}
