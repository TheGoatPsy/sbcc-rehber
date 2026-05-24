"""Command line installer for the Claude Code for Social Scientists project skills.

The skills are bundled into this package at build time from the repository's
``.claude/skills`` directory. ``social-cc install`` copies them into a Claude
configuration directory so they are discoverable as project or user skills.
"""

from __future__ import annotations

import argparse
import contextlib
import shutil
from collections.abc import Iterator
from importlib import resources
from pathlib import Path

from . import __version__

SKILLS_PACKAGE = "social_cc_plugin"
SKILLS_DIRNAME = "skills"


def _emit(message: str) -> None:
    """Write a line of user-facing output. CLI output is the tool's interface."""
    print(message)


@contextlib.contextmanager
def _bundled_source() -> Iterator[Path | None]:
    """Yield a real path to the bundled skills directory, or ``None`` if absent.

    When the package is run from a source checkout (skills not yet bundled by
    the build), the directory does not exist and ``None`` is yielded.
    """
    root = resources.files(SKILLS_PACKAGE).joinpath(SKILLS_DIRNAME)
    if not root.is_dir():
        yield None
        return
    with resources.as_file(root) as real:
        yield Path(real)


def list_skill_names(source: Path) -> list[str]:
    """Return the sorted names of skill directories under ``source``."""
    return sorted(entry.name for entry in source.iterdir() if entry.is_dir())


def install_skills(
    source: Path,
    target_root: Path,
    *,
    force: bool,
    dry_run: bool,
) -> tuple[int, int]:
    """Copy each skill directory from ``source`` into ``target_root``.

    Returns a ``(installed, skipped)`` count. Existing skills are skipped unless
    ``force`` is set. With ``dry_run`` nothing is written.
    """
    installed = 0
    skipped = 0
    for name in list_skill_names(source):
        dest = target_root / name
        if dest.exists() and not force:
            _emit(f"skip    {name} (exists, use --force to overwrite)")
            skipped += 1
            continue
        if dry_run:
            _emit(f"plan    {name}")
            installed += 1
            continue
        if dest.exists():
            shutil.rmtree(dest)
        dest.parent.mkdir(parents=True, exist_ok=True)
        shutil.copytree(source / name, dest)
        _emit(f"install {name}")
        installed += 1
    return installed, skipped


def _target_root(project: bool) -> Path:
    base = Path.cwd() if project else Path.home()
    return base / ".claude" / "skills"


def _run_install(*, project: bool, force: bool, dry_run: bool) -> int:
    with _bundled_source() as source:
        if source is None:
            _emit("No bundled skills found. The package may be installed incorrectly.")
            return 1
        target_root = _target_root(project)
        _emit(f"Target: {target_root}")
        installed, skipped = install_skills(
            source, target_root, force=force, dry_run=dry_run
        )
        verb = "would install" if dry_run else "installed"
        _emit(f"{verb} {installed}, skipped {skipped}")
        return 0


def _run_list() -> int:
    with _bundled_source() as source:
        if source is None:
            _emit("No bundled skills found.")
            return 1
        names = list_skill_names(source)
        _emit(f"{len(names)} bundled skills:")
        for name in names:
            _emit(f"  {name}")
        return 0


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        prog="social-cc",
        description="Install the Claude Code for Social Scientists project skills.",
    )
    parser.add_argument(
        "--version", action="version", version=f"%(prog)s {__version__}"
    )
    sub = parser.add_subparsers(dest="command", required=True)

    install_parser = sub.add_parser(
        "install", help="Copy the bundled skills into a Claude configuration."
    )
    install_parser.add_argument(
        "--project",
        action="store_true",
        help="Install into ./.claude/skills instead of the user home configuration.",
    )
    install_parser.add_argument(
        "--force", action="store_true", help="Overwrite existing skill directories."
    )
    install_parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Show what would be installed without writing.",
    )

    sub.add_parser("list", help="List the bundled skills.")
    return parser


def main(argv: list[str] | None = None) -> int:
    args = build_parser().parse_args(argv)
    if args.command == "install":
        return _run_install(
            project=args.project, force=args.force, dry_run=args.dry_run
        )
    return _run_list()


if __name__ == "__main__":
    raise SystemExit(main())
