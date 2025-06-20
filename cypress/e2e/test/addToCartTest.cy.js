import { homePage } from "../../pageObjects/homePage.js"
const homePageObj = new homePage()
import testData from '../../fixtures/addToCart.json'


describe(' test automation', () => {
    before(() => {
        cy.login(testData.login.username, testData.login.password)
    })


    it('Add To Cart flow', () => {
        homePageObj.searchProductInputField(testData.product.productName)
        homePageObj.clickOnSearchButtton();
        homePageObj.addToCart()
        homePageObj.verifySucessMessage().should('contain', testData.message.successMessage).and('contain', testData.product.productName);
    })

    // after(() => {
    //     cy.captureConsoleLogs();

    // })
})