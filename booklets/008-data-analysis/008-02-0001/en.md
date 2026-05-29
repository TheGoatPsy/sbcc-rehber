---
title_en: "Statistical Test Selection with AI Consultation Discipline"
title_tr: "Yapay Zekâ Danışma Disipliniyle İstatistiksel Test Seçimi"
booklet_id: "008-02-0001"
category: "008-data-analysis"
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
ai_contribution_level: "substantial-drafting"
human_review: "complete"
human_review_date: "2026-05-29"
verified_citations_count: 9
fabricated_citations_count: 0
disclosure_standard: "COPE 2023 + WAME 2023 + ICMJE 2024 + STM 2025 + EU AI Act 2024/1689 Art. 50 + ENAI"
translation_notes: "Re-authored from the Turkish version (tr.md) against the same outline and the same verified citation set. The argument and the bibliographic set are identical across both languages; phrasing is native to each."
license:
  - "CC-BY-NC-SA-4.0 (prose)"
status: "release"
---

# Statistical Test Selection with AI Consultation Discipline

The first booklet of this category set the reproducibility backbone of agentic quantitative analysis. This booklet turns to the inferential heart of that analysis. The decision about which test to run. Anthropic's 2026 survey records that the social scientists it surveyed reach for a coding agent most of all to analyze quantitative data, and that those same researchers feared AI worsening selective reporting (Lyttelton et al., 2026). Test selection is precisely where that fear either materializes or is disciplined out. When an agent can propose any test in an instant, which test you choose is no longer a slow deliberation but a decision one prompt away. This booklet is about the discipline that keeps that consultation honest and defensible.

## 1. Why Test Selection Is the Critical Decision in the Agentic Era

A statistical test is an inferential commitment. Which test you run determines what you can claim from the data. An agent compresses this decision into a single move. It proposes a test, explains its rationale, runs it, and interprets the result. The survey reports that usage among its respondents has concentrated in this direction, toward autonomous analysis (Lyttelton et al., 2026).

Test selection used to be slow. The researcher would think hard, perhaps consult a statistician. That slowness offered an inadvertent protection. Now the agent is an always-available consultant. The speed has changed, but the responsibility has not. The constant readiness of the consultant does not lift from the researcher the burden of carrying the decision's justification. To select a test is to accept the world it assumes, the level of measurement it requires, and the sample structure it presupposes. It is the researcher, not the agent, who signs that acceptance.

## 2. Researcher Degrees of Freedom and the Flexibility of Test Choice

The choices a researcher makes in the face of a dataset form a set of degrees of freedom. Simmons et al. (2011) show experimentally that these degrees of freedom, when left undisclosed, can make almost any result appear statistically significant. Test selection is among the largest of these degrees of freedom. The same hypothesis can come out non-significant under one parametric test and significant under another.

Wicherts et al. (2016) collect the degrees of freedom in planning, running, analyzing, and reporting psychological studies into a checklist, and show how they lead to p-hacking. The value of that list is that it makes choices visible in advance. When an agent is asked which test to use, it can offer several options, and the most tempting option is often the one that returns significance. The Wicherts et al. checklist is the discipline that restrains that temptation on the human side. The degrees of freedom are enumerated before the agent is consulted.

## 3. The Garden of Forking Paths, in Test Selection

Gelman and Loken (2014) call the situation in which data-dependent analytic choices create an invisible tree of multiple comparisons the garden of forking paths. Test selection is the most frequently walked path in that garden. To look at the data, see that the distribution departs from normality, then switch to a non-parametric test, and have that test come out significant, is a data-dependent decision even when the intent is honest. When the decision is made after seeing the data, the reported p-value is no longer an honest probability.

An agent reduces every path to one prompt away. The test alternatives a researcher would spend hours on, the agent tries in seconds and presents the cleanest-looking one. The forking does not disappear. It accelerates and hides from view. For this reason the forking-paths problem in test selection demands more attention in an agentic workflow, not less.

## 4. Multiverse Analysis, Agentic Speed Turned Into a Virtue

A powerful answer to this problem is to expose every specification rather than hide one. Steegen et al. (2016) propose multiverse analysis, which systematically computes the space of results produced by all defensible analytic choices. Instead of one result from one test, the distribution of results from all reasonable tests is reported. Silberzahn et al. (2018) show empirically that many independent teams analyzing the same dataset reach different conclusions through different analytic choices. The lesson is that analytic decisions are not a trivial detail but a force that shapes the finding itself.

Here agentic speed turns from a flaw into a virtue. Multiverse analysis was expensive by hand. Building and running dozens of specifications one by one took days. The agent, precisely because it is inclined to try everything, makes that analysis cheap. Rather than leaving the agent's eagerness to try every test as a hidden fishing expedition, steer it into an openly reported specification curve. Provided the set of specifications is fixed before the results are inspected, the same convenience stops being the instrument of selective reporting and becomes the instrument of transparency.

## 5. Separating Pre-specification From Exploration

Even multiverse reporting requires the confirmatory claim to be fixed in advance. Nosek et al. (2018) argue that preregistration brings degrees of freedom under control by separating confirmatory from exploratory analysis. In agentic test selection the meaning is clear. Write down the primary test and its assumptions before consulting the agent. Every alternative the agent proposes during exploration is labeled exploratory and does not replace the confirmatory result.

This is the specification log of the previous booklet, applied to test selection (booklet 008-01-0001). Consultation is welcome, but the commitment is made beforehand. When the agent proposes a test, the question is this. Was the test chosen after seeing the data, or at the planning stage. When that distinction is entered in the log, the richness the agent produces becomes not a threat but a sensitivity analysis.

## 6. The Finder Is Never the Grader, Applied to a Test's Assumptions

The recurring principle of this guide is that the tool that produces a finding cannot be the authority that confirms it. In statistical test selection this principle touches the test's assumptions. An agent can run a test and declare the assumptions met, when it has not genuinely checked the diagnostics of normality, equal variance, or independence. The rationale it produces can be fluent and still be wrong.

The source of this risk lies in the nature of the model. The model is a system that produces statistical patterns without understanding, and the risk persists even under the most careful instruction (Bender et al., 2021). The generated text can have, at the epistemic level, a character indifferent to the difference between seeming true and being true (Hicks et al., 2024). For this reason the agent's test recommendation is not a verdict but a hypothesis to be verified. The researcher reads the assumption diagnostics against the raw output independently, and does not trust the agent's sentence that the assumptions are met.

## 7. Take the Consultation, Do Not Delegate the Decision

In agentic analysis the line between what can and cannot be delegated is especially sharp in test selection. What can be delegated is the consultation itself. The agent can list candidate tests, explain trade-offs, and compute each one. What cannot be delegated is the decision. Which test answers the research question, and which assumption is defensible under the field's theory and the data's context, remains with the researcher.

This is the essence of consultation discipline. The agent is treated as a knowledgeable but non-accountable consultant. Taking its advice is legitimate, but you must be able to defend that advice on your own. The instruction file externalizes procedure, not judgment (booklet 001-01-0004). The agent computes the test, the researcher selects the test and stands behind the result.

## 8. In Practice, a Test-Selection Consultation Protocol

This discipline reduces to a concrete, applicable protocol. First, write down the primary test and its assumptions before consulting the agent, and enter them in the log. Second, ask the agent to enumerate not a single test but the full set of defensible alternatives. Third, run the multiverse analysis of the reasonable specifications and report the distribution of results, not one clean result. Fourth, verify the assumption diagnostics independently against the raw output. Fifth, separate confirmatory and exploratory analyses in the log. Sixth, disclose the agent's consultative role in the methods or contribution statement.

This protocol unites the degrees-of-freedom checklist of Wicherts et al. (2016), multiverse reporting, and the preregistration mindset into an agentic consultation workflow. The agent is a consultant that scans the space of tests quickly. The protocol harnesses that speed in the service of transparency. Without it, the convenience of the consultant feeds selective reporting. With it, the consultation becomes part of a defensible inference.

## 9. The Next Booklet

This booklet tied test selection to a discipline of consultation. The next booklet in the data analysis category will address AI assistance and human oversight in qualitative coding. Meanwhile, the honest disclosure of the agent's analytic role fits into a broader frame in the ethics booklet. Booklet 009-01-0001 continues from this point.

---

## References

Citations are in APA 7 format. Each DOI and identifier was independently verified against Crossref, doi.org, or the publisher page on 2026-05-29.

Bender, E. M., Gebru, T., McMillan-Major, A., & Shmitchell, S. (2021). On the dangers of stochastic parrots: Can language models be too big? In *Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency (FAccT '21)* (pp. 610-623). Association for Computing Machinery. https://doi.org/10.1145/3442188.3445922

Gelman, A., & Loken, E. (2014). The statistical crisis in science. *American Scientist*, 102(6), 460. https://doi.org/10.1511/2014.111.460

Hicks, M. T., Humphries, J., & Slater, J. (2024). ChatGPT is bullshit. *Ethics and Information Technology*, 26(2), 38. https://doi.org/10.1007/s10676-024-09775-5

Lyttelton, T., Massenkoff, M., & Wilmers, N. (2026). *Coding agents in the social sciences*. Anthropic. https://www.anthropic.com/research/coding-agents-social-sciences

Nosek, B. A., Ebersole, C. R., DeHaven, A. C., & Mellor, D. T. (2018). The preregistration revolution. *Proceedings of the National Academy of Sciences*, 115(11), 2600-2606. https://doi.org/10.1073/pnas.1708274114

Silberzahn, R., Uhlmann, E. L., Martin, D. P., Anselmi, P., Aust, F., Awtrey, E., Bahník, Š., Bai, F., Bannard, C., Bonnier, E., Carlsson, R., Cheung, F., Christensen, G., Clay, R., Craig, M. A., Dalla Rosa, A., Dam, L., Evans, M. H., Flores Cervantes, I., ... Nosek, B. A. (2018). Many analysts, one data set: Making transparent how variations in analytic choices affect results. *Advances in Methods and Practices in Psychological Science*, 1(3), 337-356. https://doi.org/10.1177/2515245917747646

Simmons, J. P., Nelson, L. D., & Simonsohn, U. (2011). False-positive psychology: Undisclosed flexibility in data collection and analysis allows presenting anything as significant. *Psychological Science*, 22(11), 1359-1366. https://doi.org/10.1177/0956797611417632

Steegen, S., Tuerlinckx, F., Gelman, A., & Vanpaemel, W. (2016). Increasing transparency through a multiverse analysis. *Perspectives on Psychological Science*, 11(5), 702-712. https://doi.org/10.1177/1745691616658637

Wicherts, J. M., Veldkamp, C. L. S., Augusteijn, H. E. M., Bakker, M., van Aert, R. C. M., & van Assen, M. A. L. M. (2016). Degrees of freedom in planning, running, analyzing, and reporting psychological studies: A checklist to avoid p-hacking. *Frontiers in Psychology*, 7, 1832. https://doi.org/10.3389/fpsyg.2016.01832

---

**Booklet identifier.** `008-02-0001`
**Version.** `0.1.0`
**Date.** 2026-05-29
**Approximate word count.** 1430 (English body text)
**Verified citations.** 9
**Fabricated citations.** 0
**Previous booklet.** [`008-01-0001`](../008-01-0001/en.md). Reproducible Quantitative Workflows
**Next booklet.** [`009-01-0001`](../../009-ethics-irb/009-01-0001/en.md). Ethics in AI-Assisted Research, From Principle to Behavior
