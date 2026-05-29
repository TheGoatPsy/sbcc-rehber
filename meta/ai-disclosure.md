# AI Disclosure, Aggregate Tracking

This file provides an aggregate, machine-friendly view of AI contribution levels and human review states across every booklet with committed AI-assisted drafting (released or draft) in the repository. The authoritative per-file disclosure lives in each booklet's own YAML frontmatter, generated according to the policy in [`AI-AUTHORSHIP.md`](../AI-AUTHORSHIP.md).

This page is updated by the maintainer at each release. Readers who want the latest disclosure for a specific booklet should always check the booklet's own frontmatter, not this aggregate.

## Aggregate table (as of v2.1.0, 2026-05-29)

| Booklet ID | Language | Contribution level | Human review | Verified citations | Fabricated citations | Last reviewed |
|---|---|---|---|---|---|---|
| 001-01-0001 | tr | substantial-drafting | complete | 12 | 0 | 2026-05-19 |
| 001-01-0001 | en | substantial-drafting | complete | 12 | 0 | 2026-05-19 |
| 001-01-0002 | tr | substantial-drafting | complete | 10 | 0 | 2026-05-24 |
| 001-01-0002 | en | substantial-drafting | complete | 10 | 0 | 2026-05-24 |
| 001-01-0003 | tr | co-drafting | complete | 6 | 0 | 2026-05-24 |
| 001-01-0003 | en | co-drafting | complete | 6 | 0 | 2026-05-24 |
| 002-04-0001 | tr | co-drafting | complete | 10 | 0 | 2026-05-24 |
| 002-04-0001 | en | co-drafting | complete | 10 | 0 | 2026-05-24 |
| 003-01-0001 | tr | co-drafting | complete | 10 | 0 | 2026-05-24 |
| 003-01-0001 | en | co-drafting | complete | 10 | 0 | 2026-05-24 |
| 004-01-0001 | tr | substantial-drafting | complete | 8 | 0 | 2026-05-24 |
| 004-01-0001 | en | substantial-drafting | complete | 8 | 0 | 2026-05-24 |
| 007-02-0001 | tr | substantial-drafting | complete | 10 | 0 | 2026-05-24 |
| 007-02-0001 | en | substantial-drafting | complete | 10 | 0 | 2026-05-24 |
| 009-01-0001 | tr | co-drafting | complete | 12 | 0 | 2026-05-24 |
| 009-01-0001 | en | co-drafting | complete | 12 | 0 | 2026-05-24 |
| 010-01-0001 | tr | substantial-drafting | complete | 9 | 0 | 2026-05-24 |
| 010-01-0001 | en | substantial-drafting | complete | 9 | 0 | 2026-05-24 |
| 012-01-0001 | tr | co-drafting | complete | 7 | 0 | 2026-05-24 |
| 012-01-0001 | en | co-drafting | complete | 7 | 0 | 2026-05-24 |
| 001-01-0004 | tr | full-draft | complete | 8 | 0 | 2026-05-29 |
| 001-01-0004 | en | full-draft | complete | 8 | 0 | 2026-05-29 |
| 008-01-0001 | tr | substantial-drafting | pending | 9 | 0 | - |
| 008-01-0001 | en | substantial-drafting | pending | 9 | 0 | - |

Booklet 001-01-0004 was added in the v2.0.0 cycle as a full AI draft and then human-reviewed by the author, so its human review state is `complete` and it ships at `release` status in v2.0.0. Booklet 008-01-0001 was drafted bilingually in the v2.1.0 cycle at `substantial-drafting` level and awaits the author's human review, so its review state is `pending` and it sits at `paired` status, citation-audited but not yet in a public release. Nineteen booklets in [`CATALOG.md`](../CATALOG.md) remain at `planned` status and have no AI disclosure yet because no booklet-level AI-assisted drafting work has been committed for them.

## Citation discipline summary

| Metric | Value |
|---|---|
| Booklets at `release` status | 11 |
| Booklets at `paired` status | 1 |
| Booklets at `draft` status | 0 |
| Booklets at `planned` status | 19 |
| Total verified citation declarations across all disclosed language files | 222 |
| Unique bilingual citation sets across released booklets | 102 |
| Total fabricated citations across all disclosed language files | 0 |
| Fabrication rate, fabricated divided by verified plus fabricated | 0% |

## Contribution level distribution

| Level | Count |
|---|---|
| 1, editing-only | 0 |
| 2, light-assistance | 0 |
| 3, co-drafting | 10 |
| 4, substantial-drafting | 12 |
| 5, full-draft | 2 |

## Human review state distribution

| State | Count |
|---|---|
| complete | 22 |
| partial | 0 |
| pending | 2 |

The CI workflow refuses release booklet frontmatter that declares pending human review, fabricated citations, missing citation counts, stale placeholder DOI examples, broken bilingual pairs, or inconsistent catalog counts. See [`.github/workflows/ci.yml`](../.github/workflows/ci.yml) and [`scripts/validate-repo.mjs`](../scripts/validate-repo.mjs).

## Update history

| Date | Trigger | Change |
|---|---|---|
| 2026-05-19 | v0.1.0-alpha scaffold | Initial aggregate created for 001-01-0001. |
| 2026-05-19 | v0.2.0 remediation | Disclosure schema aligned to `title_en`, `title_tr`, `model_alias`, and `model_dated`. |
| 2026-05-24 | v1.0.0 release | Aggregate expanded to all ten released bilingual booklets. Statuses, citation counts, human review state, and fabricated citation counts aligned to frontmatter. |
| 2026-05-24 | v1.1.0 release | Companion project skills and the `social-cc-plugin` distribution added. Booklet disclosure content unchanged; the aggregate is re-affirmed for the v1.1.0 tag. |
| 2026-05-24 | v1.1.1 release | Metadata hygiene patch. Booklet disclosure content unchanged; the aggregate is re-affirmed for the v1.1.1 tag. |
| 2026-05-29 | v2.0.0 release | Booklet 001-01-0004 (CLAUDE.md and standing-instruction discipline) added at full-draft level, human-reviewed by the author, and promoted to `release` status. The aggregate now covers disclosed booklets at all statuses, and the verified and fabricated citation labels were generalized from released to all disclosed language files. |
| 2026-05-29 | v2.1.0 cycle | Booklet 008-01-0001 (Reproducible Quantitative Workflows) drafted bilingually at `substantial-drafting` level and added at `paired` status with `pending` human review. Nine verified citations per language file, motivated by the Anthropic 2026 coding-agents survey. Aggregate verified declarations rise from 204 to 222. |

---

**Authoritative source.** Each booklet's own frontmatter, not this aggregate.

**Policy.** [`AI-AUTHORSHIP.md`](../AI-AUTHORSHIP.md).
