"""Tests for the social-cc-plugin installer business logic."""

from __future__ import annotations

from pathlib import Path

import pytest

from social_cc_plugin import cli


def _make_source(tmp_path: Path) -> Path:
    source = tmp_path / "skills"
    for name in ("alpha-skill", "beta-skill"):
        skill_dir = source / name
        skill_dir.mkdir(parents=True)
        (skill_dir / "SKILL.md").write_text("# test skill\n", encoding="utf-8")
    return source


def test_list_skill_names_sorted(tmp_path: Path) -> None:
    source = _make_source(tmp_path)
    assert cli.list_skill_names(source) == ["alpha-skill", "beta-skill"]


def test_install_copies_all(tmp_path: Path) -> None:
    source = _make_source(tmp_path)
    target = tmp_path / "out"
    installed, skipped = cli.install_skills(source, target, force=False, dry_run=False)
    assert (installed, skipped) == (2, 0)
    assert (target / "alpha-skill" / "SKILL.md").read_text(encoding="utf-8") == "# test skill\n"


def test_install_skips_existing(tmp_path: Path) -> None:
    source = _make_source(tmp_path)
    target = tmp_path / "out"
    cli.install_skills(source, target, force=False, dry_run=False)
    installed, skipped = cli.install_skills(source, target, force=False, dry_run=False)
    assert (installed, skipped) == (0, 2)


def test_install_force_overwrites(tmp_path: Path) -> None:
    source = _make_source(tmp_path)
    target = tmp_path / "out"
    cli.install_skills(source, target, force=False, dry_run=False)
    installed, skipped = cli.install_skills(source, target, force=True, dry_run=False)
    assert (installed, skipped) == (2, 0)


def test_dry_run_writes_nothing(tmp_path: Path) -> None:
    source = _make_source(tmp_path)
    target = tmp_path / "out"
    installed, skipped = cli.install_skills(source, target, force=False, dry_run=True)
    assert (installed, skipped) == (2, 0)
    assert not target.exists()


def test_main_list_without_bundle_returns_one() -> None:
    # In the source checkout the skills are not bundled, so list reports nothing.
    assert cli.main(["list"]) == 1


def test_main_version_exits_zero() -> None:
    with pytest.raises(SystemExit) as exc:
        cli.main(["--version"])
    assert exc.value.code == 0
