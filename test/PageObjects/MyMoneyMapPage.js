import {BasePage} from "./Components/BasePage";
import {openPage, URLS} from "../../helper/ui-helper";

class MyMoneyMapPage extends BasePage {
    // Page Elements
    get outFlowChart() {
        return $("#piechart-1049");
    };

    get leftSideTable() {
        return $("#zeroviewport-1009-body");
    };

    // Page Methods
    async openMMMP() {
        await openPage(URLS.MY_MONEY_MAP_PAGE);
    };

    async assertMyMoneyMapPage() {
        await this.outFlowChart.waitForDisplayed();
        // await expect(this.outFlowChart).toBeExisting();

        await this.leftSideTable.waitForDisplayed();
        // await expect(this.leftSideTable).toBeExisting();
    };
};

export const myMoneyMapPage = new MyMoneyMapPage();