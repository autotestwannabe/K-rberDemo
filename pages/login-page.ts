import { expect } from '@playwright/test';
import type { Page } from 'playwright';

export class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async login(username: string, password: string) {
        await this.page.waitForLoadState();
        await this.page.type('[id="username"]', username);
        await this.page.type('[id="password"]', password);
        await this.page.click('[id="kc-login"]');
    }

    async invalidLogin(username: string, password: string) {
        await this.page.waitForLoadState();
        await this.page.type('[id="username"]', username);
        await this.page.type('[id="password"]', password);
        await this.page.click('[id="kc-login"]');
        const loginErr = await this.page.locator('[id="input-error"]');
        expect(loginErr).toHaveText("Invalid username or password.");
    }
}
