import test, { expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test.describe("Login Functional Test", () => {

  test('Đăng nhập thành công', async ({ page }) => {

     const loginPage = new LoginPage(page);

    
     await loginPage.navigateTo('https://demo1.cybersoft.edu.vn/sign-in');

    
     await loginPage.login('mthu', 'mthuuu');

    
     expect(await loginPage.getLoginSuccessMessage()).toContain('Đăng nhập thành công');
  });

  test("Đăng nhập không thành công - sai username", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateTo('/sign-in');
    await loginPage.login('sai_user', 'mthuuu');

    expect(await loginPage.getErrorMessage()).toContain('Sai tên đăng nhập hoặc mật khẩu');
  });

  test('Đăng nhập không thành công - sai password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateTo('/sign-in');
    await loginPage.login('mthu', 'sai_password');

    expect(await loginPage.getErrorMessage()).toContain('Sai tên đăng nhập hoặc mật khẩu');
  });

  test('Đăng nhập không thành công - bỏ trống username', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateTo('/sign-in');
    await loginPage.login('', 'mthuuu');

    expect(await loginPage.getValidationMessage()).toContain('Tên đăng nhập không được để trống');
  });

  test('Đăng nhập không thành công - bỏ trống password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateTo('/sign-in');
    await loginPage.login('mthu', '');

    expect(await loginPage.getValidationMessage()).toContain('Mật khẩu không được để trống');
  
  });

});





