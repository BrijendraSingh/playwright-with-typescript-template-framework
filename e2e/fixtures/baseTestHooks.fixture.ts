import { Page, test as baseTest } from '@playwright/test';
import { setPage } from '../utils/page';
import { getEnvironmentConfig } from '../../config/environments';

baseTest.beforeEach(({ page }: { page: Page }) => {
    setPage(page);
    const env = getEnvironmentConfig();
    if (env.baseUrl) {
        console.log(`Base URL: ${env.baseUrl}`);
        console.log(`Base URL: ${env.apiUrl}`);
    }
});

baseTest.afterEach(async ({ page }: { page: Page }) => {
    await page.close();
});

export const test = baseTest;
