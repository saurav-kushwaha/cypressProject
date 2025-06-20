export class homePage {


   
    search_input = '.form-control.input-lg';
    click_search = '.btn.btn-default.btn-lg';
    product = 'img[title="MacBook"]';
    addtocart = 'Add to Cart';
    successMessages = 'div.alert.alert-success.alert-dismissible';


    searchProductInputField(productName) {
        return cy.get(this.search_input).type(productName)
         
    }
    clickOnSearchButtton(){
     return cy.get(this.click_search).click()
    }
    addToCart() {
        return cy.contains(this.addtocart).first().click()
    }

    verifySucessMessage() {
        return cy.get(this.successMessages)
    }
}