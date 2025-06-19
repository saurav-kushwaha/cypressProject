describe("Shadow Dom Element",()=>{
    it ('should interact with shadow Dom elements without global config',()=>{
    cy.visit('https://selectorshub.com/xpath-practice-page/');
    cy.get('#userName')
     .shadow()
     .find('#app2')
     .shadow()
     .find('#pizza')
     .type("Testing shadow Dom Element");
    })

    it('should interact with shadow Dom elements with global config',()=>{
    cy.visit('https://selectorshub.com/xpath-practice-page/');
    cy.get('#pizza').type("Testing shadow Dom Element");
    })

    it.only('should interact with shadow Dom elements by passing includeshadowDom with locator',()=>{
    cy.visit('https://selectorshub.com/xpath-practice-page/');
    cy.wait(7000)
    cy.get('#pizza', { includeShadowDom: true }).type("Testing shadow Dom Element");
    })
})