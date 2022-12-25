import {BasePage} from "./Components/BasePage";
import { openPage, URLS } from "../helpers/ui/urls";

class TransferFundsPage extends BasePage {
    // Page Elements
    get transferFundsTable() {
        return $("h2=Transfer Money & Make Payments");
    };

    // Page Methods
    async openTFP() {
        await openPage(URLS.TRANSFER_FUNDS_PAGE);
    };

    async assertTransferFundsTableIsVisible() {
        await this.transferFundsTable.waitForDisplayed();
        // await expect(this.transferFundsTable).toBeDisplayed();
    };
};

export const transferFundsPage = new TransferFundsPage();