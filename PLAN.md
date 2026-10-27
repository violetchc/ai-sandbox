# AI Sandbox build plan

1. Foundation: Next.js App Router, typed content, safe local persistence, validated server-only providers. Run type checks and logic tests.
2. Seed eight scenarios, 15+ tools, 11 departments, eight illustrative policies, and 25+ prompts. Validate content.
3. Build PRD capture, structured intake, drafting, section editing, versions and exports. Run the demo flow.
4. Build policy checks, department review, debate, risks, rebuttal practice and edits. Verify deterministic outputs.
5. Implement and test a resource-leveled dependency scheduler, capacity controls and infeasibility handling.
6. Aggregate editable checklist items and evidence-based readiness gates.
7. Add learning panels, reusable skill download, playground, proof log and interview exports.
8. Add task mapping, tool filters, career personalization and local content administration.
9. Polish responsive/accessibility states; run production build, unit tests and browser smoke flows; document setup and five-minute demo.

Each phase includes implementation and a verification checkpoint. No API key is needed for the default demo.

## Verification record

- Existing foundation and seed content were retained; completed providers and UI were checked with TypeScript.
- Phase 3–6 integrated verification: browser flow covers intake → draft → policy review → department review/rebuttal → schedule → infeasible what-if → readiness gate.
- Scheduler and content checkpoint: ten Vitest tests pass, including deterministic capacity, dependencies, blackout dates, infeasible plans, privacy, content references and provider fallback.
- Learning/discovery checkpoint: separate browser tests pass for redaction-before-generation and task mapping at 375px with storage unavailable.
- Desktop and mobile screenshots were inspected. No horizontal overflow in the tested mobile task flow.
- Production build and final export checks are the final checkpoint; details are recorded in the handoff after verification.

## Final result

Production build passed on 2026-10-27. All 10 Vitest tests and all 4 Playwright flows passed against the production app. The fourth flow verifies section editing, version comparison, SKILL.md download, Proof Log recording and persistence after reload. Paid-provider calls were not exercised. Standard npm installation was not executed because this environment provides Node and preinstalled dependencies without npm.
