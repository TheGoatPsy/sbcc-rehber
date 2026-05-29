---
title_en: "Rebuttal Letters with Traceability Matrices"
title_tr: "İzlenebilirlik Matrisleri ile Hakem Yanıt Mektupları"
booklet_id: "010-01-0001"
category: "010-peer-review"
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
ai_contribution_level: "substantial-drafting"
human_review: "complete"
human_review_date: "2026-05-24"
verified_citations_count: 9
fabricated_citations_count: 0
disclosure_standard: "COPE 2023 + WAME 2023 + ICMJE 2024 + STM 2025 + EU AI Act 2024/1689 Art. 50 + ENAI"
translation_notes: "English re-authored from the Turkish source, not a literal translation. All reviewer-response and matrix examples are synthetic, derived from no real review, in keeping with the vault sanitization protocol."
license:
  - "CC-BY-NC-SA-4.0 (prose)"
status: "release"
---

# Rebuttal Letters with Traceability Matrices

The previous booklet defined the ethical framework as a workflow document built from the start. This booklet moves to the most critical moment where that framework is tested. A reviewer response letter is the highest-stakes text type in the social science researcher's professional production. An unstructured long response letter most often ends in a second rejection. A traceability matrix manages the letter, raising the quality of the response and the likelihood of publication acceptance. The aim is to show a workflow that builds this matrix semi-automatically with Claude Code while preserving artificial intelligence disclosure ethics.

## 1. The Structure of the Reviewer Response Letter

A reviewer response letter consists of four mandatory components. First, a brief opening to the editor. Thanks for the revision, a summary of the main changes, and a one-sentence introduction to the structure of the letter. Second, a response to each reviewer comment one by one. A comment, then the author's response, then the exact location of the change made in the manuscript. Third, the clear marking of the position of changes in the manuscript, at the page and line level. Fourth, a closing, an honest acknowledgment of any remaining open points.

These four components require a discipline. Provenzale and Stanley (2006), in offering a systematic guide to reviewing a manuscript, show that reviewer comments fall into specific categories. Methodological, conceptual, formal. The author's response must be given in a tone appropriate to each category. Noble (2017), listing ten simple rules for writing a response to reviewers, states that the most critical rule is to respond clearly and separately to each comment. Grouping or skipping comments creates the impression in the editor's mind that the response is incomplete. Belcher (2019), in her guide that places the academic publication process into a twelve-week structure, emphasizes that the revision stage is the stage that determines the fate of the manuscript.

## 2. What a Traceability Matrix Is

A traceability matrix is a structure that links each reviewer comment, the response given to it, and the change made in the manuscript in a single table. The matrix proves that the author has skipped no comment and that every change is traceable. When an editor looks at the matrix, they see at a glance which comment was addressed how.

Why the matrix is necessary follows from the nature of peer review. A manuscript most often receives reviews from two or three reviewers, each containing five to ten comments. This means responding to fifteen to thirty separate comments. In an unstructured letter, some of these comments inevitably escape notice. A matrix makes that escape structurally impossible, because each comment is a row and each row must have a response. Squazzoni and colleagues (2021), in their study of one hundred forty-five journals, show that the structural features of the peer review process are decisive for the publication outcome. A traceability matrix is a tool of order that the author brings to this structural process.

## 3. Building a Matrix with Claude Code

A traceability matrix can be built semi-automatically with Claude Code. The workflow consists of the following steps. First, the reviewer reports are brought into the vault as plain text. Then each reviewer comment is extracted as a separate row, and the reviewer identity and the location of the comment are labeled. The model supports this extraction, dividing a long reviewer report into separate comments. Next, the author's response and the planned change are added to each row. This content is the author's own analytical decision, the model only organizes the form.

There is a critical limit here. The model supports the structure of the matrix and its grammatical arrangement, but the author produces the substance of the response. What to answer to a reviewer comment is a decision about the scientific content of the manuscript, and that decision is always the researcher's. Hosseini and colleagues (2023), in addressing the use of artificial intelligence in writing scholarly publications, emphasize that the distinction between the tool editing the text and the tool producing the content of the text must be preserved. In the traceability matrix this distinction is clear. Form with the model's support, content with the author's pen.

## 4. The Ethical Debate of the Artificial Intelligence Trace

The debate about hiding the trace of texts written with artificial intelligence requires a careful distinction. A researcher may wish to make a text they wrote with artificial intelligence assistance appear more natural. There is an ethical boundary here, and this boundary is easily misread. A text written with artificial intelligence assistance is not a text written by artificial intelligence. It is legitimate for a researcher to express their own analysis more clearly with artificial intelligence support. But it is not legitimate to present content produced by artificial intelligence as one's own production.

This distinction explains why anti-artificial-intelligence-trace writing is complex. When Else (2023) showed that abstracts written by artificial intelligence could fool scientists, it became clear that the problem is not hiding but the lack of disclosure. Whether a text carries an artificial intelligence trace is a secondary question. The primary question is whether the artificial intelligence contribution has been disclosed. This booklet is not a guide to hiding the trace. On the contrary, while preserving the obligation to disclose, it shows how artificial intelligence assistance is honestly stated. Integrity lies not in the visibility of the trace but in the disclosure of the contribution.

## 5. Developing a Matrix from an Example R&R

A concrete example clarifies the pattern. The following matrix is derived from a synthetic scenario, not from a real review. It is built on hypothetical comments that a social anxiety study received from two reviewers.

| # | Reviewer | Location | Comment (summary) | Response | Change | Category |
|---|---|---|---|---|---|---|
| 1 | R1 | p.4 l.12 | Sample is small | Added to limitations, power analysis done | p.18 l.5-12 | Accepted |
| 2 | R1 | p.7 l.3 | Scale validity unclear | Cronbach alpha added | p.9 l.15 | Accepted |
| 3 | R1 | p.10 l.20 | Analysis method unjustified | Method choice justified | p.11 l.1-8 | Accepted |
| 4 | R2 | general | Theoretical frame scattered | New subsection 2.1 written | p.5-7 | Rewrite |
| 5 | R2 | p.13 l.4 | Findings overstated | Claims measured, language softened | p.13-14 | Accepted |
| 6 | R2 | p.16 l.9 | Limitations insufficient | Three new limitations added | p.19 l.3-18 | Accepted |
| 7 | R2 | p.2 l.1 | Title misleading | Reviewer suggestion discussed, partly applied | p.1 | Partial |
| 8 | R1 | p.8 l.5 | A source is dated | Source supported with current literature | p.8 l.5 | Accepted |

This matrix proves that the author skipped none of the eight comments. Each row offers the editor a traceable record of the response. The category column summarizes the extent to which comments were accepted, and signals that partial or rejected comments require a separate justification.

The category column is also the editor's triage tool. When an editor looks at the matrix, they see that accepted comments are in the majority and trust the seriousness of the revision. The real attention turns to the partial and rejected rows. These rows are where the author must offer the most careful justification. Row seven above is a partial acceptance, where the title suggestion was partly applied. Here the author must write clearly why the reviewer's concern was not fully met and what middle path was found instead. A partial acceptance, if brushed aside, returns in the second round. If presented with a clear justification, the editor most often takes the author's side. The matrix, by making these critical rows visible, directs the author's energy to where it is most needed.

## 6. The "Reviewer Is Wrong" Protocol

Not every reviewer comment is correct or applicable. Some comments arise from a misunderstanding, some are outside the scope of the manuscript, and some may be contradictory. One reviewer may ask for a change while another asks for the opposite. In these situations the author needs a protocol.

The basic rule is that no comment is brushed aside without being addressed. If an author decides not to apply a comment, they must state this clearly and with justification. The justification must rest on the scientific argument, not on the reviewer. Instead of saying "the reviewer is mistaken," one says "at this point the literature suggests the following." Williams and Bizup (2016), in their lessons on clarity and grace in writing, emphasize that the strength of an argument lies in its evidence, not its tone. Even when a reviewer is wrong, the response stays respectful and evidence-based. The editor escalation threshold is the following. If two reviewers contradict each other, or if a comment conflicts with the fundamental design of the manuscript, the author asks for direction by writing a direct note to the editor. This is safer than the author trying to resolve the conflict alone.

## 7. Effective Communication with the Editor

The editor is the arbiter between the reviewer and the author, and communication with them requires a separate discipline. A short editor note accompanying the response letter eases the flow of the process. This note summarizes the main changes in three or four sentences, and brings any contradictions among reviewers to the editor's attention. The editor gets a general picture from this note before reading the detailed matrix.

Sword (2017), in her study of how successful academics write, shows the importance of clarity and timing in academic communication. The note written to the editor should be short, clear, and timely. It offers not a long defense but a road map. The editor understands from this note that the author has taken the revision seriously and is managing the process.

## 8. Ethical Boundaries and Disclosure

The disclosure of artificial intelligence assistance is also mandatory in the reviewer response process. Which contribution is disclosed is clarified with a boundary table.

| Situation | Disclosure |
|---|---|
| Grammar and form editing | Disclosed |
| Building the matrix format | Disclosed |
| The substance of the analytical response | The author's production, requires no disclosure because it is not an AI contribution |
| Developing the scientific argument | The author's responsibility |
| Source verification | AI-assisted, disclosed |

In a response letter, artificial intelligence use is stated with a disclosure sentence. The following example is a synthetic disclosure text.

> An artificial intelligence assisted tool was used in structuring this response letter. The tool supported the format of the traceability matrix and the grammatical arrangement. All analytical content, the substance of the responses to reviewer comments and the scientific arguments added, was written by the authors. The use of artificial intelligence does not constitute a claim to authorship.

This disclosure is compatible with the artificial intelligence positions of the Committee on Publication Ethics and the International Committee of Medical Journal Editors. The disclosure does not weaken the letter, on the contrary it shows the author's integrity.

## 9. Response Time Management

A revision most often comes with a time limit. Thirty, sixty, or ninety days. This time runs out quickly if it is not bound to a plan. An example ninety-day plan takes the following structure. The first thirty days, reading the reviewer reports, building the traceability matrix, and planning the major structural changes. The second thirty days, applying the changes to the manuscript and writing the response texts. The last thirty days, completing the matrix, an integrity reading of the manuscript, and preparing the editor note.

For shorter periods, the plan is compressed proportionally. What matters is that the time be bound to a matrix, because the matrix makes both the scope of the work and the progress visible. An author, by looking at the proportion of completed rows in the matrix, evaluates the remaining time realistically.

## 10. Bridge, to the Troubleshooting Protocol

While preparing the reviewer response letter, things can go wrong as Claude Code runs. A command may give an unexpected result, a file may become corrupted, a model response may hit the context limit. The next and final booklet addresses the troubleshooting protocol. It shows what to do systematically when things go wrong, how a researcher proceeds with a method rather than panic.

## References

Belcher, W. L. (2019). *Writing your journal article in twelve weeks: A guide to academic publishing success* (2nd ed.). University of Chicago Press. ISBN 978-0-226-49991-8

Else, H. (2023). Abstracts written by ChatGPT fool scientists. *Nature*, 613(7944), 423. https://doi.org/10.1038/d41586-023-00056-7

Hosseini, M., Rasmussen, L. M., & Resnik, D. B. (2023). Using AI to write scholarly publications. *Accountability in Research*, 30(7-8), 1-9. https://doi.org/10.1080/08989621.2023.2168535

Noble, W. S. (2017). Ten simple rules for writing a response to reviewers. *PLOS Computational Biology*, 13(10), e1005730. https://doi.org/10.1371/journal.pcbi.1005730

Provenzale, J. M., & Stanley, R. J. (2006). A systematic guide to reviewing a manuscript. *American Journal of Roentgenology*, 186(3), 848-854. https://doi.org/10.2214/AJR.05.0782

Resnik, D. B. (2018). *The ethics of research with human subjects: Protecting people, advancing science, promoting trust*. Springer. https://doi.org/10.1007/978-3-319-68756-8

Squazzoni, F., Bravo, G., Farjam, M., Marusic, A., Mehmani, B., Willis, M., Birukou, A., Dondio, P., & Grimaldo, F. (2021). Peer review and gender bias: A study on 145 scholarly journals. *Science Advances*, 7(2), eabd0299. https://doi.org/10.1126/sciadv.abd0299

Sword, H. (2017). *Air & light & time & space: How successful academics write*. Harvard University Press. ISBN 978-0-674-73770-9

Williams, J. M., & Bizup, J. (2016). *Style: Lessons in clarity and grace* (12th ed.). Pearson. ISBN 978-0-13-408041-3

---

**Booklet ID.** `010-01-0001`
**Version.** `0.1.0`
**Date.** 2026-05-24
**Word count (approx.).** 2079 (English body text, measured with wc)
**Verified citations.** 9
**Hallucinated citations.** 0
**Previous booklet.** [`009-01-0001`](../../009-ethics-irb/009-01-0001/en.md). Ethics in AI-Assisted Research, From Principle to Behavior
**Next booklet.** [`012-01-0001`](../../012-troubleshooting/012-01-0001/en.md). When Things Go Wrong: A Working Troubleshooting Protocol
