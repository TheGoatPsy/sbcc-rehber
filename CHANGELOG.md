# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Citations of this work should use the Zenodo concept DOI [10.5281/zenodo.20289687](https://doi.org/10.5281/zenodo.20289687), which always resolves to the latest version. Version-specific DOIs are listed below.

## [Unreleased]

### Added

- Booklet template files (`template/booklet-template.{tr,en}.md`) with full frontmatter schema and APA 7 inline citation examples.
- `CHANGELOG.md` (this file) following Keep a Changelog 1.1.0.
- `SECURITY.md` with responsible disclosure path and vault sanitization principles.

### Changed

- Frontmatter title schema migrated from `title` plus `title_tr` to `title_en` plus `title_tr`. Both fields are now required by CI. Rationale: the previous schema put an English title in files declared `language: tr`, which was internally inconsistent.
- `ai_tools` entries now carry `model_alias` and `model_dated` fields. The `model` field is deprecated. Rationale: model aliases drift over time; dated identifiers preserve reproducibility.
- Pandoc citeproc keys (`[@author2024]`) in booklet 001-01-0001 converted to inline APA 7 citations so that GitHub renders them as readable text without a build step.

## [0.1.0-alpha] - 2026-05-19

### Added

- Initial public scaffold of the guide repository.
- Booklet 001-01-0001 paired (Turkish and English drafts, 12 verified citations, 0 fabricated). Now at 10 citations after peer review remediation.
- Two placeholder booklets (001-01-0002, 001-01-0003) so that CI bilingual coverage and AI disclosure audits exercise non-draft entries.
- 30-booklet catalog across 12 categories targeting the v1.0 launch.
- AI authorship policy aligned with the COPE plus WAME plus ICMJE plus STM 2025 plus EU AI Act 2024/1689 Article 50 plus ENAI consensus.
- Dual license model: Apache 2.0 for code blocks, CC-BY-NC-SA 4.0 for prose.
- Three CI workflows: Markdown lint (markdownlint-cli2), Citation Check (cff-validator SHA-pinned), Secret Scan.
- Bilingual coverage CI gate and AI disclosure frontmatter audit.
- Banner SVG at `assets/banner.svg` embedded in both READMEs.
- Repository renamed from `sbcc-rehber` to `claude-code-for-social-scientists`.

### Zenodo

- Concept DOI: [10.5281/zenodo.20289687](https://doi.org/10.5281/zenodo.20289687) (always points to the latest version).
- Version DOI for v0.1.0-alpha: [10.5281/zenodo.20289688](https://doi.org/10.5281/zenodo.20289688).

## Notes on versioning

The `KKK-AA-SSSS` booklet identifier is immutable. A booklet's content version is tracked in its own `version` frontmatter field. A repository tag (`v0.x.y` or `v1.0.0` and later) bundles a set of booklet versions and corresponds to a Zenodo release.
