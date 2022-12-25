import { homePage } from "../../PageObjects/HomePage";
import { loginPage } from "../../PageObjects/LoginPage";
import { navBar } from "../../PageObjects/Components/NavBar";
import { USER_DATA } from "../../helpers/ui/user-data";

describe("Login Page Test", () => {
  beforeEach("Open Home Page", async () => {
    await homePage.openHP();
  });

  it("TC1: Should login with valid username and password", async () => {
    await homePage.openHP();

    await navBar.clickOnSignIn();
    // await browser.waitAndClickOn(navBar.signInButton)

    await browser.pause(3000);
    await loginPage.login({
      // username: USER_DATA.USER_NAME,
      // password: USER_DATA.USER_PASSWORD,
      username: "username",
      password: "password",
    });
    await browser.pause(3000);
    await homePage.openHP();
    await expect(navBar.usernameDropdownToggle).toBeDisplayed();
    await expect(navBar.usernameDropdownToggle).toBeClickable();
  });

  it("TC2: Logout test (smoke)", async () => {
    await navBar.logout();
    await browser.pause(3000);
    await expect(navBar.signInButton).toBeDisplayed();
    await expect(navBar.signInButton).toBeClickable();
  });

  it("TC3: Should not login with invalid username and password", async () => {
    await navBar.clickOnSignIn();

    await browser.pause(3000);
    await loginPage.login({
      username: USER_DATA.INVALID_USERNAME,
      password: USER_DATA.INVALID_PASSWORD,
    });
    await browser.pause(3000);
    await expect(loginPage.assertLoginPageAlertMessageIsVisible());
  });

  it("TC4: Should not login with entered 'Login' only", async () => {
    await navBar.clickOnSignIn();

    await loginPage.enterUserName(USER_DATA.USER_NAME);
    await browser.pause(3000);
    await loginPage.clickOnSignInLoginPage();
    await expect(loginPage.assertLoginPageAlertMessageIsVisible());
  });

  it("TC5: Should not login with entered 'Password' only", async () => {
    await navBar.clickOnSignIn();

    await loginPage.enterPassword(USER_DATA.USER_PASSWORD);
    await browser.pause(3000);
    await loginPage.clickOnSignInLoginPage();
    await expect(loginPage.assertLoginPageAlertMessageIsVisible());
  });
});