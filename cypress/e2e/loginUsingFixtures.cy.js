import valuetest from '../fixtures/login.json';
const testData = require('../fixtures/login.json');
describe("Automation using cypress Fixtures",()=>{
    let value;
    before("Open the login page",()=>{
        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
        cy.fixture('login.json').then((data)=>{
            value = data;
        })
    })

    it ('should login into application using fixtures data',()=>{
        cy.fixture("login.json").then((data)=>{
            cy.get('#input-email').type(data.email);
            cy.get("#input-password").type(data.password);
            
        })
        cy.get('input[value="Login"]').click();
    })
    it ('should login into application using fixtures data in before block',()=>{
       
            cy.get('#input-email').type(value.email);
            cy.get("#input-password").type(value.password);
            cy.get('input[value="Login"]').click();
    })
    it('should login into application using fixtures data by Import way',()=>{
       
            cy.get('#input-email').type(valuetest.email);
            cy.get("#input-password").type(valuetest.password);
            cy.get('input[value="Login"]').click();
    })
    it.only ('should login into application using fixtures data by using require method',()=>{
       
            cy.get('#input-email').type(testData.email);
            cy.get("#input-password").type(testData.password);
            cy.get('input[value="Login"]').click();
    })
})