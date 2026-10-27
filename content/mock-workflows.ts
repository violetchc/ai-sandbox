/** Editorial examples, not claims of work performed. Edit these alongside scenario JSON. */
export const mockWorkflows:Record<string,Record<string,string>>={
 'consulting-case':{
  'Objective & clarification':'Practice case: a fictional campus café has flat revenue and lower profit. Before solving, ask about the time period, profit definition, product mix and capacity. Success is an explained recommendation, not guessing the interviewer’s answer.',
  'Hypothesis tree':'Profit = revenue − variable costs − fixed costs. Revenue = customers × purchases per customer × average order value. Segment weekday/weekend and drinks/food before choosing a branch. Avoid overlapping branches.',
  'Practice calculation':'Illustrative numbers only: 200 orders/day × $8 = $1,600 daily revenue. At $3 variable cost/order and $700 fixed cost/day, profit is $300. A 10% order decline reduces profit to $200 if price and unit cost stay constant. Check units and state these assumptions aloud.',
  'Feedback rubric':'Score the attempt on a clear objective, mutually exclusive branches, unit-correct arithmetic, and a recommendation linked to evidence. Do the math yourself before checking this worked example.',
  'Next attempt':'Give a 60-second synthesis: recommendation, two supporting facts, biggest risk, and the next analysis. Ask the interviewer for one objection and respond without restarting the whole case.'},
 'meeting-actions':{
  'Meeting record':'Separate decisions, action items and open questions. No transcript was supplied, so do not invent who attended or what anyone agreed to.',
  'Action register':'A1 | Confirm the decision being implemented | Owner: unconfirmed | Due: unconfirmed | Acceptance: the decision maker agrees the wording is accurate.\nA2 | Collect missing information | Owner: unconfirmed | Due: unconfirmed | Acceptance: each question has a source or is explicitly unresolved.',
  'Follow-up draft':'Subject: Confirming next steps\nThanks for the discussion. Here is my understanding of the next steps: [verified action], [confirmed owner], [agreed date]. The open question is [question]. Please correct anything I missed.\nRewrite this in your own voice; this app does not send it.',
  'Verification':'Check each action against the source notes. Ask owners to confirm commitments. Never infer consent to recording or distribute a transcript automatically.'},
 'internship-engine':{
  'Evidence-to-role map':'Create three columns: requirement from the posting; a real example from your experience; evidence gap. A requirement without a real example is a gap, not permission to invent experience.',
  'Resume bullet workshop':'Template: [Action you actually took] + [scope or method] + [verified result]. Example shape: “Organized [real activity] for [documented audience], using [method], resulting in [verified outcome].” Keep brackets until evidence is supplied.',
  'Cover-letter outline':'Opening: why this team’s work interests you. Middle: one specific example connecting your experience to its needs. Closing: what you hope to contribute and learn. Use your own reasons and language.',
  'Authorship check':'Read aloud. Remove claims you could not explain in an interview, replace generic enthusiasm with a true reason, and verify dates, titles and metrics. The final wording and submission stay yours.'},
 'market-research':{
  'Decision & scope':'Define the decision, audience, geography and time period before gathering facts. Compare a small set of alternatives on buyer, problem, workflow, distribution and limitations.',
  'Evidence ledger':'Claim | Primary source URL | Publication date | Exact supporting passage | Confidence | Verification owner. No live research is performed in mock mode; leave source rows unfilled until verified.',
  'Comparison framework':'Use consistent criteria and distinguish observed features from inferred strategy. Mark unknowns instead of filling them with plausible details. Search for disconfirming evidence as well as support.',
  'Brief outline':'Executive takeaway → decision context → evidence table → competitor comparison → uncertainties → recommendation → next validation step. Keep recommendations conditional on verified evidence.'},
 'data-cleanup':{
  'Data contract':'Record each column’s meaning, unit, allowed values and missing-value policy. Work on a copy. Without a dataset, this is a reproducible plan rather than an analysis result.',
  'Cleaning plan':'1. Count rows and save an untouched copy.\n2. Trim text whitespace without changing meaningful leading zeros.\n3. Normalize dates only after confirming locale.\n4. Flag duplicates using a business key.\n5. Separate missing values from zero.\n6. Log each transformation and affected row count.',
  'Analysis & checks':'Start with counts, ranges, category frequencies and one grouped comparison. Reconcile totals before and after cleaning. Inspect at least five changed rows manually. Check denominators before computing percentages.',
  'Explain the result':'State the question, method, verified result and limitation. Do not infer causality from a correlation. No numerical result is claimed until the actual data and checks are supplied.'},
 'creative-brief':{
  'Creative brief':'Define audience, communication objective, format, tone, accessibility needs, required assets and exclusions. Ask what success looks like before choosing a visual style.',
  'Three directions':'A: restrained editorial hierarchy with generous space.\nB: approachable documentary style with real evidence and captions.\nC: bold typographic composition centered on one message.\nThese are starting directions; use only assets with appropriate rights.',
  'Moodboard prompt':'Explore [direction] for [audience], communicating [message]. Show palette, type hierarchy and composition. Avoid imitation of a living artist or unlicensed brand assets. Produce variations for critique, not a final authored claim.',
  'Human critique loop':'Evaluate clarity at a glance, tone, accessibility, originality and fit to the brief. Choose a direction yourself, then refine spacing, drawing, typography and composition with your own craft.'},
 'policy-memo':{
  'Decision framing':'Identify the decision maker, affected people, decision deadline and practical constraints. A grant draft also needs eligibility, funder priorities, an evidence-backed need and a feasible budget.',
  'Evidence & options':'Separate verified facts, stakeholder perspectives and assumptions. Compare the status quo and two alternatives using effectiveness, equity, cost, feasibility and implementation burden. No legal conclusion or citation is fabricated.',
  'Memo outline':'To / From / Date / Decision requested → problem → evidence → options → recommendation → implementation → risks → sources. For a grant, translate this into need, activities, outcomes, measurement and budget narrative.',
  'Red-team questions':'Who bears the costs? What evidence would change the recommendation? Could the intervention disadvantage an overlooked group? Who owns implementation? Revise the argument after checking sources and consulting affected people.'}
};
