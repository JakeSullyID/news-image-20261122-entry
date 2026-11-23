import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

function executeImageTransfer(): void {
  const sourcePath = join(dirname(fileURLToPath(import.meta.url)), 'entry.png');
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
  const destinationPath = join(outputDir, 'entry.png');

  mkdirSync(outputDir, { recursive: true });

  // Read the source image entry.png into memory for deterministic byte-for-byte replication
  const imageBuffer = readFileSync(sourcePath);
  // Write the entry image buffer to the resolved destination path inside the output directory
  writeFileSync(destinationPath, imageBuffer);
}

executeImageTransfer();
