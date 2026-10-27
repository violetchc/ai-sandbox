# Implementation decisions

- This is a local Next.js application, with no hosted deployment, account system or backend database.
- Default mock mode uses deterministic templates; simulations teach review technique and do not represent actual stakeholder approval.
- Sensitive-looking text requires an explicit redact-or-cancel choice; the server independently rejects unredacted PII.
- Sample policies illustrate review patterns, not current legal requirements or legal advice.
- Tool sources point to official product documentation. `lastVerified` records the catalog review date; live feature availability must be verified by the user.
- Scheduling uses daily capacity buckets, explicit task dependencies, working weekdays, and a single accountable owner per task. All dependency tasks finish before the next task starts; blackout dates reduce capacity to zero.
- Uploaded PDF files require extracted text pasted into the policy box; binary PDF parsing is intentionally excluded from the offline MVP.
- Native browser dictation is optional; typed or pasted notes always work.
- Existing uncommitted foundation and content were retained and completed. User-requested local repository delivery takes precedence over hosted Sites publishing.
- Policy checks and department reviews in mock mode use transparent deterministic educational heuristics. Rebuttal scores evaluate response structure, not legal or domain correctness.
- Tool catalog descriptions were reviewed against official product pages on 2026-10-27; these are category-level descriptions, not pricing/version promises. Google Notebook and Zoom names can differ from the initial examples, so original use cases remain recognizable with current official-source links.
- PRD-generated requirements seed editable task estimates. The scheduler uses finish-to-start dependencies and per-owner daily capacity rather than an optimization solver; budget and vendor constraints remain explicit human-review inputs.
- Print output uses a dedicated full-text workflow record so collapsed sections and textareas do not silently truncate exported content.
- Each scenario has its own local workspace. Playground experiments do not overwrite a saved PRD.
- The environment supplies Node but not an npm executable. Verification uses the equivalent installed Next.js, TypeScript, Vitest and Playwright entrypoints directly; README commands target a standard Node/npm installation.
