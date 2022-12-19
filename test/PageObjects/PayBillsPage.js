import {BasePage} from "./Components/BasePage";
import {openPage, URLS} from "../../helper/ui-helper";

class PayBillsPage extends BasePage {
    // Page Elements
    get payBillsPageTable() {
        return $("h2=Make payments to your saved payees")
    }

    // Page Methods
    async openPBP() {
        await openPage(URLS.PAY_BILLS_PAGE)
    }

    async assertPayBillsPageTableIsVisible() {
        await this.payBillsPageTable.waitForDisplayed()
    }
}

export const payBillsPage = new PayBillsPage