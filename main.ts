// One Line, One Minute: The Vending Machine Pickup Line Contest
// Writes a single vending-machine pickup line (<=200 chars) to /output/entry.txt
// and prints it to stdout. Deterministic: same line on every run.
// Revision: tightened the punch — the smile is now "non-refundable", a vending
// machine's own word for something it will never give back.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Hey, gorgeous — my coils have been turning all day just for you. Press B4 and I'll drop something sweet; exact change optional, but that smile? Non-refundable.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
