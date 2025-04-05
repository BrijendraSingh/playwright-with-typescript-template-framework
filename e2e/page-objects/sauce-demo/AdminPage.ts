import { Page } from "@playwright/test";
import { loginPageLocators } from "../../locators/sauce-demo/sauce-demo.locator";

export class AdminPage {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    public async adminLogin(username: string, password: string) {
        await this.page.locator(loginPageLocators.username).fill(username);
        await this.page.locator(loginPageLocators.password).fill(password);
        await this.page.locator(loginPageLocators.loginButton).click();
    }

    public async getErrorMessage(): Promise<string> {
        const errorMessage = this.page.locator("h3[data-test='error']");
        return errorMessage.innerText();
    }
}