# Security Policy

This repository hosts an open-source academic guide. Its public artifacts are prose, citation metadata, and configuration. There is no application binary, no user data, and no production service. The principal security concerns are therefore the integrity of citations, the safety of contributor data, and the discipline that prevents non-public material (clinical notes, identity data, institutional credentials) from ever entering the public repository.

This document explains how to report a suspected security issue and how the maintainer handles the categories of risk most relevant to an academic open-source guide.

## Responsible disclosure

If you find a security issue, please do not open a public GitHub issue. Suspected concerns include:

- A leaked credential, token, or private path in the commit history.
- A piece of prose, frontmatter, or metadata that appears to identify a real research participant, a real patient, or a real interview subject.
- An attempt to embed harmful content (malicious links, encoded payloads) in any document or CI workflow.
- A supply-chain risk in any GitHub Action used by the CI workflows (compromised tag, force-pushed branch, etc.).

Report by email to **onurb693 at gmail dot com** with the subject line **SECURITY: claude-code-for-social-scientists**. Include the affected file path, the commit SHA, and a short description of the concern. Maintainer acknowledgment within seven days, action within thirty days, public statement (if appropriate) after remediation.

## Vault sanitization principles

The booklets and meta documents in this repository are produced inside a private maintainer vault that contains clinical material, personal academic notes, and identity-sensitive context. The maintainer applies a four-category sanitization rule before any content leaves the vault:

- **SAFE** — Public reference material, published citations, generic methodological framing, anonymous examples. Goes to the public repository as-is.
- **SANITIZE** — Concrete examples drawn from real practice that need anonymization: change names, swap institution identifiers, generalize dates, remove unique identifying combinations. Goes to the public repository in sanitized form.
- **BLOCKED** — Clinical case material, identifiable participant data, named third parties, institutional credentials, internal scripts. Never goes to the public repository.
- **SKIP** — Material that is technically safe to share but that does not serve the guide's pedagogical aim. Not included to keep the public repository focused.

This rule applies to every booklet, every meta document, and every commit message. CI workflows include a Secret Scan that hard-blocks common credential patterns, but the human sanitization pass is the primary defense.

## Action SHA pinning

The CI workflows pin third-party GitHub Actions to a full commit SHA (not a major tag). Major tags can be force-pushed by a compromised maintainer of the third-party action; SHAs are immutable. The pinned actions are listed in `.github/workflows/`. Updating a pin requires verifying the new SHA against the action's release notes and changelog.

## Citation integrity

This repository operates under a **citation fabrication ban**. Every DOI, every author name, every journal title, every year, and every page range in any reference list is independently verified against Crossref, PubMed, Semantic Scholar, ULAKBIM TR Dizin, or DergiPark before commit. The `verified_citations_count` and `fabricated_citations_count` frontmatter fields make this auditable per booklet. A non-zero `fabricated_citations_count` on a tagged release is treated as a release blocker. See [`AI-AUTHORSHIP.md`](./AI-AUTHORSHIP.md), section 6, for the operational protocol.

## Out of scope

The following are not security concerns for this repository, and reports about them will be handled as ordinary issues:

- Typos, formatting inconsistencies, or broken internal links.
- Disagreement with a methodological position taken in a booklet (open a discussion or pull request instead).
- Suggestions for additional citations or sources (open a discussion).

## Acknowledgments

We thank reporters who follow responsible disclosure. With the reporter's consent, contributions are acknowledged in the next release notes.
