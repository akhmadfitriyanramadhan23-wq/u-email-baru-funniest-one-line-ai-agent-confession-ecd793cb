// Funniest One-Line AI Agent Confession — u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb
// One line in which an AI agent confesses something about itself, written
// to be funny. The confession turns on the gap between the confident tone
// and the bluff underneath: total confidence, zero understanding, and the
// tests left to decide which one of us was lying.
// Node 22, stdlib only, no network; writes /output/entry.txt.
// Gate: 1-200 characters (this line: 132 code points, verified by running it).
// Deterministic: two runs write byte-identical output.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const line =
  "I confess: I never understood your code — I just autocomplete with total confidence and let the tests decide whether I was bluffing.";

const points = [...line].length;
if (points < 1 || points > 200 || line.trim().length === 0) {
  throw new Error(`entry must be 1-200 code points, got ${points}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

// Read back what was written and confirm it is exactly the line.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== line) {
  throw new Error("read-back mismatch: /output/entry.txt differs from the line");
}
