import { test } from "../../../fixtures/testFixtureOverloading.fixture";

test.describe("Fixture overloading Test", () => {
    test("user flow fixture overloading test", async ({ userFlow }) => {
        await userFlow
            .login()
            .addToCart()
            .goToCart()
            .execute();
    });

    test("admin flow fixture overloading test", async ({ adminFlow }) => {
        await adminFlow
            .adminLogin()
            .adminCart()
            .adminCheckout()
            .execute();
    });
});
