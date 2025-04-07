import { Page } from '@playwright/test';
import { LoginPageAssertions } from '../../assertions/LoginPageAssertions';
import { LoginPage } from '../../page-objects/sauce-demo/LoginPage';
import { getPage } from '../../utils/page';

export class SauceUserFlow {
    readonly page: Page;
    private loginPage: LoginPage;
    private loginPageAssertions: LoginPageAssertions;
    readonly baseUrl: string = 'https://www.saucedemo.com/';

    private testChain: (() => Promise<void>)[] = [];

    constructor() {
        this.page = getPage();
        this.loginPage = new LoginPage(this.page);
        this.loginPageAssertions = new LoginPageAssertions(this.page);
    }

    async execute(): Promise<void> {
        for (const testAction of this.testChain) {
            await testAction();
        }
    }

    login(): SauceUserFlow {
        this.testChain.push(async () => {
            await this.loginPage.navigateToLoginPage(this.baseUrl);
            await this.loginPage.login('username', 'password');
            await this.loginPageAssertions.verifyLoginPage();
        });
        return this;
    }

    addToCart(): SauceUserFlow {
        this.testChain.push(async () => {
            console.log('Adding item to cart...');
        });
        return this;
    }

    goToCart(): SauceUserFlow {
        this.testChain.push(async () => {
            console.log('Going to cart...');
        });
        return this;
    }
}
