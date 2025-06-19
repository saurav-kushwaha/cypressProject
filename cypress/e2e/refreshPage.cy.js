describe('Refresh page ',()=>{
    it ('Refresh the page and check if the page is still loaded', () => {
        cy.visit('https://www.amazon.com/');
        cy.contains('Registry').should('exist');
        cy.reload();// with cache
        cy.contains('Registry').should('exist');

        cy.reload(true);// without cache
        cy.contains('Registry').should('exist');

        cy.reload({timeout : 6000});// with cache and timeout
        cy.contains('hemm').should('not.exist');



        cy.window().then((data)=>{// using window object to reload the page
            data.location.reload()
        })
        cy.contains('Registry').should('exist');

    })

})