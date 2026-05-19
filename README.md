<p align="center">
  <img src="./assets/banner.svg" alt="Claude Code for Social Scientists — Sosyal Bilimciler İçin Claude Code Rehberi banner. Author Onour Impram, ORCID 0000-0003-1076-3928, Zenodo concept DOI 10.5281/zenodo.20289687, dual licensed Apache 2.0 plus CC-BY-NC-SA 4.0, v0.1.0-alpha, ECPP Dublin July 2026.">
</p>

# Claude Code for Social Scientists

A bilingual, open-source guide for social scientists who want to use Anthropic's Claude Code in their research, teaching, and academic writing. Written for researchers outside the English-speaking world as well as inside it, by a working clinical psychologist and PhD candidate who uses these tools in real academic production.

> **Status:** v0.1 scaffold. First full booklet (Booklet 001-01-0001) drafted in Turkish. English drafts and additional booklets follow in Phase 1. Public announcement planned for the European Congress of Psychology (ECPP), Dublin, July 2026.

> **TR readers:** A Turkish overview lives at the bottom of this file. The full Turkish version is in [`README.tr.md`](./README.tr.md). Every booklet exists as `tr.md` and `en.md` side by side.

---

## What this guide is

A practical, evidence-led handbook for using Claude Code in academic work that is not in computer science. The audience is researchers in psychology, sociology, education, public health, communication, political science, anthropology, and adjacent fields, especially those operating in non-English academic ecosystems (Turkey, Greece, the broader Mediterranean and Middle East, Latin America, South and Southeast Asia, and Sub-Saharan Africa).

The guide covers, across twelve thematic categories, the questions a social scientist actually faces:

1. **Foundations.** What Claude Code is, how it differs from a chat window, where it earns its keep in scholarly work.
2. **Academic access.** PubMed and Semantic Scholar MCPs, EZproxy and institutional VPN realities, ORCID, Zotero, DergiPark, ULAKBIM TR Dizin, HEAL-Link.
3. **Memory systems.** Long-running vaults, persistent context, retrieval over a decade of notes, the Memory-as-Vault engineering pattern.
4. **Vault architecture.** Folder discipline, MOCs (Maps of Content), Markdown conventions that survive software changes.
5. **Hooks and automation.** Session lifecycle events, ritual hooks, lightweight CI for personal knowledge bases.
6. **MCP and plugins.** Authoring, auditing, and curating Model Context Protocol servers for academic workflows.
7. **Academic writing.** IMRAD scaffolding in Turkish and English, APA 7 with DOI discipline, journal fit, manuscript revision.
8. **Data analysis.** Reproducible workflows, statistical test selection, qualitative coding, mixed-methods discipline.
9. **Ethics and IRB.** Helsinki Declaration, COPE, WAME, ICMJE, STM 2025, EU AI Act 2024/1689 Art. 50, ENAI, KVKK, GDPR.
10. **Peer review.** Rebuttal letters with traceability matrices, reviewer-response discipline, anti-AI-trace writing.
11. **Conference presentation.** Slides, posters, lightning talks, networking sequences.
12. **Troubleshooting.** When tools fail, when papers disagree, when reviewers ask the wrong question.

Each booklet is short, opinionated, and tested in the author's own academic practice.

## Why bilingual

Turkish and English are presented in full parallel. There are roughly ninety million Turkish speakers globally and a large diaspora in Western Europe, and Turkish-language academic AI resources are scarce relative to demand. The English version exists so the work is reviewable by international colleagues, citable in English-language journals, and reachable through global academic search engines. Each booklet lives in a folder with `tr.md` and `en.md` as siblings. A continuous-integration check refuses any commit that breaks this pairing.

## Who this is for, who it is not

It is for the assistant professor running a survey study, the PhD student writing a systematic review, the postdoc preparing an R&R, the lecturer designing a syllabus, the clinical researcher navigating IRB. It is for people who can read code but who do not want to spend a week learning a new toolchain to write one paragraph.

It is not a Claude Code reference manual (Anthropic publishes those). It is not an AI hype document. It does not promise that AI will write your paper for you. It also does not pretend AI plays no role in academic work in 2026; the position is honest co-authorship under the consolidating publishing consensus on AI disclosure (COPE 2023, WAME 2023, ICMJE 2024, STM 2025) and the transparency obligations of the EU AI Act 2024/1689.

## Authorship and AI co-authorship

The author is Onour Impram, a clinical psychologist licensed in Türkiye, Greece, and Ireland, a PhD candidate in Clinical and Health Psychology at Istanbul University, an external lecturer at Biruni University, and an AI and mental health researcher. ORCID: [0000-0003-1076-3928](https://orcid.org/0000-0003-1076-3928).

Claude Code is used as a drafting and verification assistant. Each booklet carries a frontmatter block declaring the contribution level (`ai_assisted`, `model`, `ai_contribution_level`, `human_review`) in the spirit of the consolidating publishing consensus on AI disclosure (COPE 2023, WAME 2023, ICMJE 2024, STM 2025) combined with EU AI Act 2024/1689 Article 50 transparency obligations and ENAI recommendations on the ethical use of AI in research. See [`AI-AUTHORSHIP.md`](./AI-AUTHORSHIP.md) for the full policy.

## Repository layout

```
claude-code-for-social-scientists/
├── README.md                  (this file, EN)
├── README.tr.md               (TR main)
├── LICENSE                    (dual-license header)
├── LICENSE.code               (Apache 2.0 full text)
├── LICENSE.content            (CC-BY-NC-SA 4.0 full text)
├── CITATION.cff               (Zenodo concept DOI: 10.5281/zenodo.20289687)
├── AI-AUTHORSHIP.md           (disclosure policy)
├── CATALOG.md                 (catalog of all planned and drafted booklets)
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md            (EN)
├── CONTRIBUTING.tr.md         (TR)
├── booklets/
│   ├── 001-foundations/
│   ├── 002-academic-access/
│   ├── ... (012 categories)
├── template/                  (booklet starter templates)
├── meta/
│   ├── roadmap.md
│   ├── contributors.md
│   └── ai-disclosure.md
├── scripts/
│   └── README.md
└── .github/
    └── workflows/
        ├── ci.yml             (markdownlint + bilingual coverage)
        ├── citation-check.yml (cff-validator)
        └── secret-scan.yml    (gitleaks)
```

## Cataloging convention

Each booklet has a stable identifier of the form `KKK-AA-SSSS`:

- `KKK` is the three-digit category code (001 to 012).
- `AA` is a two-digit subcategory code within the category.
- `SSSS` is a four-digit serial number.

So `001-01-0001` is the first booklet, in the first subcategory, of the Foundations category. The full catalog lives in [`CATALOG.md`](./CATALOG.md). Identifiers do not change after release, even if the booklet is later revised; revisions are tracked in the booklet's own frontmatter and changelog.

## Licensing

Code and configuration are under the **Apache License, Version 2.0** ([`LICENSE.code`](./LICENSE.code)). Booklets, guides, prose, and instructional content are under **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International** ([`LICENSE.content`](./LICENSE.content)). The dual-license model is summarized in [`LICENSE`](./LICENSE) at the repository root. Commercial use of the prose content requires prior written permission; see the LICENSE file for the contact procedure.

## Citation

If you cite this work, use the machine-readable record in [`CITATION.cff`](./CITATION.cff), or the "Cite this repository" button on GitHub. The Zenodo concept DOI (resolves to the latest version) is **10.5281/zenodo.20289687** and the v0.1.0-alpha version DOI is **10.5281/zenodo.20289688**. See <https://doi.org/10.5281/zenodo.20289687> for the canonical record.

## International protection

This work is registered through:

- **Zenodo** (CERN) for a persistent DOI on each release
- **Software Heritage Archive** (CERN/Inria) for a permanent code archive
- **U.S. Copyright Office (eCO)** for an evidentiary registration enforceable in 180+ Berne Convention member states
- **Creative Commons license metadata** for machine-readable license declarations

## Roadmap

See [`meta/roadmap.md`](./meta/roadmap.md) for the public phase plan. The headline targets are v0.1 (scaffold + first booklet, 2026-05), v1.0 (thirty booklets, 2026-07 in time for ECPP Dublin), v1.5 (community discussions opened, fifty booklets, 2026-10), v2.0 (seventy-plus booklets, living lab, conference citations, instructional use, 2027-04).

## Contributing

Contributions are welcome from social science researchers, clinicians, instructional designers, librarians, and engineers who care about how AI lands in non-English academic ecosystems. See [`CONTRIBUTING.md`](./CONTRIBUTING.md) (or [`CONTRIBUTING.tr.md`](./CONTRIBUTING.tr.md)) for the pull request workflow, the bilingual pairing rule, and the disclosure expectations.

## Acknowledgements

Two reference repositories shaped the early structural thinking, although the present guide diverged in scope, audience, and discipline:

- [Galaxy-Dawn/claude-scholar](https://github.com/Galaxy-Dawn/claude-scholar) (MIT) for a trilingual, AI/ML-leaning research-assistant skill bundle.
- [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) (CC-BY-NC 4.0) for a structured triangulation pipeline (Semantic Scholar, OpenAlex, Crossref) and Material Passport pattern.

Selected ideas have been adapted for Turkish and social-science contexts. Differences and design decisions are documented in the author's working notes.

## Contact

Onour Impram — `onuribram@outlook.com` — Istanbul, Türkiye / Komotini, Greece.

---

<details>
<summary><strong>Türkçe özet (kısa)</strong></summary>

Bu depo, sosyal bilim alanındaki araştırmacıların Anthropic Claude Code aracını akademik üretim sürecine nasıl entegre edebileceğini anlatan iki dilli açık kaynak bir rehberdir. Hedef kitle psikoloji, sosyoloji, eğitim, halk sağlığı, iletişim, siyaset bilimi, antropoloji ve yakın disiplinlerde çalışan, özellikle Türkiye, Yunanistan, Akdeniz havzası, Ortadoğu, Latin Amerika, Güney ve Güneydoğu Asya, Sahra Altı Afrika gibi İngilizce dışı akademik ekosistemlerde üretim yapan araştırmacılardır.

Her broşür Türkçe ve İngilizce paralel yayımlanır. Lisanslama çift katmanlıdır. Kod ve yapılandırma için Apache 2.0, broşür ve düz yazı için CC-BY-NC-SA 4.0. Yapay zekâ ortak yazarlığı yayın camiasının uzlaşı çerçevesinde (COPE, WAME, ICMJE, STM 2025, AB Yapay Zekâ Yasası 2024/1689 Madde 50, ENAI) her broşürün başlığında açıkça beyan edilir.

Yazar Onour Impram, Türkiye, Yunanistan ve İrlanda lisanslı klinik psikolog, İstanbul Üniversitesi Klinik ve Sağlık Psikolojisi doktora adayıdır. Tam Türkçe tanıtım için [`README.tr.md`](./README.tr.md) dosyasını inceleyin. Katkı kuralları ve dil paritesi politikası için [`CONTRIBUTING.tr.md`](./CONTRIBUTING.tr.md).

İletişim: `onuribram@outlook.com`.

</details>
