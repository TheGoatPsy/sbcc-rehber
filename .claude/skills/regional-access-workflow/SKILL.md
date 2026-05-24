---
name: regional-access-workflow
description: Use when planning lawful academic access through DergiPark, ULAKBIM TR Dizin, HEAL-Link, YOK Thesis Center, institutional VPN, library routes, or regional source records.
---

# Regional Access Workflow

## When to use

Use this skill when a researcher needs a lawful and reproducible route to regional academic sources, especially Turkish, Greek, European, university, thesis, or institutional materials.

## Inputs

- Source target or research topic.
- Country, language, or institution scope.
- Known databases.
- Access constraints.
- Whether the user has authorized institutional access.

## Workflow

1. Classify the source need as journal article, thesis, report, guideline, book, dataset, or policy document.
2. Route the search to regional sources such as DergiPark, ULAKBIM TR Dizin, YOK Thesis Center, HEAL-Link, university repositories, or library discovery systems.
3. Route international metadata to Crossref, PubMed, Scopus, Web of Science, Semantic Scholar, or OpenAlex when available.
4. Record access status, metadata status, DOI status, and full-text status separately.
5. Keep login, VPN, and institutional identity steps on the user's side.
6. Produce a source passport entry for each located item.
7. Flag unresolved access problems and lawful next steps.

## Output

Return:

- Access route map.
- Search locations.
- Metadata fields to capture.
- DOI and identifier status.
- Full-text access status.
- Source passport template.
- Manual user actions.
- Blockers and alternatives.

## Verification

- The workflow never bypasses paywalls, licenses, or institutional access controls.
- DOI absence is not treated as evidence that a source is invalid.
- Regional databases are not replaced by global search alone.
- Full-text status is separated from metadata existence.
- User-side login actions are clearly marked.

## Safety

Do not request or store VPN credentials, library passwords, proxy URLs containing tokens, or institutional session cookies. Do not download full text through unauthorized routes.

## Example prompt

"Find a lawful access workflow for Turkish clinical psychology theses and DergiPark articles on digital addiction."

Expected smoke output:

- YOK Thesis Center, DergiPark, TR Dizin, Crossref, and library discovery lanes.
- A source passport template with access status and DOI status.
- Manual login steps left to the user.
