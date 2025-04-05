import { Page, Locator } from "@playwright/test";
import { loginPageLocators } from "../../locators/sauce-demo/sauce-demo.locator";

export class LoginPage {
    constructor(public page: Page) {
        this.page = page;
        console.log("Step 6: Inside LoginPage constructor...");
        console.log("Page object initialized in login page");
        console.log(this.page);
    }

    public async login(username: string, password: string) {
        console.log("Step 9: Inside Logging in...");
        await this.page.locator(loginPageLocators.username).fill(username);
        await this.page.locator(loginPageLocators.password).fill(password);
        await this.page.locator(loginPageLocators.loginButton).click();
    }

    public async getErrorMessage(): Promise<string> {
        const errorMessage = this.page.locator("h3[data-test='error']");
        return errorMessage.innerText();
    }
}