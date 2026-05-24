---
title_en: "What is Claude Code? A Social Scientist's Perspective"
title_tr: "Claude Code Nedir? Sosyal Bilimci Bakışıyla"
booklet_id: "001-01-0001"
category: "001-foundations"
language: "en"
version: "0.1.0"
date_published: "2026-05-19"
date_last_revised: "2026-05-19"
authors:
  - name: "Onour Impram"
    orcid: "0000-0003-1076-3928"
    role: "author, principal reviewer"
ai_assisted: true
ai_tools:
  - name: "Claude Code"
    vendor: "Anthropic"
    model_alias: "claude-opus-4-7"
    model_dated: null  # no dated identifier published by Anthropic for Opus 4.7 as of 2026-05-19
    role: "drafting, verification, citation lookup, bilingual re-authoring"
    interaction_mode: "interactive console"
ai_contribution_level: "substantial-drafting"
human_review: "complete"
human_review_date: "2026-05-19"
verified_citations_count: 12
fabricated_citations_count: 0
disclosure_standard: "COPE 2023 + WAME 2023 + ICMJE 2024 + STM 2025 + EU AI Act 2024/1689 Art. 50 + ENAI"
translation_notes: "Re-authored from the Turkish version (tr.md) against the same outline and the same verified citation set. Examples and academic infrastructure references domesticated for an international audience while preserving the Turkish and Greek specificity where relevant."
license:
  - "CC-BY-NC-SA-4.0 (prose)"
status: "release"
---

# What is Claude Code? A Social Scientist's Perspective

This is the first booklet of the guide. It offers a conceptual frame for what Anthropic's Claude Code means for a working researcher, educator, or clinician in the social sciences. The framing is methodological rather than purely technical. The goal is to clarify where Claude Code adds real value to academic production, where it carries enduring risk, and why the answer to that question in 2026 will shape the practice of the next decade.

## 1. A Tool, or a Transformation?

To treat an artificial intelligence assistant as nothing more than a faster search engine is the same category of mistake as treating clinical case formulation as a list of diagnoses. Case formulation, unlike diagnosis, does not ask what the symptom is. It asks why this symptom appears in this patient at this time. To reduce Claude Code to a chat window or a search box is to miss what the social scientist actually needs. The real need is rarely a paragraph written word for word. The real need is the consistent tracing of one research question across ten sources, the documented record of an analysis protocol from beginning to end, the maintenance of a manuscript revision as a traceability matrix against eleven reviewer comments.

Claude Code lives beyond the chat window. It is an agent interface. It can read and write files, run a command in the terminal, remember what it has done within a session, and delegate tasks to other models or tools. This difference matters methodologically. For the social scientist, it means the tool shifts from being a notebook to being a laboratory assistant. The important thing is not automation. It is continuity. The years of field notes, hospital observations, interview transcripts, journal readings, course syllabi, peer review responses. All of these can now connect into a single research ecosystem.

That continuity does not produce intellectual quality on its own. The concept of stochastic parrots makes the risk of statistical reproduction without understanding precise and uncomfortable (Bender et al., 2021). The work of the social scientist is to build the framework that turns the tool into an intellectual partner. How that framework is constructed is the subject of the rest of this guide.

## 2. Technical Identity. Just What the Social Scientist Needs

One sentence captures the technical identity of Claude Code. It is a command-line application, built on Anthropic's large language models, capable of accessing the user's local files and development environment under explicit permission, writing and reading files, running code, fetching data over the network, and decomposing higher-level goals into subtasks executed in a modular agent system.

A social scientist should take three things from that sentence.

First, this is not a chat box in a browser tab. A browser session with ChatGPT or Claude.ai ends when the tab is closed. Claude Code can access your folders and files. It can read a note written in a previous session, append to it, and link it to another file. That difference is the difference between a notebook and a vault.

Second, this is an agent system. The word agent has a specific meaning here. An agent is not a simple command-response mechanism. It is a structure that can take a high-level goal, decompose it into subtasks, execute those subtasks in sequence, call on other tools when needed, gather results, and report back. The clinical analogy is the biopsychosocial model of case formulation (Engel, 1977). A patient is not approached as a symptom list but as a system operating simultaneously at biological, psychological, and social levels. The agent model treats a task in the same layered way, not as a single response but as a sequence of subtasks.

Third, this is a general-purpose model, not a tool specialized for the social sciences. That fact matters because Turkish academic literature, clinical psychology methodology, IRB protocols, COPE publication ethics, and similar domains depend on your direction. Research on the potential of large language models to transform computational social science has shown that the quality of that direction directly determines the quality of the output (Ziems et al., 2024).

In summary, for the social scientist, the technical identity of Claude Code is this. It is a research assistant that can access your local files and your terminal, can execute multi-step tasks, deepens as your framework deepens, and does not provide a framework you did not provide.

## 3. Who It Is For, Who It Is Not For

The position this booklet takes openly is the following. Claude Code is not for everyone.

The profiles where the tool genuinely adds value share a structure. A doctoral student running several research projects in parallel. A research assistant doing systematic qualitative coding across many interviews. A postdoctoral researcher answering five to eleven reviewer comments in a structured response. A faculty member reading twenty student theses for conceptual coherence. A clinical investigator preparing an IRB application with a fifty-source literature review. The common factor is high-volume, repeated, structured, verifiable work. Experimental evidence on the productivity effects of generative artificial intelligence has shown that AI assistance produces meaningful time savings and quality improvements on writing tasks of this kind (Noy & Zhang, 2023).

The profiles where the tool loses value should be stated with the same directness. For a researcher conducting a deeply ethnographic study on a single case, Claude Code cannot substitute for observational sensitivity in the field. An AI-assisted helper can be useful in organizing field notes, but it cannot stand in for the lived experience of participant observation. The same holds for a therapist working with a clinical case study. The tool cannot replace the concrete moment of the therapeutic encounter. This boundary is epistemological, not methodological.

Saying clearly who it is not for makes the case for who it is for more credible. The literature that examines the ethical limits of AI in scholarly writing emphasizes that the value of the tool depends on the structure of the task (Hosseini et al., 2023).

The next booklet (001-01-0002) describes the practical mechanics of the shift from chat window to working partner. The rest of this booklet covers a first contact scenario, regional specificity, the ethical layer, and a starting protocol.

## 4. A First Contact Scenario

A worked scenario is more useful than an abstract description. Consider the following.

A doctoral student is preparing a systematic review on the relationship between social media use among adolescents and generalized anxiety disorder. The student has assembled a Zotero library of two hundred PDF articles drawn from PubMed, Semantic Scholar, and PsycINFO. The work began three months ago. Now the student faces specific questions. Which articles used the Selvi and Lewinsohn model. Which were longitudinal in design. Which used Turkish or Arabic samples. Which were published before the DSM-5-TR update. Which lacked a control group.

The conventional approach is to open the two hundred PDFs one by one, scan title, abstract, and methods, fill in an Excel table, and then query the table. For a committed doctoral student, this is two to three weeks of intensive work.

The Claude Code approach sequences three operations on day one. The first operation reads and processes the metadata of the Zotero library. The second extracts mentions of specific concepts from the full text of each article. The third aggregates these extracts into a queryable structure. The three operations happen in a single session. The output is a table. The doctoral student performs manual verification on the table.

Three points in this scenario matter. First, the tool produces no summary of any article. The tool queries the full text and reports where a concept appears. The summarizing step belongs to the doctoral student. Second, the tool produces no citation. Citations are already drawn from the original source through Zotero. This reduces the risk of fabricated citations to zero. Third, the tool does not replace manual verification. The aggregation table passes through the eyes of the doctoral student. Evidence that AI-generated abstracts can fool experienced readers (Else, 2023) does not weaken the requirement for manual verification. It strengthens it.

This scenario contains the basic formula for usefulness in the social sciences. A structured task. A verifiable output. Human verification in the last step.

The real risk arises when this formula is violated. If the doctoral student instead instructs the tool to "summarize the two hundred articles and write a systematic review," the output will be syntactically valid and substantively unreliable. A careful philosophical reading of generative language models has demonstrated that the epistemic character of their output can extend, at the limit, into what one might describe as bullshit production (Hicks et al., 2024). Frankfurt's (2005) earlier philosophical treatment of bullshit as a category provides the conceptual scaffolding for this reading. For this reason, what matters is not the tool but the methodological framework imposed by the researcher using it.

## 5. The Turkish and Greek Academic Environment

International academic literature on AI tools tends to overlook the institutional realities of Türkiye, Greece, and the broader Mediterranean. One of the positions this guide maintains throughout is to fill that gap openly.

DergiPark is the institutional platform on which hundreds of Turkish academic journals are published. It provides free open access. It is Crossref integrated, so it produces DOIs. Claude Code can access an article published on DergiPark through its DOI. Filtering for articles indexed in ULAKBIM TR Dizin specifically requires additional configuration.

ULAKBIM TR Dizin is the list of quality-controlled Turkish journals. It is a critical reference for doctoral evaluation and academic promotion procedures in Türkiye. For the social science researcher, it is an important indicator of a paper's national visibility.

In Greece, HEAL-Link provides access to international journals through a joint subscription across Greek university libraries. A researcher at Democritus University in Komotini can access a journal article through HEAL-Link, but EZproxy configurations are not uniform across campuses. A researcher can run a PubMed search through the Claude Code PubMed MCP, but full-text access requires the local library proxy to be configured correctly.

These infrastructure details may look technical at first glance. Their impact on academic production is methodological. A researcher cannot map a literature without knowing which sources are accessible. The AI tool does not solve these obstacles automatically. A coherent guide to configuration, however, can dramatically reduce the time the researcher spends on infrastructure. Category 002 of this guide (Academic Access) is dedicated entirely to this topic.

## 6. The Ethical Layer. First-Tier Warnings

In AI-assisted academic production, ethics is not a section to be appended later. It is a framework to be set at the beginning. First-tier warnings can be summarized under five headings.

The first is citation integrity. Asking Claude Code to "suggest a source on topic X" always carries the risk of producing a fabricated citation. The operational rule of this guide is clear. Every citation suggested by the tool must be verified against an independent index (Crossref, PubMed, Semantic Scholar, ULAKBIM TR Dizin, DergiPark) before it enters the reference list.

The second is confidentiality. Clinical data, interview transcripts, and non-anonymized field notes must under no circumstances be shared with the tool. The open use of AI in scholarly communication requires a systematic disclosure standard. The international consensus published on the five priorities for research (van Dis et al., 2023) places data minimization first. The rule of this guide is to not share clinical data with the tool unless it has been anonymized in a way that the institutional ethics committee has approved.

The third is authorship and disclosure. The debate over listing ChatGPT as an author on scientific papers was answered clearly by COPE, ICMJE, and WAME. Artificial intelligence cannot be an author. The use of AI assistance, however, must be explicitly disclosed in the methods or acknowledgements (Stokel-Walker, 2023). The rule of this guide is that every booklet carries a disclosure block in its frontmatter.

The fourth is the social reflection of language models. The risks of large language models have been mapped taxonomically (Weidinger et al., 2022). For the social scientist, the most relevant risk categories are misinformation generation, disinformation propagation, scale effects, and cultural bias. Bias in Turkish content can manifest differently from bias in English content. For this reason, manual review of Turkish output should be more careful than review of English output.

The fifth is structural inequality. The transformation that large language models bring to higher education has the potential to deepen rather than narrow resource inequalities. This has been documented in the academic literature (Milano et al., 2023). The work of this guide is not to accept that inequality. It is to act against it explicitly.

## 7. A Practical Starting Protocol

A three-step mental preparation protocol determines the direction of the first week.

The first step is the clarification of task type. For which kind of academic production will you use the tool. Literature review. Systematic review. Manuscript revision. Course design. IRB application. Reviewer response letter. Each task type requires a different configuration. Using the tool as a general-purpose "everything assistant" produces a weak start.

The second step is the preparation of a vault. The vault is a persistent folder structure where collected academic notes live. Markdown files, frontmatter, file tree, maps of content. Category 004 of this guide is dedicated entirely to this topic. The vault does not have to be complete in the first week. Three folders are enough. Current research. Current writing. Current reading list.

The third step is the habituation of disclosure. From the first week onward, any text written with the assistance of the tool must carry a footer that records the level of assistance. This is not merely a formality. The structure of academic production is such that, when work is eventually placed in front of a reviewer, an editor, or a student, the disclosure document must already exist.

None of these three steps is technical. All three are methodological.

## 8. Conclusion and Next Step

Claude Code is a tool that closes the gap between a notebook and a laboratory assistant for the social science researcher. The value of the tool is proportional to the methodological framework brought by the user. That framework bans fabricated citations, protects clinical data, sets disclosure at the start, and clarifies task type.

The next booklet describes the practical mechanics of the shift from chat window to working partner. Which commands, which permissions, which session structure, which failure modes. Booklet 001-01-0002 (The Agentic Shift) continues from this point.

The remainder of the booklet sequence builds on the structural position set out in this first booklet. Each booklet deepens its own topic while assuming this initial frame.

---

## References

Citations are in APA 7 format. Each DOI was independently verified against Crossref on 2026-05-19.

Bender, E. M., Gebru, T., McMillan-Major, A., & Shmitchell, S. (2021). On the dangers of stochastic parrots: Can language models be too big? In *Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency (FAccT '21)* (pp. 610-623). Association for Computing Machinery. https://doi.org/10.1145/3442188.3445922

Else, H. (2023). Abstracts written by ChatGPT fool scientists. *Nature*, 613(7944), 423. https://doi.org/10.1038/d41586-023-00056-7

Engel, G. L. (1977). The need for a new medical model: A challenge for biomedicine. *Science*, 196(4286), 129-136. https://doi.org/10.1126/science.847460

Frankfurt, H. G. (2005). *On bullshit*. Princeton University Press. ISBN 978-0-691-12294-6

Hicks, M. T., Humphries, J., & Slater, J. (2024). ChatGPT is bullshit. *Ethics and Information Technology*, 26(2), 38. https://doi.org/10.1007/s10676-024-09775-5

Hosseini, M., Rasmussen, L. M., & Resnik, D. B. (2023). Using AI to write scholarly publications. *Accountability in Research*, 30(7-8), 1-9. https://doi.org/10.1080/08989621.2023.2168535

Milano, S., McGrane, J. A., & Leonelli, S. (2023). Large language models challenge the future of higher education. *Nature Machine Intelligence*, 5(4), 333-334. https://doi.org/10.1038/s42256-023-00644-2

Noy, S., & Zhang, W. (2023). Experimental evidence on the productivity effects of generative artificial intelligence. *Science*, 381(6654), 187-192. https://doi.org/10.1126/science.adh2586

Stokel-Walker, C. (2023). ChatGPT listed as author on research papers: Many scientists disapprove. *Nature*, 613(7945), 620-621. https://doi.org/10.1038/d41586-023-00107-z

van Dis, E. A. M., Bollen, J., Zuidema, W., van Rooij, R., & Bockting, C. L. (2023). ChatGPT: Five priorities for research. *Nature*, 614(7947), 224-226. https://doi.org/10.1038/d41586-023-00288-7

Weidinger, L., Uesato, J., Rauh, M., Griffin, C., Huang, P.-S., Mellor, J., Glaese, A., Cheng, M., Balle, B., Kasirzadeh, A., Biles, C., Brown, S., Kenton, Z., Hawkins, W., Stepleton, T., Birhane, A., Hendricks, L. A., Rimell, L., Isaac, W., ... Gabriel, I. (2022). Taxonomy of risks posed by language models. In *2022 ACM Conference on Fairness, Accountability, and Transparency* (pp. 214-229). Association for Computing Machinery. https://doi.org/10.1145/3531146.3533088

Ziems, C., Held, W., Shaikh, O., Chen, J., Zhang, Z., & Yang, D. (2024). Can large language models transform computational social science? *Computational Linguistics*, 50(1), 237-291. https://doi.org/10.1162/coli_a_00502

---

**Booklet identifier.** `001-01-0001`
**Version.** `0.1.0`
**Date.** 2026-05-19
**Approximate word count.** 2442 (English body text, measured with wc)
**Verified citations.** 12
**Fabricated citations.** 0
**Previous booklet.** None (first booklet)
**Next booklet.** [`001-01-0002`](../001-01-0002/en.md). The Agentic Shift: From Chat Window to Working Partner
