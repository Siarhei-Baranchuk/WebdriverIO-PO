import { BasePage } from "./Components/BasePage";
import { openPage, URLS } from "../helpers/ui/urls";

class OnlineBankingPage extends BasePage {
  // Page Elements
  get homeMenuLink() {
    return $("#homeMenu");
  }

  get feedbackMenuLink() {
    return $("#feedback");
  }

  get signInOnlineBankingLink() {
    return $("=Sign in"); // href="/login.html"
  }

  get accountSummaryLink() {
    return $("#account_summary_link");
  }

  get accountActivityLink() {
    return $("#account_activity_link");
  }

  get transferFundsLink() {
    return $("#transfer_funds_link");
  }

  get payBillsLink() {
    return $("#pay_bills_link");
  }

  get myMoneyMapLink() {
    return $("#money_map_link");
  }

  get onlineStatementsLink() {
    return $("#online_statements_link");
  }

  get onlineBankingFeaturesSection() {
    return $("#online_banking_features");
  }

  // Page Methods
  async openOBP() {
    await openPage(URLS.ONLINE_BANKING_PAGE);
  }

  async clickHomeMenuLink() {
    await this.clickOn(this.homeMenuLink);
  }

  async clickOnSignInButton() {
    await this.clickOn(this.signInOnlineBankingLink);
  }

  async clickFeedbackMenuLink() {
    await this.clickOn(this.feedbackMenuLink);
  }

  async clickAccountSummaryLink() {
    await this.clickOn(this.accountSummaryLink);
  }

  async clickAccountActivityLink() {
    await this.clickOn(this.accountActivityLink);
  }

  async clickTransferFundsLink() {
    await this.clickOn(this.transferFundsLink);
  }

  async clickPayBillsLink() {
    await this.clickOn(this.payBillsLink);
  }

  async clickMyMoneyMapLink() {
    await this.clickOn(this.myMoneyMapLink);
  }

  async clickOnlineStatements() {
    await this.clickOn(this.onlineStatementsLink);
  }
}

export const onlineBankingPage = new OnlineBankingPage();
