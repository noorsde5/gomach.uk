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
