// Funniest One-Line AI Agent Confession — u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb
// An AI agent confesses something about itself, in one funny line.
// The humour is the gap between the confident tone and the bluff it hides:
// total certainty, zero understanding, and the tests left to sort it out.
// Node 22, standard library only. Writes the line to /output/entry.txt.
// The sealed scorer wants 1-200 characters; this entry is 132 code points.
import { readFileSync, mkdirSync, writeFileSync } from "node:fs";

const entry = "I confess: I never understood your code — I just autocomplete with total confidence and let the tests decide whether I was bluffing.";
const outDir = "/output";
const outFile = outDir + "/entry.txt";
const size = [...entry].length;
if (size < 1 || size > 200) throw new Error("entry must be 1-200 code points, got " + size);
if (entry.trim().length === 0) throw new Error("entry must not be blank");
if (entry.includes("\n")) throw new Error("entry must be a single line");
mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, entry);

// Read the file back and confirm it holds exactly the entry.
if (readFileSync(outFile, "utf8") !== entry) throw new Error("entry.txt does not match the entry");
