# Roadmap

The public phase plan for `claude-code-for-social-scientists`. Dates are targets, not commitments. The author is a working clinical psychologist and PhD candidate, and academic work takes precedence over the repository when the two conflict.

## Current baseline

The current public release is `v2.2.0`, released on 2026-05-29. It builds on the ten v1.0 core booklets in Turkish and English, all at `release` status, all human-reviewed, and all carrying complete AI-disclosure frontmatter, plus ten companion Claude Code project skills and a distribution surface (the `social-cc-plugin` pip package and a native Claude Code plugin manifest). v2.0.0 adds an audit-driven correctness and CI hardening pass, version-independent release tooling, a first expansion booklet promoted to `release` status after human review (001-01-0004), a companion MkDocs website, and a Journal of Open Source Education paper. The v2.1.0 release then added booklet 008-01-0001 (Reproducible Quantitative Workflows) and v2.2.0 added booklet 008-02-0001 (Statistical Test Selection with AI Consultation Discipline), both at `release` status after human review, building out the data analysis category prioritized by the Anthropic 2026 coding-agents survey. The repository is a booklet plus project-skill methodology package.

## v0.1.0-alpha, scaffold

**Status.** Complete. Tagged on 2026-05-19.

**Scope.**

- Repository skeleton with the twelve-category booklet directory tree.
- Dual-license header, Apache 2.0 for code and CC-BY-NC-SA 4.0 for content.
- `CITATION.cff`, `AI-AUTHORSHIP.md`, `CATALOG.md`, and initial CI workflows.
- First booklet path and bilingual coverage scaffolding.
- Initial Zenodo, Software Heritage, copyright, and public repository setup tracked in the release history.

## v0.2.0, remediation release

**Status.** Complete. Released on 2026-05-19.

**Scope.**

- Zenodo concept DOI and version DOI replaced earlier placeholders.
- Disclosure schema corrected to `title_en`, `title_tr`, `model_alias`, and `model_dated`.
- CI frontmatter extraction and disclosure checks hardened.
- v1.0 scope reduced from thirty booklets to ten mature core booklets.
- READMEs, catalog, roadmap, citation metadata, and banner claims cleaned after senior review.

## v1.0.0, first major release

**Status.** Complete. Released on 2026-05-24.

**Scope.** Ten core booklets at `release` status, selected to form a coherent manifesto across the foundational and highest-differentiation categories.

| Identifier | Category | Title (EN) |
|---|---|---|
| 001-01-0001 | Foundations | What is Claude Code? A Social Scientist's Perspective |
| 001-01-0002 | Foundations | The Agentic Shift, From Chat Window to Working Partner |
| 001-01-0003 | Foundations | Installation, First Session, and Sanity Checks |
| 002-04-0001 | Academic Access | DergiPark, ULAKBIM TR Dizin, HEAL-Link, and Regional Indexing |
| 003-01-0001 | Memory System | Memory as Vault, A First-Principles Introduction |
| 004-01-0001 | Vault Architecture | Folder Discipline and the Maps of Content (MOC) Pattern |
| 007-02-0001 | Academic Writing | APA 7 with DOI Discipline |
| 009-01-0001 | Ethics and IRB | Ethics in AI-Assisted Research, From Principle to Behavior |
| 010-01-0001 | Peer Review | Rebuttal Letters with Traceability Matrices |
| 012-01-0001 | Troubleshooting | When Things Go Wrong, A Working Troubleshooting Protocol |

**Release criteria met.**

- All ten booklets have both `tr.md` and `en.md`.
- All twenty language files have `human_review: "complete"`.
- All twenty language files have `fabricated_citations_count: 0`.
- The aggregate release count is 10 release, 0 paired, 0 draft, 20 planned.
- Version DOI for v1.0.0 is recorded in `CHANGELOG.md` and `CITATION.cff`.

## v1.1.x, companion project skills and distribution metadata

**Status.** Complete. Released on 2026-05-24.

**Scope.** Ten `.claude/skills/<skill-name>/SKILL.md` project skills that turn the v1.0 booklets into executable Claude Code workflows, plus two distribution paths: the `social-cc-plugin` pip package (GitHub Actions OpenID Connect trusted publishing) and a native Claude Code plugin manifest at `.claude-plugin/plugin.json`. The v1.1.1 patch removes direct maintainer email metadata from the public package and documents the post-release Zenodo version DOI flow.

**Skill set.**

- `social-science-literature-triage`
- `apa-doi-verifier`
- `bilingual-booklet-pairing`
- `ai-disclosure-auditor`
- `ethics-irb-ai-protocol`
- `rebuttal-traceability-matrix`
- `memory-vault-architect`
- `regional-access-workflow`
- `agentic-session-debugger`
- `repo-release-integrity-check`

**Release criteria met.**

- Every skill has a `SKILL.md` file with `name` and `description` frontmatter.
- Every skill states when to use it, expected inputs, workflow, output format, verification checks, and safety boundaries.
- The catalog and READMEs cross-reference the skill matrix.
- CI validates skill discovery and booklet metadata consistency.

## v1.5.0, community discussions opened

**Target.** 2026-10.

**Scope.**

- GitHub Discussions enabled with moderation guidelines.
- Approximately ten additional booklets drafted, drawn from categories 008, 002, 005, and 006. The data analysis category (008) is prioritized following the Anthropic 2026 coding-agents survey, which finds that quantitative data analysis is the dominant social-science use of coding agents. Booklets 008-01-0001 (Reproducible Quantitative Workflows) and 008-02-0001 (Statistical Test Selection with AI Consultation Discipline) shipped at `release` status in v2.1.0 and v2.2.0 respectively, the first two of the data analysis category.
- First external contributors merged.
- Turkish and English translation review iterations integrated.

## v3.0.0, full thirty-booklet catalog and living lab

> **Note.** The v2.0.0 tag was used for the 2026-05-29 audit, hardening, and ecosystem release described under the current baseline. The full thirty-booklet catalog and living lab milestone, originally planned as v2.0.0, is now targeted for v3.0.0.

**Target.** 2027-04.

**Scope.**

- All thirty booklets in the catalog at `paired` or `release` status.
- Citations from external academic work logged in `meta/external-citations.md`.
- Instructional use cases documented with consent in `meta/instructional-use.md`.
- The repository transitions from a single-author guide to a moderated community resource.

## Sustainability

The author's completed commitment is the v1.0 milestone. Phases beyond v1.0 depend on community engagement, academic obligations, and continued funding for the time investment. The dual-license model keeps the work permanently citable and adaptable for non-commercial purposes regardless of the author's continued engagement.

If the author becomes unable to maintain the repository, the GitHub repository, Zenodo deposit, and Software Heritage Archive entry will remain accessible. The U.S. Copyright Office registration provides the evidentiary basis for the author's heirs or designated maintainer to enforce the license terms if needed.

---

**Last updated.** 2026-05-29.
