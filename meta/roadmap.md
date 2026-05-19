# Roadmap

The public phase plan for `claude-code-for-social-scientists`. Dates are targets, not commitments. The author is a working clinical psychologist and PhD candidate, and academic work takes precedence over the repository when the two conflict.

## v0.1.0-alpha — Scaffold

**Target.** 2026-05.
**Status.** Complete (tagged 2026-05-19, commit `4999222`). The work captured under this version is the public scaffold and the first paired booklet. Subsequent work, including the four phases of post-tag remediation and polish, is tracked in `CHANGELOG.md`.

**Scope.**

- Repository skeleton with the twelve-category booklet directory tree.
- Dual-license header (Apache 2.0 for code, CC-BY-NC-SA 4.0 for content) with both full-text license files committed.
- `CITATION.cff` with a Zenodo placeholder DOI at scaffold time, replaced by the real concept DOI `10.5281/zenodo.20289687` and version DOI `10.5281/zenodo.20289688` immediately after the v0.1.0-alpha tag fired the Zenodo webhook on 2026-05-19.
- `AI-AUTHORSHIP.md` with the publishing-consensus alignment statement (COPE 2023, WAME 2023, ICMJE 2024, STM 2025, EU AI Act 2024/1689 Art. 50, ENAI) and the per-booklet disclosure schema.
- `CATALOG.md` enumerating thirty planned booklets across the twelve categories.
- Three CI workflows: markdown lint with bilingual coverage and AI disclosure audit, CFF validation, and gitleaks secret scan.
- First booklet `001-01-0001` Turkish full draft. English draft follows in Phase 1.
- Two placeholder booklets (`001-01-0002`, `001-01-0003`) with frontmatter and outline, so the bilingual coverage CI exercises the full pairing constraint.
- Initial atomic commit and `v0.1.0-alpha` tag.

**Out of scope.** GitHub repository creation, public push, Zenodo activation, Software Heritage enrollment, U.S. Copyright Office eCO application. These are manual steps for the author following the scaffold completion.

## v0.1.0 — First public release

**Target.** 2026-05.
**Status.** In progress. The manual prerequisites for v0.1.0 (Zenodo binding and DOI mintage) completed on 2026-05-19 during Phase 0 of the post-tag remediation. The remaining manual prerequisites (Software Heritage enrollment, U.S. Copyright Office eCO application) are tracked separately in the maintainer's vault.

**Scope.**

- Manual steps from v0.1.0-alpha completed: GitHub repository public, Zenodo binding active, first DOI minted, Software Heritage Archive enrollment recorded, U.S. Copyright Office eCO application filed.
- `CITATION.cff` updated with the real Zenodo DOI.
- README badges activated (CI, citation, license, DOI).
- First public announcement on the author's professional channels.

## Phase 1 — Bilingual completion of category 001 and first booklets in 002

**Target.** Weeks 1 to 2 after v0.1.0.

**Scope.**

- Booklet 001-01-0001 English draft completed and reviewed (paired status).
- Booklets 001-01-0002 and 001-01-0003 drafted in Turkish and English.
- Booklets 002-01-0001 (PubMed and Semantic Scholar MCPs) and 002-02-0001 (Zotero, ORCID, reference manager bridge) drafted.
- Sanitize-helper script under the author's private vault audited and documented in `scripts/README.md` (the script itself does not live in this repository).

## Phase 2 — End of Month 1

**Target.** Month 1 of post-release work.

**Scope.**

- Booklet 002-04-0001 (DergiPark, ULAKBIM TR Dizin, HEAL-Link, regional indexing) drafted bilingually. This is the v1.0 booklet most missing from international AI guides and the highest-differentiation booklet in the catalog.
- Booklet 003-01-0001 (Memory as Vault, first-principles introduction) drafted bilingually. The Memory-as-Vault engineering pattern is the signature methodological contribution of the guide.

## Phase 3 — End of Month 2

**Target.** Month 2 of post-release work.

**Scope.**

- Booklet 004-01-0001 (folder discipline and MOC pattern) drafted bilingually.
- Booklet 007-02-0001 (APA 7 with DOI discipline) drafted bilingually.
- Booklet 009-01-0001 (ethics in AI-assisted research) drafted bilingually. This is the spine of the guide for clinical and human-subjects research.
- Booklet 010-01-0001 (rebuttal letters with traceability matrices) drafted bilingually.
- Booklet 012-01-0001 (troubleshooting protocol) drafted bilingually.

All ten v1.0 booklets are at `paired` status going into the final review pass before the v1.0 release.

## v1.0.0 — First major release

**Target.** Mid-2026. Concrete release date set when the ten v1.0 booklets are reviewed and tagged.

**Scope.** Ten core booklets at `paired` or `release` status, selected to form a coherent manifesto across the foundational and highest-differentiation categories. Quality over breadth. The reasoning is that ten genuinely mature bilingual booklets serve the reader and the long-term citation record better than thirty unfinished drafts.

The ten v1.0 booklets are:

| Identifier | Category | Title (EN) |
|---|---|---|
| 001-01-0001 | Foundations | What is Claude Code? A Social Scientist's Perspective |
| 001-01-0002 | Foundations | The Agentic Shift: From Chat Window to Working Partner |
| 001-01-0003 | Foundations | Installation, First Session, and Sanity Checks |
| 002-04-0001 | Academic Access | DergiPark, ULAKBIM TR Dizin, HEAL-Link, and Regional Indexing |
| 003-01-0001 | Memory System | Memory as Vault: A First-Principles Introduction |
| 004-01-0001 | Vault Architecture | Folder Discipline and the Maps of Content (MOC) Pattern |
| 007-02-0001 | Academic Writing | APA 7 with DOI Discipline |
| 009-01-0001 | Ethics and IRB | Ethics in AI-Assisted Research: From Principle to Behavior |
| 010-01-0001 | Peer Review | Rebuttal Letters with Traceability Matrices |
| 012-01-0001 | Troubleshooting | When Things Go Wrong: A Working Troubleshooting Protocol |

Deliverables:

- All ten booklets bilingual with both `tr.md` and `en.md` reviewed (`paired` or `release` status).
- Zenodo DOI for v1.0 minted.
- U.S. Copyright Office eCO application reference number recorded in the repository footer.
- Public announcement to the European clinical psychology and digital health communities.

The remaining twenty booklets in [`CATALOG.md`](../CATALOG.md) move to the v1.5 and v2.0 backlog. Their identifiers and outlines are reserved; they are drafted as the project matures past v1.0.

## v1.5.0 — Community discussions opened

**Target.** 2026-10.

**Scope.**

- GitHub Discussions enabled with moderation guidelines published.
- Approximately ten additional booklets drafted, drawn from categories 002 (remainder of Academic Access), 005 (Hooks), 006 (MCP and Plugins), and 008 (Data Analysis). Total around twenty booklets.
- First external contributors merged.
- Translation review (Turkish, English) iterations integrated.

## v2.0.0 — Full thirty-booklet catalog and living lab

**Target.** 2027-04.

**Scope.**

- All thirty booklets in the catalog at `paired` or `release` status.
- Citations from external academic work logged in `meta/external-citations.md`.
- Instructional use cases (PhD seminars, masters-level methodology courses) documented with consent in `meta/instructional-use.md`.
- The repository transitions from a single-author guide to a moderated community resource.

## Sustainability

The author's commitment is to the v1.0 milestone. Phases beyond v1.0 depend on community engagement, the author's academic obligations, and continued funding for the time investment. The dual-license model is intended to keep the work permanently citable and adaptable for non-commercial purposes regardless of the author's continued engagement.

If the author becomes unable to maintain the repository, the GitHub repository, Zenodo deposit, and Software Heritage Archive entry will remain accessible. The U.S. Copyright Office registration provides the evidentiary basis for the author's heirs or designated maintainer to enforce the license terms if needed.

---

**Last updated.** 2026-05-19.
