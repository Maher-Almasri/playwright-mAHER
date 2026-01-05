// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 10000,   //Add By Maher @Mobisoft
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,
    navigationTimeout: 30000,
  },
});
