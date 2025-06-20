const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    
    baseUrl: "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
    
  },
  env: {
    URL: 'https://naveenautomationlabs.com/opencart/index.php?route=account/register'
  },
  video : true
  //viewportWidth:356,
  //viewportHeight:200
  
  
  // includeShadowDom:true
});
