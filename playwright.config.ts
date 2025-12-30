import { defineConfig, devices } from '@playwright/test';

const ENV = process.env.ENV || 'dev';

const BASE_URLS: Record<string, string> = {
  dev: 'https://dev.myapp.com',
  staging: 'https://staging.myapp.com',
  
};

export default defineConfig({
  testDir: './tests',
  
  fullyParallel: true,
 
  forbidOnly: !!process.env.CI,
  
  retries: process.env.CI ? 2 : 0,
  
  workers: process.env.CI ? 1 : undefined,
 
  reporter: 'html',
  
  use: {
   baseURL: BASE_URLS[ENV],
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: `chromium-${ENV}`,
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name:  `firefox-${ENV}`, 
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name:`webkit-${ENV}`, 
      use: { ...devices['Desktop Safari'] },
    },

    
  ],

 
});
