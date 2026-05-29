import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];

const expectedSkills = [
  "social-science-literature-triage",
  "apa-doi-verifier",
  "bilingual-booklet-pairing",
  "ai-disclosure-auditor",
  "ethics-irb-ai-protocol",
  "rebuttal-traceability-matrix",
  "memory-vault-architect",
  "regional-access-workflow",
  "agentic-session-debugger",
  "repo-release-integrity-check",
];

const requiredFrontmatterFields = [
  "title_en",
  "title_tr",
  "booklet_id",
  "category",
  "language",
  "version",
  "date_published",
  "date_last_revised",
  "authors",
  "ai_assisted",
  "ai_tools",
  "ai_contribution_level",
  "human_review",
  "human_review_date",
  "verified_citations_count",
  "fabricated_citations_count",
  "disclosure_standard",
  "license",
  "status",
];

function fail(message) {
  errors.push(message);
}

function posixPath(filePath) {
  return path.relative(root, filePath).replaceAll(path.sep, "/");
}

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === ".git" || entry.name === "node_modules") continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, files);
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

function parseFrontmatter(filePath) {
  const content = read(filePath);
  const startMatch = content.match(/^---\r?\n/u);
  if (!startMatch) {
    fail(`${posixPath(filePath)} is missing YAML frontmatter`);
    return { fields: new Map(), raw: "", body: content };
  }

  const startLength = startMatch[0].length;
  const endMatch = /\r?\n---\r?\n/u.exec(content.slice(startLength));
  if (!endMatch) {
    fail(`${posixPath(filePath)} has an unterminated YAML frontmatter block`);
    return { fields: new Map(), raw: "", body: content };
  }

  const end = startLength + endMatch.index;
  const raw = content.slice(startLength, end);
  const body = content.slice(end + endMatch[0].length);
  const fields = new Map();

  for (const line of raw.split(/\r?\n/u)) {
    const match = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/u);
    if (!match) continue;
    const [, key, rawValue] = match;
    let value = rawValue.trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    fields.set(key, value);
  }

  return { fields, raw, body };
}

function asInteger(value) {
  const parsed = Number.parseInt(String(value ?? ""), 10);
  return Number.isFinite(parsed) ? parsed : Number.NaN;
}

function validateBooklets() {
  const bookletsRoot = path.join(root, "booklets");
  const bookletDirs = [];

  for (const category of fs.readdirSync(bookletsRoot, { withFileTypes: true })) {
    if (!category.isDirectory()) continue;
    const categoryPath = path.join(bookletsRoot, category.name);
    for (const booklet of fs.readdirSync(categoryPath, { withFileTypes: true })) {
      if (booklet.isDirectory()) {
        bookletDirs.push(path.join(categoryPath, booklet.name));
      }
    }
  }

  const bookletFiles = [];
  const releaseBookletIds = new Set();
  const aggregate = {
    files: 0,
    verified: 0,
    fabricated: 0,
    coDrafting: 0,
    substantialDrafting: 0,
    complete: 0,
  };

  for (const dir of bookletDirs) {
    const tr = path.join(dir, "tr.md");
    const en = path.join(dir, "en.md");
    if (!fs.existsSync(tr) || !fs.existsSync(en)) {
      fail(`${posixPath(dir)} must contain both tr.md and en.md`);
      continue;
    }
    bookletFiles.push(tr, en);
  }

  for (const filePath of bookletFiles) {
    const relative = posixPath(filePath);
    const { fields, raw, body } = parseFrontmatter(filePath);

    for (const field of requiredFrontmatterFields) {
      if (!fields.has(field)) {
        fail(`${relative} is missing frontmatter field ${field}`);
      }
    }

    if (!/^  - name:/mu.test(raw)) {
      fail(`${relative} ai_tools must include at least one tool entry`);
    }
    if (!/^    model_alias:/mu.test(raw)) {
      fail(`${relative} ai_tools must include model_alias`);
    }
    if (!/^    model_dated:/mu.test(raw)) {
      fail(`${relative} ai_tools must include model_dated`);
    }

    const expectedLanguage = path.basename(filePath, ".md");
    if (fields.get("language") !== expectedLanguage) {
      fail(`${relative} language must match its filename`);
    }

    const expectedBookletId = path.basename(path.dirname(filePath));
    if (fields.get("booklet_id") !== expectedBookletId) {
      fail(`${relative} booklet_id must match its parent directory`);
    }

    const status = fields.get("status");
    if (!["planned", "draft", "paired", "release"].includes(status)) {
      fail(`${relative} has invalid status ${status}`);
    }

    if (status === "release") {
      releaseBookletIds.add(expectedBookletId);
      if (fields.get("human_review") !== "complete") {
        fail(`${relative} release files must have human_review complete`);
      }
      const verified = asInteger(fields.get("verified_citations_count"));
      const fabricated = asInteger(fields.get("fabricated_citations_count"));
      if (!Number.isInteger(verified) || verified <= 0) {
        fail(`${relative} release files must have a positive verified citation count`);
      }
      if (fabricated !== 0) {
        fail(`${relative} release files must have fabricated_citations_count 0`);
      }
      if (/10\.XXXXX/u.test(body)) {
        fail(`${relative} release body contains unresolved placeholder DOI 10.XXXXX`);
      }
    }

    aggregate.files += 1;
    aggregate.verified += asInteger(fields.get("verified_citations_count")) || 0;
    aggregate.fabricated += asInteger(fields.get("fabricated_citations_count")) || 0;
    aggregate.complete += fields.get("human_review") === "complete" ? 1 : 0;
    aggregate.coDrafting += fields.get("ai_contribution_level") === "co-drafting" ? 1 : 0;
    aggregate.substantialDrafting += fields.get("ai_contribution_level") === "substantial-drafting" ? 1 : 0;
  }

  if (bookletFiles.length === 0) {
    fail("No booklet language files found under booklets/");
  }
  if (bookletFiles.length % 2 !== 0) {
    fail(`Booklet language files must come in tr/en pairs, found ${bookletFiles.length}`);
  }

  return {
    bookletFiles,
    aggregate,
    releaseCount: releaseBookletIds.size,
    bookletCount: bookletFiles.length / 2,
  };
}

function validateCatalog(releaseCount, bookletCount) {
  const catalog = read(path.join(root, "CATALOG.md"));
  const counts = { release: 0, paired: 0, draft: 0, planned: 0 };
  const rowPattern = /^\| [^|\n]+ \| [^|\n]+ \| [^|\n]+ \| `(release|paired|draft|planned)` \|$/gmu;
  for (const match of catalog.matchAll(rowPattern)) {
    counts[match[1]] += 1;
  }

  // Each status summary row must match the number of detail rows present
  // (internal CATALOG consistency), with no hardcoded version counts.
  for (const status of ["release", "paired", "draft", "planned"]) {
    if (!catalog.includes(`| \`${status}\` | ${counts[status]} |`)) {
      fail(`CATALOG.md summary row for ${status} must equal its ${counts[status]} detail rows`);
    }
  }

  // Cross-check CATALOG against the filesystem (the source of truth). Release
  // rows must equal the on-disk release booklets; the file-backed statuses
  // (all except planned) must equal the booklets that exist on disk. planned
  // rows are roadmap-only and have no files.
  if (counts.release !== releaseCount) {
    fail(`CATALOG.md lists ${counts.release} release rows but the filesystem has ${releaseCount} release booklets`);
  }
  const fileBacked = counts.release + counts.paired + counts.draft;
  if (fileBacked !== bookletCount) {
    fail(`CATALOG.md file-backed rows (${fileBacked}) must equal the ${bookletCount} booklets on disk`);
  }

  for (const skill of expectedSkills) {
    if (!catalog.includes(`\`${skill}\``)) {
      fail(`CATALOG.md companion skill matrix is missing ${skill}`);
    }
  }
}

function validateAggregateDisclosure(aggregate) {
  const disclosure = read(path.join(root, "meta", "ai-disclosure.md"));
  if (!/Aggregate table \(as of v[\d.]+, \d{4}-\d{2}-\d{2}\)/u.test(disclosure)) {
    fail("meta/ai-disclosure.md must identify the aggregate table version and date");
  }

  const rowPattern = /^\| \d{3}-\d{2}-\d{4} \| (tr|en) \|/gmu;
  const rows = [...disclosure.matchAll(rowPattern)];
  if (rows.length !== aggregate.files) {
    fail(`meta/ai-disclosure.md must list one row per booklet language file (${aggregate.files}), found ${rows.length}`);
  }

  const checks = [
    ["Total verified citation declarations across released language files", aggregate.verified],
    ["Total fabricated citations across released language files", aggregate.fabricated],
    ["3, co-drafting", aggregate.coDrafting],
    ["4, substantial-drafting", aggregate.substantialDrafting],
    ["complete", aggregate.complete],
  ];

  for (const [label, value] of checks) {
    if (!new RegExp(`\\| ${escapeRegExp(label)} \\| ${value}(?: \\|)?`, "u").test(disclosure)) {
      fail(`meta/ai-disclosure.md has stale aggregate value for ${label}`);
    }
  }
}

function validateReadmes() {
  const stalePatterns = [
    /v0\.1 scaffold/u,
    /v0\.1 iskelet/u,
    /human review pending/u,
    /pending review/u,
    /currently v0\.2\.0 and v0\.1\.0-alpha/u,
    /şu an v0\.2\.0 ve v0\.1\.0-alpha/u,
    /`ai_tools\.model`/u,
  ];

  for (const relative of ["README.md", "README.tr.md", "meta/contributors.md", "scripts/README.md"]) {
    const content = read(path.join(root, relative));
    for (const pattern of stalePatterns) {
      if (pattern.test(content)) {
        fail(`${relative} contains stale release or schema text matching ${pattern}`);
      }
    }
  }

  const readme = read(path.join(root, "README.md"));
  const readmeTr = read(path.join(root, "README.tr.md"));
  if (!readme.includes("## Project Skills")) {
    fail("README.md must include a Project Skills section");
  }
  if (!readmeTr.includes("## Project Skills")) {
    fail("README.tr.md must include a Project Skills section");
  }
  for (const skill of expectedSkills) {
    if (!readme.includes(`\`${skill}\``)) fail(`README.md is missing ${skill}`);
    if (!readmeTr.includes(`\`${skill}\``)) fail(`README.tr.md is missing ${skill}`);
  }
}

function validateMarkdownLinks() {
  const markdownFiles = walk(root).filter((filePath) => filePath.endsWith(".md"));
  const linkPattern = /!?\[[^\]]*\]\(([^)]+)\)/gu;

  for (const filePath of markdownFiles) {
    const relative = posixPath(filePath);
    if (relative.startsWith("template/")) continue;

    const content = stripFencedCode(read(filePath));
    for (const match of content.matchAll(linkPattern)) {
      const rawTarget = match[1].trim();
      const targetWithoutTitle = rawTarget.replace(/\s+["'][^"']+["']$/u, "");
      const target = targetWithoutTitle.replace(/^<|>$/gu, "");
      if (
        target.startsWith("http://") ||
        target.startsWith("https://") ||
        target.startsWith("mailto:") ||
        target.startsWith("#") ||
        target.startsWith("plugin://") ||
        target.includes("{")
      ) {
        continue;
      }

      const [withoutFragment] = target.split("#");
      if (!withoutFragment) continue;
      const resolved = path.resolve(path.dirname(filePath), withoutFragment);
      if (!resolved.startsWith(root)) {
        fail(`${relative} links outside the repository: ${target}`);
        continue;
      }
      if (!fs.existsSync(resolved)) {
        fail(`${relative} has broken internal link: ${target}`);
      }
    }
  }
}

function stripFencedCode(markdown) {
  return markdown.replace(/```[\s\S]*?```/gu, "");
}

function validateSkills() {
  const skillsRoot = path.join(root, ".claude", "skills");
  if (!fs.existsSync(skillsRoot)) {
    fail(".claude/skills directory is missing");
    return;
  }

  const actualSkills = fs
    .readdirSync(skillsRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();

  const expectedSorted = [...expectedSkills].sort();
  if (JSON.stringify(actualSkills) !== JSON.stringify(expectedSorted)) {
    fail(`Expected project skills ${expectedSorted.join(", ")}, found ${actualSkills.join(", ")}`);
  }

  for (const skill of expectedSkills) {
    const skillDir = path.join(skillsRoot, skill);
    const skillFile = path.join(skillDir, "SKILL.md");
    if (!fs.existsSync(skillFile)) {
      fail(`${skill} is missing SKILL.md`);
      continue;
    }
    if (fs.existsSync(path.join(skillDir, "scripts"))) {
      fail(`${skill} must not include scripts in the first scaffold version`);
    }

    const { fields, raw, body } = parseFrontmatter(skillFile);
    if (fields.get("name") !== skill) {
      fail(`${posixPath(skillFile)} frontmatter name must match its directory`);
    }
    const description = fields.get("description") ?? "";
    if (description.length < 80) {
      fail(`${posixPath(skillFile)} needs a more explicit auto-invocation description`);
    }
    const frontmatterKeys = [...raw.matchAll(/^([A-Za-z0-9_]+):/gmu)].map((match) => match[1]);
    for (const key of frontmatterKeys) {
      if (!["name", "description"].includes(key)) {
        fail(`${posixPath(skillFile)} frontmatter must only use name and description`);
      }
    }

    for (const heading of [
      "## When to use",
      "## Inputs",
      "## Workflow",
      "## Output",
      "## Verification",
      "## Safety",
      "## Example prompt",
    ]) {
      if (!body.includes(heading)) {
        fail(`${posixPath(skillFile)} is missing ${heading}`);
      }
    }

    if (/C:\\Users\\onuri/iu.test(body)) {
      fail(`${posixPath(skillFile)} must not contain private local paths`);
    }
  }
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/gu, "\\$&");
}

const { aggregate, releaseCount, bookletCount } = validateBooklets();
validateCatalog(releaseCount, bookletCount);
validateAggregateDisclosure(aggregate);
validateReadmes();
validateMarkdownLinks();
validateSkills();

if (errors.length > 0) {
  console.error("Repository validation failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("Repository validation passed.");
