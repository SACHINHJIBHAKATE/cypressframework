// Objective of this test is to do hands on exercises for Advanced Automation feature such as handling child tabs & browser navigations
// In this sceanrio, the domain of the first URL is the same as the domain of the second URL
// Domain of the first URL: facebook.com
// Domain of the second URL (URL of the new webpage): facebook.com
// The approach (for handling child tabs) used in this spec file can ONLY be used when the domain of the second URL is "same" from the domain of the first URL
// Refer 'Test6.js' which defines another approach for handling child tabs, which can ALSO be used when the domain of the first URL is the "different" as the domain of the second URL
// Note: Same approach is applicable for handling child windows.

describe('My Tenth Test Suite',function(){

    it ('My Tenth Test Case',function(){

        cy.visit("https://facebook.com")

        // The idea here is to grab the 'href' attribute value of the button/link,
        // and then use visit() method to launch the web page in the same tab

        // prop('attributename') is the jQuery method which can retrieve the value of the attribute for the element
        // However, we can't append non-cypress method 'prop()' to the cypress method 'get()',
        // Therefore, we need to resolve the promise first, capture the element and then apply the prop() method on the element
        cy.get('._8esh').then(function(el)
        {
            const url = el.prop('href')

            cy.visit(url)

            // This is to check if the URL of the new web page contains 'registration_form' to ensure the new web page is launched 
            cy.url().should('include','registration_form')
        })

    })
})