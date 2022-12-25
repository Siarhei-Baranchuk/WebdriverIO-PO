import { homePage } from "../../PageObjects/HomePage";
import { navBar } from "../../PageObjects/Components/NavBar";

describe("Search feature", () => {
  it("TC1: Search for values 'bank'", async () => {
    await homePage.openHP();

    await navBar.executeSearch("bank");
    // await navBar.executeSearch("loan")
    await browser.pause(3000);

    await expect($("h2")).toExist();
    await expect($("h2")).toHaveTextContaining("Search Results:");
    await expect($("a*=Banking")).toHaveTextContaining("Banking");
  });

  it("TC1: Search for values 'loan'", async () => {
    await homePage.openHP();

    await navBar.executeSearch("loan");
    await browser.pause(3000);

    await expect($("h2")).toExist();
    await expect($("h2")).toHaveTextContaining("Search Results:");
    await expect($("a*=Loan")).toHaveTextContaining("Loan");
  });
});
