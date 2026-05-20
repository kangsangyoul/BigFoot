# Project Nexus

모바일 퍼스트 기반의 IT 인력 매칭 플랫폼 MVP입니다. 지금 단계의 목표는 기능을 많이 넣는 것이 아니라, **로그인 → 회원 유형 선택 → 개발자 추천 카드 → 프로젝트 상세/CTA** 흐름이 앱처럼 작동하는 것입니다.

## 절대 원칙

- 모바일 퍼스트
- 카드 중심 UX
- 텍스트 최소화
- 하단 탭 구조
- 한 화면 한 액션
- 초기 AI는 OpenAI Embedding + cosine similarity만 사용
- 초기 DB는 `users`, `developer_profiles`, `projects`, `matches` 중심으로 유지하되 기술명 정규화용 `skill_normalizations`만 둠

## Stack

- Next.js App Router
- TypeScript
- TailwindCSS
- shadcn/ui 스타일의 로컬 UI primitives
- Supabase Client + PostgreSQL + pgvector
- Zustand
- ESLint + Prettier

## App Router 구조

```txt
app/
  (auth)/login
  (auth)/role
  (developer)/developer
  (developer)/developer/profile
  (company)/company
  (shared)/projects/[id]
components/
lib/
types/
hooks/
```

## MVP 흐름

1. `/login` — 이메일/Google 로그인 진입
2. `/role` — 개발자/기업 회원 유형 선택
3. `/developer/profile` — textarea 중심 3분 프로필
4. `/developer` — 추천 프로젝트 카드만 표시
5. `/projects/[id]` — 프로젝트 상세와 하단 고정 CTA

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
