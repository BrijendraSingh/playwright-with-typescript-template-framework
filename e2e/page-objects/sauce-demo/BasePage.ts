import { Locator, Page } from "@playwright/test";
import { getEnvironmentConfig } from "../../../config/environments";

export abstract class Basepage {
    protected config = getEnvironmentConfig();

    constructor(public page: Page) { }

    abstract navigate(): Promise<void>;

    protected  getLocator(locatorDef: Record<string, string>, customeText: string): Locator{
        const strategies = [
            {
                name: 'getByTestId',
                condition: () => !!locatorDef.testId,
                execute:  () => this.page.getByTestId(locatorDef.testId!)
            },
            {
                name: 'getByRole',
                condition: () => !!locatorDef.role,
                execute: () => this.page.getByRole(
                    locatorDef.role as any,
                    {
                        name: locatorDef.text || customeText || locatorDef.name || undefined,
                        exact: true
                    }
                )
            },
            {
                name: 'getByLabel',
                condition: () => !!locatorDef.label,
                execute: () => this.page.getByLabel(locatorDef.label!)
            },
            {
                name: 'getByPlaceholder',
                condition: () => !!locatorDef.placeholder,
                execute: () => this.page.getByPlaceholder(locatorDef.placeholder!)
            },
            {
                name: 'getByAltText',
                condition: () => !!locatorDef.altText,
                execute: () => this.page.getByAltText(locatorDef.altText!)
            },
            {
                name: 'getByText',
                condition: () => !!locatorDef.text,
                execute: () => this.page.getByText(locatorDef.text!, { exact: true })
            },
            {
                name: 'getByCss',
                condition: () => !!locatorDef.css,
                execute: () => this.page.locator(locatorDef.css!)
            },
            {
                name: 'getByXpath',
                condition: () => !!locatorDef.xpath,
                execute: () => this.page.locator(locatorDef.xpath!)
            }
        ];

        for (const strategy of strategies) {
            if (strategy.condition()) {
                const locator = strategy.execute();
                try {
                    if (locator) {
                        console.log(`Locator found using strategy: ${strategy.name}`);
                        return locator;
                    }
                } catch (error) {
                    console.log(`Error finding locator using strategy: ${strategy.name}`, error);
                    continue;
                }
            }
        }

        const availableStrategies = strategies
            .filter(s => locatorDef[s.name] || Object
                .keys(locatorDef)
                .some(k => k.includes(s.name.toLocaleLowerCase()))
            )
            .map(s => s.name);

        throw new Error(
            `Failed to locate element using any strategy. Available strategies tried:\n` +
            `${availableStrategies.join(', ')}\n` +
            `Locator definition: ${JSON.stringify(locatorDef)}`
        );


    }
}
