// Objective of this test is to do hands on exercises for Advanced Automation feature such as handling child tabs & browser navigations
// In this scenario, the domain of the first URL is the same as the domain of the second URL
// Domain of the first URL: rahulshettyacademy.com
// Domain of the second URL (URL of the new webpage): rahulshettyacademy.com
// However, the approach (for handling child tabs) used in this spec file can also be used when the domain of the second URL is "different" from the domain of the first URL
// Refer 'Test10.js' which defines another approach for handling child tabs, but it can only be used when the domain of the first URL is the "same" as the domain of the second URL
// Note: Same approach is applicable for handling child windows.

describe('My Sixth Test Suite',function(){

    it ('My Sixth Test Case',function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // Cypress does not support child tabs 
        // and therefore for automating the child tabs, we need to open the link in same tab
        // To open the link in the same tab, we need to remove the target attribute in the HTML code for that element which opens the link in the child tab
        // <a id="opentab" class="btn-style class1 class2" href="https://www.rahulshettyacademy.com/" target="_blank">Open Tab</a>
        // Cypress has the ability to manipulate the DOM i.e. the HTML code
        // For removing the attribute from the DOM, we have a function called removeAttr() in jQuery
        // Syntax: $(selector).removeAttr(attribute)
        // Cypress supports the jQuery methods
        // For invoking the jQuery functions from Cypress, we have a command called as 'invoke()' in Cypress
        // cy.get("#opentab") ==> This will capture the web element (which includes the target attribute)
        // then, invoke('removeAttr','target') ==> This removes the target attribute from the the web element, before clicking to avoid it opening in the new tab
        // and then, click() clicks on the web element and opens in the same tab
        // Once the web page opens in the same tab, we can automate the web page using Cypress (else as Cypress does not support child tabs, it is not possible to automate the child tabs using Cypress)
        // Reference: https://www.w3schools.com/jquery/html_removeattr.asp

        cy.get("#opentab").invoke('removeAttr','target').click()

        // Now, if we need want to check if the navigation is successful, we need to validate the URL of new web page
        // cy.url() ==> This returns the URL of the page that is currently active.
        // then, we can apply the chai library assertion

        // When applying assertion on URL, we need to include 'eq' in place of 'have.value'
        // e.g. for URL = http://localhost:8000/users/1/edit
        // cy.url().should('eq', 'http://localhost:8000/users/1/edit')
        // We can also include assertion to validate the partial text in the URL, like below.
        // cy.url().should('include', '/users/1/edit') 
        // Reference: https://docs.cypress.io/api/commands/url#No-Args

        cy.url().should('eq','https://www.rahulshettyacademy.com/')

        // If we need to navigate back or forward in the browser to different web pages in the same tab, we can use go() method in Cypress
        // cy.go(direction) ==> Navigate back or forward to the previous or next URL in the browser's history.
        // cy.go('back') ==> Go back in browser's history (equivalent to clicking back button)
        // cy.go('forward') ==> Go forward in browser's history (equivalent to clicking forward button)
        // Reference: https://docs.cypress.io/api/commands/go

        cy.go('back')       

    })
})