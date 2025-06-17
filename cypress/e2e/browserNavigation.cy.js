describe('Browser Navigation Backward and forward ',()=>{
    it('should go back ward and forward',()=>{
        cy.visit('https://naveenautomationlabs.com/opencart/')
        cy.contains("Software").click();
        cy.contains("There are no products to list in this category. ").should('be.visible');
        cy.go('back');// 1st way to go back
        cy.contains("Software").should('be.visible');
        cy.go('forward');// 1st way to go forward
        cy.contains('Continue').should('be.visible')
        cy.go(-1);// 2nd way to go back
        cy.contains("Software").should('be.visible');
        cy.go(1);// 2nd way to go forward
        cy.contains("There are no products to list in this category. ").should('be.visible');
        //https://practice.expandtesting.com/test-cases/register  login test case automation website

       
        
    })
})