import { Page } from "@playwright/test";
let page : Page;

export function setPage(pageInstance: Page): void {
    page = pageInstance;
}

export function getPage(): Page {
    return page;
}
