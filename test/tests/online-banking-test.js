import { onlineBankingPage } from "../PageObjects/OnlineBankingPage";
import { loginPage } from "../PageObjects/LoginPage";
import { accountSummaryPage } from "../PageObjects/AccountSummaryPage";
import { accountActivityPage } from "../PageObjects/AccountActivityPage";
import { transferFundsPage } from "../PageObjects/TransferFundsPage";
import { payBillsPage } from "../PageObjects/PayBillsPage";
import {URLS, USER_DATA} from "../../helper/ui-helper";
import { homePage } from "../PageObjects/HomePage";

describe("Online Banking Page Test", () => {
    it("TC1: Open Online Banking Page and Login", async () => {
        await homePage.openHP()
        await onlineBankingPage.openOBP()
        await onlineBankingPage.clickOnSignInButton()

        await loginPage.login({
            username: USER_DATA.USERNAME,
            password: USER_DATA.PASSWORD,
        })

        await onlineBankingPage.openOBP()
        await browser.pause(3000)
        // await onlineBankingPage.assertOnlineBankingPageIsVisible()
        await onlineBankingPage.onlineBankingFeaturesSection.waitForDisplayed();
        await expect(browser).toHaveUrlContaining(URLS.ONLINE_BANKING_PAGE);
        await expect(onlineBankingPage.accountSummaryLink).toExist();
        await expect(onlineBankingPage.accountSummaryLink).toBeClickable();
        await expect(onlineBankingPage.accountActivityLink).toExist();
        await expect(onlineBankingPage.accountActivityLink).toBeClickable();
        await expect(onlineBankingPage.transferFundsLink).toBeClickable();
        await expect(onlineBankingPage.payBillsLink).toBeClickable();
    })

    it("TC2: Open online Banking Features Section Links from Online Banking Page",
        async () => {
        await onlineBankingPage.openOBP()
        await onlineBankingPage.clickAccountSummaryLink()

        await browser.pause(3000)
        // await accountSummaryPage.assertAccountSummaryPageIsVisible()
        await accountSummaryPage.accountSummaryTable.waitForDisplayed();
        await expect(browser).toHaveUrlContaining(URLS.ACCOUNT_SUMMARY_PAGE);
        await expect(accountSummaryPage.cashAccountsSection).toBeDisplayed();
        await expect(accountSummaryPage.investmentAccountsSection).toBeDisplayed();
        await expect(accountSummaryPage.creditAccountsSection).toBeDisplayed();
        await expect(accountSummaryPage.loanAccountsSection).toBeDisplayed();

        await onlineBankingPage.openOBP()
        await onlineBankingPage.clickAccountActivityLink()

        await browser.pause(3000)
        // await accountSummaryPage.assertAccountSummaryPageIsVisible()
        await accountActivityPage.showTransactionsSection.waitForDisplayed()
        await expect(browser).toHaveUrlContaining(URLS.ACCOUNT_ACTIVITY_PAGE);
        await expect(accountActivityPage.showTransactionsSection).toBeDisplayed()

        await onlineBankingPage.openOBP()
        await onlineBankingPage.clickTransferFundsLink()

        await browser.pause(3000)
        // await transferFundsPage.assertTransferFundsTableIsVisible()
        await transferFundsPage.transferFundsTable.waitForDisplayed()
        await expect(browser).toHaveUrlContaining(URLS.TRANSFER_FUNDS_PAGE);
        await expect(transferFundsPage.transferFundsTable).toBeDisplayed()

        await onlineBankingPage.openOBP()
        await onlineBankingPage.clickPayBillsLink()

        await browser.pause(3000)
        // await payBillsPage.assertPayBillsPageTableIsVisible()
        await payBillsPage.payBillsPageTable.waitForDisplayed()
        await expect(browser).toHaveUrlContaining(URLS.PAY_BILLS_PAGE);
        await expect(payBillsPage.payBillsPageTable).toBeDisplayed()
    })
})