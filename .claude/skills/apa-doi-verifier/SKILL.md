---
name: apa-doi-verifier
description: Use when checking APA 7 references, DOI reality, Crossref or PubMed metadata, fabricated citation risk, or booklet 007 citation hygiene for social science manuscripts.
---

# APA DOI Verifier

## When to use

Use this skill when a bibliography, reference list, manuscript section, or AI-generated citation set needs APA 7 cleanup and DOI verification before it is trusted.

## Inputs

- Reference list or citations to check.
- Manuscript discipline.
- Journal style constraints, if stricter than APA 7.
- Whether live Crossref, PubMed, publisher, or library lookup is available.

## Workflow

1. Preserve the user's original reference list as the comparison baseline.
2. Split references into journal articles, books, chapters, reports, guidelines, preprints, theses, and web sources.
3. For journal articles, check title, authors, year, journal, volume, issue, pages, and DOI.
4. Use Crossref as the first DOI lane when browsing or a Crossref tool is available.
5. Use PubMed or publisher pages as a second lane for biomedical, clinical, psychology, and health sources.
6. Flag ambiguous or non-resolving references instead of repairing them by guesswork.
7. Convert valid entries into APA 7 style.
8. Classify fabricated citation risk as low, medium, high, or confirmed fabricated.

## Output

Return:

- Cleaned APA 7 reference list.
- Verification table with status per reference.
- DOI corrections.
- Items without DOI and why that may be acceptable.
- Fabricated citation risk classification.
- Open verification tasks.

## Verification

- Every DOI resolves or is explicitly marked unresolved.
- No DOI is invented from a title, author, or journal pattern.
- Author order is preserved unless a source confirms otherwise.
- Books and official reports are not forced into DOI format.
- Risk classification distinguishes missing DOI from nonexistent source.

## Safety

Do not use synthetic metadata as final truth. Do not claim Crossref, PubMed, Scopus, or Web of Science verification unless it was actually performed in the current session or the user supplied exported evidence.

## Example prompt

"Verify these 12 APA references for DOI correctness and classify fabricated citation risk."

Expected smoke output:

- A table with reference number, source type, DOI status, metadata status, and risk.
- Corrected APA 7 entries only for verified or user-confirmed sources.
- A short list of unresolved items for manual lookup.
