---
title_en: "CLAUDE.md and the Discipline of Standing Instructions"
title_tr: "CLAUDE.md ve Kalıcı Talimat Disiplini"
booklet_id: "001-01-0004"
category: "001-foundations"
language: "en"
version: "0.1.0"
date_published: "2026-05-29"
date_last_revised: "2026-05-29"
authors:
  - name: "Onour Impram"
    orcid: "0000-0003-1076-3928"
    role: "author, principal reviewer"
ai_assisted: true
ai_tools:
  - name: "Claude Code"
    vendor: "Anthropic"
    model_alias: "claude-opus-4-8"
    model_dated: null  # no dated identifier published by Anthropic for Opus 4.8 as of 2026-05-29
    role: "drafting, verification, citation lookup, bilingual authoring"
    interaction_mode: "interactive console"
ai_contribution_level: "full-draft"
human_review: "pending"
human_review_date: ""
verified_citations_count: 8
fabricated_citations_count: 0
disclosure_standard: "COPE 2023 + WAME 2023 + ICMJE 2024 + STM 2025 + EU AI Act 2024/1689 Art. 50 + ENAI"
translation_notes: "Re-authored from the Turkish version (tr.md) against the same outline and the same verified citation set. The regional and bilingual material is domesticated for an international audience while preserving the Turkish and Western Thrace specificity where relevant."
license:
  - "CC-BY-NC-SA-4.0 (prose)"
status: "draft"
---

# CLAUDE.md and the Discipline of Standing Instructions

> **Status.** This booklet is a full AI draft awaiting author review. Every citation has been independently verified. When review is complete, the `status` field will be set to `release` and the human review date recorded.

The first three booklets of this guide answered three questions in turn. What Claude Code is, why it differs from a chat window, and how to install it safely. Once installation is done, the first lasting decision a researcher makes is not technical but methodological. How do you write down what the tool should be reminded of at the start of every session. The concrete home of that decision is the `CLAUDE.md` file. This booklet treats `CLAUDE.md` not as a convenience setting but as a methodological instrument that shapes academic production.

## 1. Why an Instruction Is a Methodological Instrument

In a chat window every session starts from zero. The tool does not remember which style you asked for in the previous session, which citation rule you bind yourself to, or which ethical boundary you set. In the agent interface a standing context file closes that gap. The tool reads this file at the start of a session and learns who it works for, to which standards, and within which limits.

For the social scientist the meaning of this difference is plain. The instruction file becomes the single, auditable source of style, citation discipline, ethical boundaries, and methodological preferences. Instead of rewriting that you want APA 7 every time you work on a manuscript, you write the expectation once and fix it in place. Writing the instruction is the researcher externalizing a personal standard and translating it into a form the machine can read. This is the small but decisive step of turning a personal habit into an institution.

## 2. What CLAUDE.md Is, the Tool's Standing Context

`CLAUDE.md` is a plain markdown file placed at the project root that the agent reads automatically at the start of every session. Its content is open. Who the researcher is, the purpose of the project, the expected style, citation rules, file-organization habits, and impassable boundaries are expressed there in ordinary sentences. The file can operate in three layers. A global layer that holds across the whole machine, a project layer specific to a single project, and, when needed, a layer specific to a particular subdirectory.

This file differs from an instruction typed into a chat window in three fundamental ways. The first is persistence. A chat instruction is lost when the window closes, while `CLAUDE.md` lives on disk. The second is version control. When the file is kept inside a repository, the way the instruction has evolved can be traced over time. The third is shareability. The same file becomes a shared standard within a team, a laboratory, or a thesis-supervision relationship. These three properties turn the instruction from a transient request into a durable methodological infrastructure.

## 3. Prompt Sensitivity and the Case for Discipline

There is a good reason to write the instruction with care. Language models are surprisingly sensitive to small changes in the form of the prompt. Sclar et al. (2023) showed that minor changes in formatting alone, a space inserted here or a separator changed there, can produce large differences in accuracy in a few-shot setting. The same content, presented in a different form, can yield a different result.

The consequence for the social scientist is direct. Reproducibility depends on the stability of the prompt. If the instruction is given loosely and orally in every session, there is no guarantee that the results will stay the same. An instruction that is written, versioned, and tested brings this sensitivity under control. When the prompt is treated as part of academic method, its form becomes part of the method too. A scattered, oral prompt resembles an uncalibrated instrument. A fixed, written instruction resembles a calibrated one.

## 4. From Prompt Patterns to Durable Configuration

Prompt engineering is no longer a scattered knack but a surveyed field. White et al. (2023) collected the prompt patterns that work repeatedly into a catalog and showed that these patterns are reusable. Schulhoff et al. (2024) gathered the techniques of the field into a systematic survey. These works establish that a good prompt is not chance but a documentable practice.

Beyond individual prompt patterns, however, there is a more robust idea. Durable configuration. Here Knuth's (1984) notion of literate programming is instructive. Knuth argued that code should be written for a human to read and not only for a machine to run, and proposed arranging a program as a text explained to a person. `CLAUDE.md` carries the same spirit. It documents the tool's behavior in plain language that the next researcher, and your own future self, can read and understand. A good `CLAUDE.md` is not a heap of commands handed to a machine but a human-readable statement of a working standard.

## 5. CLAUDE.md as Reproducibility Infrastructure

Sandve et al. (2013) listed ten simple rules for reproducible computational research. The core of these rules reduces to a single principle. Every step of a process should be recorded and, as far as possible, automated, so that someone else, or the same researcher months later, can reproduce the same result. `CLAUDE.md` is a concrete instrument that carries this principle into an AI-assisted workflow.

When the model used, the instruction it followed, and the limits within which it operated are fixed in a single file, the AI component of the work is documented. A year later the same `CLAUDE.md` is the starting point for reproducing the same behavior. This answers one of the most fragile aspects of AI-assisted research directly, namely the irreproducibility of the process. The instruction file is the machine-facing side of a paper's methods section. The methods section tells the human reader what you did, and `CLAUDE.md` tells the tool the same thing.

## 6. What Belongs in CLAUDE.md for a Social Scientist

A good instruction file is concrete, not abstract. For the social scientist at least six headings are valuable. The first is identity and expertise. The tool should know whom it works with and at what level of interlocutor it is expected to operate. The second is style. Preferences such as the use of dashes and semicolons, a ban on emojis, and the tone of the language should be written down. The third is citation discipline. The expectation of APA 7, the prohibition of fabricated citations, and the requirement that every DOI be verified should be stated explicitly.

The fourth is ethical boundaries. Rules such as anonymizing clinical and personal data, KVKK and GDPR obligations, and never writing identifying information into shared documents belong in the file. The fifth is the language layer. A researcher working bilingually can define in which situation Turkish and in which situation English is expected. The sixth is the verification expectation. What the tool must demonstrate before it treats a task as complete should be written down. Each of these six headings turns the abstract principle of earlier booklets into concrete behavior at the level of the tool.

## 7. Limits, an Instruction Shapes Behavior but Does Not Guarantee Truth

A well-written `CLAUDE.md` is a powerful instrument, but if used without naming two limits openly it will mislead the researcher. The first limit is the probabilistic nature of the model. However good the instruction, the model is still a statistical system. An instruction lowers the error rate but does not zero it. The risk of reproducing statistical patterns without understanding persists even with the most careful instruction (Bender et al., 2021). The generated text can carry, at the epistemic level, a character indifferent to truth, in that it does not by itself attend to the difference between seeming true and being true (Hicks et al., 2024). For this reason the instruction does not replace the discipline of verification. It complements it.

The second limit is subtler. An instruction offloads cognitive load. Risko and Gilbert (2016) showed that cognitive offloading carries both benefit and cost. When what is offloaded is the burden of recall, the gain is clear, but when what is offloaded is reasoning itself, the loss is hidden. What `CLAUDE.md` should externalize is repetitive procedure. Which style is wanted, which form is expected. What it should not externalize is scholarly judgment. The meaning of a finding, the validity of an interpretation, and the weight of an ethical decision should remain with the researcher. The instruction delegates procedure, not judgment.

## 8. The Turkish and Western Thrace Specificity

The discipline of instruction takes on a distinct value in a bilingual and regional context. A single `CLAUDE.md` can serve as the shared context for a researcher working in both Turkish and English. The file defines once, in which situation which language is expected, and the nicety that Turkish diacritics must not be reduced to ASCII. For an academic moving back and forth between two languages this removes the constant burden of re-explanation.

Regional terms are also a subject for the instruction. Regional infrastructures such as DergiPark, ULAKBIM TR Dizin, and HEAL-Link, and the preferred spelling of place names such as Komotini, can be fixed in the file. For a researcher working in the Western Thrace minority context, the correct and consistent use of terms is not only formal but a matter of identity. `CLAUDE.md` turns this consistency from a personal preference into a documented standard.

## 9. The Next Booklet

`CLAUDE.md` tells the tool what to do at the start of every session. But the work itself to which these instructions are applied, its intermediate results and its accumulated decisions, has to live somewhere. The instruction shapes behavior, not memory. The next booklet addresses the architecture of persistent memory. Memory as Vault shows from first principles how to preserve academic context that spans years. Booklet 003-01-0001 continues from this point.

---

## References

Citations are in APA 7 format. Each DOI and identifier was independently verified against Crossref, arXiv, or the publisher page on 2026-05-29.

Bender, E. M., Gebru, T., McMillan-Major, A., & Shmitchell, S. (2021). On the dangers of stochastic parrots: Can language models be too big? In *Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency (FAccT '21)* (pp. 610-623). Association for Computing Machinery. https://doi.org/10.1145/3442188.3445922

Hicks, M. T., Humphries, J., & Slater, J. (2024). ChatGPT is bullshit. *Ethics and Information Technology*, 26(2), 38. https://doi.org/10.1007/s10676-024-09775-5

Knuth, D. E. (1984). Literate programming. *The Computer Journal*, 27(2), 97-111. https://doi.org/10.1093/comjnl/27.2.97

Risko, E. F., & Gilbert, S. J. (2016). Cognitive offloading. *Trends in Cognitive Sciences*, 20(9), 676-688. https://doi.org/10.1016/j.tics.2016.07.002

Sandve, G. K., Nekrutenko, A., Taylor, J., & Hovig, E. (2013). Ten simple rules for reproducible computational research. *PLoS Computational Biology*, 9(10), e1003285. https://doi.org/10.1371/journal.pcbi.1003285

Schulhoff, S., Ilie, M., Balepur, N., Kahadze, K., Liu, A., Si, C., et al. (2024). The prompt report: A systematic survey of prompt engineering techniques. *arXiv*. https://arxiv.org/abs/2406.06608

Sclar, M., Choi, Y., Tsvetkov, Y., & Suhr, A. (2023). Quantifying language models' sensitivity to spurious features in prompt design, or: How I learned to start worrying about prompt formatting. *arXiv*. https://arxiv.org/abs/2310.11324

White, J., Fu, Q., Hays, S., Sandborn, M., Olea, C., Gilbert, H., Elnashar, A., Spencer-Smith, J., & Schmidt, D. C. (2023). A prompt pattern catalog to enhance prompt engineering with ChatGPT. *arXiv*. https://arxiv.org/abs/2302.11382

---

**Booklet identifier.** `001-01-0004`
**Version.** `0.1.0`
**Date.** 2026-05-29
**Approximate word count.** 1601 (English body text, measured with wc)
**Verified citations.** 8
**Fabricated citations.** 0
**Previous booklet.** [`001-01-0003`](../001-01-0003/en.md). Installation, First Session, and Sanity Checks
**Next booklet.** [`003-01-0001`](../../003-memory-system/003-01-0001/en.md). Memory as Vault, A First-Principles Introduction
