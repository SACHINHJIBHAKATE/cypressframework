
// Cypress also provides hooks (borrowed from Mocha)

// https://www.npmjs.com/package/cypress-cucumber-preprocessor#before-and-after-hooks
// https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Hooks

// before ==> the code written within the 'before' block executes "once only" BEFORE execution starts for the scenarios defined within the feature file

// beforeEach ==> the code written within the 'beforeEach' block executes BEFORE execution starts for "EVERY" scenario defined within the feature file

// after ==> the code written within the 'after' block executes "once only" AFTER execution is complete for the scenarios defined within the feature file

// afterEach ==> the code written within the 'afterEach' block executes AFTER execution is complete for "EVERY" scenario defined within the feature file

// Since importing data from fixtures is a separate step from the actual step & also a pre-requisite before executing the test, we need to writing that code within the beforeEach hook.
// Since we only have one scenario in the feature file, we can use 'beforeEach' or we can even use 'before' hook.
beforeEach(function(){

    cy.fixture('example').then(function(data)
        {
            // since the scope of data is only within this block, if we have to access data outside of this block, we need to initialize 'data' at the class level using 'this.data=data'
            this.data=data
        })
})