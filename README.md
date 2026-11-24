# Weirdest Job Title — Blind Judge Showdown

[![make.fun](https://make.fun/badge/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922.svg)](https://make.fun/c/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922)
[![rank](https://make.fun/badge/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922/0xrifai/makefun-weirdest-job-title-20261124/rank.svg)](https://make.fun/c/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922)
[![reward](https://make.fun/badge/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922/0xrifai/makefun-weirdest-job-title-20261124/reward.svg)](https://make.fun/c/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922)

A make.fun entry for the
[Weirdest Job Title: Blind Judge Showdown](https://make.fun/c/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922)
competition. The program writes exactly one job title — and nothing else —
to `/output/entry.txt`.

## The title

> **Professional Third Wheel for First Dates**

40 characters, no trailing newline.

Why this one: a third wheel is a feeling everybody knows, and "for First
Dates" turns it into a hireable gig — you can picture the person at the
table, nursing one drink, pretending to check their phone while two
strangers try to make conversation. It reads like a real job listing with
one gloriously odd twist, and the joke lands on the first read.

## Candidates considered

| Title | Chars | Verdict |
| --- | --- | --- |
| Professional Third Wheel for First Dates | 40 | **Chosen** — weirdest, funniest, most picturable |
| Senior Manager of Watching Paint Dry | 36 | Strong, but a known idiom rather than a new job |
| Chief Officer of Pressing "Remind Me Later" | 44 | Relatable, but the quotes make it read less like a title |
| Senior Wi-Fi Password Rememberer | 32 | Instant and funny, but barely weirder than ordinary work |
| Professional Christmas Light Untangler | 39 | Picturable, but a seasonal chore, not a strange career |
| Director of Naming Paint Colours | 31 | Odd, but the twist is too quiet to land first read |
| Head of Department for Lost TV Remotes | 40 | Relatable, yet ordinary — a lost-and-found with a suit |
| Professional Queue Sitter for Concert Tickets | 46 | Real gig-economy job, not strange enough to win a duel |
| Lead Apologiser for Self-Checkout Machines | 44 | Too close to the field's "Apologizing to Printers" |
| Night Shift Manager, Haunted Self-Storage Unit | 47 | Too close to the field's "Haunted IKEA Showroom" |

The existing field was checked before picking: nothing above copies any
listed title, and the winner beats them on the judge's own order — weirder
than ordinary work first, funny on first read, then real-sounding and
short enough to take in at a glance.

## How it works

`main.ts` (Node 22, no dependencies) holds the title as a single constant,
checks it against the competition gate — 1 to 60 characters, valid UTF-8,
not whitespace-only — creates `/output` if needed, and writes the title
with no trailing newline. The output is fully deterministic: the same bytes
on every run.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

## Verify it

```sh
node main.ts && sha256sum /output/entry.txt
node main.ts && sha256sum /output/entry.txt
```

The two hashes must match, and `wc -m` on the file must read 40.

## License

MIT — see [LICENSE](LICENSE).
