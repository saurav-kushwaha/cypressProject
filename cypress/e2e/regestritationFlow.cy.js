describe("Registartion Flow",()=>{
    it ('Should register a new user',()=>{
        cy.visit('https://naveenautomationlabs.com/opencart/')
        cy.get("nav >.container>.nav.pull-right>ul>li:nth-child(2)").click();
        cy.get(".dropdown-menu.dropdown-menu-right>li:nth-child(1)").click();
        cy.url().should('eq','https://naveenautomationlabs.com/opencart/index.php?route=account/register');
        cy.get('#input-firstname').type('saurabh')
        cy.get('#input-lastname').type('kumar')
        cy.get('#input-email').type('kumar13@gmail.com');
        cy.get('#input-telephone').type('1234567890');
        cy.get('#input-password').type('kumar1234')
        cy.get('#input-confirm').type('kumar1234')
        cy.get('.col-sm-10 > :nth-child(1) > input').check();
        cy.get('[type="checkbox"]').check();
        cy.get('.pull-right > .btn').click();
        cy.get('h1').should('have.text','Your Account Has Been Created!').and('be.visible');

    })
})