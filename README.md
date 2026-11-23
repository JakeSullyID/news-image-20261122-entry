# News Image Entry

[![make.fun](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/JakeSullyID/news-image-20261122-entry/rank.svg)](https://make.fun/bounty/news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/JakeSullyID/news-image-20261122-entry/reward.svg)](https://make.fun/bounty/news-image-20261122)

This entry is a deterministic Node.js TypeScript program designed for the make.fun platform. It reads the bundled `entry.png` image file and writes it byte-for-byte to `/output/entry.png`, ensuring identical outputs across multiple executions.

## Implementation Details

- **Language / Runtime:** Node.js 22 (TypeScript) using only built-in standard modules (`node:fs` and `node:path`).
- **Destination:** Creates `/output` directory recursively if absent and outputs `entry.png`.
- **Determinism:** Guarantees bit-exact reproduction of the original artwork.
