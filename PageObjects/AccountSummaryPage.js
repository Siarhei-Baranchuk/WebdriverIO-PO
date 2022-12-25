import {BasePage} from "./Components/BasePage";
import {openPage, URLS} from "../helpers/ui/ui-helpers";

class AccountSummaryPage extends BasePage {
    // Page Elements
    get accountSummaryTable() {
        return $(".span8");
    };

    get cashAccountsSection() {
        return $('h2=Cash Accounts');
    };

    get investmentAccountsSection() {
        return $("h2=Investment Accounts");
    };

    get creditAccountsSection() {
        return $("h2=Credit Accounts");
    };

    get loanAccountsSection() {
        return $("h2=Loan Accounts");
    };

    // Page Methods
    async openASP() {
        await openPage(URLS.ACCOUNT_SUMMARY);
    };

    async assertAccountSummaryPageIsVisible() {
        await this.accountSummaryTable.waitForDisplayed();
        await expect(this.cashAccountsSection).toBeDisplayed();
        await expect(this.investmentAccountsSection).toBeDisplayed();
        await expect(this.creditAccountsSection).toBeDisplayed();
        await expect(this.loanAccountsSection).toBeDisplayed();
    };
};

export const accountSummaryPage = new AccountSummaryPage;