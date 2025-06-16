beforeEach(function (){
    cy.log("This will run before each describe block");

});
afterEach(function (){
    cy.log("This will run after each describe block");

});

before(function (){
    cy.log("This will run once before all tests in the file");
})
after(function (){
    cy.log("This will run once after all tests in the file");
})
describe("Test suit 1", function(){
    // beforeEach(function (){
    //     cy.log("This will run before each it block");

    // });
    // afterEach(function (){
    //     cy.log("This will run after each it block");

    // });

    it("Test case 1", function(){
        cy.log("This is test case 1");
    })

    it("Test case 2", function(){
        cy.log("This is test case 2");
    })  
})
describe("Test suit 2", function(){
    it("Test case 3", function(){
        cy.log("This is test case 3");
    })

    it("Test case 4", function(){
        cy.log("This is test case 4");
    })  
})