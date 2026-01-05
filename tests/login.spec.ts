// login.spec.ts - Playwright configuration used by login-related tests
import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 20000,   // Allow up to 90s for full test runs to complete in slower or heavily loaded environments (e.g. CI)
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,
    navigationTimeout: 30000,
  },
});
