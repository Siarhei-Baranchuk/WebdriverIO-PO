import {BasePage} from "./Components/BasePage";
import {openPage, URLS} from "../../helper/ui-helper";

class HomePage extends BasePage {
    // Page Elements
    get homeMenuLink() {
       return $("#homeMenu");
   };

   get onlineBankingMenuLink() {
       return $("#onlineBankingMenu");
   };

   get feedbackMenuLink() {
       return $("#feedback");
   };

   get moreServicesButton() {
       return $("#online-banking");
   };

   get accountActivityLink() {
       return $("#account_activity_link");
   };

   get transferFundsLink() {
       return $("#transfer_funds_link");
   };

   get moneyMapLink() {
       return $("#money_map_link");
   };

   get usernameHomePageDropdownToggle() {
        return $(".dropdown-toggle");
    };

    // Page Methods
   async openHP() {
        await openPage(URLS.HOME_PAGE);
    };

   async clickOnOnlineBanking() {
       await this.clickOn(this.onlineBankingMenuLink);
   };

   async clickOnFeedback() {
       await this.clickOn(this.feedbackMenuLink);
    };

   async clickOnMoreServicesButton() {
       await this.clickOn(this.moreServicesButton);
   };

   async clickOnAccountActivityLink() {
       await this.clickOn(this.accountActivityLink);
   };

   async clickOnTransferFundsLink() {
       await this.clickOn(this.transferFundsLink);
   };

   async clickOnMyMoneyMapLink() {
       await this.clickOn(this.moneyMapLink);
   };

};

export const homePage = new HomePage();