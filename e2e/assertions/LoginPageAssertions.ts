import { BaseAssertions } from './BaseAssertions';

export class LoginPageAssertions extends BaseAssertions {
    constructor(public page: any) {
        super(page);
    }

    async verifyLoginPage(): Promise<void> {
        await this.verify(
            async () => await this.page.isVisible('.login_logo'),
            'Login page is displayed',
            'Login page is not displayed'
        );
    }

    async verifyErrorMessage(): Promise<void> {
        await this.verify(
            async () => await this.page.isVisible('[data-test="error"]'),
            'Error message is displayed',
            'Error message is not displayed'
        );
    }
}
