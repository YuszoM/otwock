create table if not exists public.contact_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  message text not null,
  source text not null default 'contact_form',
  meta jsonb default '{}'::jsonb,
  read_at timestamptz
);

create index if not exists contact_leads_created_at on public.contact_leads (created_at desc);

alter table public.contact_leads enable row level security;

drop policy if exists "contact_leads_insert_anon" on public.contact_leads;
create policy "contact_leads_insert_anon"
  on public.contact_leads
  for insert
  to anon, authenticated
  with check (true);

comment on table public.contact_leads is 'Leady z formularza kontaktowego';
