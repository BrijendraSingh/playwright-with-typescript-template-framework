import {test as base} from "@playwright/test";
import { UserFlow } from "../test-flows/sauce-demo/User.flow";
import { AdminFlow } from "../test-flows/sauce-demo/Admin.flow";

export const test = base.extend<{
    userFlow: UserFlow;
    adminFlow: AdminFlow;
}>  ({
    userFlow: async ({}, use) => { 
        const user = new UserFlow();
        await user.initialize();
        await use(user);
        await user.close();
    },
    adminFlow: async ({}, use) => { 
        const admin = new AdminFlow();
        await admin.initialize();
        await use(admin);
        await admin.close();
    }
});
export { expect } from "@playwright/test";