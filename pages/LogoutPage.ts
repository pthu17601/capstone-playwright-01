import { Locator, Page } from "@playwright/test";
import { CommonPage } from "./CommonPage";

export class LogoutPage extends CommonPage {

  // ===== LOCATORS =====
  readonly btnProfile: Locator;
  readonly btnLogout: Locator;

  readonly confirmDialog: Locator;
  readonly btnConfirmYes: Locator;
  readonly btnConfirmCancel: Locator;

  readonly lblLogoutMsg: Locator;

  constructor(page: Page) {
    super(page);

    this.btnProfile = page.getByRole('button', { name: 'Tài khoản' });
    this.btnLogout = page.getByRole('menuitem', { name: 'Đăng xuất' });

    // Dialog xác nhận
    this.confirmDialog = page.getByRole('dialog');
    this.btnConfirmYes = page.getByRole('button', { name: 'Đồng ý' });
    this.btnConfirmCancel = page.getByRole('button', { name: 'Huỷ' });

    this.lblLogoutMsg = page.getByRole('heading', { name: 'Đăng xuất thành công' });
  }

  // ===== ACTIONS =====
  async clickProfile() {
    if (await this.btnProfile.isVisible()) {
      await this.click(this.btnProfile);
    }
  }

  async clickLogoutButton() {
    await this.click(this.btnLogout);
  }

  async confirmYes() {
    await this.click(this.btnConfirmYes);
  }

  async confirmCancel() {
    await this.click(this.btnConfirmCancel);
  }

  async logout() {
    await this.clickProfile();
    await this.clickLogoutButton();
  }

  // ===== ASSERT =====
  async getLogoutMessage(): Promise<string | null> {
    return await this.getText(this.lblLogoutMsg);
  }
}
