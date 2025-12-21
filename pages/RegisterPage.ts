import { Locator, Page } from "@playwright/test";
import { CommonPage } from "./CommonPage";

export class RegisterPage extends CommonPage {

    
    readonly lnkRegister = this.page.getByRole('link', { name: 'Đăng ký' });
    readonly txtAccount = this.page.getByRole('textbox', { name: 'Tài khoản' });
    readonly txtPassword = this.page.getByRole('textbox', { name: 'Mật khẩu', exact:true });
    readonly txtConfirmPassword = this.page.getByRole('textbox', { name: 'Nhập lại mật khẩu' });
    readonly txtFullName = this.page.getByRole('textbox', { name: 'Họ và tên' });
    readonly txtEmail = this.page.getByRole('textbox', { name: 'Email' });
    readonly btnRegister = this.page.getByRole('button', { name: 'Đăng ký' });

    readonly lblRegisterSuccess = this.page.getByText('Đăng ký thành công');

    
    constructor(page: Page) {
        super(page);
    }

    
    async openRegisterPage() {
        await this.click(this.lnkRegister);
    }

    async enterAccount(value: string) {
        await this.fill(this.txtAccount, value);
    }

    async enterPassword(value: string) {
        await this.fill(this.txtPassword, value);
    }

    async enterConfirmPassword(value: string) {
        await this.fill(this.txtConfirmPassword, value);
    }

    async enterFullName(value: string) {
        await this.fill(this.txtFullName, value);
    }

    async enterEmail(value: string) {
        await this.fill(this.txtEmail, value);
    }

    async clickRegister() {
        await this.click(this.btnRegister);
    }

    async register(account: string, password: string, fullName: string, email: string, p0: string) {
        await this.openRegisterPage();
        await this.enterAccount(account);
        await this.enterPassword(password);
        await this.enterConfirmPassword(password);
        await this.enterFullName(fullName);
        await this.enterEmail(email);
        await this.clickRegister();
    }

    async getRegisterSuccessMessage(): Promise<string | null> {
        return await this.getText(this.lblRegisterSuccess);
    }
}