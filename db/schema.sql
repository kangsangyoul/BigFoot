create extension if not exists vector;

create type user_role as enum ('developer', 'company');

create table public.users (
  id uuid primary key references auth.users(id) on delete cascade,
  role user_role not null,
  email text not null unique,
  created_at timestamptz not null default now()
);

create table public.developer_profiles (
  user_id uuid primary key references public.users(id) on delete cascade,
  name text not null,
  years_exp integer not null default 0,
  preferred_rate integer,
  preferred_salary integer,
  location text,
  work_preference text check (work_preference in ('onsite', 'remote', 'hybrid')),
  available_now boolean not null default false,
  career_text text not null default '',
  tags text[] not null default '{}',
  signals jsonb not null default '{}'::jsonb,
  career_embedding vector(1536),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.projects (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.users(id) on delete cascade,
  title text not null,
  client text,
  description text not null,
  starts_on date,
  ends_on date,
  min_rate integer,
  max_rate integer,
  location text,
  onsite_required boolean not null default false,
  tags text[] not null default '{}',
  signals jsonb not null default '{}'::jsonb,
  description_embedding vector(1536),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.matches (
  developer_id uuid not null references public.developer_profiles(user_id) on delete cascade,
  project_id uuid not null references public.projects(id) on delete cascade,
  score integer not null check (score between 0 and 100),
  reasons text[] not null default '{}',
  created_at timestamptz not null default now(),
  primary key (developer_id, project_id)
);

create index developer_profiles_embedding_idx on public.developer_profiles using ivfflat (career_embedding vector_cosine_ops);
create index projects_embedding_idx on public.projects using ivfflat (description_embedding vector_cosine_ops);
create index matches_project_score_idx on public.matches (project_id, score desc);
create index matches_developer_score_idx on public.matches (developer_id, score desc);
