---
name: rebuttal-traceability-matrix
description: Use when converting reviewer comments into a traceability matrix, accepted partial rejected categories, manuscript change mapping, and editor response drafts.
---

# Rebuttal Traceability Matrix

## When to use

Use this skill after peer review, revise and resubmit, editorial triage, grant review, or supervisor feedback when comments must be answered systematically.

## Inputs

- Reviewer comments.
- Editor letter, if available.
- Manuscript section map.
- Constraints, such as word limit, journal tone, or non-negotiable methodological boundaries.
- Revised manuscript excerpts, if already drafted.

## Workflow

1. Split comments into atomic claims.
2. Label each claim as accepted, partially accepted, rejected with rationale, clarification only, or outside scope.
3. Map each claim to manuscript sections, tables, figures, appendices, or cover letter only.
4. Identify comments that require new analysis, citation support, transparency language, or limitation framing.
5. Draft a traceability matrix.
6. Draft response text with a respectful, non-defensive tone.
7. Flag contradictions between reviewers and suggest editor-facing framing.

## Output

Return:

- Reviewer comment matrix.
- Decision category per comment.
- Manuscript change map.
- Required evidence or citation checks.
- Editor response summary.
- Reviewer-by-reviewer response draft.
- Residual risks.

## Verification

- Every reviewer comment is represented once.
- Partial acceptance states exactly what changed and what did not.
- Rejections are evidence-based and respectful.
- Manuscript locations are specific enough for a coauthor to verify.
- No unsupported claim is added to satisfy a reviewer.

## Safety

Do not invent manuscript changes. Do not claim analyses were run unless outputs are supplied or verified. Preserve reviewer anonymity and remove private editorial metadata before sharing externally.

## Example prompt

"Turn these Reviewer 1 and Reviewer 2 comments into a traceability matrix and draft a response letter outline."

Expected smoke output:

- A matrix with comment ID, reviewer, issue, decision, manuscript location, action, and response draft.
- A separate list of unresolved evidence needs.
