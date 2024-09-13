import Home from "../pages/Home";

describe("Home Page Tests", () => {
  it("should visit home page", () => {
    Home.visit();
  });

  // it("should display home button", () => {
  //   Home.getHomeButton().should("be.visible");
  // });

  // it("should have account link", () => {
  //   Home.getMyAccountLink().should("be.visible");
  // });

  it("should click the categories button", () => {
    Home.getMegaMenuButton().click();
  });
});
