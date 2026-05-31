import { pathToFileURL } from "node:url";
import { currentMonthKey, isSiteAccessEnabled } from "./site-access-lib.mjs";

const isCli = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;

if (isCli) {
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
}
