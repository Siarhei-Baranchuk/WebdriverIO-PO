export class BasePage {

    async clickOn(element) {
        await element.waitForDisplayed();
        await element.waitForClickable();
        await element.click();
    };

    async typeTextInto(element, text) {
        await element.waitForDisplayed();
        await element.setValue(text);
    };
};