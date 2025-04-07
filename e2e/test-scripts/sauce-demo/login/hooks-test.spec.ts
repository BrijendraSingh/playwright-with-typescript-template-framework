import { test } from '../../../fixtures/baseTestHooks.fixture';
import { SauceUserFlow } from '../../../test-flows/sauce-demo/SauceUser.flow';

test.describe('Test with before each and after each test', () => {
    test('Hooks in test', async ({}) => {
        await new SauceUserFlow().login().addToCart().goToCart().execute();
    });
});
