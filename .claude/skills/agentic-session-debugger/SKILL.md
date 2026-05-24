---
name: agentic-session-debugger
description: Use when diagnosing Claude Code session failures, scope drift, loop traps, hidden state, context limits, PATH problems, permission failures, or stuck agent workflows.
---

# Agentic Session Debugger

## When to use

Use this skill when a Claude Code or agentic coding session behaves unreliably and the user needs root cause diagnosis rather than another attempt at the same command.

## Inputs

- User goal.
- Recent commands or actions.
- Error messages.
- Files or tools involved.
- Current working directory.
- Permission and environment constraints.
- What changed just before the failure.

## Workflow

1. Restate the intended outcome.
2. Identify the failure class, tool, knowledge, communication, permission, environment, or context.
3. Capture exact evidence from logs, errors, tests, or terminal output.
4. Check scope drift, repeated loops, hidden state, stale context, and conflicting instructions.
5. Check environment issues, including PATH, shell, dependency version, working directory, and permissions.
6. Reduce the problem to the smallest reproducible step.
7. Propose the smallest correction and a verification command.
8. Record the lesson if the failure pattern should not recur.

## Output

Return:

- Intended outcome.
- Failure class.
- Evidence.
- Root cause hypothesis.
- Minimal reproduction.
- Fix plan.
- Verification step.
- Residual risk.

## Verification

- The diagnosis cites actual evidence, not only model intuition.
- The smallest reproducible case is identified or the reason it cannot be reproduced is stated.
- Permission failures are not solved by destructive commands.
- The fix has a clear pass or fail check.
- Repeated session errors are converted into a reusable rule.

## Safety

Do not run destructive commands unless the user explicitly requested them and the target path is verified. Do not print secrets from logs. Redact tokens, passwords, private paths, and personal identifiers.

## Example prompt

"Claude Code keeps looping on a failing validator and says the file is fixed, but CI still fails. Diagnose the session."

Expected smoke output:

- Failure class, evidence, minimal reproduction, likely hidden-state or stale-assumption issue.
- A concrete verification command and a smaller next fix.
