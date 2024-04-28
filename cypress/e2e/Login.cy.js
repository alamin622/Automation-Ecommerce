import LoginPage from "../pages/LoginPage";

describe("Login suite", () => {
    const loginPage = new LoginPage();

    it("Testing with valid credentials", () => {
        loginPage.login("standard_user", "secret_sauce");
    })

    it("Testing with invalid credentials", () => {
        loginPage.login("standarduser", "secret_sauce");
       // .should('have.text','Epic sadface: Username and password do not match any user in this service');
        loginPage.invalidAssertion();
    })

    it("locked_out_user", () => {
        loginPage.login("locked_out_user", "secret_sauce").should("Sorry, this user has been locked out.");
    })

    it("problem_user", () => {
        loginPage.login("problem_user", "secret_sauce");
    })

    it("performance_glitch_user", () => {
        loginPage.login("performance_glitch_user", "secret_sauce");
    })
})