import test, { expect } from "@playwright/test";
import { RegisterPage } from "../pages/RegisterPage";



test.describe("Register Functional Test", () => {
   test('Register thành công ', async ({ page }) => {
       const registerPage = new RegisterPage(page);

       await registerPage.navigateTo('https://demo1.cybersoft.edu.vn/sign-up');

       await registerPage.register(
          'user123',
          '123456',
          '123456',
          'mthu',
          'mthu@gmail.com'
        );

        expect(await registerPage.getRegisterSuccessMessage()).toContain('Đăng ký thành công');
    });

    test('Đăng kí  thất bại - Bỏ trống các ô bắt buộc', async ({ page }) => {
        const registerPage = new RegisterPage(page);

        await registerPage.navigateTo('https://demo1.cybersoft.edu.vn/sign-up');

        await registerPage.register(
          '',
          '',
          '',
          '',
          ''
        );

        await expect(registerPage.getUsernameError()).toBeVisible();
        await expect(registerPage.getPasswordError()).toBeVisible();
        await expect(registerPage.getEmailError()).toBeVisible();
    });

    test('Đăng kí thất bại - Mật khẩu dưới 6 ký tự', async ({ page }) => {
       const registerPage = new RegisterPage(page);

       await registerPage.navigateTo('https://demo1.cybersoft.edu.vn/sign-up');

       await registerPage.register(
          'user123',
          '123',          //  quá ngắn
          '123',
          'mthu',
          'mthu@gmail.com'
        );

        await expect(registerPage.getPasswordError()).toContainText('ít nhất 6 ký tự');
    });

    test('Register thất bại - Nhập lại mật khẩu không khớp', async ({ page }) => {
       const registerPage = new RegisterPage(page);

       await registerPage.navigateTo('https://demo1.cybersoft.edu.vn/sign-up');

        await registerPage.register(
           'user123',
           '123456',
           '654321',       //  không khớp
           'mthu',
           'mthu@gmail.com'
        );

       await expect(registerPage.getConfirmPasswordError()) .toContainText('mật khẩu không khớp');
    });

    test('Register thất bại - Email sai định dạng', async ({ page }) => {
       const registerPage = new RegisterPage(page);

        await registerPage.navigateTo('https://demo1.cybersoft.edu.vn/sign-up');

        await registerPage.register(
            'user123',
            '123456',
            '123456',
            'mthu',
            'mthugmail.com'   //  email sai định dạng
        );

        await expect(registerPage.getEmailError()) .toContainText('Email không hợp lệ');
    });



});