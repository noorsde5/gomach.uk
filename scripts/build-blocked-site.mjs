import { copyFileSync, mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { currentMonthKey } from "./site-access.mjs";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(rootDir, "artifacts/gomach/dist/public");
const publicDir = path.join(rootDir, "artifacts/gomach/public");

const blockedHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex, nofollow" />
    <title>404 — This website does not exist</title>
    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
        background: #0f0f0f;
        color: #e5e5e5;
        padding: 2rem;
      }
      main { max-width: 28rem; text-align: center; }
      h1 { font-size: 4rem; font-weight: 800; margin-bottom: 0.5rem; color: #fff; }
      p { color: #a3a3a3; line-height: 1.6; }
    </style>
  </head>
  <body>
    <main>
      <h1>404</h1>
      <p>This website does not exist.</p>
    </main>
  </body>
</html>
`;

mkdirSync(outDir, { recursive: true });
writeFileSync(path.join(outDir, "index.html"), blockedHtml, "utf8");
writeFileSync(path.join(outDir, "404.html"), blockedHtml, "utf8");
copyFileSync(path.join(publicDir, "CNAME"), path.join(outDir, "CNAME"));
copyFileSync(path.join(publicDir, ".nojekyll"), path.join(outDir, ".nojekyll"));

console.log(`Blocked site built for ${currentMonthKey()} → artifacts/gomach/dist/public`);
