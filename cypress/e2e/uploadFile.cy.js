describe("Upload File Request", () => {
    it("TC1 - Input Field || upload File", () => {
        cy.visit('https://www.lambdatest.com/selenium-playground/upload-file-demo')
        cy.get('#file').selectFile('automation.pdf')

    });
    it('Tc2 - Dropping of file  using fixture ', () => {
        cy.visit('https://www.ilovepdf.com/pdf_to_word')
        cy.fixture('automation2.pdf').as('pdf')
        cy.get('.uploader__droptxt').selectFile('@pdf', { action: 'drag-drop' })
    })
});    