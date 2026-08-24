# CLAUDE.md — Contexto del proyecto Nextep

Este archivo le da a Claude Code el contexto permanente del proyecto. Léelo antes de cada tarea.

## Qué es Nextep

Plataforma de RRHH que conecta **empresas** con **colaboradores/candidatos de alto nivel y especialización**.
MVP actual: **bolsa de trabajo + matching** entre vacantes y candidatos.

## Stack (no cambiar sin acordarlo con Vicente)

- **Next.js** (App Router, TypeScript)
- **Tailwind CSS + shadcn/ui** para la interfaz
- **Supabase** para autenticación, base de datos (Postgres) y almacenamiento de archivos (CVs)
- **Vercel** para el despliegue (conectado al repo de GitHub)
- **GitHub** como repositorio

## Roles de usuario

Dos roles: `candidato` y `empresa`. Cada uno tiene su propio dashboard tras iniciar sesión.

## Modelo de datos (MVP)

- `profiles` — id, rol, nombre, email, foto, país/zona horaria
- `candidates` — headline, especialización, años de experiencia, skills[], seniority, disponibilidad, expectativa salarial, idiomas, url_cv
- `companies` — nombre, industria, tamaño, sitio web, descripción
- `jobs` — company_id, título, descripción, especialización, skills_requeridas[], seniority, rango_salarial, modalidad, estado
- `applications` — job_id, candidate_id, estado, fecha
- `matches` — job_id, candidate_id, score

## Matching (fase 1)

Regla ponderada: coincidencia de skills (peso alto) + seniority + especialización + salario dentro de rango.
Ordenar candidatos por score para cada vacante y vacantes por score para cada candidato.
(Fase 2, más adelante: matching semántico con pgvector + embeddings.)

## Reglas de trabajo con Claude Code

1. **Un feature a la vez.** Desplegar a Vercel y probar en la URL real antes de pasar al siguiente.
2. **Pedir llaves/cuentas explícitamente** a Vicente y detenerse hasta tenerlas (nunca inventar credenciales).
3. **Row Level Security (RLS) activo** en todas las tablas de Supabase: cada usuario solo ve lo que le corresponde.
4. **Explicar las decisiones clave** (esquema de datos, permisos) en lenguaje sencillo; Vicente es semi-técnico y supervisa.
5. **Commits frecuentes** a GitHub con mensajes claros.
6. Secretos y llaves siempre en variables de entorno (`.env.local`), nunca en el código ni en commits.

## Orden del roadmap

1. Fundaciones: proyecto + Supabase + deploy + login con roles
2. Perfiles (candidato y empresa)
3. Vacantes y aplicaciones
4. Matching + dashboards + beta privado

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
