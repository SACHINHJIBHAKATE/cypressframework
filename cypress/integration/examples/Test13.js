// The objective of this test is to click the button which appears after scrolling the page
// Cypress automatically handles actions on such elements which appears after scrolling the page

describe('My Test Suite',function(){

it ('My Test Case',function(){

     cy.visit('https://automationteststore.com/')

    cy.xpath("//a[text()='Contact Us']").click()
})
})