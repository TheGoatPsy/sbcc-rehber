# scripts

This directory exists for repository-local helper scripts that are safe to publish.

The main sanitization tooling for this repository (the `sanitize-helper.py` referenced in working notes) lives in the author's private vault and is not included here. The reason is that the helper script's manifest and regex patterns encode information about the author's private repositories and personal infrastructure. Publishing them would partially defeat their purpose.

A safe, public-friendly version of the helper may be published in this directory at a later phase. Until then, this README documents the principle and reading path.

## Operating principle

Any file or fragment from the private vault that becomes part of `claude-code-for-social-scientists` must:

1. Be reviewed against the four-category sanitization triage (SAFE, SANITIZE, BLOCKED, SKIP) documented in the working notes.
2. Have regex-based secret patterns scanned (API keys, OAuth tokens, personal identifiers) before staging for commit.
3. Be verified by a second pass after editing, not before.

This three-step protocol is enforced manually for v0.1.0-alpha. Phase 1 will introduce a pre-commit hook that automates the verify pass.

## Public scripts in this directory

None at v0.1.0-alpha.

## Local-only scripts

The `.gitignore` at the repository root excludes:

```
scripts/sanitize-helper.log
scripts/sanitize-manifest.json
```

These are local working artifacts written by the private sanitize helper when invoked from the author's vault against this repository. They never enter the public history.

---

**Last updated.** 2026-05-19.
