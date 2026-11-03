create table public.quiz_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  lesson_id text not null references public.lessons(id),
  score integer not null check (score >= 0),
  total integer not null check (total > 0 and score <= total),
  created_at timestamptz not null default now()
);
create index quiz_attempts_user_id_idx on public.quiz_attempts (user_id);
create index quiz_attempts_lesson_id_idx on public.quiz_attempts (lesson_id);

create table public.lesson_time_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  lesson_id text not null references public.lessons(id),
  started_at timestamptz not null,
  duration_seconds integer not null check (duration_seconds >= 0),
  created_at timestamptz not null default now()
);
create index lesson_time_logs_user_id_idx on public.lesson_time_logs (user_id);
create index lesson_time_logs_lesson_id_idx on public.lesson_time_logs (lesson_id);

alter table public.quiz_attempts enable row level security;
alter table public.lesson_time_logs enable row level security;

revoke all on public.quiz_attempts from anon, authenticated;
revoke all on public.lesson_time_logs from anon, authenticated;
grant select, insert on public.quiz_attempts to authenticated;
grant select, insert on public.lesson_time_logs to authenticated;

create policy "own quiz attempts read" on public.quiz_attempts
  for select to authenticated using ((select auth.uid()) = user_id);
create policy "own quiz attempts insert" on public.quiz_attempts
  for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "own lesson time read" on public.lesson_time_logs
  for select to authenticated using ((select auth.uid()) = user_id);
create policy "own lesson time insert" on public.lesson_time_logs
  for insert to authenticated with check ((select auth.uid()) = user_id);
