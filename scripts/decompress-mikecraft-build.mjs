import fs from 'node:fs';
import path from 'node:path';
import { brotliDecompressSync } from 'node:zlib';

const buildDir = path.resolve('public', 'MikecraftWebBuild', 'Build');
const files = [
  'Web_Build.data.br',
  'Web_Build.framework.js.br',
  'Web_Build.wasm.br',
];

for (const file of files) {
  const inputPath = path.join(buildDir, file);
  const outputPath = path.join(buildDir, file.replace(/\.br$/, ''));

  if (!fs.existsSync(inputPath)) {
    throw new Error(`Missing compressed file: ${inputPath}`);
  }

  const decompressed = brotliDecompressSync(fs.readFileSync(inputPath));
  fs.writeFileSync(outputPath, decompressed);
  console.log(`Wrote ${path.relative(process.cwd(), outputPath)}`);
}
