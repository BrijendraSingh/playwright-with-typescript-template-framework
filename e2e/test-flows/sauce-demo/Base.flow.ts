import { Browser, chromium, Page } from "@playwright/test";

export class BaseFlow {
    public page!: Page;
    protected browser!: Browser;

    constructor(protected url: string) {}

    async launch() {
        this.browser = await chromium.launch();
        this.page = await this.browser.newPage();
        await this.page.goto(this.url);
    }

    async close() {
        await this.browser.close();
    }
}