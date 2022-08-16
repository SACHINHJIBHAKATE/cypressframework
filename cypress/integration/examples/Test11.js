// Objective of this test is to do hands on exercises for Advanced Automation feature such as handling frames
// iFrame is the HTML object injected into the another HTML object
// Step 1: We need to install the iframe package ==> npm install -D cypress-iframe
// Step 2: We need to import the installed package in the spec file ==> import 'cypress-iframe'
// Step 3: We need to include references (mentioned below), so it gives auto suggestions for the iframe methods e.g. frameLoaded()

/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe'

describe('My Eleventh Test Suite',function(){

    it ('My Eleventh Test Case',function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // Following the HTML element details for the iframe
        // <iframe id="courses-iframe" src="https://www.rahulshettyacademy.com/" name="iframe-name" style="width: 100%; 
        // height: 600px" scrolling="yes" marginwidth="0" marginheight="0" vspace="0" hspace="0" frameborder="0"> </iframe>

        // Step 4: We need to load the iframe in the cypress object
        cy.frameLoaded("#courses-iframe")

        // Step 5: We then need to switch to the iframe before performing the actions on elements within iframe 
        // cy.iframe() ==> This is used to switch to the iframe 
        // find("a[href='mentorship']") ==> This returns 2 elements
        // If we need the first element (from the list of 2 elements), use eq() method & pass the index of that element
        cy.iframe().find("a[href='mentorship']").eq(0).click()

        // We need to add some wait page renders after selecting the prior element and if next element appears after the page rendering
        // e.g., in this scenario, page renders after we click the 'Mentorship' link
        // and then, the mentorship page (with the products) is displayed 
        cy.wait(5000)

        // We need to ensure there are 2 pricing elements 'Bronze' & 'Platinum' on the webpage 
        // There are 2 elements with the same class name 'pricing-title' on the webpage,
        // find(".pricing-title") ==> this retruns 2 elements
        // so, we can aply assertion to check if number of elements are 2 
        cy.iframe().find('.pricing-title').should('have.length', 2)
    })
})