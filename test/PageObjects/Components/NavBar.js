import {BasePage} from "./BasePage";

class NavBar extends BasePage {
    // Page Elements
    get searchField() {
        return $("#searchTerm");
    };
    get signInButton() {
        return $("#signin_button");
    };

    get usernameDropdownToggle() {
        return $("*=username");  // a.dropdown-toggle
    };

    get logoutLink() {
        return $("#logout_link");
    };

    // Page Methods
    async executeSearch(value) {
        await this.searchField.waitForDisplayed();
        await this.searchField.setValue(value);
        await browser.keys("Enter");
    };

    async clickOnSignIn() {
        await this.clickOn(this.signInButton);
    };

    async logout() {
        await this.usernameDropdownToggle.click();
        await this.clickOn(this.logoutLink);
    };

};

export const navBar = new NavBar();