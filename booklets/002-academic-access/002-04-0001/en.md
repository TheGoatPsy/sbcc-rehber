---
title_en: "DergiPark, ULAKBIM TR Dizin, HEAL-Link, and Regional Indexing"
title_tr: "DergiPark, ULAKBIM TR Dizin, HEAL-Link ve Bölgesel İndeksleme"
booklet_id: "002-04-0001"
category: "002-academic-access"
language: "en"
version: "0.1.0"
date_published: "2026-05-24"
date_last_revised: "2026-05-24"
authors:
  - name: "Onour Impram"
    orcid: "0000-0003-1076-3928"
    role: "author, principal reviewer"
ai_assisted: true
ai_tools:
  - name: "Claude Code"
    vendor: "Anthropic"
    model_alias: "claude-opus-4-7"
    model_dated: null  # no dated identifier published by Anthropic for Opus 4.7 as of 2026-05-24
    role: "drafting, verification, citation lookup, bilingual re-authoring"
    interaction_mode: "interactive console"
ai_contribution_level: "co-drafting"
human_review: "complete"
human_review_date: "2026-05-24"
verified_citations_count: 10
fabricated_citations_count: 0
disclosure_standard: "COPE 2023 + WAME 2023 + ICMJE 2024 + STM 2025 + EU AI Act 2024/1689 Art. 50 + ENAI"
translation_notes: "English re-authored from the Turkish source, not a literal translation. Regional terminology (DergiPark, TR Dizin, HEAL-Link, akademik teşvik) preserved with explanatory glosses for an international reader."
license:
  - "CC-BY-NC-SA-4.0 (prose)"
status: "release"
signature_booklet: true
---

# DergiPark, ULAKBIM TR Dizin, HEAL-Link, and Regional Indexing

The previous category established the installation and first session of Claude Code. This category addresses the first real question that arises after setup. How does a scholar who publishes in Turkish or Greek reach their sources reliably. This booklet is the guide's signature contribution, because it fills a category that international artificial intelligence guides structurally leave empty. The aim is not a tool walkthrough but a map of regional academic infrastructure, and a way to connect that infrastructure to a Claude Code workflow.

## 1. Why International Guides Omit This Category

Almost all international guides on artificial intelligence assisted academic workflows assume English-language literature and the indexing infrastructure of the English-speaking world. Web of Science, Scopus, Google Scholar, Semantic Scholar. This infrastructure covers a large share of the world's scientific output, but not all of it. There is a structural asymmetry here. Scientific citation databases systematically under-represent non-English output. This is not an opinion but a measured fact. van Leeuwen and colleagues (2001) documented the language bias of the Science Citation Index and the distortion it introduces into international comparisons of national research performance. Mongeon and Paul-Hus (2016), comparing the journal coverage of Web of Science and Scopus, demonstrated empirically that both databases cover certain languages and disciplines more weakly than others.

The practical consequence of this asymmetry is the following. A social scientist in Turkey or Greece who builds a Claude Code workflow resting only on international databases will fail to see a substantial part of the literature in their own language. A systematic review, a theoretical framework, a doctoral thesis scan will remain incomplete because of this blind spot. Regional indexing infrastructure is therefore not an advanced feature but a mandatory component of a consistent workflow. This booklet provides the map of that component and a protocol for filling it. It addresses first the Turkish infrastructure, then the Greek infrastructure, then the technical realities of access, and finally a concrete workflow.

## 2. DergiPark, Turkey's Journal Platform

DergiPark is the platform, hosted by TÜBİTAK ULAKBİM, where hundreds of Turkish academic journals are published under a single roof (TÜBİTAK ULAKBİM, 2024). For the social scientist, DergiPark's most important feature is its integration with Crossref. This integration means the articles on the platform receive a Digital Object Identifier, that is, a DOI. The existence of a DOI is the most robust way to reach an article through Claude Code, because a DOI is the permanent, unchanging address of an article.

In practice this works as follows. If you have the DOI of a DergiPark article, you can have Claude Code retrieve the bibliographic metadata through that DOI. The mechanism called DOI content negotiation returns an article's record in structured form when the DOI address is reached with a request for a particular format.

```bash
# Retrieve a DOI's metadata as BibTeX (the same Crossref content negotiation a DergiPark DOI uses)
curl -LH "Accept: application/x-bibtex" https://doi.org/10.3390/publications7010018
```

This command goes through doi.org to Crossref and returns the article's record as BibTeX. Once the record arrives, Claude Code can convert it to APA 7 format, add it to a reference file in your vault, or check its consistency against your bibliography. DergiPark's Crossref integration is the bridge that connects Turkish literature to the international bibliographic infrastructure. Without this bridge, Turkish sources would have to be entered manually every time.

## 3. ULAKBİM TR Dizin, the Quality-Controlled List

ULAKBİM TR Dizin is Turkey's national citation index, and it serves a function distinct from DergiPark (TÜBİTAK ULAKBİM, 2026). Where DergiPark is a publishing platform, TR Dizin is a quality filter. A journal's inclusion in TR Dizin means it meets certain evaluation criteria covering publication ethics, peer review process, and formal standards. This distinction is critical for the social scientist, because journals included in TR Dizin carry substantial weight in doctoral qualification, academic incentive, and appointment and promotion processes.

The structural coverage gap demonstrated by Mongeon and Paul-Hus (2016) has a direct practical consequence here. In the social sciences, a substantial share of the journals in TR Dizin do not appear in Web of Science or Scopus. This does not mean those journals lack quality, only that they fall outside the coverage policy of international commercial databases. A Turkish social scientist therefore often has to track TR Dizin manually. Claude Code can take on a filtering role here. While conducting a literature scan, you can give the model a configuration instruction such as "collect only the journals within TR Dizin coverage under a separate heading." This organizes the scan output according to the requirements of national evaluation processes.

## 4. YÖK Thesis Center, the Doctoral Thesis Base

The Council of Higher Education Thesis Center is the central archive of theses completed at Turkish universities since 1987 (YÖK, 2026). This archive is valuable to the social science researcher for two reasons. First, it is a large knowledge base that is unpublished yet has passed peer scrutiny. A doctoral thesis often contains a more detailed methods section and a broader literature review than an article. Second, it is the best way to trace the historical development of a field in Turkey, because theses are accessible chronologically.

When working with Claude Code, it is important to establish a consistent reference format for records coming from the Thesis Center. Because theses carry no DOI, the metadata is entered manually. Keeping a standard thesis record template in your vault preserves consistency across subsequent scans. When you give the model a thesis record, you can ask it to convert it to the APA 7 unpublished doctoral dissertation format and add it to your reference file. The Thesis Center is a source type that international databases cover almost not at all, and it is therefore a distinguishing part of the regional workflow.

## 5. HEAL-Link, the Greek Academic Consortium

On the Greek side the fundamental infrastructure is HEAL-Link, the Hellenic Academic Libraries Link consortium (HEAL-Link, 2026). HEAL-Link brings together the academic institutions of Greece under a shared subscription umbrella, and in this way provides member institutions with access to the packages of large publishers such as Springer Nature, Wiley, and Elsevier. Because Greece is a member of the European Union, the consortium structure and the large publisher agreements operate in alignment with Union-level open access policies.

Democritus University in Komotini offers a concrete example. When a psychology researcher employed at or affiliated with Democritus wishes to access a psychology article through HEAL-Link, the access proceeds through institutional authentication. This authentication usually runs through an intermediary system called EZproxy. EZproxy connects the user's institutional account to the publisher's access control, so that subscription content can be reached from off campus as well.

```text
# The basic logic of access through EZproxy
User -> Institutional login (EZproxy) -> Publisher access control -> Full text
```

Claude Code does not download the full text directly in this chain, because full text access is tied to the user's institutional identity and must remain within the limits of the user agreement. Instead, Claude Code organizes the article's record, its DOI, and its access address, making it easier for the user to reach the full text through their own browser.

## 6. EZproxy and Institutional VPN Realities

Off-campus access can be a practical obstacle in both Turkey and Greece. EZproxy and institutional virtual private networks make access to subscription resources possible by carrying the user's institutional identity, but this access has limits. First, access is tied to the user, not to the institution and not to the machine. When a researcher leaves the institution, the access ends as well. Second, automated bulk downloading is explicitly prohibited in most publisher agreements. If a Claude Code workflow attempts to download hundreds of articles automatically in a single session, the institution's access may be suspended by the publisher.

For this reason the basic rule of the regional workflow is the following. Claude Code operates at the level of records, DOIs, and access addresses, while full text downloading is done through the user's own browser and institutional identity, within the limits of the agreement. This rule is both ethical and practical. It keeps access sustainable and prevents the institutional subscription from being put at risk.

## 7. The Relationship Between Academic Incentive and Indexing

In Turkey the academic incentive regulation is a system that scores a scholar's annual output and provides additional payment in return. In this system the score of a publication varies according to the database in which its journal is indexed. A journal in certain Web of Science indexes is scored differently from a journal in TR Dizin. This scoring directly affects the scholar's choice of journal.

This booklet does not give the specific figures of the incentive rules, because the regulation changes almost every year and a figure tied to a specific year would quickly date the booklet. What matters is the principle. The choice of indexing produces, for a scholar, not merely visibility but a concrete institutional evaluation outcome. When conducting a literature scan or a journal selection with Claude Code, having the model track indexing information as a separate field lets the scholar bring this institutional reality into the workflow. The information about which database a journal is indexed in should always remain visible in the scan output.

## 8. Example Workflow, a Literature Scan in Three Languages

This section shows where the previous sections converge. Suppose a social anxiety researcher wishes to collect Turkish, Greek, and English literature within a single scan. The traditional approach is to run three separate searches and merge the results manually. The structured approach with Claude Code organizes these three layers into a single workflow.

First the source layers are defined. International databases for the English layer, DergiPark and TR Dizin for the Turkish layer, and the publisher packages reached through HEAL-Link for the Greek layer. Connecting Claude Code to external tools is done through the Model Context Protocol, that is, MCP. When a bibliographic MCP server is configured, the model carries out searching and record retrieval through that server.

```json
{
  "mcpServers": {
    "bibliographic-search": {
      "command": "<bibliographic MCP server>",
      "args": ["--source", "crossref"],
      "env": {}
    }
  }
}
```

This configuration is a skeleton, and the real server name varies according to the bibliographic MCP the user prefers. What matters is the architecture. The model performs record-level operations through a structured tool, while full text access remains within the user's institutional identity. When the scan is complete, the model merges the three layers into a single bibliography, keeping which layer and which index each record came from in separate fields. This produces a holistic map of the social anxiety literature that crosses language boundaries. Tenopir and colleagues (2019), in an international study of how scholars search for and read articles, showed how sensitive researchers are to access friction. A structured workflow reduces this friction and so preserves the researcher's time.

## 9. Cross-Language Citation Considerations

When citing a Turkish or Greek source in an English article, several formal and ethical considerations come into play. Formally, APA 7 preserves the title in its original language and adds an English translation in square brackets. This rule preserves the original identity of the source while providing accessibility for the English reader. Claude Code can convert the record of a Turkish source into this format, but the accuracy of the translation is the author's responsibility, because title translation is sensitive to field-specific terminology.

At the ethical level, the language asymmetry also brings with it a visibility problem. Larivière and colleagues (2015), demonstrating the oligopolistic structure of academic publishing in the digital era, showed that which output is visible is to a large extent determined by commercial infrastructure. Within this structure, citing a Turkish or Greek source in an English article is not merely a formal operation but a choice that makes invisible output visible. Carrying regional literature into international debate aligns with the infrastructural aim of this booklet.

## 10. The Ethical Layer, the Limits of User Agreements

The user agreements of Turkish and Greek libraries and publisher packages determine what may and may not be done. These limits must always be observed in a Claude Code workflow. Automated bulk downloading is prohibited, access is personal and non-transferable, and subscription content may not be transferred outside the consortium. These rules preserve the sustainability of access.

A further ethical layer is source quality. Demir (2018), examining who publishes in predatory journals and why from a Turkish perspective, showed how critical quality control is for the social sciences. This booklet names no specific journals, because such lists change quickly and a false accusation carries serious consequences. Instead it proposes a principle-level safeguard. TR Dizin coverage, consortium membership, and institutional library approval together form a multi-layered filter for the trustworthiness of a source. The open science framework completes this filter. UNESCO's (2021) recommendation on open science offers an international policy foundation that treats access, quality, and equity together.

## 11. Bridge, to the Memory System

After establishing the academic access infrastructure, keeping the incoming documents in a long-lived memory system is the second critical step. A literature scan, records collected in three languages, a doctoral thesis scan. All of these must be findable again in a later session. Here it is not a tool choice but an engineering pattern that comes into play. The next category establishes the Memory as Vault pattern from its first principles and shows how every incoming document is held in a persistent, retrievable structure.

## References

Demir, S. B. (2018). Predatory journals: Who publishes in them and why. *Journal of Informetrics*, 12(4), 1296-1311. https://doi.org/10.1016/j.joi.2018.10.008

HEAL-Link. (2026). *Hellenic Academic Libraries Link consortium*. https://www.heal-link.gr

Larivière, V., Haustein, S., & Mongeon, P. (2015). The oligopoly of academic publishers in the digital era. *PLOS ONE*, 10(6), e0127502. https://doi.org/10.1371/journal.pone.0127502

Mongeon, P., & Paul-Hus, A. (2016). The journal coverage of Web of Science and Scopus: A comparative analysis. *Scientometrics*, 106(1), 213-228. https://doi.org/10.1007/s11192-015-1765-5

Tenopir, C., Christian, L., & Kaufman, J. (2019). Seeking, reading, and use of scholarly articles: An international study of perceptions and behavior of researchers. *Publications*, 7(1), 18. https://doi.org/10.3390/publications7010018

TÜBİTAK ULAKBİM. (2024). *DergiPark Akademik platform*. https://dergipark.org.tr

TÜBİTAK ULAKBİM. (2026). *TR Dizin journal evaluation criteria*. https://trdizin.gov.tr

UNESCO. (2021). *UNESCO recommendation on open science* (SC-PCB-SPP/2021/OS/UROS). https://unesdoc.unesco.org/ark:/48223/pf0000379949

van Leeuwen, T. N., Moed, H. F., Tijssen, R. J. W., Visser, M. S., & van Raan, A. F. J. (2001). Language biases in the coverage of the Science Citation Index and its consequences for international comparisons of national research performance. *Scientometrics*, 51(1), 335-346. https://doi.org/10.1023/A:1010549719484

YÖK. (2026). *Council of Higher Education National Thesis Center*. https://tez.yok.gov.tr

---

**Booklet ID.** `002-04-0001`
**Version.** `0.1.0`
**Date.** 2026-05-24
**Word count (approx.).** 2245 (English body text, measured with wc)
**Verified citations.** 10
**Hallucinated citations.** 0
**Previous booklet.** [`001-01-0003`](../../001-foundations/001-01-0003/en.md). Installation, First Session, and Sanity Checks
**Next booklet.** [`003-01-0001`](../../003-memory-system/003-01-0001/en.md). Memory as Vault, A First-Principles Introduction
