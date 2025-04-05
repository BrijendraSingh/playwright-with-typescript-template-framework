import { AdminPageAssertions } from "../../assertions/AdminPageAssertions";
import { AdminPage } from "../../page-objects/sauce-demo/AdminPage";
import { BaseFlow } from "./Base.flow";

export class AdminFlow extends BaseFlow {
    private adminPage!: AdminPage;
    private adminPageAssertions!: AdminPageAssertions;
    private testChain: (() => Promise<void>)[] = [];

    constructor() {
        super("https://www.saucedemo.com/");
    }

    async initialize() {
        await super.launch();
        this.adminPage = new AdminPage(this.page);
        this.adminPageAssertions = new AdminPageAssertions(this.page);
    }

    async execute(): Promise<void> {      
        for (const testAction of this.testChain) {
            await testAction();
        }
    }

    adminLogin(): AdminFlow {
        this.testChain.push(async () => {
            await this.adminPage.adminLogin("username", "password");
            await this.adminPageAssertions.verifyAdminErrorMessage();
        });
        return this;
    }

    adminCart(): AdminFlow {
        this.testChain.push(async () => {
            console.log("Admin cart...");
        });
        return this
    }

    adminCheckout(): AdminFlow {
        this.testChain.push(async () => {   
            console.log("admin checkout...");
        });
        return this;
    }
}