import { test, expect } from '@playwright/test';

import { user, invalidUser } from './testdata';
import { HomePage } from '../pages/home-page';
import { LoginPage } from '../pages/login-page';
//import { SettingsPage } from '../pages/settings-page';
import { LogoutPage } from '../pages/logout-page';

test('Invalid user login attempt @ Körber', async ({ page }) => {
    const homepage = new HomePage(page);
    
    await homepage.open();
    await homepage.goToLoginPage();
    await new LoginPage(page).invalidLogin(invalidUser.username, invalidUser.password)

    
  });
