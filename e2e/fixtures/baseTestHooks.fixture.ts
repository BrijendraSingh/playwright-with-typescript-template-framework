import { Page, test as baseTest } from '@playwright/test';
import { setPage } from '../utils/page';

baseTest.beforeEach(({ page }: { page: Page }) => {
    setPage(page);
});

baseTest.afterEach(async ({ page }: { page: Page }) => {
    await page.close();
});

export const test = baseTest;
