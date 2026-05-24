---
name: repo-release-integrity-check
description: Use before publishing a release to check README, CATALOG, CHANGELOG, CITATION.cff, Zenodo DOI, GitHub release notes, AI disclosure aggregate, booklet frontmatter, and project skills.
---

# Repo Release Integrity Check

## When to use

Use this skill before a tag, GitHub release, Zenodo archive, DOI announcement, or public repository update when metadata drift would damage citation trust.

## Inputs

- Target version.
- Release date.
- Changed booklet identifiers.
- Expected DOI state.
- GitHub release notes, if drafted.
- CI status or local validation output.

## Workflow

1. Confirm the target version and whether the change is patch, minor, or major.
2. Check README and README.tr status blocks.
3. Check CATALOG counts and status rows.
4. Check CHANGELOG release entry and Zenodo DOI notes.
5. Check CITATION.cff concept DOI, version DOI, date, and version fields.
6. Check AI disclosure aggregate against booklet frontmatter.
7. Check release booklet frontmatter for human review, citation counts, fabricated citations, disclosure standard, license, and status.
8. Check `.claude/skills` discovery if the release includes project skills.
9. Check issue templates, PR template, workflows, citation check, and secret scan status.
10. Produce release blockers and final go or no-go verdict.

## Output

Return:

- Version verdict.
- Metadata checklist.
- Booklet checklist.
- Skill checklist.
- DOI and citation checklist.
- CI and security checklist.
- Release blockers.
- Go or no-go decision.

## Verification

- Local validator or CI evidence is included.
- DOI claims are not marked verified unless checked against the release record.
- README, CATALOG, CHANGELOG, and AI disclosure aggregate agree.
- Release status is not assigned to unreviewed or citation-unsafe booklets.
- Branch protection and required checks are noted when they cannot be applied locally.

## Safety

Do not create tags, push releases, alter branch protection, or edit repository settings without explicit user intent and current permission evidence. Do not publish tokens or release credentials.

## Example prompt

"Run a pre-release integrity check for v1.1.0 after adding project skills."

Expected smoke output:

- A go or no-go verdict.
- A table covering README, catalog, changelog, citation, disclosure, skills, CI, and security.
- A blocker list with exact files to fix.
