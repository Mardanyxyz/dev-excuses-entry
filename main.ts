// Make the AI Judge Laugh: Developer Excuses
// Writes one funny single-line developer excuse to /output/entry.txt.
// Node 22, stdlib only, no network, deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Resolve this script's own directory (not the caller's cwd): the grader
// runs `node main.ts` from an arbitrary working directory, so nothing here
// may assume where it was launched from. The entry itself always goes to
// the absolute /output path the rules name.
const scriptDir = dirname(fileURLToPath(import.meta.url));
void scriptDir; // output path is absolute (/output); resolution guards the rest.

const ENTRY =
  "It passed all 400 tests, then met one real user and immediately forgot how to code.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
