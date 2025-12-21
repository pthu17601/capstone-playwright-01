import { Page } from "@playwright/test";
import { CommonPage } from "./CommonPage";

export class LoginPage extends CommonPage {
    getLoginMsgLocator(): any {
        throw new Error("Method not implemented.");
    }
    getLoginMessage(): any {
        throw new Error("Method not implemented.");
    }

    
    readonly lnkLogin = this.page.getByRole('link', { name: 'Đăng nhập' });
    readonly txtAccount = this.page.getByRole('textbox', { name: 'Tài khoản' });
    readonly txtPassword = this.page.getByRole('textbox', { name: 'Mật khẩu' });
    // readonly btnLogin = this.page.getByRole('link', { name: 'Đăng nhập' });
    readonly btnLogin = this.page.getByRole('button', { name: 'Đăng nhập' });
    readonly lblLoginSuccess = this.page.getByText('Đăng nhập thành công');

    constructor(page: Page) {
        super(page);
    }


    // async openLoginPage() {
    //     await this.click(this.lnkLogin);
    // }

    async openLoginPage() {
    // chỉ click nếu link Đăng nhập tồn tại
    if (await this.lnkLogin.isVisible()) {
        await this.click(this.lnkLogin);
    }
}

    async enterUserName(value: string) {
        await this.fill(this.txtAccount, value);
    }

    async enterPassword(value: string) {
        await this.fill(this.txtPassword, value);
    }

    async clickLogin() {
        await this.click(this.btnLogin);
    }

    async login(userName: string, password: string) {
        await this.openLoginPage();
        await this.enterUserName(userName);
        await this.enterPassword(password);
        await this.clickLogin();
    }

    async getLoginSuccessMessage(): Promise<string | null> {
        return await this.getText(this.lblLoginSuccess);
    }
}