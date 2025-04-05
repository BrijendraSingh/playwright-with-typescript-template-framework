import { Browser, chromium, Page } from "@playwright/test";

export class SauceDemoBaseFlow {
    public page!: Page;
    public browser!: Browser;

    constructor(public baseUrl: string) {
        console.log("Step 1: Inside SauceDemoBaseFlow constructor...");
    }

    async initialize() {
        console.log("Step 2: Initializing browser... in SauceDemoBaseFlow");
        this.browser = await chromium.launch({
            headless: false,
            slowMo: 50,
            args: ["--start-maximized"],
        });

        this.page = await this.browser.newPage();
        await this.page.goto(this.baseUrl);
    }

    async close() {
        console.log("Step 3: Closing browser... in SauceDemoBaseFlow");
        await this.page.close();
        await this.browser.close();
    }

    async createFlow<T extends SauceDemoBaseFlow>(FlowType: new (baseUrl: string) => T): Promise<T> {
        console.log("Step 4: Creating flow... in SauceDemoBaseFlow");
        const flowInstance = new FlowType("https://www.saucedemo.com/");
        await flowInstance.initialize();
        return flowInstance;
    }
}