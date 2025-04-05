import { BaseAssertions } from "./BaseAssertions";

export class AdminPageAssertions extends BaseAssertions {
    constructor(public page: any) {
        super(page);
    }

    async verifyAdminPage(): Promise<void> {
        await this.verify(
            async () => await this.page.isVisible('.login_logo'),
            'Admin page is displayed',
            'Admin page is not displayed'
        );
    }

    async verifyAdminErrorMessage(): Promise<void> {
        await this.verify(
            async () => await this.page.isVisible('[data-test="error"]'),
            'Error message is displayed',
            'Error message is not displayed'
        );
    }
}