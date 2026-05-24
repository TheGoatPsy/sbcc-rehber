---
title_en: "The Agentic Shift: From Chat Window to Working Partner"
title_tr: "Aracın Ötesine Geçiş: Sohbet Penceresinden İş Ortağına"
booklet_id: "001-01-0002"
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
ai_contribution_level: "substantial-drafting"
human_review: "pending"
human_review_date: null
verified_citations_count: 10
fabricated_citations_count: 0
disclosure_standard: "COPE 2023 + WAME 2023 + ICMJE 2024 + STM 2025 + EU AI Act 2024/1689 Art. 50 + ENAI"
translation_notes: "Re-authored from the Turkish version (tr.md) against the same outline and the same verified citation set. Examples and infrastructure references domesticated for an international audience while preserving the Turkish and Greek specificity where relevant."
license:
  - "CC-BY-NC-SA-4.0 (prose)"
status: "paired"
---

# The Agentic Shift: From Chat Window to Working Partner

The first booklet of this guide established what Claude Code is for the social scientist and which methodological frame it sits within. This second booklet takes one step further. It shows why the difference between the chat box in a browser tab and the agent at the command line is not an interface preference but an epistemological distinction. The consequence of that distinction for academic production determines whether the tool is seen as an assistant or as a working partner. The goal is not a technical comparison. It is to show how the distinction transforms the way a researcher works.

## 1. Why Chat and Agent Cannot Substitute for Each Other

The first booklet defined Claude Code as a tool that closes the gap between a notebook and a laboratory assistant. The emphasis there was the identity of the tool and the methodological framework of the user. The emphasis here is different. The question is not what the tool is, but how the interface through which it works shapes the production process.

A chat window in a browser and an agent at the command line appear, on the surface, to do the same job. You type a question into each, and each produces an answer. The resemblance is deceptive. A clinical analogy helps. The first booklet recalled that case formulation is built on the biopsychosocial model (Engel, 1977). The difference between seeing a patient as a symptom list and seeing them as a system operating simultaneously is the difference between diagnosis and formulation. The difference between chat and agent belongs to the same category. Chat is a past-moment, a single interaction that ends when the tab is closed. An agent is a session-narrative, a continuing process bound to a file system, to its own earlier decisions, and to external tools.

Academic production, by its nature, requires a session-narrative. A systematic review is not a task that finishes in one sitting. A manuscript revision is not completed in a single response. A literature map is the accumulation of decisions made over weeks. For this reason the interface through which the tool works is not cosmetic for the academic. It is methodologically decisive. This booklet opens that decisiveness in four layers. The anatomy of chat, the anatomy of the agent, the role of tools and subagents, and the concrete effect on academic production.

## 2. The Anatomy of the Chat Interface

Three properties define a chat interface in a browser. Each one sets a boundary for academic production.

The first is the single pass. The question you type into the chat window is sent to the model, the model produces an answer, and the interaction ends. The answer is the model's most probable output at that moment. It takes no action on the outside world. It writes no file, runs no command, retrieves no source from a library. For the social scientist this means the chat can be a thinking partner but not a production partner. You can discuss a paragraph, but you cannot scan a Zotero library of two hundred articles.

The second is the context limit. The chat window knows only the text visible within it. What you wrote in earlier sessions, the files on your computer, the holdings in your institutional library all sit outside the window. In a long research process this limit quickly becomes an obstacle. When the window fills, the oldest messages fall out of context. The researcher has to re-explain a decision made three weeks ago.

The third is transience. When the chat session is closed, everything accumulated inside it is lost. The instructions you gave, the intermediate results you reached, the framework you built. None of it is written to a permanent place. This is the exact opposite of the continuity that academic production requires. Years of field notes, hospital observations, and reviewer responses cannot live in a chat window, because the window resets at every close.

These three properties do not make the chat interface worthless. For a quick conceptual question, the rephrasing of a draft paragraph, or the explanation of a term, chat is sufficient and efficient. But for structured, multi-step, verifiable academic work the anatomy of chat is not enough. This is precisely where the agent interface enters.

## 3. The Anatomy of the Agent Interface

The word agent has a precise meaning in the multiagent systems literature. An agent is a structure that perceives the environment it is in, decides on the basis of that perception, and acts upon the environment (Wooldridge, 2020). This definition departs fundamentally from the single-pass logic of the chat interface. Chat only produces an answer. An agent perceives, decides, acts, and evaluates the result.

The most influential pattern of this loop in modern language model agents is the structure that interleaves reasoning with action. The model produces a thought step, then takes an action, observes the result of the action, and feeds that observation into the next thought step (Yao et al., 2023). For the social scientist this means the tool, instead of answering a question all at once, breaks the question into substeps, makes each step visible, and changes direction when needed. The cognitive architecture behind this loop is supported by a literature that frames language agents systematically through components such as memory, action space, and decision process (Sumers et al., 2024).

Three concrete capabilities separate the agent interface from chat. The first is access to the file system. The agent can read a folder on your computer, write a new file into it, and append to an existing file. This is the opposite of transience. The second is tool calling. The agent can delegate a task it cannot do on its own to an external tool, such as retrieving a source from an academic index or running a command in the terminal. The third is session memory. The agent remembers what it did, which decisions it made, and which intermediate results it reached over the course of a session, and uses that memory in subsequent steps.

How these capabilities together produce human-like behavior has been shown in experimental work where simulated agents display coherent behavior through observation, planning, and memory (Park et al., 2023). For the social scientist the lesson is methodological rather than technical. The agent treats a research task not as a single response but as a documentable sequence of subtasks. That sequence is traceable, auditable, and interruptible. The auditability requirement of academic production demands exactly this.

## 4. Tools in Agentic Systems

The power of the agent comes less from what it can do alone than from which tools it can reach. A language model rests on the data it was trained on, and that data ages over time. Tool use lets the model overcome this limit. Approaches that equip the model with external sources, computational tools, and current data systematically extend the capabilities of language models (Mialon et al., 2023). It has also been shown that a model can teach itself to use tools and decide which tool to call in which situation (Schick et al., 2023).

For the social scientist the most important category of tool is the academic source connected through the model context protocol. This protocol lets the agent connect to an academic index, a reference manager, or a data source in a standard way. Consider a concrete example. When a researcher wants to run a search on PubMed, the agent does not invent that search from its own memory. It connects to PubMed through the context protocol, retrieves the real results, and reports them to the researcher. This explains why the risk of fabricated citations is lower in the agent model. The citation comes not from the model's guess but from a real index.

Two core tools are the file system and the terminal. File system access lets the agent read notes in the researcher's vault and write new notes. Terminal access lets the agent run a statistical script, transform a data file, or lint a markdown document. These two tools turn the tool from a conversation partner into a working environment. A warning is mandatory here. Every tool access is a delegation of authority. The researcher must explicitly approve which tool can perform which operation. That approval discipline is detailed in the next booklet, in the context of installation and the first session.

## 5. Subagent Composition

The most distinctive contribution of the agent model to academic production is subagent composition. A research task can be carried out not by a single agent but by the division of labor among several connected agents. This resembles the layered thinking of case formulation. Just as a patient's situation is addressed simultaneously at the biological, psychological, and social levels, a research task can be divided into different specializations.

An academic example clarifies. Suppose a doctoral student is preparing a literature synthesis on digital media use among adolescents. The task can be divided into three subagents. The first is the literature agent. Its task is to find relevant articles from academic indexes and verify their full bibliographic details. The second is the metadata agent. Its task is to extract the design, sample, and measurement instruments of the found articles into a structured table. The third is the analysis agent. Its task is to draw patterns from that table and prepare summaries according to the questions the researcher asks.

The value of this composition is that each agent deepens within its own narrow task while the results remain traceable. What the literature agent found, what the metadata agent extracted, and how the analysis agent reached a conclusion can each be audited separately. Work showing that simulated agents can exhibit coordinated behavior provides the technical basis for this division of labor (Park et al., 2023). The critical point for the social scientist is this. Subagent composition does not reduce the researcher's control. On the contrary, it increases it by making each stage visible. Instead of a single black box, an auditable workflow is built.

## 6. The Effect on Academic Production: Four Scenarios

The superiority of the agent model over the chat model is seen not as an abstract claim but through concrete scenarios. Four scenarios make the difference clear.

The first scenario is reasoning-chain tracing. A researcher wants to check whether a theoretical argument is built consistently across twelve sources. Chat can discuss each source separately but cannot persistently trace the link between them. The agent reads each source, writes its relation to the argument into a file, and reports where the chain breaks.

The second scenario is the traceability matrix. A manuscript has received eleven reviewer comments. The response to each comment must be traced to the change it produced in the text. The agent keeps this matrix in a file, updates it at each revision, and verifies that no comment is left unanswered. Chat would have to rebuild this matrix in every session.

The third scenario is the library map. A source pool of hundreds of articles can be mapped by design, sample, and publication date. The agent writes this map to the file system, and when the researcher returns weeks later the map is still in place.

The fourth scenario is conceptual mapping. In Turkish and English literature the same concept is often named with different terms. The agent can keep this mapping in a consistent glossary. The common property of these four scenarios is that they are tasks where continuity produces value. Positioning artificial intelligence as a working partner is a frame defended at the popular level as well (Mollick, 2024). But the emphasis of this booklet is different. Partnership is not an attitude but an interface property. Without continuity, a file system, and auditable subtasks, partnership cannot be built.

## 7. Limits and Misunderstandings

The power of the agent model brings two common misunderstandings. If these are not addressed openly, the researcher will value the tool either too much or too little.

The first misunderstanding is that agency means autonomy. The agent can act, but this does not mean it decides on its own. Every action falls within the framework the researcher builds and the permission the researcher grants. It has been shown philosophically that the output of generative language models can carry a character indifferent to truth at the epistemic level (Hicks et al., 2024). Being an agent does not change that character. The second misunderstanding is that the agent is now reliable. The agent is still a stochastic system. The risk of reproducing statistical patterns without understanding holds in the agent interface as well (Bender et al., 2021). The fact that it can write a file does not guarantee that what it wrote is correct.

Three concrete failure modes make these limits operational. The first is scope drift. The agent may exceed the boundaries of the narrow task it was given and intervene in unrelated files. The mitigation is to define the scope explicitly in every session. The second is the loop trap. When the agent cannot make progress on a subtask, it may repeat the same step. The mitigation is to track steps that show no progress and to stop when needed. The third is hidden state. The agent may carry an assumption it made in a previous step invisibly into the next. The mitigation is to write intermediate outputs explicitly to a file and audit them. These three modes are recorded not to reject the agent model but to use it with discipline.

## 8. The Turkish and Greek Specificity

The concrete use of the agent model is not independent of hardware and development-environment realities. University computer environments in Türkiye are predominantly Windows based. For the agent to have full access to the file system and the terminal, Windows users often have to install a Linux subsystem, which requires an additional step. In Greece, at universities such as Democritus and Athens, there are cases where the Linux development environment is set up with the support of the IT department. This infrastructure difference is a practical threshold standing in front of the continuity the agent model offers. This booklet records the existence of the threshold and leaves the technical detail of its solution to the next booklet.

## 9. The Next Booklet

This booklet showed that the difference between chat and agent is not an interface preference but an epistemological distinction, and that this distinction produces continuity and auditability in academic production. If the value of the agent model comes from the interface difference, the first concrete question facing the academic is this. How do you set up this interface in a safe and tested way. The next booklet addresses the steps of installation and the three sanity checks a researcher can genuinely control in a first session. Booklet 001-01-0003 (Installation, First Session, and Sanity Checks) continues from this point.

---

## References

Citations are in APA 7 format. Each DOI and identifier was independently verified against Crossref, arXiv, or the publisher page on 2026-05-24.

Bender, E. M., Gebru, T., McMillan-Major, A., & Shmitchell, S. (2021). On the dangers of stochastic parrots: Can language models be too big? In *Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency (FAccT '21)* (pp. 610-623). Association for Computing Machinery. https://doi.org/10.1145/3442188.3445922

Engel, G. L. (1977). The need for a new medical model: A challenge for biomedicine. *Science*, 196(4286), 129-136. https://doi.org/10.1126/science.847460

Hicks, M. T., Humphries, J., & Slater, J. (2024). ChatGPT is bullshit. *Ethics and Information Technology*, 26(2), 38. https://doi.org/10.1007/s10676-024-09775-5

Mialon, G., Dessì, R., Lomeli, M., Nalmpantis, C., Pasunuru, R., Raileanu, R., Rozière, B., Schick, T., Dwivedi-Yu, J., Celikyilmaz, A., Grave, E., LeCun, Y., & Scialom, T. (2023). Augmented language models: A survey. *Transactions on Machine Learning Research*. https://arxiv.org/abs/2302.07842

Mollick, E. (2024). *Co-intelligence: Living and working with AI*. Portfolio. ISBN 978-0-593-71671-3

Park, J. S., O'Brien, J. C., Cai, C. J., Morris, M. R., Liang, P., & Bernstein, M. S. (2023). Generative agents: Interactive simulacra of human behavior. In *Proceedings of the 36th Annual ACM Symposium on User Interface Software and Technology (UIST '23)*. Association for Computing Machinery. https://doi.org/10.1145/3586183.3606763

Schick, T., Dwivedi-Yu, J., Dessì, R., Raileanu, R., Lomeli, M., Zettlemoyer, L., Cancedda, N., & Scialom, T. (2023). Toolformer: Language models can teach themselves to use tools. In *Advances in Neural Information Processing Systems 36 (NeurIPS 2023)*. https://arxiv.org/abs/2302.04761

Sumers, T. R., Yao, S., Narasimhan, K., & Griffiths, T. L. (2024). Cognitive architectures for language agents. *Transactions on Machine Learning Research*. https://arxiv.org/abs/2309.02427

Wooldridge, M. (2020). *An introduction to multiagent systems* (2nd ed.). Wiley. ISBN 978-1-119-95956-7

Yao, S., Zhao, J., Yu, D., Du, N., Shafran, I., Narasimhan, K., & Cao, Y. (2023). ReAct: Synergizing reasoning and acting in language models. In *Proceedings of the 11th International Conference on Learning Representations (ICLR 2023)*. https://arxiv.org/abs/2210.03629

---

**Booklet identifier.** `001-01-0002`
**Version.** `0.1.0`
**Date.** 2026-05-24
**Approximate word count.** 2480 (English body text, measured with wc)
**Verified citations.** 10
**Fabricated citations.** 0
**Previous booklet.** [`001-01-0001`](../001-01-0001/en.md). What is Claude Code? A Social Scientist's Perspective
**Next booklet.** [`001-01-0003`](../001-01-0003/en.md). Installation, First Session, and Sanity Checks
