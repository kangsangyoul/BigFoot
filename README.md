# Project Nexus

모바일 퍼스트 기반의 IT 인력 매칭 플랫폼 MVP입니다. 개발자와 프로젝트를 최소 입력으로 빠르게 연결하고, AI 태그 추출과 embedding 기반 적합도 추천을 중심으로 설계했습니다.

## Stack

- Next.js App Router
- TypeScript
- TailwindCSS
- shadcn/ui 스타일의 로컬 UI primitives
- Supabase + PostgreSQL + pgvector
- Vercel 배포 대상

## MVP 범위

- 모바일 홈 화면 및 카드 중심 추천 UX
- 개발자/기업 양면 흐름 데모
- 프로젝트 카드, 추천 인재 카드, 빠른 액션 CTA
- AI 태그 추출 및 cosine similarity 점수 계산 유틸리티
- Supabase 데이터베이스 스키마 초안

## 개발

```bash
npm install
npm run dev
```

Supabase 연동 시 다음 환경 변수를 설정합니다.

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```
