#!/usr/bin/env python3
"""Strip the abandoned `tags:` frontmatter field (and its list items) from every post."""

import glob
import sys

POSTS_GLOB = "src/content/posts/*.md"


def strip_tags(lines: list[str]) -> list[str] | None:
    if not lines or lines[0] != "---":
        return None
    end = next((i for i in range(1, len(lines)) if lines[i] == "---"), None)
    if end is None:
        return None

    fm = lines[1:end]
    idx = next((i for i, l in enumerate(fm) if l.strip() == "tags:"), None)
    if idx is None:
        return None

    block_end = idx + 1
    while block_end < len(fm) and fm[block_end].lstrip().startswith("-"):
        block_end += 1

    new_fm = fm[:idx] + fm[block_end:]
    return lines[:1] + new_fm + lines[end:]


def main() -> int:
    changed = 0
    skipped = []
    for path in sorted(glob.glob(POSTS_GLOB)):
        with open(path, encoding="utf-8") as f:
            original = f.read()
        lines = original.splitlines()
        result = strip_tags(lines)
        if result is None:
            skipped.append(path)
            continue
        new_text = "\n".join(result) + "\n"
        if new_text != original:
            with open(path, "w", encoding="utf-8") as f:
                f.write(new_text)
            changed += 1

    print(f"changed: {changed}")
    if skipped:
        print(f"skipped (no tags: field found): {len(skipped)}")
        for p in skipped:
            print(f"  {p}")

    return 0


if __name__ == "__main__":
    sys.exit(main())
