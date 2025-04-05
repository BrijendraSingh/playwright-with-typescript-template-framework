import { loginPageAssertions } from "../../assertions/LoginPageAssertions";
import { LoginPage } from "../../page-objects/sauce-demo/LoginPage";
import { SauceDemoBaseFlow } from "./SauceDemoBase.flow";

export class SauceDemoUserFlow extends SauceDemoBaseFlow {
    private loginPage: LoginPage;
    private testChain: (() => Promise<void>)[] = [];
    private loginPageAssertions: loginPageAssertions;

    constructor(public baseUrl: string) {
        super(baseUrl);
        this.loginPage = new LoginPage(this.page);
        this.loginPageAssertions = new loginPageAssertions(this.page);
    }

    async execute(): Promise<void> {      
        for (const testAction of this.testChain) {
            await testAction();
        }
    }

    login(): SauceDemoUserFlow {
        this.testChain.push(async () => {
            console.log("Logging in...");
            this.loginPage.login("username", "password");
            this.loginPageAssertions.verifyLoginPage();
        });
        return this;
    }

    addToCart(): SauceDemoUserFlow {
        this.testChain.push(async () => {
            console.log("Adding item to cart...");
        });
        return this
    }

    goToCart(): SauceDemoUserFlow {
        this.testChain.push(async () => {   
            console.log("Going to cart...");
        });
        return this;
    }
}