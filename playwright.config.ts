import { defineConfig, devices } from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
    // Global test timeout (30 seconds)
    timeout: 30000,

    // Fail the build on CI if you accidentally left test.only in the source code
    //   forbidOnly: !!process.env.CI,

    // Retry on CI only
    //   retries: process.env.CI ? 2 : 0,

    // Opt out of parallel tests on CI
    //   workers: process.env.CI ? 1 : undefined,

    // Reporter to use
    reporter: 'html',

    // Shared settings for all projects
    use: {
        // Base URL to use in actions like `await page.goto('/')`
        // baseURL: 'https://www.saucedemo.com/',

        // Collect trace when retrying the failed test
        trace: 'on-first-retry',

        // Capture screenshot only on failure
        screenshot: 'only-on-failure',

        // Record video only on failure
        video: 'retain-on-failure',
    },

    // Configure projects for major browsers
    // projects: [
    //   {
    //     name: 'chromium',
    //     use: { ...devices['Desktop Chrome'] },
    //   }
    //,

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
    // ],

    // Folder for test artifacts (screenshots, videos, traces)
    outputDir: 'test-results/',

    // Run your local dev server before starting the tests
    // webServer: {
    //   command: 'npm run start',
    //   url: 'http://127.0.0.1:3000',
    //   reuseExistingServer: !process.env.CI,
    //   stdout: 'ignore',
    //   stderr: 'pipe',
    // },
});
