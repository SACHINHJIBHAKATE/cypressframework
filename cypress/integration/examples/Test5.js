// Objective of this test is to do hands on exercises for Advanced Automation features such as handling Alerts

describe('My Fifth Test Suite',function(){

    it ('My Fifth Test Case',function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get("#alertbtn").click()
        cy.get("#confirmbtn").click()

        // Cypress automatically handles the alerts, so no actions are required to action the alerts
        // Therefore, if we need to capture the text on the alert, we need to explicitly call the event for the alert
        // Reference: https://docs.cypress.io/api/events/catalog-of-events#App-Events
        
        // Event Name: window:alert
        // Yields:	the alert text (String)
        // Description: Fires when your app calls the global window.alert() method. Cypress will auto accept alerts. You cannot change this behavior.
        
        // Event Name: window:confirm
        // Yields:	the confirmation text (String)
        // Description: Fires when your app calls the global window.confirm() method. Cypress will auto accept confirmations. Return false from this event and the confirmation will be canceled.

        // on() method trigers the events & has 2 arguments 1) event name & 2) string variable where the captured string text from the alert will be stored)
        // On top of the cypress command on(), as we are performing additional action, where the captured string text from the alert is stored in a variable, we need to resolve the promise) 
        // => i.e. pipe operator is used instead if function.then() to resolve the promise
        cy.on('window:alert', (str) => {

            // This ia a Chai library assertion to check if the captured string value matches the actual string text on the alert
            // format: expect(string variable where captured string text is stored).to.equal('actual string text')
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        // on() method trigers the events & has 2 arguments 1) event name & 2) string variable where the captured string text from the alert will be stored)
        // On top of the cypress command on(), as we are performing additional action, where the captured string text from the alert is stored in a variable, we need to resolve the promise) 
        // => i.e. pipe operator is used instead if function.then() to resolve the promise
        cy.on('window:confirm', (str) => {

            // This ia a Chai library assertion to check if the captured string value matches the actual string text on the alert
            // format: expect(string variable where captured string text is stored).to.equal('actual string text')
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
       
    })
})