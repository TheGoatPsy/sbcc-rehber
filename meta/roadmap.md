# Roadmap

The public phase plan for `claude-code-for-social-scientists`. Dates are targets, not commitments. The author is a working clinical psychologist and PhD candidate, and academic work takes precedence over the repository when the two conflict.

## v0.1.0-alpha — Scaffold

**Target.** 2026-05.
**Status.** In progress as of 2026-05-19.

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

- Categories 001 and 002 fully bilingual.
- Booklets 002-03-0001 (EZproxy, institutional VPN) and 002-04-0001 (DergiPark, ULAKBIM, HEAL-Link) drafted. This is the category most missing from international AI guides and the unique value proposition for regional academic audiences.
- Approximately fifteen booklets total across the first two categories.

## Phase 3 — End of Month 2

**Target.** Month 2 of post-release work.

**Scope.**

- Categories 003 (Memory System), 004 (Vault Architecture), and 009 (Ethics and IRB) drafted in full. The ethics category is the spine of the guide for clinical and human-subjects research.
- Approximately twenty-five booklets total.

## v1.0.0 — ECPP Dublin announcement release

**Target.** 2026-07. Coinciding with the European Congress of Psychology, Dublin, July 2026.

**Scope.**

- All thirty booklets across all twelve categories at `paired` or `release` status.
- All booklets bilingual with both `tr.md` and `en.md` reviewed.
- Zenodo DOI for v1.0 minted.
- U.S. Copyright Office eCO application reference number recorded in the repository footer.
- Public announcement to the European clinical psychology and digital health communities.

## v1.5.0 — Community discussions opened

**Target.** 2026-10.

**Scope.**

- GitHub Discussions enabled with moderation guidelines published.
- Approximately fifty booklets total. Categories 005 (Hooks), 006 (MCP and Plugins), and 010 (Peer Review) deepened with additional subcategory booklets.
- First external contributors merged.
- Translation review (Turkish, English) iterations integrated.

## v2.0.0 — Living lab and instructional use

**Target.** 2027-04.

**Scope.**

- Approximately seventy-plus booklets.
- Citations from external academic work logged in `meta/external-citations.md`.
- Instructional use cases (PhD seminars, masters-level methodology courses) documented with consent in `meta/instructional-use.md`.
- The repository transitions from a single-author guide to a moderated community resource.

## Sustainability

The author's commitment is to the v1.0 milestone. Phases beyond v1.0 depend on community engagement, the author's academic obligations, and continued funding for the time investment. The dual-license model is intended to keep the work permanently citable and adaptable for non-commercial purposes regardless of the author's continued engagement.

If the author becomes unable to maintain the repository, the GitHub repository, Zenodo deposit, and Software Heritage Archive entry will remain accessible. The U.S. Copyright Office registration provides the evidentiary basis for the author's heirs or designated maintainer to enforce the license terms if needed.

---

**Last updated.** 2026-05-19.
