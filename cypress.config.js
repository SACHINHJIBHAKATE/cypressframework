// Line no. 7 is important to give auto suggestions for the methods after cy. 
// e.g. when we type cy. it auto suggests the methods in the dropdown
// Line no. 7 is automatically added when this file (cypress.config.js) is created
// In the earlier versions of Cypress, for auto suggestions, we had to explicitly add the below line to the spec file (test case)
// /// <reference types="Cypress" />

const { defineConfig } = require('cypress')

module.exports = defineConfig({
  
  projectId: "g4e9sr",

  // The default global configurations can be overriden in 'cypress.config.js' file e.g. value for 'defaultCommandTimeout' is overriden to 8000 ms (8 seconds)
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 300000,

  env:
  {
    url1:'https://rahulshettyacademy.com/seleniumPractise/#/',
    url2:'https://rahulshettyacademy.com/AutomationPractice/',
    url3:'https://rahulshettyacademy.com/angularpractice/',
  },

  "db": {
    "userName": "cypressazureid",
    "password": "Azuredb765@",
    "server": "cypressazuredb.database.windows.net",
    "options": {
        "database": "CypressDB",
        "encrypt": true,
        "rowCollectionOnRequestCompletion" : true
    }
},

  "retries": {
    // Configure retry attempts for `cypress run`
    // Default is 0
    "runMode": 0
  },

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress Mochawesome Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    reportFilename: "[status]_[datetime]-[name]-report",
    code: false,
    overwrite: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      const cucumber = require('cypress-cucumber-preprocessor').default;
      on('file:preprocessor', cucumber())
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    // Following line is added for Test Runner to identify the location of the spec files (test cases)
    // The file (cypress.config.js) was automatically created by Test Runner once we selected 'E2E Testing' in Test Runner' & therefore Test Runner has knowledge about this file
    specPattern: 'cypress/integration/**/*.js'
    
    // Following line is added for Test Runner to identify the location of the feature files
    // specPattern: 'cypress/integration/examples/BDD/*.feature'
  }, 
})
