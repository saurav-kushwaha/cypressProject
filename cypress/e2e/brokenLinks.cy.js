describe("Broken links",()=>{
    it ("checks for broken links for page",()=>{
       /* https://github.com/Anshita-Bhasin/Cypress-Youtube-Series
        
       cy.visit('https://www.amazon.com/');
        cy.get('a').each(($el) => {
            const link = $el.prop('href');
            if (link) {
                cy.request({
                    url: link,
                    failOnStatusCode: false // Do not fail the test on 4xx or 5xx responses
                }).then((response) => {
                    expect(response.status).to.be.lessThan(400); // Check that the status code is less than 400
                });
            }
        });*/

        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home');
        let brokenlinks = 0;
        let activeLinks = 0;
        cy.get('a').each(($links,index)=>{
            const href = $links.attr('href');
            if(href){
                cy.request({
                    url:href,
                    failOnStatusCode: false // Do not fail the test on 4xx or 5xx responses
                }).then((response)=>{
                    if(response.status >= 400){
                        cy.log(` link index : ${index + 1} is Broken link ${href}, Status: ${response.status}`);
                        brokenlinks++;

                    }
                    else{
                        cy.log(` link index : ${index + 1} is Active link ${href}, Status: ${response.status}`);
                        activeLinks++;
                    }
                })
            }
        }).then(($links)=>{
            const totalLinks = $links.length;
            cy.log(`*****Total links: **** ${totalLinks}`);
            cy.log(`*****Total broken links:**** ${brokenlinks}`);
            cy.log(`****Total active links:**** ${activeLinks}`);
        })
    })
})