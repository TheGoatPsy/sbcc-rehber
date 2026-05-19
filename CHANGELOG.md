# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Citations of this work should use the Zenodo concept DOI [10.5281/zenodo.20289687](https://doi.org/10.5281/zenodo.20289687), which always resolves to the latest version. Version-specific DOIs are listed below.

## [Unreleased]

The work since the v0.1.0-alpha tag (commit `4999222`) is grouped below into four phases, each corresponding to a discrete review or remediation cycle. The phase labels also match the vault diary entries for 2026-05-19.

### Phase 0 — Post-tag setup (commits `1272b0d` to `04ceaa3`)

- Zenodo deposit completed. Concept DOI `10.5281/zenodo.20289687` and version DOI `10.5281/zenodo.20289688` minted. Placeholders in `CITATION.cff` replaced with the real DOIs.
- Repository renamed from `sbcc-rehber` to `claude-code-for-social-scientists`. All internal references and the banner SVG updated. The old URL still redirects to the new one through GitHub's automatic mechanism, so Zenodo metadata was not affected.
- markdownlint configuration relaxed (MD033 inline-html allowlist for `p`, `img`, `div`, `a`) so the banner embedding in the README does not fail the lint.

### Phase 1 — Senior peer review remediation, faz 1 (commit `104558f`)

- `disclosure_standard` migrated from the non-existent NISO RP-2025-draft to the consolidating consensus across COPE 2023, WAME 2023, ICMJE 2024, STM 2025, the EU AI Act 2024/1689 Article 50, and ENAI.
- Booklet 001-01-0001 reference list cleaned. Three uncited entries (Bail 2024, Birhane 2022, Sallam 2023) removed to restore APA 7 reference-list discipline. `verified_citations_count` in both `tr.md` and `en.md` frontmatters reduced from 12 to 10 to reflect the corrected count.
- Booklet 001-01-0001 frontmatter `status` changed from `draft` to `paired` to match `CATALOG.md`.
- `AI-AUTHORSHIP.md` Section 3 booklet path schema corrected from `KKK-CC/KKK-CC-SSSS` to the actual `KKK-slug/KKK-AA-SSSS`.
- `meta/ai-disclosure.md` aggregate updated to reflect the corrected 27 planned booklets count (was 24).
- `meta/roadmap.md` mixed-language passages normalized (Turkish words "Hafta" and "Ay" replaced with English equivalents in the English-language file).
- CI hardened. `dieghernan/cff-validator` pinned to SHA `7b3c5e27c65c08af9f0c4a9c5e424aa281834e25`. AI disclosure frontmatter audit expanded from 5 required fields to 10 fields. Frontmatter extraction in CI switched from `head -n 60` to an awk-based YAML block parser.

### Phase 2 — Senior peer review remediation, faz 2 (commit `d6f4ded`)

- Pandoc citeproc keys (`[@author2024]`) in booklet 001-01-0001 converted to inline APA 7 citations so that GitHub renders them as readable text without a build step.
- Frontmatter title schema migrated from `title` plus `title_tr` to `title_en` plus `title_tr`. Both fields are now required by CI. Rationale: the previous schema put an English title in files declared `language: tr`, which was internally inconsistent.
- `ai_tools` entries now carry `model_alias` and `model_dated` fields. The `model` field is deprecated. Rationale: model aliases drift over time; dated identifiers preserve reproducibility.
- Booklet template files added (`template/booklet-template.{tr,en}.md`) with the full frontmatter schema and APA 7 inline citation examples.
- `CHANGELOG.md` (this file) added, following Keep a Changelog 1.1.0.
- `SECURITY.md` added, with responsible disclosure path and vault sanitization principles (SAFE, SANITIZE, BLOCKED, SKIP).

### Phase 3 — Strategic remediation (commit `4251aeb`)

- v1.0 announcement scope reduced from thirty booklets to ten core booklets. The ten v1.0 booklets are marked `[v1.0]` in `CATALOG.md`. The remaining twenty booklets move to the v1.5 and v2.0 backlog. Rationale: quality over breadth for the v1.0 manifesto.
- `meta/roadmap.md` revised end to end (Phase 1 to Phase 3, v1.0, v1.5, v2.0 sections) to reflect the smaller per-month booklet count.
- `README.md` and `README.tr.md` audience descriptions narrowed. The previous text named seven geographies (Türkiye, Greece, Mediterranean, Middle East, Latin America, South and Southeast Asia, Sub-Saharan Africa) which overpromised against the v1.0 scope. Replaced with the bilingual focus statement (every booklet delivered in Turkish and English in full parallel).
- `## Acknowledgements` section removed from both READMEs. The section had named two competitor repositories (Galaxy-Dawn/claude-scholar and Imbad0202/academic-research-skills) as influences. They are competitors, not influences. The guide's structural and methodological choices are original.
- Two citations added to booklet 001-01-0001. Engel (1977) for the biopsychosocial frame in the agent-system analogy in section 2, and Frankfurt (2005) for the philosophical scaffolding behind the bullshit-production reading in section 4. `verified_citations_count` raised from 10 to 12 in both `tr.md` and `en.md`, with corresponding update in `meta/ai-disclosure.md`.

### Phase 4 — Banner and date claim polish (commits `91d9a30`, `fde7ebb`)

- Banner SVG footer line trimmed. The `ECPP Dublin July 2026` segment removed from the footer. The same change applied to ARIA alt text in `README.md` and `README.tr.md`.
- All `ECPP Dublin / July 2026 / Temmuz 2026` date references removed from `README.md` status block, `README.tr.md` durum block, `CATALOG.md` intro, `meta/roadmap.md` v1.0 section, and `CHANGELOG.md`. v1.0 release timing is now set when the ten v1.0 booklets are reviewed and tagged, not by a calendar promise.

## [0.1.0-alpha] - 2026-05-19

### Added

- Initial public scaffold of the guide repository.
- Booklet 001-01-0001 paired (Turkish and English drafts). The first inline citation count was 10 at tag time. Frontmatter `verified_citations_count` initially recorded 12 due to an off-by-three counting error against an over-populated reference list. Phase 1 normalized both numbers to 10. Phase 3 added Engel (1977) and Frankfurt (2005), raising both numbers to 12. See the `[Unreleased]` block above for the trajectory.
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
