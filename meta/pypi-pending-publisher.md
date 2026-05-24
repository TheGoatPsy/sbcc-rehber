# PyPI Trusted Publishing, Pending Publisher Setup

`social-cc-plugin` is published to PyPI through GitHub Actions OpenID Connect (OIDC) trusted
publishing. There is no stored API token. Before the first release can publish, the maintainer
registers a **pending publisher** on PyPI. This is a manual, one-time step that only the account
owner can perform.

## One-time registration (maintainer)

Sign in at [pypi.org](https://pypi.org), open **Your account** then **Publishing**
([pypi.org/manage/account/publishing](https://pypi.org/manage/account/publishing/)), and under
"Add a new pending publisher" enter exactly these values.

| Field | Value |
|---|---|
| PyPI Project Name | `social-cc-plugin` |
| Owner | `TheGoatPsy` |
| Repository name | `claude-code-for-social-scientists` |
| Workflow name | `publish-pypi.yml` |
| Environment name | `pypi` |

Save the form. PyPI creates the project automatically on the first successful publish.

## Release ordering

Register the pending publisher **before** publishing the first GitHub release that should create
the PyPI project, or be ready to re-run the workflow afterward. The publish workflow
([`../.github/workflows/publish-pypi.yml`](../.github/workflows/publish-pypi.yml)) runs on
`release: published`, builds the sdist and wheel, and uploads them through the `pypi` GitHub
Environment using OIDC. If the pending publisher is not yet registered, the publish step fails
without affecting the GitHub release or the Zenodo deposit. Register it, then re-run the workflow.

## Why no token

Trusted publishing exchanges a short-lived OIDC identity from GitHub Actions for a PyPI upload
token at run time. No long-lived secret is stored in the repository or in GitHub secrets. The
workflow's `publish` job is the only place granted `id-token: write`, and it is scoped to the
`pypi` GitHub Environment.

## Verification after first publish

- The project page appears at
  [pypi.org/project/social-cc-plugin](https://pypi.org/project/social-cc-plugin/).
- `pip install social-cc-plugin` then `social-cc list` shows the ten bundled skills.
- Patch releases should keep direct maintainer email addresses out of package metadata. Route
  project coordination through GitHub issues, discussions, and profile-level contact surfaces.
