import { homePage } from "../PageObjects/HomePage";
import { loginPage } from "../PageObjects/LoginPage";
import { navBar } from "../PageObjects/Components/NavBar";
import { USER_DATA } from "../../helper/ui-helper";

describe("Login Page Test", () => {
    beforeEach("Open Home Page", async () => {
        await homePage.openHP();
    })

    it("TC1: Should login with valid username and password", async () => {
        await navBar.clickOnSignIn();

        await browser.pause(3000);
        await loginPage.login({
            username: USER_DATA.USERNAME,
            password: USER_DATA.PASSWORD,
        });
        await browser.pause(3000);
        await homePage.openHP();
        await expect(navBar.usernameDropdownToggle).toBeDisplayed()
        await expect(navBar.usernameDropdownToggle).toBeClickable()
    });

    it("TC2: Logout test", async () => {
        await navBar.logout();
        await browser.pause(3000);
        await expect(navBar.signInButton).toBeDisplayed()
        await expect(navBar.signInButton).toBeClickable()
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

        await loginPage.enterUserName(USER_DATA.USERNAME);
        await browser.pause(3000);
        await loginPage.clickOnSignInLoginPage();
        await expect(loginPage.assertLoginPageAlertMessageIsVisible());
    })

    it("TC5: Should not login with entered 'Password' only", async () => {
        await navBar.clickOnSignIn();

        await loginPage.enterPassword(USER_DATA.PASSWORD);
        await browser.pause(3000);
        await loginPage.clickOnSignInLoginPage();
        await expect(loginPage.assertLoginPageAlertMessageIsVisible());
    });
});