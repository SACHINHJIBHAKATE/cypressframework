// Objective of this test is to do hands on exercises for Advanced Automation feature such as handling mouse over popups

describe('My Ninth Test Suite',function(){

    it ('My Ninth Test Case',function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // Scenario: Click the mouse over element (which is a hidden element)

        // Approach 1:

        // Once we identify the mouse over element using 'cy.get(".mouse-hover-content")', in order to view & select the hidden elements, (Top & Reload), we need to use the show() method in jQuery
        // As the name suggests, the jQuery show() method is used for the purpose of showing the hidden elements.
        // Syntax: $(selector).$(selector).show(speed,easing,callback)
        // Cypress supports the jQuery methods
        // For invoking the jQuery functions from Cypress, we have a command called as 'invoke()' in Cypress
        // Reference: https://www.w3schools.com/jquery/eff_show.asp

        // Note: We need to ensure that we identify the correct element i.e., the element should be the immediate parent of the mouse over options,
        // else, invoke('show') method will not show the child elements 
        // Refer 'Cypress Notes.doc' for additional details 
        // cy.get(".mouse-hover-content").invoke('show')

        // Use ‘contains()’ method with the element text to click the element with the desired text
        // For clicking the 'Top' option, we can use the below:
        // cy.contains('Top').click()

        // In order to check if the new webpage is displayed, use the below:
        // new web page URL: https://rahulshettyacademy.com/AutomationPractice/#top
        // cy.url().should('include','top')

        // Approach 2:
        // Cypress also provides way to click the hidden element

        // Use click({ force: true }) to click the hidden element
        // Reference: https://docs.cypress.io/api/commands/click#Coordinates
        // Use ‘contains()’ method with the element text to click the element with the desired text
        // For clicking the 'Top' option, we can use the below:
        cy.contains('Top').click()
        cy.url().should('include','top')


    })
})