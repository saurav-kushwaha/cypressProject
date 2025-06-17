describe('Dom Commands ',()=>{
    it('Dom command test',()=>{
        cy.visit('https://naveenautomationlabs.com/opencart/')
       // cy.get('.image').first()//.click()
       // cy.get('.image').last().click()
       // cy.get('.image').eq(1).click()
       //cy.contains('MacBook').click()
       //cy.get('div').find('a>img[alt="MacBook"]').click()
       cy.get('div').find('>a>').filter('img[alt="MacBook"]').click()
        
    })
})