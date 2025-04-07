import { expect } from '@playwright/test';

export class BaseAssertions {
    constructor(public page: any) {
        this.page = page;
    }

    protected async verify(
        condition: () => Promise<boolean>,
        successMessage: string,
        errorMessage: string
    ) {
        const result = await condition();
        if (result) {
            console.log(`✅ ${successMessage}`);
        } else {
            console.error(`❌ ${errorMessage}`);
            expect(successMessage).toBeFalsy();
        }
        return result;
    }
}
