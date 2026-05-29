# Catalog

This catalog lists every booklet in `claude-code-for-social-scientists`, grouped by category, with a stable identifier of the form `KKK-AA-SSSS` (category, subcategory, serial), a short description in English and Turkish, and a status. The full long-term catalog targets thirty-one booklets across twelve categories. The v1.0 target is the **ten core booklets** marked with `[v1.0]` in the tables below. Booklet 001-01-0004 ships at `release` status in v2.0.0, booklet 008-01-0001 (Reproducible Quantitative Workflows) at `release` status in v2.1.0, and booklet 008-02-0001 (Statistical Test Selection with AI Consultation Discipline) at `release` status in v2.2.0, all after human review and all motivated by the empirical finding that quantitative data analysis is the dominant social-science use of coding agents, bringing the released total to thirteen. The remaining eighteen booklets are scheduled for later releases. See [`meta/roadmap.md`](./meta/roadmap.md) for the phase plan and release timing.

## Status legend

| Symbol | Meaning |
|---|---|
| `draft` | Turkish or English first draft committed, awaiting bilingual completion or human review |
| `planned` | Scoped, outlined, not yet drafted |
| `paired` | Both `tr.md` and `en.md` drafted, not yet included in a public release |
| `release` | Human-reviewed, version-tagged, included in a public release |

The repository now contains thirteen booklets at `release` status. Both Turkish and English files are complete, human-reviewed, and citation-audited. Ten are the v1.0.0 core booklets, the eleventh, 001-01-0004, was added and human-reviewed for the v2.0.0 release, the twelfth, 008-01-0001, for the v2.1.0 release, and the thirteenth, 008-02-0001, for the v2.2.0 release. Eighteen booklets remain at `planned` status as of 2026-05-29. The v1.1.x releases add ten companion Claude Code project skills that turn the booklets into repeatable workflows, installable through the `social-cc-plugin` pip package or the Claude Code plugin system.

---

## 001 — Foundations / Temeller

The conceptual introduction. What Claude Code is, how it differs from a chat window, why the agentic shift matters for academic work, and the cultural particularities of using it from Türkiye, Greece, and other non-English ecosystems.

| Identifier | Title (EN) | Title (TR) | Status |
|---|---|---|---|
| 001-01-0001 `[v1.0]` | What is Claude Code? A Social Scientist's Perspective | Claude Code Nedir? Sosyal Bilimci Bakışıyla | `release` |
| 001-01-0002 `[v1.0]` | The Agentic Shift: From Chat Window to Working Partner | Aracın Ötesine Geçiş: Sohbet Penceresinden İş Ortağına | `release` |
| 001-01-0003 `[v1.0]` | Installation, First Session, and Sanity Checks | Kurulum, İlk Oturum, Sağlık Testleri | `release` |
| 001-01-0004 | CLAUDE.md and the Discipline of Standing Instructions | CLAUDE.md ve Kalıcı Talimat Disiplini | `release` |

## 002 — Academic Access / Akademik Erişim

Practical access to journals, citation indexes, reference managers, and institutional infrastructure. The category most often missing from international AI guides written from Silicon Valley perspectives.

| Identifier | Title (EN) | Title (TR) | Status |
|---|---|---|---|
| 002-01-0001 | PubMed and Semantic Scholar MCPs for Working Researchers | Çalışan Araştırmacı İçin PubMed ve Semantic Scholar MCP'leri | `planned` |
| 002-02-0001 | Zotero, ORCID, and the Reference Manager Bridge | Zotero, ORCID ve Referans Yönetim Köprüsü | `planned` |
| 002-03-0001 | EZproxy, Institutional VPN, and Off-Campus Realities | EZproxy, Kurumsal VPN ve Kampüs Dışı Erişim | `planned` |
| 002-04-0001 `[v1.0]` | DergiPark, ULAKBIM TR Dizin, HEAL-Link, and Regional Indexing | DergiPark, ULAKBIM TR Dizin, HEAL-Link ve Bölgesel İndeksleme | `release` |

## 003 — Memory System / Hafıza Sistemi

The Memory-as-Vault engineering pattern. How to maintain a persistent academic context across years of work, not weeks.

| Identifier | Title (EN) | Title (TR) | Status |
|---|---|---|---|
| 003-01-0001 `[v1.0]` | Memory as Vault, A First-Principles Introduction | Kasa Olarak Hafıza, İlkesel Bir Giriş | `release` |
| 003-02-0001 | Retrieval Patterns: Indexing a Decade of Notes | Geri Çağırma Kalıpları: On Yıllık Notları İndekslemek | `planned` |
| 003-03-0001 | Material Passport: Tracking Sources Across Sessions | Material Passport: Kaynakları Oturumlar Arası İzlemek | `planned` |

## 004 — Vault Architecture / Kasa Mimarisi

Folder discipline, Maps of Content, Markdown conventions that survive software changes.

| Identifier | Title (EN) | Title (TR) | Status |
|---|---|---|---|
| 004-01-0001 `[v1.0]` | Folder Discipline and the Maps of Content (MOC) Pattern | Klasör Disiplini ve Maps of Content (MOC) Kalıbı | `release` |
| 004-02-0001 | Markdown Conventions That Outlive Tools | Araçlardan Uzun Yaşayan Markdown Alışkanlıkları | `planned` |

## 005 — Hooks and Automation / Hook'lar ve Otomasyon

Session lifecycle events, ritual hooks, lightweight CI for a personal knowledge base.

| Identifier | Title (EN) | Title (TR) | Status |
|---|---|---|---|
| 005-01-0001 | Hook Types: A Catalog with Working Examples | Hook Türleri: Çalışan Örneklerle Bir Katalog | `planned` |
| 005-02-0001 | Ritual Hooks: Daily Logging, Session Persistence, Idle Time | Ritüel Hook'lar: Günlük Kayıt, Oturum Kalıcılığı, Boş Zaman | `planned` |

## 006 — MCP and Plugins / MCP ve Eklentiler

Model Context Protocol servers, plugin marketplaces, trust evaluation of third-party academic plugins.

| Identifier | Title (EN) | Title (TR) | Status |
|---|---|---|---|
| 006-01-0001 | MCP for the Researcher: What, Why, When | Araştırmacı İçin MCP: Ne, Neden, Ne Zaman | `planned` |
| 006-02-0001 | Authoring a Custom Academic MCP Server | Özel Akademik MCP Sunucusu Yazma | `planned` |
| 006-03-0001 | Plugin Trust Triage: A Working Methodology | Eklenti Güveni Triyajı: Çalışan Bir Yöntem | `planned` |

## 007 — Academic Writing / Akademik Yazım

IMRAD scaffolding in Turkish and English, APA 7 with DOI discipline, journal fit, manuscript revision.

| Identifier | Title (EN) | Title (TR) | Status |
|---|---|---|---|
| 007-01-0001 | IMRAD Scaffolding: A Bilingual Approach | IMRAD İskeleti: İki Dilli Bir Yaklaşım | `planned` |
| 007-02-0001 `[v1.0]` | APA 7 with DOI Discipline | DOI Disiplini ile APA 7 | `release` |
| 007-03-0001 | Journal Fit and Cover Letters | Dergi Uyumu ve Kapak Mektupları | `planned` |

## 008 — Data Analysis / Veri Analizi

Reproducible workflows, statistical test selection, qualitative coding, mixed-methods discipline.

| Identifier | Title (EN) | Title (TR) | Status |
|---|---|---|---|
| 008-01-0001 | Reproducible Quantitative Workflows | Yeniden Üretilebilir Nicel İş Akışları | `release` |
| 008-02-0001 | Statistical Test Selection with AI Consultation Discipline | Yapay Zekâ Danışma Disipliniyle İstatistiksel Test Seçimi | `release` |
| 008-03-0001 | Qualitative Coding with AI Assistance and Human Oversight | Yapay Zekâ Yardımı ve İnsan Gözetimiyle Nitel Kodlama | `planned` |

## 009 — Ethics and IRB / Etik ve IRB

Helsinki Declaration, COPE, WAME, ICMJE, STM 2025, EU AI Act 2024/1689 Art. 50, ENAI, KVKK, GDPR.

| Identifier | Title (EN) | Title (TR) | Status |
|---|---|---|---|
| 009-01-0001 `[v1.0]` | Ethics in AI-Assisted Research, From Principle to Behavior | Yapay Zekâ Destekli Araştırmada Etik, Prensipten Davranışa | `release` |
| 009-02-0001 | IRB Protocols with AI Component | Yapay Zekâ Bileşenli IRB Protokolleri | `planned` |
| 009-03-0001 | KVKK, GDPR, and the EU AI Act for Researchers | Araştırmacı İçin KVKK, GDPR ve AB AI Yasası | `planned` |

## 010 — Peer Review / Hakem Değerlendirmesi

Rebuttal letters with traceability matrices, reviewer-response discipline, anti-AI-trace writing.

| Identifier | Title (EN) | Title (TR) | Status |
|---|---|---|---|
| 010-01-0001 `[v1.0]` | Rebuttal Letters with Traceability Matrices | İzlenebilirlik Matrisleri ile Hakem Yanıt Mektupları | `release` |
| 010-02-0001 | Anti-AI-Trace Writing for Revisions | Revizyonlar İçin Yapay Zekâ İzi Silme Yazımı | `planned` |

## 011 — Conference Presentation / Konferans Sunumu

Slides, posters, lightning talks, networking sequences.

| Identifier | Title (EN) | Title (TR) | Status |
|---|---|---|---|
| 011-01-0001 | Slides, Posters, and Lightning Talks with AI Assistance | Yapay Zekâ Yardımıyla Slayt, Poster ve Lightning Talk | `planned` |

## 012 — Troubleshooting / Sorun Giderme

When tools fail, when papers disagree, when reviewers ask the wrong question.

| Identifier | Title (EN) | Title (TR) | Status |
|---|---|---|---|
| 012-01-0001 `[v1.0]` | When Things Go Wrong, A Working Troubleshooting Protocol | İşler Ters Gittiğinde, Çalışan Bir Sorun Giderme Protokolü | `release` |

---

## Summary by status

| Status | Count |
|---|---|
| `release` | 13 |
| `paired` | 0 |
| `draft` | 0 |
| `planned` | 18 |
| **Total catalog** | **31** |
| **v1.0 announcement target** | **10** (marked `[v1.0]` above) |

## Companion Project Skills

The v1.1.x release line adds Claude Code project skills under `.claude/skills/<skill-name>/SKILL.md`. These skills do not replace the booklets. They provide compact, repeatable operating protocols for the most common workflows.

| Skill | Booklet basis | Workflow surface |
|---|---|---|
| `social-science-literature-triage` | 002, 007 | Literature search scoping, database routing, language layers, DOI status, and inclusion criteria |
| `apa-doi-verifier` | 007 | APA 7 cleanup, DOI verification, Crossref/PubMed second-pass checks, fabricated citation risk |
| `bilingual-booklet-pairing` | all pairs | `tr.md` and `en.md` parity, title alignment, frontmatter agreement, cultural adaptation notes |
| `ai-disclosure-auditor` | all pairs | AI contribution, model alias, model date, human review, citation counts, disclosure standard |
| `ethics-irb-ai-protocol` | 009 | IRB, KVKK, GDPR, EU AI Act, disclosure, and data-minimization review |
| `rebuttal-traceability-matrix` | 010 | Reviewer comment traceability, accepted/partial/rejected categories, manuscript change mapping |
| `memory-vault-architect` | 003, 004 | Research vault architecture, MOCs, frontmatter, source passports, retrieval patterns |
| `regional-access-workflow` | 002 | DergiPark, ULAKBIM TR Dizin, HEAL-Link, YOK Thesis Center, and institutional access workflows |
| `agentic-session-debugger` | 012 | Scope drift, loop trap, hidden state, context limit, PATH, and permission troubleshooting |
| `repo-release-integrity-check` | whole repo | README, CATALOG, CHANGELOG, CITATION.cff, Zenodo DOI, release notes, AI disclosure, and booklet frontmatter alignment |

## Versioning

Booklet identifiers (`KKK-AA-SSSS`) are immutable. A booklet's content version is tracked in its own frontmatter (`version` field) and in this catalog at release time. Revisions to a booklet keep the identifier and increment the booklet version.

When this repository is tagged for release (for example `v0.1.0-alpha`, `v1.0.0`, `v1.1.1`, or `v1.5.0`), the release notes reference the booklet identifiers and content versions included in the release. Zenodo mints a new DOI after each GitHub release is published. The concept DOI in `CITATION.cff` resolves to the latest version, and individual version DOIs are available on Zenodo after the release event.

## How to propose a new booklet

See [`CONTRIBUTING.md`](./CONTRIBUTING.md). The short version. Open an issue with a proposed identifier (next free serial in the relevant category), a one-paragraph scope, and a draft outline. The maintainer triages new booklets monthly.

---

**Last updated:** 2026-05-29 (v2.2.0 release: booklet 008-02-0001, Statistical Test Selection with AI Consultation Discipline, promoted to `release` status after human review, the second Data Analysis booklet, continuing the category prioritized after the Anthropic 2026 coding-agents survey. Earlier the same day: v2.1.0 release with booklet 008-01-0001, and v2.0.0 release with audit and CI hardening, booklet 001-01-0004 promoted to release, companion website, and JOSE paper)
