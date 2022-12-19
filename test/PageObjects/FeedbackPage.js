import {ERROR_MESSAGES, openPage, URLS} from "../../helper/ui-helper";
import {BasePage} from "./Components/BasePage";

class FeedbackPage extends BasePage{
    // Page Elements
  get feedbackForm() {
     return $(".span6");
  };

  get nameInput() {
      return $("#name");
  };

  get emailInput() {
      return $("#email");
  };

  get subjectInput() {
      return $("#subject");
  };

  get messageTextArea() {
      return $("#comment");
  };

  get sendMessageButton() {
      return $('[type="submit"]');
  };

  get clearButton() {
      return $('[type="reset"]');
  };

  get sendFeedbackTitle() {
      return $("#feedback-title");
  };

    // Page Methods
    async openFP() {
      await openPage(URLS.FEEDBACK_PAGE);
    };

    async submitFeedback({name, email, subject, message}) {
        await this.typeTextInto(this.nameInput, name);
        await this.typeTextInto(this.emailInput, email);
        await this.typeTextInto(this.subjectInput, subject);
        await this.typeTextInto(this.messageTextArea, message);
        await this.clickOn(this.sendMessageButton);
  };

    async feedbackPageElements(selector) {
        await this.feedbackForm.waitForDisplayed();
        await this.nameInput.waitForDisplayed();
        await this.emailInput.waitForDisplayed();
        await this.messageTextArea.waitForDisplayed();
        await this.sendMessageButton.waitForExist();
        await this.sendMessageButton.waitForClickable();
    };

    async  assertFeedbackPageIsVisible() {
        await this.feedbackForm.waitForDisplayed();
        await expect(this.nameInput).toBeDisplayed();
        await expect(this.emailInput).toBeDisplayed();
        await expect(this.messageTextArea).toBeDisplayed();
        await expect(this.sendMessageButton).toBeExisting();
        await expect(this.sendMessageButton).toBeClickable();
    }
};

export const feedbackPage = new FeedbackPage();