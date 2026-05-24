import type { Project } from "@/components/cards/project-card";

export const projects: Project[] = [
  {
    id: 1,
    title: "카드사 결제 API 고도화",
    company: "A 금융그룹",
    score: 96,
    monthlyRate: "1,250만원",
    meta: { location: "여의도", duration: "8개월" },
    skills: ["금융권", "API", "Oracle", "Java"],
  },
  {
    id: 2,
    title: "증권 MTS 백엔드 전환",
    company: "B 증권",
    score: 92,
    monthlyRate: "1,120만원",
    meta: { location: "강남", duration: "6개월" },
    skills: ["Java", "Spring", "MSA", "상주"],
  },
  {
    id: 3,
    title: "핀테크 정산 플랫폼 운영",
    company: "C 핀테크",
    score: 89,
    monthlyRate: "980만원",
    meta: { location: "원격", duration: "10개월" },
    skills: ["운영", "Oracle", "Batch", "원격"],
  },
];
