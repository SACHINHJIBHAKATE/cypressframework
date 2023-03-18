// In Cypress terminology, test case is called a Spec file.
// Cypress is automatically bundled with Mocha framework.
// Cypress documentation: https://docs.cypress.io/

// The Cypress App gives you a visual structure of suites, tests, and assertions. 
// What are describe, it, and expect?
// All of these functions come from Bundled Libraries that Cypress bakes in.
// describe and it come from Mocha.
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
// in the websites which are developed using angular js, if we see the class names with 'ng' then avoid using class names in CSS selector because class names change dynamically when the website loads
// Note: One of the best things about cypress is that, if the test runner & browser is open & if we make additional changes to the spec file, then if we can just save the spec file, test starts running automatically from the first step.
describe('My First Test Suite - UPDATED',function(){

it ('My First Test Case - UPDATED',function(){

    // cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    // Instead of hard coding the website URL (as done above), define the URL in the 'cypress.config.js' file,
    // and call it using 'Cypress.env('url1')' ==> This will be replaced by the value for key 'url1' which is the URL
    cy.visit(Cypress.env('url1'))

    cy.get('.search-keyword').type('ca')

    // This adds an explicit wait 
    // This is required in this scenario because there is no loading icon displayed when user types 'ca' & before the 4 products are displayed on the web page,
    // therefore, since loading icon doesn't appear, cypress won't have an idea to wait for the 4 products to appear on the web page
    cy.wait(2000)

    // if we don't use :visible, cypress identifies visible as well as invisible elements on the web page based on the CSS selector
    // cy.get('.product').should('have.length', 4)
    
    // if we use :visible, cypress identifies only the visible elements on the web page
    // in this scenario, since we do have an additional element with the same classname 'product', cypress ruturned 5 elements failing the assertion.
    // Hence, we used :visible after the CSS selector
    cy.get('.product:visible').should('have.length', 4)

    // Parent child chaining using 'find()' method
    // get('.products') identifies 1 parent element which contain 4 child elements
    // find('.product') then identifies the 4 child elements
    cy.get('.products').find('.product').should('have.length','4')

    // Using Alias:
    // If we need to identify the same element in multiple steps,
    // then, we can use Alis instead of the element locator, so if the element properties changes in future, we can just update the step where alias is defined
    // Alis for element locator 'cy.get('.products')' is defined using 'as('productlocator')'
    // And then as '@productlocator' is passed instead of the CSS selector for that element
    // cy.get('.products').as('productlocator')
    // cy.get('@productlocator').find('.product').should('have.length','4')

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

    // Promise:
            // Every asynchronous step returns a promise. 
            // There are 3 states of promise i) rejection ii) resolved iii) pending
            // promise is resolved for the step meaning the step is executed, so ideally control should move to the next step only when promise is resolved and not when promise is rejected or pending because then the next steps will fail
            // once promise is resolved for a step, execution moves to the next step 
            // if we apend .then() method to the step, .then() method waits until the promise is resolved and then moves to the next step
            // so in short, the  asynchronous behavior can be fixed by using .then() method and execution then can be done in sequence
            // However, Cypress takes care of appending .then() method to each step, so we don't have to do it explcitly within the script.

            // Very important ==> If we just use cypress commands e.g. cy.get('.brand.greenLogo'), then Cypress appends .then() at the end of the step and resolves the promise and then the execution moves to the next step,
            // However, if we do non cypress things e.g. if we throw the command output i.e. the command output for command 'cy.get('.brand.greenLogo')' into a variable to store the element, Cypress isn't sure if it should resolve the promise or not,
            // And therefore in this case, we need to resolve the promise ourself explicitly using .then() method - 
            // Original lines written were lines 82 & 83 which gave an error 'logo.text is not a function'
            // Based on the above clarification (lines 77 to 79) - Refer lines 104 to 106
            // const logoelement = cy.get('.brand.greenLogo')
            // console.log(logoelement.text())

            // THUMB RULES (when to use promise):
            // 1) If we are concatenating cypress command to a cypress command,
            // e.g. if we are concatenating cypress command 'type('ca')' to cypress command 'cy.get('.search-keyword')' (Line 31),
            // then the second command i.e. the child command has the ability to resolve the promise (and as resolving promise meaning step is executed), it accepts the parent output and the child command is executed
            // And if the second command is a non cypress command e.g. in 'cy.get('.brand.greenLogo').text()' - text() is a non cypress command (it is a jQuery method)
            // then we need to resolve the promise ouselves because the non cypress command is unable to resolve the promise of the parent command
            // 2) If we do non cypress things e.g. if we throw the command output i.e. the command output for command 'cy.get('.brand.greenLogo')' into a variable to store the element, Cypress isn't sure if it should resolve the promise or not,
            // therefore, we need to resolve the promise ourself explicitly using .then() method (refer lines 104 to 106)

            // In order to check if the command is supported by cypress, navigate to 'https://docs.cypress.io/api/table-of-contents' & under the 'Commands' section search for the command. If the command is found, it means, cypress supports that command.
            // e.g. if we search for 'text' command, it can't be found under the above cypress documentation, which means 'text() is not a cypress command
            // Cypress supports jQuery methods

            // then() method waits until the promise is resolved and once promose is resolved, 
            // stores the command output (i.e. element in this scenario) in 'logoelement'
            cy.get('.brand.greenLogo').then(function(logoelement)
                {
                    // This will only print the text 'GREENKART' in the test runner console
                    cy.log(logoelement.text())
                }
            )

            // Since cy is a cypress command, it prints the output in the test runner console
            // cy.log('hi')
            // Since console is a javascript command, it prints the output in the browser console
            // Also, since its a non cypress command, cypress do not have any control on the execution sequence of this step,
            // therefore it is executed in a asyncronous manner 
            
            // However, if we want the step to be executed after 'cy.log('hi')',
            // then we need to resolve promise explicitly for step 'cy.log('hi')' and wrap 'console.log('hello')' in a function
            // which would mean execute 'console.log('hello')' only after promise for 'cy.log('hi')' is resolved
            // refer steps 138 to 141 for the above clarification
            // console.log('hello')

            cy.log('hi').then (function()
            {
                console.log('hello')
            })

})
}
)