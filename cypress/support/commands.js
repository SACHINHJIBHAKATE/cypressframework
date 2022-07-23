// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// SCENARIO: Goal here is to click the 'Add' button for product name provided by the test spec 

    // This is how we create a custom command called 'selectProduct' which accepts the parameter 'productName' which can be passed from the test spec when 'selectProduct' method is called from the test spec
    Cypress.Commands.add('selectProduct', (productName) => {

        //cy.get('.card-title') ==> This will return 4 elements i.e. cart titles as we have a common locator (class name) 
        cy.get('.card-title').each(($el, index, $list) => {

             //$el.text() ==> This will return cart title text & checks if it includes cart title passed as a parameter from the test spec custom command
             if($el.text().includes(productName))
             {
                // cy.get('button.btn.btn-info') ==> This will return 4 elements (Add buttons) for each cart and if we provide index for that cart where it found the product name provided by the test spec, it wil click the 'Add' button for that cart element
                cy.get('button.btn.btn-info').eq(index).click()
             }

        })

    })