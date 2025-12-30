import { Locator, Page } from "@playwright/test";
import { CommonPage } from "./CommonPage";

export class RegisterPage extends CommonPage {

  
  readonly lnkRegister: Locator;
  readonly txtAccount: Locator;
  readonly txtPassword: Locator;
  readonly txtConfirmPassword: Locator;
  readonly txtFullName: Locator;
  readonly txtEmail: Locator;
  readonly btnRegister: Locator;


  readonly lblRegisterSuccess: Locator;

  
  readonly lblUsernameError: Locator;
  readonly lblPasswordError: Locator;
  readonly lblConfirmPasswordError: Locator;
  readonly lblEmailError: Locator;

    constructor(page: Page) {
        super(page);

        this.lnkRegister = page.getByRole('link', { name: 'Đăng ký' });
        this.txtAccount = page.getByRole('textbox', { name: 'Tài khoản' });
        this.txtPassword = page.getByRole('textbox', { name: 'Mật khẩu', exact: true });
        this.txtConfirmPassword = page.getByRole('textbox', { name: 'Nhập lại mật khẩu' });
        this.txtFullName = page.getByRole('textbox', { name: 'Họ và tên' });
        this.txtEmail = page.getByRole('textbox', { name: 'Email' });

        this.btnRegister = page.getByRole('button', { name: 'Đăng ký' });

        this.lblRegisterSuccess = page.getByText('Đăng ký thành công');

    
        this.lblUsernameError = page.locator('#account-error');
        this.lblPasswordError = page.locator('#password-error');
        this.lblConfirmPasswordError = page.locator('#confirmPassword-error');
        this.lblEmailError = page.locator('#email-error');
    }

  
    async openRegisterPage() {
        await this.click(this.lnkRegister);
    }

    async register(account: string,password: string,confirmPassword: string,fullName: string,email: string) {
        await this.openRegisterPage();
        await this.fill(this.txtAccount, account);
        await this.fill(this.txtPassword, password);
        await this.fill(this.txtConfirmPassword, confirmPassword);
        await this.fill(this.txtFullName, fullName);
        await this.fill(this.txtEmail, email);
        await this.click(this.btnRegister);
    }

  
    async getRegisterSuccessMessage(): Promise<string | null> {
        return await this.getText(this.lblRegisterSuccess);
    }

 
    getUsernameError() {
        return this.lblUsernameError;
    }

    getPasswordError() {
        return this.lblPasswordError;
    }

    getConfirmPasswordError() {
        return this.lblConfirmPasswordError;
    }

    getEmailError() {
        return this.lblEmailError;
    }
};