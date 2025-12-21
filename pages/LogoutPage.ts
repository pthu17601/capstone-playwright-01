import { Locator, Page } from "@playwright/test";
import { CommonPage } from "./CommonPage";

export class LogoutPage extends CommonPage {

    readonly btnProfile = this.page.getByRole('button', { name: 'Tài khoản' });
    readonly btnLogout = this.page.getByRole('menuitem', { name: 'Đăng xuất' });
    readonly lblLogoutMsg = this.page.getByRole('heading', { name: 'Đăng xuất thành công' });

    constructor(page: Page) {
        super(page);
    }

    getLogoutMsgLocator(): Locator {
        return this.lblLogoutMsg;
    }

    async clickProfile() {
        await this.click(this.btnProfile);
    }

    async clickLogout() {
        await this.click(this.btnLogout);
    }

    async logout() {
        await this.clickProfile();
        await this.clickLogout();
    }

    async getLogoutMessage(): Promise<string | null> {
        return await this.getText(this.lblLogoutMsg);
    }
}