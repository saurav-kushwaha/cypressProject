describe("View Port Test", function (){
    it("TC01: Viewport to 320x480", function(){
        //cy.viewport(320, 480);
        cy.visit("https://www.amazon.com");
    })
    it("TC02: Viewport test for iphone-6", function(){
        //cy.viewport('iphone-6');
        cy.visit("https://www.amazon.com");
        cy.get('.hm-icon').should('be.visible').click()
        cy.get('div>b').eq(1).should('have.text','Hello, sign in')//.and('be.visible') // Example assertion to check if the hamburger menu is visible
    })
    it("TC03: Viewport for samsung-s10", function(){
        //cy.viewport('samsung-s10');
        cy.visit("https://www.amazon.com");
    })
    it("TC04: Viewport for ipad-mini", function(){
        cy.viewport('ipad-mini');
        cy.visit("https://www.amazon.com");
    })
    it("TC05: Viewport for macbook-16 ", function(){
        cy.viewport('macbook-16');
        cy.visit("https://www.amazon.com");
    })
})