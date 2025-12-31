import test, { expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { LogoutPage } from "../pages/LogoutPage";




test.describe("Logout Functional Test", () => {
  test(' Đăng xuất  thành công', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const logoutPage = new LogoutPage(page);

    await loginPage.login('mthu', 'mthuuu');
     
    expect(await loginPage.getLoginSuccessMessage()).toContain('Đăng nhập thành công');

    await logoutPage.logout();
    expect(await logoutPage.getLogoutMessage()).toContain('Đăng xuất thành công');
  });

  test("Đăng xuất không thành công - đăng xuất khi chưa đăng nhập ", async ({ page }) => {
    const logoutPage = new LogoutPage(page);

    await page.goto('/');
    await logoutPage.logout();
    await expect(page).toHaveURL(/login|sign-in/);
  });

  test("Đăng xuất không thành công -  Nhấn đăng xuất nhưng không hiện bảng xác nhận ", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const logoutPage = new LogoutPage(page);

    await loginPage.login('mthu', 'mthuuu');
    await logoutPage.clickLogoutButton();
    await expect(logoutPage.confirmDialog).toBeVisible();
  });

  test("Đăng xuất không thành công - Nhấn 'Đồng ý' nhưng không đăng xuất ", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const logoutPage = new LogoutPage(page);

    await loginPage.login('mthu', 'mthuuu');
    await logoutPage.clickLogoutButton();
    await logoutPage.confirmYes();

    await expect(page).toHaveURL(/login|sign-in/);
  });

  test("Đăng xuất không thành công - Nhấn 'Huỷ' nhưng bị đăng xuất ", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const logoutPage = new LogoutPage(page);

    await loginPage.login('mthu', 'mthuuu');
    await logoutPage.clickLogoutButton();
    await logoutPage.confirmCancel();

    await expect(page).not.toHaveURL(/login|sign-in/);
  
  });

  

});