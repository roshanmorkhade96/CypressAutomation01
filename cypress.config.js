const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}
module.exports = defineConfig({
  
  defaultCommandTimeout: 8000,
  e2e: {
    
    setupNodeEvents,
    
    //specPattern:'cypress/integration/javascript_basic/*.js'
     specPattern: 'cypress/integration/examples/BDD/*.feature'
    //specPattern: 'cypress/integration/examples/CypressBasic/*.js'
    //specPattern: 'cypress/integration/GreenCard/*.js'
 
  }, 
  env: {
    url: 'https://rahulshettyacademy.com/angularpractice/'

  },
  projectId: 'o7z3no',
 // reporter: 'reporters/custom.js',

  "retries": {
    // Configure retry attempts for `cypress run`
    // Default is 0
    "runMode": 1
    // Configure retry attempts for `cypress open`
    // Default is 0
    //"openMode": 0
  },
  "db": {
    "userName": "Roshan1996",
    "password": "Roshan@12345",
    "server": "roshanmorkhade.database.windows.net",
    "options": {
        "database": "roshanmorkhade",
        "encrypt": true,
        "rowCollectionOnRequestCompletion" : true
    }
}

})

