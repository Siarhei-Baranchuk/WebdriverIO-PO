import { homePage } from "../PageObjects/HomePage";
import { feedbackPage } from "../PageObjects/FeedbackPage";
import {MESSAGES, URLS, USER_DATA} from "../../helper/ui-helper";

describe("Feedback Test", () => {
    it("TC1: Should submit the feedback form", async () => {
        await homePage.openHP();
        await homePage.clickOnFeedback();

        await browser.pause(3000);
        await expect(browser).toHaveUrlContaining(URLS.FEEDBACK_PAGE)
        await expect(feedbackPage.sendFeedbackTitle).toBeDisplayed();
        await expect(feedbackPage.sendFeedbackTitle).toHaveTextContaining("Feedback");

        // await feedbackPage.assertFeedbackPageIsVisible();
        await feedbackPage.feedbackForm.waitForDisplayed();
        await expect(feedbackPage.nameInput).toBeDisplayed();
        await expect(feedbackPage.emailInput).toBeDisplayed();
        await expect(feedbackPage.messageTextArea).toBeDisplayed();
        await expect(feedbackPage.sendMessageButton).toBeExisting();
        await expect(feedbackPage.sendMessageButton).toBeClickable();

        await feedbackPage.submitFeedback(
            {
                name: USER_DATA.USER_NAME,
                email: USER_DATA.USER_EMAIL,
                message: USER_DATA.MESSAGE,
                subject: USER_DATA.SUBJECT,
            });
        await browser.pause(3000);
        await expect(browser).toHaveUrlContaining(URLS.SEND_FEEDBACK_PAGE);
        await expect(feedbackPage.feedbackForm).toHaveTextContaining(MESSAGES.ERROR_FEEDBACK_MESSAGE);
    });
});

