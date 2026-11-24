// Weirdest Job Title: Blind Judge Showdown — entry program.
//
// Writes exactly one job title to /output/entry.txt and nothing else.
// The title is a fixed constant, so the output is byte-identical on
// every run. No input is read, no randomness, no network, no clock.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The entry: a hireable third wheel, booked for first dates.
// 40 characters — inside the competition gate of 1 to 60.
const TITLE = "Professional Third Wheel for First Dates";

// Where the sealed scorer looks for the entry.
const OUTPUT_PATH = "/output/entry.txt";

// The gate, checked before anything is written: UTF-8 text of 1 to 60
// characters, not whitespace only.
function gateCheck(title: string): void {
  const chars = [...title];
  if (chars.length < 1 || chars.length > 60) {
    throw new Error(
      `title is ${chars.length} characters, outside the 1-60 gate`,
    );
  }
  if (title.trim().length === 0) {
    throw new Error("title is whitespace only");
  }
  // Round-tripping through UTF-8 must not change a single character.
  const roundTripped = Buffer.from(title, "utf8").toString("utf8");
  if (roundTripped !== title) {
    throw new Error("title is not valid UTF-8 text");
  }
}

function main(): void {
  gateCheck(TITLE);
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  // No trailing newline: the file holds the title and nothing else,
  // so the character count the scorer sees is exactly the title.
  writeFileSync(OUTPUT_PATH, TITLE, "utf8");
  // A one-line confirmation on stdout only; the scored file is
  // untouched by it, and the program's result stays deterministic.
  console.log(`wrote ${[...TITLE].length} characters to ${OUTPUT_PATH}`);
}

main();
