import { homePage } from "../../PageObjects/HomePage";
import { loginPage } from "../../PageObjects/LoginPage";
import { navBar } from "../../PageObjects/Components/NavBar";
import { onlineBankingPage } from "../../PageObjects/OnlineBankingPage";
import { feedbackPage } from "../../PageObjects/FeedbackPage";
import { accountActivityPage } from "../../PageObjects/AccountActivityPage";
import { transferFundsPage } from "../../PageObjects/TransferFundsPage";
import { myMoneyMapPage } from "../../PageObjects/MyMoneyMapPage";
import { URLS } from "../../helpers/ui/urls";
import { USER_DATA } from "../../helpers/ui/user-data";

describe("Home Page test", () => {
  beforeEach("Open Home Page", async () => {
    await homePage.openHP();
  });

  it("TC1: Load Home Page and open login Page", async () => {
    await homePage.openHP();
    // await navBar.clickOnSignIn();


    await navBar.clickOnSignIn();
    // await navBar.clickOn(navBar.signInButton);
    // await browser.waitAndClickOn(navBar.signInButton);



    await await browser.pause(3000);
    await expect(browser).toHaveUrlContaining(URLS.LOGIN_PAGE);

    await browser.typeTextIntoField(
      loginPage.loginInput,
      "LOGIN text test",
    )
    await browser.typeTextIntoField(
      loginPage.passwordInput,
      "PASSWORD text test",
    );
    await browser.pause(3000);

    // await loginPage.assertLoginPageIsVisible();
    await loginPage.loginForm.waitForDisplayed();
    await expect(loginPage.loginForm).toBeDisplayed();
    await expect(loginPage.loginInput).toBeExisting();
    await expect(loginPage.passwordInput).toBeDisplayed();
    await expect(loginPage.signInButton).toBeClickable();
  });

  it("TC2: Open Online Banking page tab from Home Page", async () => {
    await homePage.clickOnOnlineBanking();

    await browser.pause(3000);
    await expect(browser).toHaveUrlContaining(URLS.ONLINE_BANKING_PAGE);

    // await onlineBankingPage.assertOnlineBankingPageIsVisible();
    await onlineBankingPage.onlineBankingFeaturesSection.waitForDisplayed();
    await expect(onlineBankingPage.accountSummaryLink).toExist();
    await expect(onlineBankingPage.accountSummaryLink).toBeClickable();
    await expect(onlineBankingPage.accountActivityLink).toExist();
    await expect(onlineBankingPage.accountActivityLink).toBeClickable();
    await expect(onlineBankingPage.transferFundsLink).toBeClickable();
    await expect(onlineBankingPage.payBillsLink).toBeClickable();
  });

  it("TC3: Open Feedback Page tab from Home Page", async () => {
    await homePage.clickOnFeedback();

    await browser.pause(3000);
    await expect(browser).toHaveUrlContaining(URLS.FEEDBACK_PAGE);

    await feedbackPage.assertFeedbackPageIsVisible();
    await feedbackPage.feedbackForm.waitForDisplayed();
    await expect(feedbackPage.nameInput).toBeDisplayed();
    await expect(feedbackPage.emailInput).toBeDisplayed();
    await expect(feedbackPage.messageTextArea).toBeDisplayed();
    await expect(feedbackPage.sendMessageButton).toBeExisting();
    await expect(feedbackPage.sendMessageButton).toBeClickable();
  });

  it("TC4: Open Online Banking Features links from Home Page", async () => {
    await navBar.clickOnSignIn();

    await loginPage.login({
      username: USER_DATA.USER_NAME,
      password: USER_DATA.USER_PASSWORD,
    });
    await homePage.openHP();
    await homePage.clickOnMoreServicesButton();

    await browser.pause(3000);
    await expect(browser).toHaveUrlContaining(URLS.ONLINE_BANKING_PAGE);

    // await onlineBankingPage.assertOnlineBankingPageIsVisible();
    await onlineBankingPage.onlineBankingFeaturesSection.waitForDisplayed();
    await expect(onlineBankingPage.accountSummaryLink).toExist();
    await expect(onlineBankingPage.accountSummaryLink).toBeClickable();
    await expect(onlineBankingPage.accountActivityLink).toExist();
    await expect(onlineBankingPage.accountActivityLink).toBeClickable();
    await expect(onlineBankingPage.transferFundsLink).toBeClickable();
    await expect(onlineBankingPage.payBillsLink).toBeClickable();

    await onlineBankingPage.clickHomeMenuLink();

    await homePage.clickOnAccountActivityLink();

    await browser.pause(3000);
    await expect(browser).toHaveUrlContaining(URLS.ACCOUNT_ACTIVITY_PAGE);
    // await accountActivityPage.assertAccountActivityPageIsVisible();
    await accountActivityPage.showTransactionsSection.waitForDisplayed();
    await expect(accountActivityPage.showTransactionsSection).toBeDisplayed();

    await homePage.openHP();
    await homePage.clickOnTransferFundsLink();

    await browser.pause(3000);
    await expect(browser).toHaveUrlContaining(URLS.TRANSFER_FUNDS_PAGE);
    // await transferFundsPage.assertTransferFundsTableIsVisible();
    await transferFundsPage.transferFundsTable.waitForDisplayed();
    await expect(transferFundsPage.transferFundsTable).toBeDisplayed();

    await homePage.openHP();
    await homePage.clickOnMyMoneyMapLink();

    await browser.pause(3000);
    await expect(browser).toHaveUrlContaining(URLS.MY_MONEY_MAP_PAGE);
    // await myMoneyMapPage.assertMyMoneyMapPage();
    await expect(myMoneyMapPage.outFlowChart).toBeDisplayed();
    await expect(myMoneyMapPage.leftSideTable).toBeDisplayed();

    await navBar.logout();
    await browser.pause(3000);
  });
});
