---
name: social-science-literature-triage
description: Use when starting a social science literature review, scoping databases, choosing language layers, checking DOI coverage, or turning booklet 002 and 007 methods into a search protocol.
---

# Social Science Literature Triage

## When to use

Use this skill before a literature review, scoping review, thesis chapter, grant background, or manuscript introduction when the user needs a defensible search plan rather than an immediate prose draft.

## Inputs

- Research question or topic.
- Discipline and population.
- Time window.
- Required languages.
- Preferred databases or regional indexes.
- Inclusion and exclusion criteria, if already known.

## Workflow

1. Restate the research aim in one precise sentence.
2. Classify the evidence need as exploratory, scoping, systematic, narrative, theoretical, or policy-facing.
3. Choose database lanes, such as PubMed, PsycINFO, Scopus, Web of Science, Crossref, Semantic Scholar, DergiPark, ULAKBIM TR Dizin, YOK Thesis Center, HEAL-Link, or institutional library routes.
4. Define language layers, at minimum English, Turkish, and any regional language requested by the user.
5. Build keyword blocks with synonyms, controlled vocabulary where available, and exclusion terms.
6. Specify DOI expectations, including which source types can reasonably lack a DOI.
7. Produce inclusion and exclusion criteria.
8. Identify early bias risks, missing regional sources, database over-reliance, and likely grey literature needs.

## Output

Return a compact protocol with these headings:

- Review aim.
- Evidence type.
- Database lanes.
- Search strings.
- Language strategy.
- DOI and metadata policy.
- Inclusion criteria.
- Exclusion criteria.
- Risk notes.
- Next action.

## Verification

- The protocol names at least two database lanes.
- Regional access is considered when the topic involves Türkiye, Greece, education, public health, clinical psychology, or local policy.
- DOI expectations distinguish journal articles from reports, books, theses, and official guidelines.
- Search strings are reproducible enough for another researcher to run.
- No fabricated source claims are introduced.

## Safety

Do not request passwords, private vault paths, university database credentials, VPN secrets, or raw clinical data. If full-text access requires a logged-in institution, stop at the lawful access workflow and ask the user to retrieve the file through their own authorized route.

## Example prompt

"Scope a Turkish and English literature review on AI-assisted clinical psychology supervision, 2020 to 2026, with DOI discipline and regional database coverage."

Expected smoke output:

- Evidence type, scoping review.
- Database lanes, PubMed, PsycINFO or Scopus, Crossref, DergiPark, TR Dizin, YOK Thesis Center.
- Language strategy, English plus Turkish.
- DOI policy, DOI required for journal articles when available, not required for laws, official guidance, theses, or books.
