# AI Disclosure — Aggregate Tracking

This file provides an aggregate, machine-friendly view of AI contribution levels and human review states across every booklet in the repository. The authoritative per-file disclosure lives in each booklet's own YAML frontmatter, generated according to the policy in [`AI-AUTHORSHIP.md`](../AI-AUTHORSHIP.md).

This page is updated by the maintainer at each release. Readers who want the latest disclosure for a specific booklet should always check the booklet's own frontmatter, not this aggregate.

## Aggregate table (as of v0.1.0-alpha, 2026-05-19)

| Booklet ID | Language | Contribution level | Human review | Verified citations | Fabricated citations | Last reviewed |
|---|---|---|---|---|---|---|
| 001-01-0001 | tr | substantial-drafting | complete | 12 | 0 | 2026-05-19 |
| 001-01-0001 | en | substantial-drafting | complete | 12 | 0 | 2026-05-19 |
| 001-01-0002 | tr | n/a (placeholder) | n/a | 0 | 0 | n/a |
| 001-01-0002 | en | n/a (placeholder) | n/a | 0 | 0 | n/a |
| 001-01-0003 | tr | n/a (placeholder) | n/a | 0 | 0 | n/a |
| 001-01-0003 | en | n/a (placeholder) | n/a | 0 | 0 | n/a |

Twenty-seven booklets in [`CATALOG.md`](../CATALOG.md) are at `planned` status and have no AI disclosure yet because no AI work has been performed on them. Two further booklets (`001-01-0002`, `001-01-0003`) are present in the repository as placeholder files so that CI exercises the full bilingual pairing constraint, and they are also counted under the `planned` status row in the catalog summary table.

## Citation discipline summary

| Metric | Value |
|---|---|
| Booklets at `paired` status | 1 (001-01-0001 tr + en both drafted) |
| Booklets at `release` status | 0 |
| Booklets at `draft` status | 0 |
| Total verified citations across drafted booklets | 24 (12 unique, citations shared between tr and en) |
| Total fabricated citations across drafted booklets | 0 |
| Fabrication rate (fabricated / total) | 0% |

## Contribution level distribution (drafted booklets only)

| Level | Count |
|---|---|
| 1, editing-only | 0 |
| 2, light-assistance | 0 |
| 3, co-drafting | 0 |
| 4, substantial-drafting | 2 (001-01-0001 tr + en) |
| 5, full-draft | 0 |

## Human review state distribution (drafted booklets only)

| State | Count |
|---|---|
| complete | 2 (001-01-0001 tr + en) |
| partial | 0 |
| pending | 0 |

The CI workflow refuses any commit to `main` that introduces a booklet with `human_review: pending` in its frontmatter. See [`.github/workflows/ci.yml`](../.github/workflows/ci.yml).

## Update history

| Date | Trigger | Change |
|---|---|---|
| 2026-05-19 | v0.1.0-alpha scaffold | Initial table. Booklet 001-01-0001 Turkish draft entered as `substantial-drafting, complete`. |
| 2026-05-19 | EN draft commit f3c2a2c | Booklet 001-01-0001 English draft entered as `substantial-drafting, complete`. Pair status reached. |

---

**Authoritative source.** Each booklet's own frontmatter, not this aggregate.
**Policy.** [`AI-AUTHORSHIP.md`](../AI-AUTHORSHIP.md).
