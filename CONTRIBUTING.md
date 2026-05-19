# Contributing

Thank you for considering a contribution to `claude-code-for-social-scientists`. This document describes how to propose changes, the bilingual pairing rule that this repository enforces, and the AI disclosure expectations.

If you read Turkish, the Turkish version is in [`CONTRIBUTING.tr.md`](./CONTRIBUTING.tr.md).

## What kinds of contributions are welcome

- Corrections to factual errors, citations, or DOIs in any booklet.
- English translations of existing Turkish booklets, or Turkish translations of existing English booklets.
- New booklets proposed against the planned slots in [`CATALOG.md`](./CATALOG.md).
- Improvements to CI workflows, documentation tooling, and the disclosure schema.
- Localization of examples or regional academic infrastructure references for additional countries (for example, an explanation of how to integrate Greek HEAL-Link, Mexican CONACyT, or Indian Shodhganga).

The maintainer reviews contributions monthly and triages new booklet proposals into the catalog.

## Before you start

Open an issue. Describe your proposed contribution in two or three paragraphs. If you are proposing a new booklet, include the proposed `KKK-AA-SSSS` identifier (the next free serial in the appropriate category), a one-paragraph scope, and a draft outline.

This step costs you fifteen minutes and saves both you and the maintainer hours of misaligned work.

## Bilingual pairing rule

Every booklet directory contains `tr.md` and `en.md` side by side. A continuous-integration check enforces this on every commit to `main`.

If you are contributing in only one language, your pull request will still be reviewed and may be merged onto a feature branch. The maintainer will arrange for the other language version before the branch is merged into `main`. The repository will not accept partial bilingual coverage on `main`.

If you are a native Turkish speaker contributing the Turkish version, please write the Turkish version first and let the maintainer or another contributor handle the English version. The reverse also holds. Translation is not literal; it is a re-authoring against the same outline.

## AI disclosure expectations

Every contributor who uses AI assistance in drafting must populate the AI disclosure frontmatter for the booklet they touch. The schema is documented in [`AI-AUTHORSHIP.md`](./AI-AUTHORSHIP.md). The minimum required fields are.

- `ai_assisted: true` (if AI was used) or `false`.
- `ai_tools` (list of tools with model versions).
- `ai_contribution_level` (one of `editing-only`, `light-assistance`, `co-drafting`, `substantial-drafting`, `full-draft`).
- `human_review` (one of `complete`, `partial`, `pending`).
- `verified_citations_count` and `fabricated_citations_count`.

Pull requests that introduce a booklet with `human_review: pending` will not be merged into `main`. A CI workflow blocks this case.

## Citation discipline

Every DOI, every author name, every year, every page range, and every journal title in your contribution must be independently verified against an authoritative index (Crossref, PubMed, Semantic Scholar, ULAKBIM TR Dizin, or DergiPark) before you open the pull request.

If you use AI assistance to expand a citation, the AI's first response is a candidate, not a citation. Resolve every candidate against an index. The author and the maintainer treat citation fabrication as a release blocker.

## Pull request workflow

1. Fork the repository on GitHub.
2. Create a feature branch from `main` named after the booklet identifier or the area you are touching (for example `feat/008-02-0001-test-selection` or `fix/catalog-typo`).
3. Make your changes in atomic commits. Use the Conventional Commits prefix that fits (`feat:`, `fix:`, `docs:`, `chore:`, `ci:`, `refactor:`).
4. Run `npx markdownlint-cli2 "**/*.md"` locally to confirm the lint passes.
5. Open a pull request against `main`. Reference the issue you opened earlier.
6. Respond to maintainer review. Expect at least one round of feedback on substantive contributions.
7. Once approved and the bilingual pair is present, the maintainer merges with a squash or rebase, depending on the size of the change.

## Developer Certificate of Origin

By contributing, you certify that the contribution is your own, or that you have the right to submit it under the repository's licensing terms. The Developer Certificate of Origin (DCO) version 1.1 governs this certification. Pull requests are not required to be signed off with `Signed-off-by`, but the implicit DCO applies to every merged change.

## Conduct

All interactions are governed by the [`CODE_OF_CONDUCT.md`](./CODE_OF_CONDUCT.md). Read it. The maintainer enforces it.

## Recognition

Merged external contributors are listed in [`meta/contributors.md`](./meta/contributors.md) with the type of contribution annotated.

## Questions

If your question is not answered here, open a discussion (once GitHub Discussions is enabled at v1.5), or open an issue, or email the maintainer at `onuribram@outlook.com`.

---

**Last updated.** 2026-05-19.
