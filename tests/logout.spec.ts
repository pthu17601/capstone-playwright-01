import test, { expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { LogoutPage } from "../pages/LogoutPage";




test.describe("Logout Functional Test", () => {
    test(' Đăng xuất  thành công', async ({ page }) => {
     const loginPage = new LoginPage(page);
     const logoutPage = new LogoutPage(page);

     await loginPage.login('mthu', 'mthuuu');
     // expect(await loginPage.getLoginMessage()).toContain('Đăng nhập thành công');
     expect(await loginPage.getLoginSuccessMessage()).toContain('Đăng nhập thành công');

     await logoutPage.logout();
     expect(await logoutPage.getLogoutMessage()).toContain('Đăng xuất thành công');
    });

    test("Đăng xuất không thành công", async ({ page }) => {
      //Implement invalid login test cases
     });

});