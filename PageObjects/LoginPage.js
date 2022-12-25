import { MESSAGES } from "../helpers/ui/messages";
import { openPage, URLS } from "../helpers/ui/urls";
import { BasePage } from "./Components/BasePage";

class LoginPage extends BasePage {
  // Page Elements
  get loginForm() {
    return $("#login_form");
  }

  get loginInput() {
    return $("#user_login");
  }

  get passwordInput() {
    return $("#user_password");
  }

  get signInButton() {
    return $('[type="submit"]');
  }

  get alertMessage() {
    return $(".alert-error");
  }

  // Page Methods
  async openLP() {
    await openPage(URLS.LOGIN_PAGE);
  }

  async login({ username, password }) {
    await this.assertLoginPageIsVisible();
    await this.typeTextInto(this.loginInput, username);
    await this.typeTextInto(this.passwordInput, password);
    await this.clickOnSignInLoginPage();
  }

  async assertLoginPageIsVisible() {
    // is used in login method
    await this.loginForm.waitForDisplayed();
    await expect(this.loginForm).toBeDisplayed();
    await expect(this.loginInput).toBeExisting();
    await expect(this.passwordInput).toBeDisplayed();
    await expect(this.signInButton).toBeClickable();
  }

  async enterUserName(username) {
    await this.typeTextInto(this.loginInput, username);
  }

  async enterPassword(password) {
    await this.typeTextInto(this.passwordInput, password);
  }

  async clickOnSignInLoginPage() {
    await this.clickOn(this.signInButton);
  }

  async assertLoginPageAlertMessageIsVisible() {
    await this.alertMessage.waitForDisplayed();
    await expect(this.alertMessage).toHaveTextContaining(
      MESSAGES.LOGIN_ALERT_MESSAGE,
    );
  }
}

export const loginPage = new LoginPage();