# AI Sandbox

A local-first career workflow sandbox for students. Built with Next.js App Router, TypeScript, Tailwind CSS and Zod. The default mock provider requires no account, API key or internet connection after dependencies are installed and the local server is running.

## Start in two commands

Use Node.js 22+ with npm installed, then run from this folder:

```sh
npm install
npm run dev
```

Open http://127.0.0.1:3000. See [DEMO_SCRIPT.md](./DEMO_SCRIPT.md) for a five-minute walkthrough. `npm run build` and `npm start` run the production version. This project does not depend on externally hosted fonts or image assets.

## What's included

- Eight JSON-driven scenarios, 27 prompts, 16 tool entries, 11 department personas and eight sample policy categories.
- PRD intake with missing-field checks, editable drafts, section regeneration, version comparison and export.
- Clause-linked policy findings, explicit human classifications, suggested edits, simulated departmental objections, rebuttal structure scoring, debate and an owned risk register.
- Deterministic weekday scheduling with daily resource limits, dependencies, blackout dates, editable estimates, requirement links and what-if controls.
- An editable phase checklist and a gate that keeps unresolved findings, infeasible plans and missing human sign-off visible.
- Copy-ready learning prompts, a downloadable starter SKILL.md, manual/AI comparisons, Proof Log and an interview summary.
- Task mapping, career filters, an optional four-question profile, a tool library and local content administration with validated JSON import/export.

## Provider configuration

Copy `.env.example` to `.env.local` only if you want to configure a live provider. Restart the server after changing environment variables.

| Variable | Purpose |
| --- | --- |
| `LLM_PROVIDER` | `mock` (default), `anthropic`, or `openai` |
| `ANTHROPIC_API_KEY` | Server-only Anthropic key |
| `OPENAI_API_KEY` | Server-only OpenAI key |
| `ANTHROPIC_MODEL` | Optional model ID; default is `claude-sonnet-4-20250514` |
| `OPENAI_MODEL` | Optional model ID; default is `gpt-4.1-mini` |

Verify that your account supports the configured model. Keys are read only by the server-side route and are never passed into client props. Live requests use a 25-second timeout. Malformed or failed output is retried once, then a deterministic mock artifact is returned with a visible fallback notice. No live paid API calls were used for verification.

All remote generation goes through `app/api/generate/route.ts`. Zod validates returned artifacts. Both client and server check email, US-style phone and SSN-like patterns. The client offers **Redact and continue** or **Cancel** before making a call. This is a convenience pattern detector, not comprehensive confidential-data classification. Never paste employer secrets, student records or NDA material.

## Edit content

- `content/scenarios/*.json`: add a valid scenario file and restart development or rebuild production; discovery is automatic and needs no UI edit. Match `scenarioSchema` in `lib/models.ts`.
- `content/prompts.json`: prompts with placeholders, rationale and scenario/component references.
- `content/tools.json`: categories, practical starter tasks, official sources and review dates. Verify current features before relying on them.
- `content/departments/index.json`: names, personas, priorities and objections.
- `content/policies/index.json`: illustrative clauses or approved organizational policy text.
- `content/mock-workflows.ts`: editorial worked examples for lighter scenarios.
- `content/task-rules.ts`: ordered intent matching rules.
- `lib/capabilities/index.ts`: curated capability cards, deliberately not a news feed.

The OCS admin screen edits this browser's local copy only. Export JSON and copy reviewed changes into the content files to distribute them. The admin screen has no authentication because there is no shared backend. Local counters describe only this browser; they are not cross-student analytics.

## Persistence and exports

State is stored under `ai-sandbox:*` localStorage keys with guarded reads/writes. Each scenario has a separate saved workspace. If storage is unavailable the app remains usable in memory and asks you to export before leaving. Markdown downloads cover drafts, checks, timelines, generated outputs and the interview summary. CSV downloads cover risks and schedules. **Print / Save as PDF** creates a print-only text view containing the workflow record rather than clipped editing fields. Browser print settings control paper size and pagination.

Policy imports accept `.txt` and `.md`, or pasted text extracted from a PDF. Binary PDF parsing is not included. Voice intake works via your operating system's dictation into the notes field or a pasted transcript; this app does not record audio or connect to meeting services.

## Verification

```sh
npm test
npm run typecheck
npx playwright install chromium
npm run test:e2e
```

Run the app on port 3000 before browser tests. Alternatively set `PLAYWRIGHT_CHROME` to an installed Chrome executable. Tests cover the full PRD flow, redaction before generation, mobile task mapping with unavailable storage, resource capacity, dependency ordering, infeasibility, blackout dates, routing, content references and provider fallback.

## What is simulated

Mock drafts and lighter scenario examples are deterministic templates. Intake extraction proposes fields for the student to confirm. Policy review uses conservative heuristics; it is not a legal or compliance determination. Department review, debate and rebuttal scores are educational simulations and never constitute stakeholder approval. Rebuttal scoring checks for an owner, evidence and action, not semantic correctness. The scheduler is real deterministic code; estimates are editable proposals and budget/vendor constraints still require human review. No emails are sent, meetings recorded, integrations connected or commitments made.

## Next improvements

Add richer task-specific structured generation for intake, review and estimates; audit it against an evaluated fixture set. Add authenticated provider integration tests, user research with OCS students, comprehensive accessibility auditing, deeper policy matching with provenance, and approved connector integrations. Keep human decisions and evidence visible as those capabilities grow.
