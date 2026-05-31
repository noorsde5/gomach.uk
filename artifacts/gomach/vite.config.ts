import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { isSiteAccessEnabled } from "../../scripts/site-access-lib.mjs";

const rawPort = process.env.PORT;

if (!rawPort) {
  throw new Error(
    "PORT environment variable is required but was not provided.",
  );
}

const port = Number(rawPort);

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

const basePath = process.env.BASE_PATH;

if (!basePath) {
  throw new Error(
    "BASE_PATH environment variable is required but was not provided.",
  );
}

const currentYear = new Date().getFullYear();
const siteAccess =
  process.env.VITE_SITE_ACCESS ??
  (isSiteAccessEnabled() ? "yes" : "no");

export default defineConfig({
  base: basePath,
  define: {
    "import.meta.env.VITE_SITE_ACCESS": JSON.stringify(siteAccess),
  },
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "inject-copyright-year",
      transformIndexHtml(html) {
        return html.replaceAll("%CURRENT_YEAR%", String(currentYear));
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port,
    strictPort: true,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
    },
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
