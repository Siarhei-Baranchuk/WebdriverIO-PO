import {BasePage} from "./Components/BasePage";
import {openPage, URLS} from "../../helper/ui-helper";

class AccountActivityPage extends BasePage{
    // Page Elements
    get showTransactionsSection() {
        return $("#ui-tabs-1");
    };

    get findTransactionsSection() {
        return $("#ui-tabs-2");
    };

    // Page Methods
    async openAAP() {
        await openPage(URLS.ACCOUNT_ACTIVITY_PAGE);
    };

    async assertAccountActivityPageIsVisible() {
        await this.showTransactionsSection.waitForDisplayed();
        // await expect(this.showTransactionsSection).toBeDisplayed();
    };
};

export const accountActivityPage = new AccountActivityPage();