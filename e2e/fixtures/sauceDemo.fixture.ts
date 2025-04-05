import {test as base} from "@playwright/test";
import { SauceDemoBaseFlow } from "../test-scripts/sauce-demo/SauceDemoBase.flow";

export const test = base.extend<{
    sauceDemoBaseFlow: SauceDemoBaseFlow;
}>  ({
    sauceDemoBaseFlow: async ({}, use) => { 
        const baseUrl = "https://www.saucedemo.com/";
        console.log("Step 0: Inside sauceDemoBaseFlow fixture...");
        const flow = new SauceDemoBaseFlow(baseUrl);
        await flow.initialize();
        await use(flow);
        await flow.close();
    }
});
export { expect } from "@playwright/test";