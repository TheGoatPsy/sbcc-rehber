---
name: ethics-irb-ai-protocol
description: Use when preparing ethics committee, IRB, KVKK, GDPR, EU AI Act, data minimization, and AI disclosure checklists for social science or clinical research projects.
---

# Ethics IRB AI Protocol

## When to use

Use this skill when a research project uses AI in recruitment, consent, data handling, coding, analysis, writing, supervision, or participant-facing interaction.

## Inputs

- Research design.
- Participant population.
- Data types.
- AI use case.
- Jurisdiction or institution.
- Whether data are identifiable, pseudonymized, anonymized, or synthetic.
- Submission target, such as ethics committee, IRB, journal, or grant body.

## Workflow

1. Separate screening, research design, data processing, analysis, and writing uses of AI.
2. Identify participant risk, vulnerability, consent implications, and data sensitivity.
3. Apply data minimization, purpose limitation, access control, retention, and deletion rules.
4. Map regulatory layers, including local ethics rules, KVKK, GDPR, EU AI Act transparency duties, and publisher disclosure rules when relevant.
5. Define what data must never enter an AI system.
6. Draft the AI-use disclosure for methods, ethics application, consent form, and manuscript note.
7. Produce a protocol checklist with approval blockers.

## Output

Return:

- AI use map.
- Data flow summary.
- Ethics and legal checklist.
- Consent language draft.
- Disclosure language draft.
- Data minimization rules.
- Approval blockers.
- Questions for the ethics committee.

## Verification

- Identifiable clinical or participant data are not sent to AI tools by default.
- Consent language names AI involvement clearly when participant data are affected.
- Jurisdictional claims are marked as checklist guidance unless a legal source was verified.
- High-risk or participant-facing AI use is escalated for human approval.
- Disclosure language matches the actual workflow.

## Safety

Do not provide legal advice as a final authority. Do not process raw clinical records, identifiable participant data, or institution secrets. Ask for anonymized summaries when examples are needed.

## Example prompt

"Create an ethics committee AI-use checklist for a qualitative interview study where anonymized transcripts may be coded with AI assistance."

Expected smoke output:

- Data flow, consent, minimization, disclosure, and human oversight sections.
- A clear rule that non-anonymized transcripts must not be uploaded to AI systems.
- Approval blockers for vulnerable populations or identifiable data.
