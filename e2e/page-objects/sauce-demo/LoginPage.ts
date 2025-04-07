import { Page } from '@playwright/test';
import { loginPageLocators } from '../../locators/sauce-demo/sauce-demo.locator';

export class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async navigateToLoginPage(url: string) {
        await this.page.goto(url);
    }

    public async login(username: string, password: string) {
        await this.page.locator(loginPageLocators.username).fill(username);
        await this.page.locator(loginPageLocators.password).fill(password);
        await this.page.locator(loginPageLocators.loginButton).click();
    }

    public async getErrorMessage(): Promise<string> {
        const errorMessage = this.page.locator("h3[data-test='error']");
        return errorMessage.innerText();
    }
}
