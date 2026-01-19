import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 60_000,
  use: {
    baseURL: "http://127.0.0.1:4173",
  },
  webServer: {
    command: "npm run build && npm run preview -- --host 0.0.0.0 --port 4173",
    port: 4173,
    reuseExistingServer: !process.env.CI,
  },
});
