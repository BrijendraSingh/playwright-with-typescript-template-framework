import { LoginPageAssertions } from "../../assertions/LoginPageAssertions";
import { LoginPage } from "../../page-objects/sauce-demo/LoginPage";
import { BaseFlow } from "./Base.flow";

export class UserFlow extends BaseFlow {
    private loginPage!: LoginPage;
    private loginPageAssertions!: LoginPageAssertions;
    private testChain: (() => Promise<void>)[] = [];

    constructor() {
        super("https://www.saucedemo.com/");
    }

    async initialize() {
            await super.launch();
            this.loginPage = new LoginPage(this.page);
            this.loginPageAssertions = new LoginPageAssertions(this.page);
    }

    async execute(): Promise<void> {
        for (const testAction of this.testChain) {
            await testAction();
        }
    }

    login(): UserFlow {
        this.testChain.push(async () => {
            await this.loginPage.login("username", "password");
            await this.loginPageAssertions.verifyLoginPage();
        });
        return this;
    }

    addToCart(): UserFlow {
        this.testChain.push(async () => {
            console.log("Adding item to cart...");
        });
        return this
    }

    goToCart(): UserFlow {
        this.testChain.push(async () => {
            console.log("Going to cart...");
        });
        return this;
    }
}