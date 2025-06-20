export class registerPage{

        firstName= '#input-firstname';
        lastName= '#input-lastname';
        email= '#input-email';
        telephone= '#input-telephone';
        password= '#input-password';
        passwordConfirm= '#input-confirm';
        policyCheckbox= 'input[type="checkbox"]';
        continue= '.btn.btn-primary'


    // constructor() {
    //     this.firstName = '#input-firstname';
    //     this.lastName = '#input-lastname';
    //     this.email = '#input-email';
    //     this.telephone = '#input-telephone';
    //     this.password = '#input-password';
    //     this.passwordConfirm = '#input-confirm';
    //     this.policyCheckbox = 'input[type="checkbox"]';
    //     this.continue = '.btn.btn-primary';
    // }

    openRegisterPage() {
        cy.visit(Cypress.env("URL"));
    }
    getFillFirstName(FName){
        cy.get(this.firstName).type(FName);
    }
    getFillLastName(LName){
        cy.get(this.lastName).type(LName);
    }
    getFillEmail(Email){
        cy.get(this.email).type(Email);
    }
    getFillTelephone(Telephone){
        cy.get(this.telephone).type(Telephone);
    }
    getFillPassword(Password){
        cy.get(this.password).type(Password);
        cy.get(this.passwordConfirm).type(Password);
    }
    getClickPolicyCheckbox(){
        cy.get(this.policyCheckbox).check();
    }
    getClickOnContinueBtn(){
        cy.get(this.continue).click();
    }

}
//export default registerPage;