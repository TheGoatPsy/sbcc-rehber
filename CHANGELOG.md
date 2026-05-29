# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Citations of this work should use the Zenodo concept DOI [10.5281/zenodo.20289687](https://doi.org/10.5281/zenodo.20289687), which always resolves to the latest version. Version-specific DOIs are listed below.

## [2.1.0] - 2026-05-29

Minor release. The first Data Analysis booklet, added after human review, motivated by survey evidence on how social scientists actually use coding agents.

### Added

- Booklet 008-01-0001, "Reproducible Quantitative Workflows," a bilingual Data Analysis booklet at `release` status, human-reviewed by the author. Nine independently verified citations, zero fabricated, full Turkish and English parity. It treats the discipline of keeping an autonomous analysis agent reproducible and honest, a response to the selective-reporting and quality-erosion concerns recorded in Anthropic's 2026 survey of coding agents in the social sciences. The released catalog grows from eleven to twelve booklets, and the data analysis category is opened.
- A citation to the Anthropic 2026 coding-agents survey (Lyttelton, Massenkoff, and Wilmers) in the Journal of Open Source Education paper and its bibliography.

### Changed

- The Journal of Open Source Education paper draft was refreshed from stale v1.1.1 figures (ten booklets, 188 declarations) to the current release baseline (twelve booklets, 222 declarations), and the README bilingual rationale in both languages now cites the survey.
- The roadmap prioritizes the data analysis category (008) following the survey, and corrects a stale label that had described booklet 001-01-0004 as a draft after it shipped at release in v2.0.0.

### Zenodo

- Concept DOI: [10.5281/zenodo.20289687](https://doi.org/10.5281/zenodo.20289687) (resolves to the latest released version).
- Version DOI for v2.1.0: minted by Zenodo after this release is published and recorded here afterward.

## [2.0.0] - 2026-05-29

Major release. An audit-driven correctness and hardening pass, the first content-expansion booklet, version-independent repository tooling, and a companion website and academic paper. The ten v1.0 booklets are unchanged in scholarly content.

### Added

- Booklet 001-01-0004, "CLAUDE.md and the Discipline of Standing Instructions," a bilingual foundations booklet at `release` status, human-reviewed by the author. Eight independently verified citations, full Turkish and English parity. The released catalog grows from ten to eleven booklets, and the long-term catalog total is thirty-one.
- A bilingual MkDocs Material companion website (`mkdocs.yml`) that renders the booklets in place, with a GitHub Pages workflow (`.github/workflows/pages.yml`) that builds on every pull request and deploys on push to main.
- A Journal of Open Source Education companion paper draft (`paper/paper.md`, `paper/paper.bib`), whose bibliography reuses only citations already verified in the repository.
- A bilingual structure and citation parity check in the repository validator. Paired `tr.md` and `en.md` files must carry the same level-2 section count and the same set of bibliographic DOIs.
- A scheduled, non-blocking link and DOI liveness workflow (`.github/workflows/link-check.yml`) and `scripts/check-dois.mjs`, which resolves every cited DOI against the doi.org handle system.

### Changed

- The repository validator derives booklet counts from the filesystem instead of hardcoding version-specific totals, so promoting a booklet no longer requires editing the validator.
- The AI disclosure aggregate now covers all disclosed booklets regardless of status, and its verified and fabricated citation labels were generalized from released to all disclosed language files.
- `.zenodo.json` declares the prose license as CC-BY-NC-SA-4.0 and describes the taxonomy consistently with `CITATION.cff`.

### Fixed

- Corrected the Wooldridge citation in booklet 001-01-0002 to the 2009 second edition with the matching ISBN.
- Added the verified Crossref DOI to the Provenzale and Stanley citation in booklet 010-01-0001.
- Documented the five-level AI contribution scale cross-reference and the per-language MOC field-key domestication note.

### Zenodo

- Concept DOI: [10.5281/zenodo.20289687](https://doi.org/10.5281/zenodo.20289687) (resolves to the latest released version).
- Version DOI for v2.0.0: [10.5281/zenodo.20440754](https://doi.org/10.5281/zenodo.20440754).

## [1.1.1] - 2026-05-24

Patch release for distribution metadata hygiene. The booklets, project skills, and installer behavior are unchanged from v1.1.0.

### Changed

- Removed the maintainer's direct email address from public package metadata, citation metadata, plugin metadata, README contact text, contributor guidance, and conduct reporting text. Public coordination now routes through GitHub issues, discussions, and profile-level contact surfaces.
- Clarified that Zenodo version DOIs are minted after a GitHub release is published. Immutable tag archives can contain the concept DOI and previously known version DOIs, while `main` records newly minted version DOIs after Zenodo creates them.

### Fixed

- Avoided the misleading implication that a GitHub tag archive must already contain the version-specific DOI minted by Zenodo after that tag is released.
- Published a clean patch distribution surface so new PyPI metadata no longer exposes the maintainer's direct email address.

### Zenodo

- Concept DOI: [10.5281/zenodo.20289687](https://doi.org/10.5281/zenodo.20289687) (resolves to the latest released version).
- Version DOI for v1.1.1: [10.5281/zenodo.20364633](https://doi.org/10.5281/zenodo.20364633).

## [1.1.0] - 2026-05-24

Companion project skills and a distribution surface. The ten v1.0 booklets are unchanged in scholarly content. This minor release turns the booklets into repeatable Claude Code workflows and makes them installable.

### Added

- Ten Claude Code project skills under `.claude/skills/<skill-name>/SKILL.md`, each a single repeatable workflow with explicit inputs, verification steps, and safety boundaries, cross-referenced to its companion booklets.
- `social-cc-plugin`, a pip-installable distribution that copies the ten skills into a user's Claude configuration. Published to PyPI through GitHub Actions OpenID Connect trusted publishing, with no stored API token.
- A native Claude Code plugin manifest at `.claude-plugin/plugin.json` so the same skills install through the Claude Code plugin system from a single source.
- Repository validator added at `scripts/validate-repo.mjs` and wired into `npm run validate`.
- GitHub issue templates and a pull request template added for citation corrections, content corrections, bug reports, and review discipline.
- `.gitattributes` to normalize line endings to LF across contributor platforms.

### Changed

- README, README.tr, CATALOG, roadmap, aggregate AI disclosure, contributor notes, and script documentation aligned to the shipped release state.
- The Citation Check workflow now runs on every push and pull request to `main` rather than only when `CITATION.cff` changes, so the required status check cannot hang on unrelated pull requests.
- The repository validator no longer pins the aggregate-disclosure heading to a single hardcoded version and date string. It accepts any version and ISO date, removing a release-time coupling.

### Fixed

- v1.0.0 booklet frontmatter status now uses `release` across all twenty language files.
- Release booklets no longer contain unresolved `10.XXXXX/XXXXX` DOI examples.
- Booklet 009 self-disclosure language now matches completed human review.
- Booklet 012 Turkish wording now uses `şüpheci` rather than `septik`.

### Zenodo

- Concept DOI: [10.5281/zenodo.20289687](https://doi.org/10.5281/zenodo.20289687) (always resolves to the latest version, now v1.1.0).
- Version DOI for v1.1.0: [10.5281/zenodo.20364287](https://doi.org/10.5281/zenodo.20364287).

## [1.0.0] - 2026-05-24

The v1.0 manifesto. Ten core booklets, Turkish and English in full parallel, positioning Claude Code as a methodological partner of academic production for the social scientist. Across three dimensions: foundations (001), the methodological spine (002, 003, 004), and the academic production cycle (007, 009, 010, 012). 94 verified citations, 0 fabrications. Every booklet carries full AI-disclosure frontmatter and human-reviewed approval. Dual license: Apache 2.0 for code, CC-BY-NC-SA 4.0 for prose.

### Added

- Booklet 001-01-0002 (The Agentic Shift: From Chat Window to Working Partner) drafted in Turkish and English. Nine-section map, 10 verified citations (Wooldridge 2020, Park et al. 2023, Sumers et al. 2024, Yao et al. 2023, Mialon et al. 2023, Schick et al. 2023, Engel 1977, Hicks et al. 2024, Bender et al. 2021, Mollick 2024). Status `release`, human review complete.
- Booklet 001-01-0003 (Installation, First Session, and Sanity Checks) drafted in Turkish and English. Ten-section operational map with a failure-modes table, 6 verified citations (Anthropic Claude Code documentation and best practices, Microsoft WSL documentation, Ouyang et al. 2022, Bai et al. 2022, Anthropic Responsible Scaling Policy). Status `release`, human review complete.
- Both new booklets carry the full disclosure frontmatter. `ai_contribution_level` is `substantial-drafting` for 001-01-0002 and `co-drafting` for 001-01-0003. This completes category 001 (Foundations) as a bilingual set for the v1.0 manifesto.
- Booklet 002-04-0001 (DergiPark, ULAKBIM TR Dizin, HEAL-Link, and Regional Indexing) drafted in Turkish and English. The signature regional-access booklet, eleven-section map with a three-language literature-scan workflow and an MCP configuration example, 10 verified citations (van Leeuwen et al. 2001, Mongeon and Paul-Hus 2016, Larivière et al. 2015, Tenopir et al. 2019, Demir 2018, UNESCO 2021, plus the DergiPark, TR Dizin, YÖK Thesis Center, and HEAL-Link institutional sources). `ai_contribution_level` `co-drafting`. Status `release`, human review complete.
- Booklet 003-01-0001 (Memory as Vault: A First-Principles Introduction) drafted in Turkish and English. The original-concept booklet, nine-section map with a Mermaid Input-Store-Retrieve-Present diagram, 10 verified citations (Bush 1945, Nelson 1965, Luhmann 1992, Ahrens 2017, Lewis et al. 2020, Khattab et al. 2023, Valmeekam et al. 2023, Engel 1977, KVKK 2024, EDPB 2024). `original_concept: true`. `ai_contribution_level` `co-drafting`. Status `release`, human review complete.
- Booklet 004-01-0001 (Folder Discipline and the Maps of Content (MOC) Pattern) drafted in Turkish and English. Ten-section map with three Mermaid architecture diagrams, a Markdown conventions table, and three MOC examples (project, area, archive), 8 verified citations (Allen 2015, Forte 2022, Ahrens 2017, Knuth 1984, Brown and Duguid 2017, Tufte 1990, Bates 2002, Norman 2013). `ai_contribution_level` `substantial-drafting`. Status `release`, human review complete. This completes the methodological-spine categories 002, 003, and 004 as bilingual release sets.
- Booklet 007-02-0001 (APA 7 with DOI Discipline) drafted in Turkish and English. Ten-section map with a Crossref API verification workflow, an eight-step bibliography hygiene pipeline, and a language-model citation failure-modes table, 10 verified citations (APA 2020, Walters and Wilder 2023, Greenhalgh et al. 2016, Sallam 2023, Bhattacharyya et al. 2023, Else 2023, Hicks et al. 2024, plus the ICMJE, Crossref, and PubMed sources). `ai_contribution_level` `substantial-drafting`. Status `release`, human review complete.
- Booklet 009-01-0001 (Ethics in AI-Assisted Research: From Principle to Behavior), the spine booklet, drafted in Turkish and English. Eleven-section map with a twelve-item operational ethics checklist and a reflexive disclosure section that points at the booklet's own frontmatter, 12 verified citations (WMA Helsinki 2025, COPE 2023, WAME 2023, ICMJE 2024, STM 2025, EU AI Act 2024/1689, ENAI 2025, KVKK 2016, EDPB 2024, Resnik and Hosseini 2025, Mittelstadt et al. 2016, Jobin et al. 2019). `ai_contribution_level` `co-drafting`. Status `release`, human review complete.
- Booklet 010-01-0001 (Rebuttal Letters with Traceability Matrices) drafted in Turkish and English. Ten-section map with a synthetic eight-row traceability matrix, an ethics boundary table, and a 30/60/90-day plan, 9 verified citations (Provenzale and Stanley 2006, Belcher 2019, Sword 2017, Noble 2017, Williams and Bizup 2016, Hosseini et al. 2023, Else 2023, Resnik 2018, Squazzoni et al. 2021). `ai_contribution_level` `substantial-drafting`. Status `release`, human review complete. This completes the academic-production-cycle categories 007, 009, and 010.
- Booklet 012-01-0001 (When Things Go Wrong, A Working Troubleshooting Protocol), the closing booklet, drafted in Turkish and English. Eight-section map with a three-category problem taxonomy (tool, knowledge, communication), three worked example problems, a seven-step reasoning framework mapped to Polya's four stages, and a GitHub issue template, 7 verified citations (Polya 1945/2014, Schoenfeld 1985, Dörner 1996, Reason 2000, Norman 2013, Vaughan 1996, Perrow 1999). `ai_contribution_level` `co-drafting`. Status `release`, human review complete. This completes the v1.0 manifesto at ten released booklets. The closing section of this booklet closes the whole series.

### Changed

- `CATALOG.md` status of 001-01-0002 and 001-01-0003 moved from `planned` to `release`. Release count 1 to 3, planned count 29 to 27.
- `CATALOG.md` status of 002-04-0001, 003-01-0001, and 004-01-0001 moved from `planned` to `release`. Release count 3 to 6, planned count 27 to 24.
- Claude Code best-practices citation URL updated to the current canonical `https://code.claude.com/docs/en/best-practices` after a 308 permanent redirect from the older `anthropic.com/engineering` path (verified by live fetch on 2026-05-24).
- Citation metadata corrected during Phase 2 verification. The planning-abilities paper (arXiv:2305.15771) is attributed to its correct authors and venue, Valmeekam et al. (NeurIPS 2023), after the work-card draft had carried an incorrect author list and year. DSPy (Khattab et al., arXiv:2310.03714) is cited as an arXiv preprint without a contested conference venue. Bates (2002) is cited without an unresolvable DOI. The Brown and Duguid (2017) ISBN was corrected to 978-1-63369-241-1.
- `CATALOG.md` status of 007-02-0001, 009-01-0001, and 010-01-0001 moved from `planned` to `release`. Release count 6 to 9, planned count 24 to 21. CATALOG titles for 009-01-0001 and 010-01-0001 aligned to the booklet frontmatter.
- Citation metadata corrected during Phase 3 verification. The Declaration of Helsinki citation corrected to its actual JAMA publication, World Medical Association (2025), JAMA, 333(1), 71, after the work-card draft had recorded 2024 with JAMA 332(13), 1066-1069. The three peer-review handbook ISBNs corrected against publisher records: Belcher 2019 to 978-0-226-49991-8, Sword 2017 to 978-0-674-73770-9, Williams and Bizup 2016 to 978-0-13-408041-3. Provenzale and Stanley (2006) is cited without a DOI after 10.2214/AJR.05.0856 failed to resolve in Crossref.
- `CATALOG.md` status of 012-01-0001 moved from `planned` to `release`. Release count 9 to 10, planned count 21 to 20. The CATALOG title for 012-01-0001 aligned to the booklet frontmatter (comma rather than colon). With this, all ten v1.0 announcement-target booklets are released.
- Citation metadata corrected during Phase 4 verification. The Reason (2000) DOI confirmed against Crossref (BMJ 320(7237), 768-770). Two work-card ISBNs corrected: Dörner (1996) to the Metropolitan Books edition 978-0-8050-4160-6 (the card had carried an invalid check digit on a different subtitle), and Vaughan (1996) to 978-0-226-85176-1 (the card check digit was wrong). The Polya citation is given as a republished 1945 classic (2014 Princeton printing) without an unverifiable edition-number claim.
- Booklet 001-01-0001 footer word counts reconciled to measured values. Turkish body corrected from a stated 2900 to the measured 1997, English from a stated 2700 to the measured 2442. The earlier figures predated the Phase 1 reference-list trim and were never re-measured.
- Booklet 003-01-0001 English reference list corrected. The Luhmann (1992) reference, cited in-text in the English body, had been omitted from the English reference list while present in the Turkish. Restored to match the frontmatter count of 10 and the Turkish version. Found during the pre-release cross-booklet consistency audit, which otherwise confirmed that all ten booklets carry matching frontmatter and reference-list citation counts (94 total), a consistent previous-to-next bridge chain, and no forbidden characters across the bilingual set.

### Zenodo

- Concept DOI: [10.5281/zenodo.20289687](https://doi.org/10.5281/zenodo.20289687) (always resolves to the latest version, now v1.0.0).
- Version DOI for v1.0.0: [10.5281/zenodo.20363740](https://doi.org/10.5281/zenodo.20363740).

## [0.2.0] - 2026-05-19

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

### Zenodo

- Concept DOI: [10.5281/zenodo.20289687](https://doi.org/10.5281/zenodo.20289687) (always resolves to the latest version, now v0.2.0).
- Version DOI for v0.2.0: [10.5281/zenodo.20293189](https://doi.org/10.5281/zenodo.20293189).

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
