import crypto from "crypto";

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



     async setFullHDResolution() {
        await browser.setWindowSize(1980, 1080);
    };

     async setNetworkSpeedTo(speed) {
        await browser.throttle(speed); // "Regular2G"
    };

     async takeScreenshot(path) {
        await browser.saveScreenshot(path);
    };

     // Data Helpers
     async generateRandomNumber() {
        return Math.floor(Math.random() * 1000000 + 1);
    };

     async generateRandomString() {
        return crypto.randomBytes(20).toString("hex");
    };
};