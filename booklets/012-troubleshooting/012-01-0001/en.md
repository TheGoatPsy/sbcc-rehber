---
title_en: "When Things Go Wrong, A Working Troubleshooting Protocol"
title_tr: "İşler Ters Gittiğinde, Çalışan Bir Sorun Giderme Protokolü"
booklet_id: "012-01-0001"
category: "012-troubleshooting"
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
verified_citations_count: 7
fabricated_citations_count: 0
disclosure_standard: "COPE 2023 + WAME 2023 + ICMJE 2024 + STM 2025 + EU AI Act 2024/1689 Art. 50 + ENAI"
translation_notes: "English re-authored from the Turkish source, not a literal translation. All worked troubleshooting examples are synthetic, derived from no real incident, in keeping with the vault sanitization protocol."
closing_booklet: true
license:
  - "CC-BY-NC-SA-4.0 (prose)"
status: "paired"
---

# When Things Go Wrong, A Working Troubleshooting Protocol

The previous booklet treated the reviewer response letter as the highest-stakes text type, and in its last sentence it pointed to the fact that things can go wrong while Claude Code runs and that letter is being written. This booklet moves to the moment it pointed at. When a command gives an unexpected result, when a model response hits the context limit, when a citation simply will not verify, or when an agent makes an unexpected decision, the social science researcher needs not a list of command-line errors but a framework of reasoning. Error messages age, versions change, the surface of tools keeps shifting. What does not age is the way of thinking that narrows a problem and leads it to its root cause. This closing booklet presents that way of thinking as a seven-step protocol and binds the whole guide together.

## 1. The Three Categories of Troubleshooting, Tool, Knowledge, Communication

The great majority of problems an academic meets while working with Claude Code fall into three categories. The first is tool problems. The command line returns an error, the model times out before producing a response, the context window fills. These problems lie in the tool itself, in the environment it runs in, or in the network connection. The second is knowledge problems. A library cannot be reached, a citation cannot be verified, a DOI cannot be found, a source's record stays incomplete. These problems lie in the accessibility and accuracy of data. The third is communication problems. The command given is misunderstood by the model, the agent gets stuck in a loop, or it makes an unexpected decision. These problems lie in the language between the researcher and the tool, in the transmission of intent.

This threefold distinction, though it looks simple, is powerful, because placing a problem in the right category is half the solution. The place you look for a tool problem differs from the place you look for a knowledge problem. Reason (2000), in his short but influential paper on the modeling of human error, shows that errors arise less from individual incompetence than from the structural layers of the system. To see an error not as a personal failing but as the gap of a system layer is the first mental leap of troubleshooting. The three categories are the map for reading those layers. In most cases a problem sits cleanly in a single category, and even when it does not, asking the three categories in order leads the researcher to the right questions.

There is a fourth condition that does not sit cleanly in the three categories, the uncertain one. A problem does not, at first glance, reveal which layer it comes from. The model returns an empty response, but whether the cause is a network outage, an inaccessible source, or a misunderstood command is unclear. In the uncertain condition the right move is not to guess a category but to eliminate the three categories in order, from the cheapest test to the most expensive. The tool layer is tested first, because an error message is the fastest evidence to read. Then the knowledge layer, whether the source is actually accessible. Last the communication layer, because rewriting the command is the step that demands the most effort. Uncertainty is not a category but a problem not yet narrowed, and narrowing is the work of the fifth step of the protocol.

## 2. Tool Problems, CLI Error, Model Timeout, Context Limit

Tool problems are the most visible category, because they most often come with an explicit error message. The command line returns an error code, a warning falls on the screen, a process is cut off halfway. Here the first reflex is to read the error message. This simple-looking step is often skipped. An academic, not being a developer, may perceive the error message as technical noise and look away from it. Yet the error message most often tells the category and the location of the problem directly. Reading the message slowly, noticing the file name, the line number, or the status code inside it, is the beginning of the solution.

Three tool problems are the most frequently met. The model timeout is the expiry of the time allotted before the model produces a response. The most common cause of this is too large an input or a temporary network slowdown. The solution is to reduce the input, split the request, or retry after a while. The context limit is the total text given to the model exceeding the window. In a long session, the accumulated conversation context grows silently and at some point the model begins to forget the oldest parts. The solution is to summarize the session and start fresh, or to write the context to the vault and continue with a clean session. This is a practical counterpart of the memory-as-vault principle described in the third booklet. When context is bound not to the window but to disk, the limit ceases to be an obstacle. The third problem is environment configuration. Working in the wrong directory, a missing dependency, a faulty path definition. Norman (2013), in his work on the design of everyday things, shows that what we call user error is most often design error. A researcher meeting a tool problem should, instead of blaming themselves, ask which assumption of the tool was not met. This question is more productive than blame.

A concrete tool-problem example clarifies the pattern. A researcher tries to have the model read a hundred-page thesis chapter in a single session, and the model stops halfway and returns a context error. The first reflex may be to blame the tool, yet the error message states the problem clearly, the input has exceeded the window. The solution is not to change the tool but to split the work. The chapter is first saved to the vault, then divided into its subsections, and each subsection is processed in a separate session. When context is bound to disk, the limit ceases to be a wall and becomes a workflow decision. This example shows that most tool problems are not a defect of the tool but the non-fulfillment of one of its assumptions.

## 3. Knowledge Problems, Library Access, Citation, DOI Not Found

Knowledge problems are quieter than tool problems, because they do not come with an error message. When access to a library is blocked, a subscription gate quietly engages and the model returns an empty result. When a DOI cannot be found, the citation verification flow stops without producing a result. The danger of these problems is that they are invisible. A tool problem screams, a knowledge problem whispers. For this reason the strongest defense against knowledge problems is the citation verification discipline described in the seventh booklet. Three-index triangulation accepts that a source's absence from a single database does not mean it does not exist.

When a DOI cannot be found, there are three possibilities. First, the DOI genuinely does not exist, because the source is a book or an old article to which no DOI was assigned. In this case the source is recorded without a DOI, with an ISBN or a stable URL. Second, the DOI exists but a typo was made. A digit missing or extra. In this case the DOI is entered again, copied from the source. Third, the database is temporarily unreachable. In this case an alternative index is tried, OpenAlex if Crossref is not responding, the publisher's own page if that does not respond either. Here the critical rule is not to fabricate a source because it cannot be found. If a DOI cannot be verified, the failure to verify is stated honestly, and the source is held until it is verified. In a knowledge problem the greatest risk is the urge to fill the gap. This urge slips an unverified record into the text and turns the problem from a tool problem into an integrity problem.

A concrete knowledge-problem example is the following. A researcher wishes to cite an article, but the DOI in hand does not resolve in Crossref. The empty result does not mean the article does not exist. Three steps are tried. First the DOI is copied again from the source, because most errors come from a digit entered short or long. If it does not resolve, the article is searched by title in an alternative index, OpenAlex or the publisher's page. If it still cannot be found, the likelihood is that the article is an old source to which no DOI was assigned, and in this case the source is cited with a stable URL or a print record. At no stage is an incomplete record fabricated. In this example the solution to the problem requires not a tool but a discipline, the discipline of holding until verified.

## 4. Communication Problems, Command Misunderstood, Agent in a Loop, Unexpected Decision

Communication problems are the subtlest of the three categories, because they lie neither in the tool nor in the data but in the language between the researcher and the tool. The first type is the misunderstanding of the command. The researcher asks for one thing, the model understands another, and produces a result technically flawless but far from the intent. The cause of this is most often the ambiguity of the command. An academic gives an implicit instruction, as they would to a colleague, but forgets that the model does not share the implicit context. The solution is to make the command clearer, more bounded, and verifiable. Stating what is wanted, in what form it is wanted, and how success will be measured cuts off the misunderstanding at the start.

The second type is the agent getting stuck in a loop. The model tries the same step again and again, each time with a similar result, and progress stops. This happens in situations where the model cannot notice that an assumption is wrong. The solution is to stop the loop and question the premise, the fundamental assumption. Schoenfeld (1985), in his work on mathematical problem solving, shows that what separates successful problem solvers from unsuccessful ones is metacognition. That is, a person monitoring their own thinking process and noticing that a path is a dead end and turning back. When an agent gets stuck in a loop, what is needed is exactly this metacognitive intervention, and the researcher supplies it. The third type is the agent making an unexpected decision. The model changes a file that was not asked for, or drifts to a default behavior. This is the other face of the agentic shift described in the second booklet. The more decisions a tool can make, the more unexpected decisions it can make. The solution is to limit autonomy, bind critical actions to approval, and start each session with an explicit scope. Communication problems lessen when the researcher sees the tool not as a colleague but as a partner to whom intent must be conveyed clearly.

A concrete communication-problem example shows the loop type. A researcher asks the model to reformat a data file, but the real structure of the file differs from what the model assumed. The model tries the same transformation again and again, each time with the same error, because it notices that the transformation fails but cannot notice that its underlying assumption is wrong. Here the researcher's metacognitive intervention is needed. The loop is stopped and the question is changed, why is the file resisting this transformation. Most often the answer is that the file is in a different encoding or structure than expected. When the researcher states this difference to the model clearly, the loop breaks. This example shows that in communication problems the solution is most often not more attempts but a restatement of the assumption.

## 5. The Seven-Step Reasoning Framework

The three categories serve to place a problem. To solve it, a reasoning framework is needed. The seven-step protocol below is an extension, into the social science artificial intelligence workflow, of Polya's (1945/2014) classic four-stage framework, that is, the stages of understand, plan, carry out, and look back. The framework works for the great majority of problems across the three categories, because it is a general thinking discipline, not bound to a particular command.

| Step | Name | Question | Polya stage |
|---|---|---|---|
| 1 | Be skeptical | Is the first explanation true, or merely the easiest | Understand |
| 2 | Capture the record | What exactly does the error, log, or screenshot say | Understand |
| 3 | Reproduce | Can the problem be reproduced reliably | Understand |
| 4 | Narrow | Can I reduce the problem to its smallest case | Plan |
| 5 | Isolate | Which single variable opens the problem | Plan |
| 6 | Fix | What is the smallest correct change | Carry out |
| 7 | Document | How is the root cause and fix recorded for my future self | Look back |

The first step is to be skeptical. The first explanation met is most often the easiest explanation, not the most correct. To close a problem with the first story accepted leaves the root cause in shadow. The second step is to capture the record. The exact text of the error message, the log, or the unexpected output is taken from the source, not from memory. The third step is to reproduce. If a problem cannot be reproduced reliably, that it has been solved cannot be verified either. These three steps are Polya's stage of understanding. The fourth step is to narrow. The problem is reduced to the smallest case that opens it, unnecessary variables are eliminated. The fifth step is to isolate. A single variable is changed and its effect observed, so that causation and coincidence are separated. These two steps are the planning stage. The sixth step is to fix. The solution should be the smallest correct change, because a broad intervention breeds new problems. The seventh step is to document. The root cause and the fix are written to the vault as a short note, so that when the same problem meets us a second time the solution is ready. Dörner (1996), in his work examining human decision-making in complex situations, shows that failure most often arises from ignoring side effects and delayed consequences. The seventh step, documentation, is a defense against exactly this blindness. A solution documented today prevents a failure in the future.

Running the framework on a single example makes it concrete. A researcher's citation verification flow quietly produces a faulty record. In the first step the researcher is skeptical, because the record looks correct but the flow was recently updated. In the second step the flow's output and input are captured exactly. In the third step the problem is reproduced, the same source is processed again and the same faulty record appears, so the problem is not random. In the fourth step the problem is narrowed, it is tried with a single source and the error persists. In the fifth step the variables are isolated, and when the source's year field is emptied the error disappears, so the problem is in year parsing. In the sixth step the smallest correct change is made, the parsing rule of the year field is fixed, the rest of the flow is left untouched. In the seventh step the root cause and fix are written to the vault, so that when the same parsing error meets us again the solution is ready. The seven steps turn an intuition into a method.

## 6. The Turkish and Greek Specificity

Some problems are regional. In Türkiye, especially in provinces outside the large cities, the internet connection can at times be intermittent, and access to certain external services can be blocked. In the northern cities of Greece, in Komotini and its surroundings, the variability of the fiber infrastructure is a similar matter. In these situations a tool problem is actually a network problem, and the solution sought in the tool itself comes to nothing. When a problem appears to be network-sourced, a few practical steps can be tried. An alternative DNS server, shifting the work to a time of day when the connection is stable, or working over an institutional network. Detailed network configuration is outside the scope of this booklet and is left to the later versions of the guide. The critical point here is not to confuse a regional infrastructure condition with a tool defect. A researcher working from a peripheral province or over a variable line should include the network layer in the first steps of the troubleshooting protocol.

## 7. The GitHub Issue Template, Helping Someone Else

Troubleshooting is not only solving your own problem. The good documentation of a problem also helps another researcher who meets the same problem, and this is the founding gesture of the open-source community. Reporting a problem as a GitHub issue turns it into shareable knowledge. A good issue is the written counterpart of the second and third steps of the seven-step framework, of capturing the record and of reproducing. The suggested structure is below.

```
**Problem title.** short, single line
**Version.** Claude Code version and operating system
**Expected.** what you hoped would happen
**Actual.** what happened
**Reproduction steps.**
1. ...
2. ...
**Relevant log or error message.**
```

```
error log here
```

```
**Tried before.** which solutions did not work
**Problem category.** tool, knowledge, communication, or uncertain
```

The strength of this template is that it forces the person reporting the problem to think about it. Writing the difference between expected and actual clarifies the problem. Listing the reproduction steps tests whether the problem is actually reproducible. Documenting what was tried before prevents the helper from repeating the same dead-end paths. Vaughan (1996), in her study of NASA's Challenger decision, and Perrow (1999), in his analysis of normal accidents in high-risk technologies, show that systemic failures arise not from a single error but from the accumulation of small and seemingly harmless deviations. A well-documented issue makes these deviations visible and adds them to the shared memory of the community. To share a problem is both faster and more dignified than carrying it alone.

## 8. Closing, the Last Line of the Series

This booklet is the last of the ten-booklet v1.0 manifesto, and this section is the closing of the series. Throughout the guide a single thesis was worked. Claude Code is, for the social scientist, not a command-line tool but a methodological partner of academic production, and this partnership is meaningful only with a framework, a discipline, and an ethic. The first booklet defined what Claude Code is at the epistemological level. The methodological-spine booklets established memory, vault architecture, and regional academic access. The production-cycle booklets addressed writing, ethics, and peer review. This last booklet gave the reasoning framework to turn to when things go wrong.

That troubleshooting is a framework of reasoning and not a list of errors is the final and consistent extension of the thesis the guide defended from start to finish. A list ages, a framework remains. The last line of this booklet is the last line of the series. When all ten booklets have been read, the social science researcher holds, if not enough to begin academic production with Claude Code, then enough of a framework to take the first step in the right direction. The rest will be the test of practice itself.

## References

Dörner, D. (1996). *The logic of failure: Why things go wrong and what we can do to make them right*. Metropolitan Books. ISBN 978-0-8050-4160-6

Norman, D. A. (2013). *The design of everyday things* (Revised and expanded ed.). Basic Books. ISBN 978-0-465-05065-9

Perrow, C. (1999). *Normal accidents: Living with high-risk technologies* (Updated ed.). Princeton University Press. ISBN 978-0-691-00412-9

Pólya, G. (2014). *How to solve it: A new aspect of mathematical method*. Princeton University Press. (Original work published 1945). ISBN 978-0-691-16407-6

Reason, J. (2000). Human error: Models and management. *BMJ*, 320(7237), 768-770. https://doi.org/10.1136/bmj.320.7237.768

Schoenfeld, A. H. (1985). *Mathematical problem solving*. Academic Press. ISBN 978-0-12-628870-4

Vaughan, D. (1996). *The Challenger launch decision: Risky technology, culture, and deviance at NASA*. University of Chicago Press. ISBN 978-0-226-85176-1

---

**Booklet ID.** `012-01-0001`
**Version.** `0.1.0`
**Date.** 2026-05-24
**Word count (approx.).** 3267 (English body text, measured with wc)
**Verified citations.** 7
**Hallucinated citations.** 0
**Previous booklet.** [`010-01-0001`](../../010-peer-review/010-01-0001/en.md). Rebuttal Letters with Traceability Matrices
**Next booklet.** None. This is the closing booklet of the v1.0 manifesto. The roadmap extends with category 005 (Hooks), 006 (MCP), and 008 (Data Analysis) in the v1.5 and v2.0 versions.
