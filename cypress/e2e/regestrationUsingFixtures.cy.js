import registerData from "../fixtures/register.json";
describe("Registartion Flow using Fixtures Data",()=>{
    it ('Should register a new user using Fixture data',()=>{
        cy.visit('https://naveenautomationlabs.com/opencart/')
        cy.get("nav >.container>.nav.pull-right>ul>li:nth-child(2)").click();
        cy.get(".dropdown-menu.dropdown-menu-right>li:nth-child(1)").click();
        cy.url().should('eq','https://naveenautomationlabs.com/opencart/index.php?route=account/register');
        cy.get('#input-firstname').type(registerData.name.first_name)
        cy.get('#input-lastname').type(registerData.name.last_name)
        cy.get('#input-email').type(registerData.email);
        cy.get('#input-telephone').type(registerData.phone);
        cy.get('#input-password').type(registerData.login.password)
        cy.get('#input-confirm').type(registerData.login.password)
        cy.get('.col-sm-10 > :nth-child(1) > input').check();
        cy.get('[type="checkbox"]').check();
        cy.get('.pull-right > .btn').click();
        cy.get('h1').should('have.text','Your Account Has Been Created!').and('be.visible');

    })
})