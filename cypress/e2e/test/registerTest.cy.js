import { registerPage } from "../../pageObjects/registerPage.js";
import  registerData  from "../../fixtures/register2.json";
const registerPageObj = new registerPage();

describe('Register Test', () => {

    it ('should register a new user successfully', () => {
        registerPageObj.openRegisterPage();
        registerPageObj.getFillFirstName(registerData.firstName);
        registerPageObj.getFillLastName(registerData.lastName);
        registerPageObj.getFillEmail(registerData.email);
        registerPageObj.getFillTelephone(registerData.phone);
        registerPageObj.getFillPassword(registerData.password);
        registerPageObj.getClickPolicyCheckbox();
        registerPageObj.getClickOnContinueBtn();
        
        // Verify successful registration
        cy.contains('Your Account Has Been Created!').should('be.visible');
    });
})