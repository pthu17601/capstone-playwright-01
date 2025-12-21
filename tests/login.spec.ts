import test, { expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test.describe("Login Functional Test", () => {
    test('Đăng nhập thành công', async ({ page }) => {

     const loginPage = new LoginPage(page);

    
     await loginPage.navigateTo('https://demo1.cybersoft.edu.vn/sign-in');

    
     await loginPage.login('mthu', 'mthuuu');

    
     expect(await loginPage.getLoginSuccessMessage()).toContain('Đăng nhập thành công');
    });

    test("Đăng nhập không thành công", async ({ page }) => {
    //Implement invalid login test cases
  });

});





