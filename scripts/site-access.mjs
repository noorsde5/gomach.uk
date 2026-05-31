import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const configPath = path.join(rootDir, "artifacts/gomach/site-access.json");

/** @returns {Record<string, string>} */
function loadConfig() {
  return JSON.parse(readFileSync(configPath, "utf8"));
}

/** Current month as YYYY-MM in UK time. */
export function currentMonthKey() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    year: "numeric",
    month: "2-digit",
  }).formatToParts(new Date());

  const year = parts.find((p) => p.type === "year")?.value;
  const month = parts.find((p) => p.type === "month")?.value;
  return `${year}-${month}`;
}

/** @returns {boolean} */
export function isSiteAccessEnabled(config = loadConfig()) {
  const key = currentMonthKey();
  const value = config[key];
  return String(value ?? "no").toLowerCase() === "yes";
}

const command = process.argv[2] ?? "check";

if (command === "check") {
  const enabled = isSiteAccessEnabled();
  console.log(enabled ? "enabled" : "disabled");
  process.exit(enabled ? 0 : 1);
}

if (command === "month") {
  console.log(currentMonthKey());
  process.exit(0);
}

if (command === "status") {
  const key = currentMonthKey();
  const enabled = isSiteAccessEnabled();
  console.log(`month=${key}`);
  console.log(`enabled=${enabled}`);
  process.exit(0);
}

console.error(`Unknown command: ${command}`);
process.exit(2);
