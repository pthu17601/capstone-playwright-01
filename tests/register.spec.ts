import test, { expect } from "@playwright/test";
import { RegisterPage } from "../pages/RegisterPage";

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