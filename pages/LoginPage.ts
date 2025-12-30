

import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";


export class LoginPage extends BasePage {
  [x: string]: any;
   getLoginSuccessMessage(): any {
      throw new Error("Method not implemented.");
   }
    private usernameInput: Locator;
    private passwordInput: Locator;
    private loginButton: Locator;

    constructor(page: Page) {
        super(page);
        this.usernameInput = page.getByPlaceholder('Tài khoản');
        this.passwordInput = page.getByPlaceholder('Mật khẩu');
        this.loginButton = page.getByRole('button', { name: 'Đăng nhập' });
    
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}
