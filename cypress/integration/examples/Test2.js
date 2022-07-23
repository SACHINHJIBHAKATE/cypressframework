// Objective of this test is to select Cashews product, navigate to the checkout page & place the order

// In Cypress terminology, test case is called a Spec file.
// Cypress is automatically bundled with Mocha framework.
// Cypress documentation: https://docs.cypress.io/

// The Cypress App gives you a visual structure of suites, tests, and assertions. 
// What are describe, it, and expect?
// All of these functions come from Bundled Libraries that Cypress bakes in.
// describe and it come from Mocha
// expect comes from Chai
// Cypress builds on these popular tools and frameworks that you hopefully already have some familiarity and knowledge of. If not, that's okay too.

// describe is just like the Test Suite  
// it is just like a test case
// We can write multiple test cases i.e. muliple it blocks under the describe block 
// cy is a global object in cypress just like we have driver object in selenium
// using cy. we can call various methods
// under function() block {} we need to wrap up the code
// visit('URL') is a method to visit any URL ==> We can either use single quotes or double quotes within the bracket 
// i.e. visit('URL') or visit("URL") 
// Using get('CSS selector'), gets the UI element i.e. control moves to the UI element based on the CSS selector (similar to findlement for Selenium)==> We can either use single quotes or double quotes within the bracket 
// i.e. get('CSS selector') or get("CSS selector")
// Semicolon ; at the end of cy. statements is optional
// if we don't provide Semicolon ; at the end of cy. statements, then Cypress automatically concenates ; at the end of cy. statements

describe('My Second Test Suite',function(){

it ('My Second Test Case',function(){

    // cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    // Instead of hard coding the website URL (as done above), define the URL in the 'cypress.config.js' file,
    // and call it using 'Cypress.env('url1')' ==> This will be replaced by the value for key 'url1' which is the URL
    cy.visit(Cypress.env('url1'))

    cy.get('.search-keyword').type('ca')

    // This adds an explicit wait 
    // This is required in this scenario because there is no loading icon displayed when user types 'ca' & before the 4 products are displayed on the web page,
    // therefore since loading icon doesn't appear, cypress won't have an idea to wait for the 4 products to appear on the web page
    cy.wait(2000)

    // From the array of child elements, if we want to focus on a specific element, use eq(index) method & provide the index of that element
    // if the focus is on a specific element & we can highlight the specific button within a text using contains ('button text') method
    // This will click the 'ADD TO CART' button of the product at the 3rd index
    // cy.get('.products').find('.product').eq(3).contains('ADD TO CART').click()

    // Instead of line 49, we can just use the CSS selector provided by Cypress for the 'ADD TO CART' button of the product at the 3rd index
    // However, there may be an issue if the position of the product changes in future
    // cy.get(':nth-child(4) > .product-action > button').click()

    // cy.get('.products').find('.product') ==> This returns array of 4 elements
    // Each element then is stored in $el, index contains the index of that element, $list contains all the elelemts - this is just like a for loop
    cy.get('.products').find('.product').each(($el, index, $list) => {

        //when identifying e.g. text or button etc. within a specific element, always use 'find' method instead of using 'get' method
        // const is used to define a variable
        // we are able use the jQuery method on $el without resolving promise because step 62 resolved the promise and then returns the elements
        const veggieName = $el.find('.product-name').text()

        if(veggieName.includes('Cashews'))
        {
            // Earlier, Cypress used to resolve the promise for element $el
            // However with the latest version, Cypress doesn't resolve the promise for a few methods e.g. for click() method
            // Hence, we need to resolve the promise using cy.wrap($el) method
            // cy.wrap($el).find('button').click()
            cy.wrap($el).contains('ADD TO CART').click().debug()     
          
        }

    })

    // Click the Cart icon
    cy.get('.cart-icon > img').click()

    // Click 'PROCEED TO CHECKOUT' button
    cy.contains('PROCEED TO CHECKOUT').click()

      // Click 'Place Order' button
      cy.contains('Place Order').click()

})
}
)
