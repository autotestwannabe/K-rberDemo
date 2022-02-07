import type { Page } from 'playwright';
import { isVisible } from '../framework/common-actions';

export class HomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async open() {
        await this.page.goto('http://81.169.250.19:5000');
    }

    async goToLoginPage() {
        await this.page.waitForLoadState();
        await this.page.click('.btn-primary');
    }


  
}
