# AI Authorship and Disclosure Policy

This document explains how this repository handles AI co-authorship, what disclosure each booklet carries, and how readers can verify the human review status of any given file. The relevant consolidating bodies for AI use disclosure in scholarly publishing are COPE (Authorship and AI Tools Position Statement, February 2023), WAME (Recommendations on Chatbots and Generative AI in Scholarly Publications, May 2023), ICMJE (Recommendations on AI-Assisted Technology, January 2024), and STM (Classification of AI Use in Manuscript Preparation, September 2025). This document additionally honors the transparency obligations of the EU AI Act 2024/1689 Article 50 on AI-generated content, and the European Network for Academic Integrity (ENAI) Recommendations on the Ethical Use of AI in Education and Research. The National Information Standards Organization (NISO) is consolidating these into a community standard expected after 2025; the working group activity is documented at `niso.org`. This document will be updated to cite the NISO recommended practice once it is published with a final RP number.

It also goes one step beyond the minimum. Each booklet is timestamped, model-versioned, and assigned a contribution level that distinguishes between assistance and substantive content generation. Readers can audit AI involvement booklet by booklet.

## 1. Why disclosure

Three pressures motivate explicit AI disclosure in this guide.

First, **trust**. A guide that teaches social scientists how to use AI in academic work must itself demonstrate transparent use. Hiding the AI contribution would be incoherent.

Second, **publishing norms**. Major journal publishers (Elsevier, Springer Nature, Taylor & Francis, Wiley, Sage, JAMA Network, BMJ, PNAS, Nature) have adopted policies in 2023 to 2025 requiring authors to disclose AI use in the methods, acknowledgements, or a dedicated declaration. This repository follows the consolidating consensus across COPE, WAME, ICMJE, STM (2025), ENAI, and the EU AI Act 2024/1689, not the lowest bar.

Third, **regulation**. The EU AI Act 2024/1689 entered force in stages from 2024 onward. While a personal academic open-source repository is not a regulated product, the Act's transparency obligations on AI-generated content are part of a broader expectation that AI involvement be machine-readable and human-readable.

## 2. Scope of disclosure

The disclosure applies to any AI assistance that exceeds **simple spelling correction or grammar suggestion**. The line is drawn at the level of meaningful linguistic, structural, or analytical contribution.

The following uses **must** be disclosed:

- Drafting prose
- Reorganizing sections at the paragraph level or higher
- Generating examples, case studies, or analogies
- Summarizing or paraphrasing source material
- Generating tables, lists, or structured comparisons
- Translation between Turkish and English (each direction)
- Citation expansion or DOI lookup assistance (the citation itself must still be verified)
- Outline generation for a section
- Suggesting alternative phrasings adopted into the final text
- Generating code blocks or configuration files

The following uses **do not** require disclosure on a per-booklet basis (they are covered by the global statement):

- Spelling and grammar correction without semantic change
- Markdown linting suggestions
- Bibliographic format conversion (Vancouver to APA, etc.) without selecting new references

## 3. Per-booklet frontmatter schema

Every booklet (`booklets/KKK-slug/KKK-AA-SSSS/{tr,en}.md`, where `KKK` is the three-digit category code, `slug` is the human-readable category name, and `AA-SSSS` is the subcategory-and-serial pair) carries a YAML frontmatter block at the top of the file with at least the following fields.

```yaml
---
title_en: "..."
title_tr: "..."
booklet_id: "001-01-0001"
category: "001-foundations"
language: "tr"
version: "0.1.0"
date_published: "2026-05-19"
date_last_revised: "2026-05-19"
authors:
  - name: "Onour Impram"
    orcid: "0000-0003-1076-3928"
    role: "author, principal reviewer"
ai_assisted: true
ai_tools:
  - name: "Claude Code"
    vendor: "Anthropic"
    model_alias: "claude-opus-4-7"
    model_dated: null  # set to the dated identifier (e.g., "claude-opus-4-7-20260403") when Anthropic publishes one; null until then
    role: "drafting, verification, citation lookup"
    interaction_mode: "interactive console + agent SDK"
ai_contribution_level: "substantial-drafting"
human_review: "complete"
human_review_date: "2026-05-19"
verified_citations_count: 12
fabricated_citations_count: 0
disclosure_standard: "COPE 2023 + WAME 2023 + ICMJE 2024 + STM 2025 + EU AI Act 2024/1689 Art. 50 + ENAI"
license:
  - "Apache-2.0 (code blocks)"
  - "CC-BY-NC-SA-4.0 (prose)"
---
```

All fields are mandatory. The contribution level is one of five values defined in section 4. The human review status is one of three values defined in section 5.

**Title fields.** Every booklet carries `title_en` and `title_tr` so that the title is unambiguous regardless of which file (`tr.md` or `en.md`) the reader opens. The `language` field declares which version is primary in that file. Tooling that renders a single language picks the corresponding title without inspecting the file's prose.

**Model identifier fields.** Model identifiers can drift over time when only an alias is recorded (an alias like `claude-opus-4-7` may point to a different checkpoint a year later). For reproducibility, every `ai_tools` entry carries both `model_alias` (human-friendly current identifier) and `model_dated` (the immutable dated identifier such as `claude-opus-4-7-20260403`). When Anthropic has not yet published a dated identifier for the alias used, `model_dated` is set to `null` and a comment notes the cutoff date.

## 4. Contribution levels

The five-level scale below distinguishes assistance from substantive generation. A booklet's frontmatter `ai_contribution_level` is set to one of these values.

| Level | Label | What it means |
|---|---|---|
| 1 | `editing-only` | AI suggested spelling, grammar, and minor stylistic improvements. Author wrote the entire substantive text. |
| 2 | `light-assistance` | AI helped with reorganization, outline refinement, single-paragraph suggestions accepted partially. Substantive content authored by human. |
| 3 | `co-drafting` | AI drafted some sections (typically introductions, examples, transitions), human authored the analytical and clinical content, human revised all AI sections. |
| 4 | `substantial-drafting` | AI drafted most of the prose from a human-authored outline, human revised heavily, all citations verified by human. |
| 5 | `full-draft` | AI generated a full draft against a tight specification, human reviewed and accepted with revisions. Used rarely and only for boilerplate sections (formal license text restatements, standardized appendices). |

Booklet 001-01-0001 is at level 4. Most booklets in this repository will be at levels 3 or 4. Levels 1 and 2 apply to revisions of human-authored prose. Level 5 is reserved for non-original explanatory content.

## 5. Human review states

The `human_review` field takes one of three values.

| State | What it means |
|---|---|
| `complete` | The human author has read the full text, verified all claims, verified all citations, and approved publication. Default state for tagged releases. |
| `partial` | The human author has reviewed structure and citations but not the full prose. Used only on pre-release branches or draft commits. |
| `pending` | The text was generated and committed for visibility but has not yet been reviewed by the human author. Permitted only in development branches, never on `main`. |

The CI workflow refuses any booklet on `main` with `human_review` set to `pending`.

## 6. Citation verification

This repository operates under a **citation fabrication ban**. Every DOI, every author name, every journal title, every year, and every page range in the references list of every booklet is independently verified against Crossref, PubMed, Semantic Scholar, ULAKBIM TR Dizin, or DergiPark before commit.

When AI assistance is used to expand a citation (for example, when the author remembers an author and year but needs the DOI), the AI's first response is treated as a candidate. The candidate is resolved against an authoritative index. Only after independent resolution does the citation enter the booklet.

The `verified_citations_count` and `fabricated_citations_count` frontmatter fields make this verifiable. A non-zero `fabricated_citations_count` on a tagged release is a release blocker.

## 7. Translation between Turkish and English

Each booklet exists in Turkish and English. The Turkish version is written first by Onour Impram (native speaker, working academic). The English version is produced from the Turkish outline, not by literal translation. AI assists in the English drafting, the author reviews. Linguistic and cultural domestication of examples (Turkish dergi names, Greek institutional realities, regional academic terminology) is preserved across both versions where appropriate, and adapted where a literal carryover would be confusing for the other audience.

When a booklet's English version diverges from the Turkish version in a way that affects an argument or a citation, the divergence is recorded in a `translation_notes` field in the frontmatter.

## 8. Reader audit pathway

A reader who wants to audit AI involvement can do the following.

1. Open the booklet file.
2. Read the frontmatter (the YAML block at the top).
3. Find the `ai_contribution_level` and `human_review` fields.
4. Cross-reference the contribution level with section 4 of this file.
5. For citation discipline, check `verified_citations_count` and `fabricated_citations_count`.
6. For machine-readable aggregate disclosure across all booklets, see [`meta/ai-disclosure.md`](./meta/ai-disclosure.md).

## 9. Update history

| Date | Version | Change |
|---|---|---|
| 2026-05-19 | 0.1.0 | Initial policy. COPE 2023, WAME 2023, ICMJE 2024, STM 2025, EU AI Act 2024/1689 Art. 50, ENAI consensus alignment. |

## 10. References

- STM. Classification of AI Use in Manuscript Preparation. Working Paper, September 2025. International Association of Scientific, Technical and Medical Publishers.
- International Committee of Medical Journal Editors (ICMJE). Recommendations for the Conduct, Reporting, Editing, and Publication of Scholarly Work in Medical Journals, updated January 2024 (AI-assisted technology guidance).
- European Parliament. Regulation (EU) 2024/1689 (Artificial Intelligence Act). Official Journal of the European Union, 12 July 2024.
- European Network for Academic Integrity (ENAI). Recommendations on the ethical use of AI and machine learning in academia (multiple versions, 2023 to 2025).
- Committee on Publication Ethics (COPE). Authorship and AI tools position statement (February 2023).
- World Association of Medical Editors (WAME). Recommendations on chatbots and generative AI in scholarly publications (2023 update).
