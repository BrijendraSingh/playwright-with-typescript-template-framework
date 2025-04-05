import { test, expect } from "../../../fixtures/sauceDemo.fixture";
import { SauceDemoUserFlow } from "../SauceDemoUser.flow";


//https://www.saucedemo.com/
test.describe("Sauce Demo Login Test", () => {
    test("Login with valid credentials", async ({ sauceDemoBaseFlow }) => {
        const sauceDemoLoginFlow = await sauceDemoBaseFlow.createFlow(SauceDemoUserFlow);
        await sauceDemoLoginFlow
            .login()
            .addToCart()
            .goToCart()
            .execute();
    });
});
