---
title: "Claude Code for Social Scientists: A Bilingual Open Educational Resource for Agentic AI in Academic Practice"
tags:
  - claude code
  - AI literacy
  - research methods
  - open educational resources
  - bilingual education
  - social science
authors:
  - name: Onour Impram
    orcid: 0000-0003-1076-3928
    corresponding: true
    affiliation: 1
affiliations:
  - name: "Istanbul University, Department of Clinical and Health Psychology"
    index: 1
# Affiliation taken verbatim from CITATION.cff. Author to confirm before JOSE submission.
date: 29 May 2026
bibliography: paper.bib
---

# Summary

Claude Code for Social Scientists is a bilingual open educational resource that teaches researchers in psychology, sociology, education, public health, communication, political science, anthropology, and adjacent fields how to integrate Anthropic's Claude Code into their academic practice. The guide is authored by a working clinical psychologist and PhD candidate who uses these tools in active research production. It is written in Turkish and English in full parallel, with every booklet delivered as side-by-side `tr.md` and `en.md` files under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 license for prose and an Apache 2.0 license for code.

The current release (v2.1.0) contains twelve released bilingual booklets across twelve thematic categories, plus ten companion Claude Code project skills that turn the booklets into repeatable, installable workflows. The guide is registered on Zenodo with a concept DOI [@impram2026] and archived through Software Heritage. Each booklet carries a machine-readable YAML frontmatter block declaring AI contribution level, model identity, human review status, verified citation count, and zero fabricated citations, implementing a disclosure standard aligned with COPE, WAME, ICMJE, STM 2025, EU AI Act 2024/1689 Article 50, and ENAI recommendations.

# Statement of Need

Social scientists outside the English-speaking world face a double barrier when adopting agentic AI tools. The first barrier is linguistic. Guides, documentation, and worked examples almost universally assume English as the working language of research, yet there are approximately ninety million Turkish speakers globally and a large diaspora in Western Europe, and Turkish-language academic AI resources are scarce relative to demand. The second barrier is contextual. Published guides typically assume access to infrastructure dominant in North American and Western European settings: DOI-linked references drawn from Scopus and Web of Science, EZproxy-authenticated full-text access, and a citation culture with established norms around digital identifiers. These assumptions fail the researcher working through DergiPark, ULAKBIM TR Dizin, HEAL-Link, or YOK Thesis Center, and they fail the researcher whose manuscript must navigate KVKK alongside GDPR, or whose ethics board application must address both the Declaration of Helsinki and the EU AI Act.

A third, discipline-specific barrier has emerged as agentic AI tools have become widespread. Language models routinely fabricate citations, producing records that are syntactically indistinguishable from genuine references but do not correspond to any published work [@walters2023; @bhattacharyya2023]. For the social scientist, a fabricated citation is not merely a technical error but an integrity violation that can compromise a manuscript, an ethics application, or a systematic review. No published guide for social scientists treats DOI verification as a first-class workflow concern, builds citation discipline into a reusable automation protocol, or makes the fabrication rate of its own references a trackable, publicly reported metric.

Broader arguments about the productivity effects of generative AI on academic writing [@noy2023], the risks of statistical reproduction without genuine understanding [@bender2021], and the structural inequalities that AI adoption may deepen in higher education [@milano2023] converge on a shared need. Direct survey evidence sharpens it. A large study of quantitative social scientists finds that coding agents are already in active research use, that their dominant application is quantitative data analysis, and that adoption is unevenly distributed across career stage, gender, and institutional prestige, in a sample drawn entirely from the English-language North American research ecosystem [@lyttelton2026]. A guide that is honest about both the value and the limits of agentic AI, written from inside a non-English academic ecosystem, and rigorous enough to serve as a scholarly reference rather than a promotional document, answers that need.

This resource is that guide.

# Content and Structure

The guide organizes its content into twelve thematic categories. Category 001, Foundations, introduces the conceptual difference between a chat interface and an agentic tool and frames the methodological implications of that difference for social science research. Category 002, Academic Access, covers the practical realities of literature access in Turkish and Greek institutional settings, including DergiPark, ULAKBIM TR Dizin, HEAL-Link, and YOK Thesis Center. Category 003, Memory Systems, introduces the Memory-as-Vault engineering pattern for maintaining persistent academic context across years of work. Category 004, Vault Architecture, covers folder discipline, Maps of Content, and Markdown conventions. Category 005, Hooks and Automation, addresses session lifecycle events and lightweight continuous integration for a personal knowledge base. Category 006, MCP and Plugins, covers the Model Context Protocol and plugin trust evaluation. Category 007, Academic Writing, addresses IMRAD scaffolding, APA 7 citation discipline with DOI verification, and journal fit. Category 008, Data Analysis, covers reproducible quantitative and qualitative workflows. Category 009, Ethics and IRB, addresses the Helsinki Declaration, COPE, WAME, ICMJE, STM 2025, EU AI Act 2024/1689 Article 50, ENAI, KVKK, and GDPR in a unified behavioral framework. Category 010, Peer Review, covers rebuttal letters with traceability matrices and reviewer-response discipline. Category 011, Conference Presentation, addresses slides, posters, and lightning talks. Category 012, Troubleshooting, provides a structured diagnostic protocol for when tools, papers, or reviewer interactions go wrong.

Twelve booklets are released at v2.1.0. Each booklet is short, opinionated, and tested in the author's own academic practice. Released booklets include the four Foundations booklets (001-01-0001 through 001-01-0004), the regional indexing booklet (002-04-0001), the Memory-as-Vault introduction (003-01-0001), the Folder Discipline and MOC pattern booklet (004-01-0001), the APA 7 with DOI Discipline booklet (007-02-0001), the Reproducible Quantitative Workflows booklet (008-01-0001), the Ethics backbone booklet (009-01-0001), the Rebuttal Letters booklet (010-01-0001), and the Troubleshooting Protocol booklet (012-01-0001). Each booklet is assigned a stable immutable identifier of the form KKK-AA-SSSS that does not change after release even when the content is revised.

The v1.1.x release adds ten companion Claude Code project skills under `.claude/skills/`. These skills provide compact, repeatable operating protocols for the most common workflows: literature triage, APA 7 and DOI verification, bilingual booklet pairing checks, AI disclosure auditing, ethics and IRB checklists, rebuttal traceability matrices, memory vault architecture, regional access routing, agentic session debugging, and repository release integrity checking. The skills install through a pip package (`social-cc-plugin`) or through the Claude Code plugin system and are dual-licensed to match the repository.

# Distinctive Scholarly Contributions

Four features distinguish this resource from comparable guides and merit explicit description.

The first is the Memory-as-Vault engineering pattern. The guide introduces and elaborates a systematic method for maintaining persistent academic context across a multi-year research career using a local Markdown vault. This pattern addresses a structural gap between how AI tools handle session context and how academic knowledge actually accumulates: not in isolated sessions but across years of notes, drafts, literature traces, and revision histories. The pattern builds on prior work in hypermedia structure [@nelson1965] and in the interface between personal knowledge management and academic production.

The second is the AI authorship disclosure framework. Every booklet in the repository carries a machine-readable YAML frontmatter block that declares the AI contribution level on a five-point scale from editing-only to full-draft, the model alias and dated model identifier, the human review state, the verified citation count, and the fabricated citation count. The policy is fully documented in `AI-AUTHORSHIP.md` and is aligned with the current consolidating publishing consensus across COPE (2023), WAME (2023), ICMJE (2024), STM (2025), EU AI Act 2024/1689 Article 50, and ENAI recommendations. This framework goes beyond minimum disclosure by making AI contribution auditable at the field level, not merely declared at the article level. Across the twenty-four released language files, the repository reports 222 verified citation declarations and zero fabricated citations.

The third is strict citation discipline with zero fabricated citations and verified DOIs. The guide treats DOI verification as a first-class workflow concern and documents a triple-index triangulation protocol using Crossref, PubMed, and Semantic Scholar. The booklet on APA 7 and DOI Discipline (007-02-0001) presents empirical evidence on the citation fabrication behavior of language models [@walters2023; @bhattacharyya2023] and turns that evidence into a reusable eight-step bibliography hygiene pipeline. The `apa-doi-verifier` companion skill automates the most repetitive steps of this pipeline.

The fourth is full Turkish-English parity. The Turkish version of each booklet is written first by the author as a native speaker and working academic. The English version is re-authored from the Turkish outline, not produced by literal translation, and cultural and institutional specificity is preserved or adapted across both versions. A continuous integration check enforces bilingual pairing, refusing any commit that breaks the `tr.md` and `en.md` sibling relationship.

# Audience and Use in Teaching

The primary audience is the researcher who can read code but who does not want to spend a week learning a new toolchain to accomplish one scholarly task. Concrete profiles served by the guide include the doctoral student running parallel research projects, the postdoctoral researcher responding to an R and R with eleven reviewer comments, the clinical investigator preparing an IRB application with a fifty-source literature review, and the lecturer designing a research methods syllabus that includes AI tool literacy.

The guide is explicitly not a Claude Code reference manual and not an AI promotion document. It does not claim that AI will write a researcher's papers. It takes the position that honest co-authorship under the current publishing consensus, combined with rigorous verification discipline and transparent disclosure, is both ethically required and practically achievable.

In a teaching context, individual booklets can be assigned as standalone reading units. The ethics backbone booklet (009-01-0001) reflexively demonstrates disclosure by carrying its own frontmatter block and explaining each field in the body text, making it a self-contained pedagogical artifact on research integrity. The troubleshooting booklet (012-01-0001) uses a structured diagnostic protocol that can be adapted into a problem-based learning activity. The companion skills can be installed into a course project repository, giving students a hands-on workflow environment.

# Quality Control

The repository enforces quality at four levels.

The continuous integration workflow runs markdownlint across all Markdown files and the repository integrity validator (`scripts/validate-repo.mjs`) on every commit and pull request. The validator checks bilingual pairing, frontmatter schema completeness, fabricated citation counts, and catalog consistency. Any booklet committing to the main branch with a `pending` human review state or a non-zero fabricated citation count fails the CI check and is blocked from release.

A dedicated citation validation workflow (`citation-check.yml`) runs `cff-validator` on `CITATION.cff` at every push to ensure machine-readable citation metadata conforms to the CFF 1.2.0 schema and that the Zenodo concept DOI resolves correctly.

A secret scanning workflow (`secret-scan.yml`) runs `gitleaks` to prevent credentials, API keys, and personal identifiers from entering the repository history.

Link and DOI liveness are checked manually by the maintainer before each tagged release using the `repo-release-integrity-check` companion skill, which audits README content, catalog counts, changelog entries, Zenodo DOI resolution, release notes, and booklet frontmatter alignment before a release is published.

Together these controls implement the principle that verification is not an optional final step but a structural feature of the release process.

# References
