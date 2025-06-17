describe('Handle dropedown in cypress',()=>{
    it('dropdown with select tag',()=>{
        cy.visit('https://www.zoho.com/commerce/free-demo.html')

        // validating default selected value
       cy.get('#zcf_address_country option:selected').should('have.value','Nepal')
       

       // after selecting the value from dropdown
       // cy.get('#zcf_address_country').select('Belgium')
        cy.get('#zcf_address_country').select(19).should('have.value','Belgium')
       
    })
    // it('Multi select dropdown',()=>{
    //     cy.visit('https://www.tutorialspoint.com/selenium/practice/select-menu.php')
    //     cy.get('#multiple-select-select').select(['Books','Clothing & Jewelry','Electronics & Computers'])
    // })
    it.only('dropdown without select tag',()=>{
        cy.visit('https://www.amazon.com')
        cy.get('input#twotabsearchtextbox').type('iphone')
        cy.get('.left-pane-results-container').find('>div').contains('iphone 15 pro max case').click()
        cy.get('input#twotabsearchtextbox').should('have.value','iphone 15 pro max case')
    })
})