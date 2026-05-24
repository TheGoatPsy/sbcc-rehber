---
title_en: "Installation, First Session, and Sanity Checks"
title_tr: "Kurulum, İlk Oturum, Sağlık Testleri"
booklet_id: "001-01-0003"
category: "001-foundations"
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
verified_citations_count: 6
fabricated_citations_count: 0
disclosure_standard: "COPE 2023 + WAME 2023 + ICMJE 2024 + STM 2025 + EU AI Act 2024/1689 Art. 50 + ENAI"
translation_notes: "Re-authored from the Turkish version (tr.md) against the same outline and the same verified citation set. Commands kept minimal and principle-level on both sides because CLI syntax drifts between versions. Turkish and Greek payment and connectivity specifics preserved."
license:
  - "CC-BY-NC-SA-4.0 (prose)"
status: "release"
---

# Installation, First Session, and Sanity Checks

This booklet has a different character from the two before it. The first two were conceptual, establishing what the tool is and which interface it works through. This booklet is operational. It describes the installation and first session of Claude Code together with a three-step sanity-check protocol that a social science academic can genuinely control. The central claim is this. Installation is not a technical obstacle for the social science academic. It is a methodological filter. What is configured correctly in the first session determines the return cost over the next twelve weeks. A well-written installation booklet saves the researcher dozens of hours.

One note is mandatory from the start. Command-line tools are updated often. This booklet aims not at the memorization of specific commands but at the establishment of conceptual control. For exact command syntax, the current official documentation should always be the reference (Anthropic, 2026a). This is a deliberate choice. For a researcher, the lasting value lies not in memorizing a command but in understanding why and how an installation works.

## 1. System Requirements

Claude Code runs on three operating system families. macOS, Linux, and Windows. The common requirement of all three is a current command-line environment and a package manager. For macOS and Linux users the process is direct, because these systems ship with a Unix shell. For Windows users there is an additional layer. Full access by Claude Code to the file system and the terminal is provided most smoothly on Windows through the Linux subsystem (WSL2). A WSL2 installation opens a full Ubuntu environment on Windows and supplies the Unix tools the tool expects (Microsoft, 2026).

The practical checklist for the social science academic is short. First, an up-to-date operating system version. Second, at least a few gigabytes of free disk space, because session memory and vault files grow over time. Third, a stable internet connection, because model calls are made over the network. It is reassuring to know that the tool does not require a heavy graphics card or high processor power. The computation happens in the cloud, and the local machine is only a client. The practical consequence of this is important. Many university machines in Türkiye and Greece, even laptops several years old, are sufficient to run the tool smoothly. The only preliminary check needed is to confirm that the terminal opens and responds to a basic command.

## 2. Account, Subscription, and Billing

An account is needed before installation. Anthropic offers different plan options for different usage levels. The right choice for the social science academic depends on usage volume. A doctoral student who uses the tool intensively and continuously benefits from a different plan than a faculty member who uses it occasionally. This booklet gives no specific price, because the pricing structure changes over time. Instead it proposes a principle. Begin with the lowest-commitment option, observe your real usage pattern for a month, and then adjust the plan accordingly.

There is an important point for the academic budget. The cost of the tool should be assessed in comparison with the hourly wage of a research assistant, not as an abstract subscription expense. The time saved on a two-hundred-article screening task more than covers the monthly subscription fee in most cases. Usage is often metered by the amount of text processed, so the cost rises in proportion to the size of the task. This structure means that small tasks are nearly costless while large screenings carry a predictable expense. In billing configuration, setting a usage cap to avoid unexpected costs is a healthy starting habit. That cap lets you experiment with the tool in the first weeks without anxiety.

## 3. CLI Installation, Step by Step

There are three common paths to installation. The first is installation through a package manager. The second is a system package manager such as Homebrew on macOS. The third is direct download. All three paths reach the same result. A command callable in the terminal. After installation, the critical step is that this command is visible in the system search path (PATH). If the terminal does not recognize the command, the problem is almost always the PATH configuration.

This booklet does not fix the exact installation command here. The reason is that the tool version changes often and a fixed command risks going stale quickly. The current and correct installation command is kept in the official documentation and should be taken from there (Anthropic, 2026a). The recommended starting flow and good-practice patterns are also kept in a separate section of the official documentation (Anthropic, 2026b). The methodological lesson here for the academic is this. When installing a tool, going to the primary document is safer than trying an old command copied from a third-party blog. This habit is the discipline of academic sourcing carried over into technical setup.

The practical symptom of a PATH problem is clear. When you call the command, the terminal answers "command not found." The solution usually consists of two steps. Adding the installation path to the shell configuration file and restarting the terminal. For macOS and Linux users this is the shell profile file. For Windows WSL2 users the same logic holds inside the Ubuntu environment. This small detail is the most common obstacle in a first session, but once solved it does not recur. The simplest confirmation that installation succeeded is that asking the command for its version returns a version number.

## 4. First Login and Permission Approval

After installation, the first session begins with an authentication. The tool connects to your account. From this point on, the critical concept is the permission model. Claude Code asks for permission before it performs operations such as reading a file, writing a file, or running a command. This permission mechanism is not a formality. It is the foundation of the safe use of the tool.

It helps to pause here and understand why such a permission layer exists. Language models are trained to follow instructions through human feedback (Ouyang et al., 2022). But following an instruction does not mean every instruction is safe. Anthropic's models are trained with an alignment approach that learns to avoid harm through a set of principles (Bai et al., 2022). The permission model is the user-side complement of this alignment layer. The model tries to behave safely, and the user explicitly controls which actions are allowed.

In practice this means an approval prompt appears before every sensitive action. The tool states what it wants to do, and you approve or decline. The recommended starting strategy for the social science academic is to ask for approval separately for each action. In the first weeks, this "ask each time" approach is the best way to learn what the tool does. As trust grows and patterns become familiar, persistent permission can be granted for specific safe operations. Access to directories containing clinical data or personal information, however, should never be tied to automatic approval. A responsible-use framework requires that such boundaries be drawn explicitly (Anthropic, 2024).

## 5. Sanity Check 1: Reading a File

The first sanity check is the simplest but the most informative. Have the tool read a text file. For example, a note file in your vault. The expected behavior is this. The tool reads the content of the file, reports a summary or the structure of the content to you, and makes no change. In a healthy output the tool shows the file path correctly, gives concrete details that imply the content genuinely came from that file, and signals that it is asking permission for the read. This check verifies three things at once. The tool's file-system access works, the permission model engages, and the read operation stays separate from the write operation.

The failure modes are instructive. If the tool cannot find the file, the working directory is set incorrectly. If it reads without asking permission, the permission configuration is too loose and should be tightened. If it invents the content instead of reading the file, this is a serious warning sign and indicates that the connection between the tool and the real file has not been established. This last case is especially important, because the fabrication of content is the most dangerous failure in an academic context. The healthy result of this first check gives the researcher confidence that the tool genuinely works with local files. That confidence is the foundation of all subsequent workflows.

## 6. Sanity Check 2: Editing a File and Viewing the Diff

The second check goes one step beyond reading. Ask the tool to make a small change in a file. For example, to add a heading to a note file. The expected behavior is this. The tool first shows the change it will make in a diff view, asks for your approval, and writes to the file only after you approve. The diff view is a critical audit instrument for academic production. You see what will change before the change happens.

The healthy result of this check confirms that the researcher can audit every write operation. In an academic text, traceability is indispensable. In a reviewer response or a manuscript revision, you must see which change was made when. Working with a diff view establishes this traceability from the very start of the session. If the tool writes the change directly without showing a diff, the permission configuration should be revisited, because an unauditable write is unacceptable in an academic context. When this check succeeds, the tool is now a safe writing partner, not merely a reader.

## 7. Sanity Check 3: A Multi-Step Task

The third check tests the agentic character of the tool. Give a multi-step task. For example, read a literature file, extract the sections where a specific concept appears, and write those extracts to a separate summary file. This task chains three operations. Reading, processing, and writing. The expected behavior is that the tool executes each step in sequence, reports what it does at each step, and writes the final output to a separate file.

This check verifies whether the action loop described in the previous booklet works in practice. The healthy result is that the tool treats the task not as a single response but as a traceable sequence of subtasks. In case of failure, the most common problem is that the tool skips an intermediate step or produces content from its own memory instead of the source file. For this reason the final output should always be compared with the source. That comparison step is academic discipline carried into the technical flow. Just as a quotation is verified against its original source, the summary the tool produces is tested against the source file. If this third check succeeds, the installation is complete and the tool is ready for academic production.

## 8. Failure Modes

Most of the problems encountered in the first session reduce to a few typical modes. The table below gives each mode with its symbol, explanation, and solution.

| Symbol | Explanation | Solution |
|---|---|---|
| Command not found | The terminal does not recognize the installed command | Check the PATH configuration, restart the shell |
| Permission error | Access was attempted to a file or directory without permission | Grant the permission approval or correct the working directory |
| Network error | The model call could not reach over the network | Check the connection, retry if needed |
| Model timeout | The response did not arrive within the expected time | Break the task into smaller steps, check connection quality |
| Context limit | The session exceeded the model's context window | Summarize and restart the session, write persistent information to a file |

None of these modes means the installation has failed. All of them are part of the normal learning curve of a first session. What matters is recognizing each symbol and reaching the appropriate solution quickly. The context-limit mode is especially important, because it reinforces the habit of writing persistent information to a file. That habit is the foundation of the vault architecture addressed in later categories of the guide. For this reason a failure in the first session is not an obstacle but an instructive moment that establishes the discipline of the weeks to come.

## 9. The Turkish and Greek Specificity

Regional realities appear at two points in the installation process. The first is the payment method. In Türkiye, restrictions can be seen in some international payment infrastructures. In that case, alternative paths include a virtual card, a foreign bank card, or an institutional account configuration. This booklet describes only the procedure and gives no financial advice. Greece, as a European Union member, follows the standard payment flow. The second is connection quality. In smaller cities such as Komotini, fiber connectivity may not always be strong, which increases the frequency of the model-timeout mode. The solution is to break tasks into smaller steps and work in stable connection windows. These two regional details are a reminder that installation is less a technical matter than a matter of fit.

## 10. The Next Category

This booklet showed that installation is not a technical obstacle but a methodological filter, and that the three sanity checks give the researcher confidence that the tool genuinely works. After installation is complete, the first question facing the academic is how to access Turkish and Greek academic journals reliably. The next category is dedicated to academic access infrastructure. Reliable access to regional indexing systems such as DergiPark, ULAKBIM TR Dizin, and HEAL-Link is a topic absent from international guides and one of the highest-value contributions of this guide. Booklet 002-04-0001 continues from this point.

---

## References

Citations are in APA 7 format. Documentation links were verified by live access on 2026-05-24, and academic citations were confirmed against arXiv.

Anthropic. (2024). *Responsible scaling policy*. https://www.anthropic.com/news/anthropics-responsible-scaling-policy

Anthropic. (2026a). *Claude Code documentation*. https://docs.claude.com/en/docs/claude-code

Anthropic. (2026b). *Claude Code best practices*. https://code.claude.com/docs/en/best-practices

Bai, Y., Kadavath, S., Kundu, S., Askell, A., Kernion, J., Jones, A., Chen, A., Goldie, A., Mirhoseini, A., McKinnon, C., Chen, C., Olsson, C., Olah, C., Hernandez, D., Drain, D., Ganguli, D., Li, D., Tran-Johnson, E., Perez, E., ... Kaplan, J. (2022). *Constitutional AI: Harmlessness from AI feedback*. arXiv. https://arxiv.org/abs/2212.08073

Microsoft. (2026). *Windows Subsystem for Linux documentation*. https://learn.microsoft.com/windows/wsl/

Ouyang, L., Wu, J., Jiang, X., Almeida, D., Wainwright, C. L., Mishkin, P., Zhang, C., Agarwal, S., Slama, K., Ray, A., Schulman, J., Hilton, J., Kelton, F., Miller, L., Simens, M., Askell, A., Welinder, P., Christiano, P., Leike, J., & Lowe, R. (2022). Training language models to follow instructions with human feedback. In *Advances in Neural Information Processing Systems 35 (NeurIPS 2022)* (pp. 27730-27744). https://arxiv.org/abs/2203.02155

---

**Booklet identifier.** `001-01-0003`
**Version.** `0.1.0`
**Date.** 2026-05-24
**Approximate word count.** 2300 (English body text, measured with wc)
**Verified citations.** 6
**Fabricated citations.** 0
**Previous booklet.** [`001-01-0002`](../001-01-0002/en.md). The Agentic Shift: From Chat Window to Working Partner
**Next booklet.** `002-04-0001`. DergiPark, ULAKBIM TR Dizin, HEAL-Link, and Regional Indexing (Phase 2)
