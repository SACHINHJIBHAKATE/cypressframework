// Objective of this test is to do hands on exercises using XPath:

// Enable XPath in Cypress:
// https://github.com/cypress-io/cypress-xpath
// 1) Install XPath plugin in Cypress:
// npm install -D cypress-xpath
// 2) We need to add the following in the ‘e2e.js’ file (and not in ‘index.js’ file) which is present in the support folder.
// require('cypress-xpath')

describe('My First Test Suite - UPDATED',function(){

    it ('My First Test Case',function(){

        cy.visit("https://automationteststore.com/")

        cy.xpath("//a[text()='Contact Us']").click()

    })
})