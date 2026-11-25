// Famous Last Words: The Funniest Epitaph
// Entry for make.fun bounty u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406
// Writes a single-line epitaph (1-150 chars) to $MAKEFUN_OUTPUT_DIR/entry.txt

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Here lies Dave. He died doing what he loved: ignoring the warning labels.";

const MAX_CHARS = 150;

if (typeof ENTRY !== "string" || ENTRY.trim().length === 0) {
  throw new Error("entry must be a non-empty string");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (ENTRY.length > MAX_CHARS) {
  throw new Error(`entry is ${ENTRY.length} chars, over the ${MAX_CHARS} limit`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote entry.txt (${ENTRY.length} chars): ${ENTRY}`);
