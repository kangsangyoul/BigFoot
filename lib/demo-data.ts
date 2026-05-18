export type Role = "developer" | "company";

export type Project = {
  id: string;
  title: string;
  client: string;
  fit: number;
  tags: string[];
  rate: string;
  location: string;
  onsite: string;
  reasons: string[];
};

export type Developer = {
  id: string;
  name: string;
  headline: string;
  years: number;
  fit: number;
  tags: string[];
  location: string;
  available: boolean;
  reasons: string[];
};

export const projects: Project[] = [
  {
    id: "p1",
    title: "국민은행 대외계 API 고도화",
    client: "KB 계열사",
    fit: 91,
    tags: ["Java", "Spring", "Oracle", "API"],
    rate: "월 850~950",
    location: "서울 여의도",
    onsite: "주 3일 상주",
    reasons: ["금융권 경험 있음", "Oracle 경험 있음", "API 구축 경험 있음"]
  },
  {
    id: "p2",
    title: "커머스 주문/정산 백엔드 구축",
    client: "리테일 스타트업",
    fit: 84,
    tags: ["Node.js", "PostgreSQL", "AWS"],
    rate: "월 750~850",
    location: "판교",
    onsite: "원격 가능",
    reasons: ["결제 도메인 유사", "PostgreSQL 사용", "즉시 투입 가능"]
  },
  {
    id: "p3",
    title: "보험사 모바일 앱 리뉴얼",
    client: "대형 보험사",
    fit: 78,
    tags: ["React", "Next.js", "TypeScript"],
    rate: "월 700~820",
    location: "서울 을지로",
    onsite: "주 2일 상주",
    reasons: ["React 프로젝트 경험", "금융 산업 이해", "모바일 UX 경험"]
  }
];

export const developers: Developer[] = [
  {
    id: "d1",
    name: "김민준",
    headline: "금융 SI 백엔드 · 대외계 API",
    years: 8,
    fit: 94,
    tags: ["Java", "Spring", "Oracle", "Kafka"],
    location: "서울",
    available: true,
    reasons: ["은행 프로젝트 4건", "API 운영 경험", "즉시 투입 가능"]
  },
  {
    id: "d2",
    name: "이서연",
    headline: "Next.js 프론트엔드 · 모바일 웹",
    years: 5,
    fit: 88,
    tags: ["React", "Next.js", "TypeScript"],
    location: "수도권",
    available: true,
    reasons: ["모바일 퍼스트 UI", "디자인 시스템 구축", "원격 가능"]
  },
  {
    id: "d3",
    name: "박지훈",
    headline: "데이터 파이프라인 · PostgreSQL",
    years: 7,
    fit: 81,
    tags: ["Python", "PostgreSQL", "AWS"],
    location: "부산",
    available: false,
    reasons: ["정산 데이터 경험", "클라우드 운영", "2주 후 합류"]
  }
];
