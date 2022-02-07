import { test, expect } from '@playwright/test';

import { user } from './testdata';
import { HomePage } from '../pages/home-page';
import { LoginPage } from '../pages/login-page';
//import { SettingsPage } from '../pages/settings-page';
import { LogoutPage } from '../pages/logout-page';

test('User can login and logout on Körber', async ({ page }) => {
    const homepage = new HomePage(page);
    
    await homepage.open();
    await homepage.goToLoginPage();
    await new LoginPage(page).login(user.username, user.password)

    
  });
