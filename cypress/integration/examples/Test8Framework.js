// We need to import the page objects classes (HomePage & ProductsPage), so we can call the HomePage & ProductsPage class methods from this test spec
// since this test spec is in 'examples' folder, if we give ../ the control moves to the parent folder which is 'integration' folder
// then from the 'integration' parent folder, we need navigate to child folder 'pageObjects' and then navigate to the page objects classes 'HomePage' & 'ProductsPage' under it 

import HomePage from '../../support/pageObjects/HomePage'
import ProductsPage from '../../support/pageObjects/ProductsPage'
import CheckoutPage from '../../support/pageObjects/CheckoutPage'
import PurchasePage from '../../support/pageObjects/PurchasePage'

describe('My Eighth Test Suite',function(){

    // Use 'before' hook to retrieve data from the json file within the fixtures folder
    before(function()
    {
        // Cypress provides a method called 'fixture' which helps to retrieve the data from the 'fixtures' folder
        // 'fixture' method automatically points to the 'fixtures' folder, so when giving path of the json file (where data resides), we just have to give the file name
        // as 'cy.fixture('example')' returns the json file, we need to resolve the promise and store the data file in a variable ('data' in this scenario)
        cy.fixture('example').then(function(data)
        {
            // since the scope of data is only within this block, if we have to access data outside of this block, we need to initialize 'data' at the class level using 'this.data=data'
            this.data=data
        })
    })

    it ('My Eighth Test Case',function(){

        // The global configuration can also be overriden (using the following command) in the Spec file itself if we don't want it to apply globally to all specs  
        // Cypress.config('defaultCommandTimeout', 8000)

        // create object of the page objects class (HomePage), so we can call the methods of the HomePage class using the object.method name 
        // create object of the page objects class (ProductsPage), so we can call the methods of the ProductsPage class using the object.method name 
        // create object of the page objects class (CheckoutPage), so we can call the methods of the CheckoutPage class using the object.method name 
        // create object of the page objects class (PurchasePage), so we can call the methods of the PurchasePage class using the object.method name 
        const homePage = new HomePage()
        const productsPage = new ProductsPage()
        const checkoutPage = new CheckoutPage()
        const purchasePage = new PurchasePage()

        // cy.visit('https://rahulshettyacademy.com/angularpractice/')
        // Instead of hard coding the website URL (as done above), define the URL in the 'cypress.config.js' file,
        // and call it using cypress env() method - 'Cypress.env('url3')' ==> This will be replaced by the value for key 'url3' which is the URL
        cy.visit(Cypress.env('url3'))
        // If we only store the base URL e.g.'https://rahulshettyacademy.com' in environmental variable 'url3',
        // then we can give command like below - this can be done when base url stays same for all environments
        // cy.visit(Cypress.env('url3')+"/angularpractice/")

        // For the below code, refer 'Cypress Notes'doc' ==> 1)	How to use nth-child () in locating the element:
        // We need to use 'this.data.name' vs. 'data.name' as we need to tell cypress to use the global 'data' variable vs the local 'data' variable
        // cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        // Following line of code is the written (instead of the above line of code) using page objects
        homePage.getNamefield().type(this.data.name)

        // For static dropdowns, the tag name will always be 'select'. Its an HTML rule.
        // cy.get('select') ==> This will select the dropdown 
        // select() method is used to select a value from the dropdown & select() method accepts 'value' attribute
        // cy.get('select').select(this.data.gender)
        // Following line of code is the written (instead of the above line of code) using page objects
        homePage.getGenderdropdown().select(this.data.gender)

        // We need to check if the field at the bottom of the page has the value we entered in the name field (this is called two way binding in angular)
        // cy.get('input[name="name"]:nth-child(1)').should('have.value',this.data.name)
        // Following line of code is the written (instead of the above line of code) using page objects
        homePage.getTwowaydatabindingfield().should('have.value',this.data.name)

        // For the 'name' field, we need to validate the 'minlength' property (attribute) i.e. minimum length of the field ==> for vaidating any attribute, we can use the below technique
        // <input class="form-control ng-dirty ng-valid ng-touched" minlength="2" name="name" required="" type="text">
        // cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
        // Following line of code is the written (instead of the above line of code) using page objects
        homePage.getNamefield().should('have.attr','minlength','2')

        // Following code checks if the radio button is disabled
        // cy.get('#inlineRadio3').should('be.disabled').debug()
        // Following line of code is the written (instead of the above line of code) using page objects
        homePage.getEntrepreneurRadiobutton().should('be.disabled')

        // Debugging: We can use pause command ‘cy.pause()’ to pause the execution and then click the resume icon to resume the execution (pause before selecting the ‘Shop’ icon
        // cy.pause()

        // This will click the 'Shop' link
        // cy.get('a[href="/angularpractice/shop"]').click()
        // Following line of code is the written (instead of the above line of code) using page objects
        homePage.getShopelement().click()

        // SCENARIO: Goal here is to click the 'Add' button for product 'Blackberry'
        
        // cy.get('.card-title') ==> This will return 4 elements i.e. cart titles as we have a common locator (class name) 
        // cy.get('.card-title').each(($el, index, $list) => {

            // $el.text() ==> This will return cart title text & checks if it includes 'Blackberry'
            // if($el.text().includes('Blackberry'))
            // {
                // cy.get('button.btn.btn-info') ==> This will return 4 elements (Add buttons) for each cart
                // and if we provide index for that cart where it found 'Blackberry', it wil click the 'Add' button for that cart element
                // cy.get('button.btn.btn-info').eq(index).click()
            // }

        // })
        
        // Instead of the above code (lines 49 to 59) for the highlighted scenario, we can create custom command & pass the productname from this test spec file
        // Refer 'Cypress.Commands.add('selectProduct', (productName)' in commands.js file
        // cy.selectProduct('Blackberry')

        // Instead of hard coding the data in the test spec (when calling the custom command) like in line no 60,
        // we can define the data within example.json & retrieve the data from the json file in an array,
        // and apply forEach loop in javascript to iterate through the array,
        // and then retrieve each element of array & call the custom command (by providing each element) like below.
        // Clarification for the above lines (lines 65 to 68) can be mapped to the below code (lines 75 to 78)

        // this.data.product ==> This returns an array ["Blackberry","Nokia Edge"], instead of single element
        // each value from the array is then stored in element
        // we can then pass 'element' in the command like cy.selectProduct(element),
        // so, command 'cy.selectProduct(element)' will be called twice with each element
        this.data.product.forEach(element => {
            
            cy.selectProduct(element) 
        })

        // This will click the 'Checkout' button on the products page
        // cy.contains('Checkout').click()
        // cy.get('.nav-link.btn.btn-primary').click()
        // Following line of code is the written (instead of the above line of code) using page objects
        // Following code of line will not work if we use cy.contains('Checkout').click()
        // because 'cy.contains('Checkout')' will not return any element if used in page object class.
        // contains method just finds the element with text on the page e.g. button with text 'Checkout' & then if we use click, clicks on it
        productsPage.getCheckoutbuttonelement().click()

        //SCENARIO: Check if the sum of the product prices matches the total 

        // SCENARIO START:

        // STEP 1:
        // cy.get('tr td:nth-child(4) strong') ==> This will return all the price elements in the 4th column (Refer point 10) in the Cypress Notes.doc)
        // We then need to iterate through each elemnt & sum them 
        // This variable s required to sum the prices. As the value of the variable will change after adding price for each element, use var instead of const.
        var sum=0
        // We also need to define 'productstotal' variable for it to be accessible globally within this file
        // If we only define within the loop, it is only accessible within the loop
        var productstotal

        cy. get('tr td:nth-child(4) strong').each(($el, index, $list) => {

            // This returns 2 elements 1) ₹. 50000 2) ₹. 65000
            const productprice = $el.text()
            // cy.log(productprice)
            // As we only need the number i.e. 50000 & 65000 (in order to sum the prices), we need to split the text using split() method
            // We need to split the text using space, so text is splitted in 2 parts & then grab the value at the 1st index of the array which is the product price
            var price = productprice.split(" ")
            // cy.log(price)
            // If we have to use the variable again to perform more operations like in this case, we need grab the value at the 1st index of the array & then trim the text to remove any possible spaces before or after 50000 & 65000, then use 'var' instead of 'const'
            price = price[1].trim()
            // cy.log(price)

            // This will add the price of each product to sum variable
            // As we need to sum, we need to convert value in price variable (which is a string) to number, so use Number() method in javascript - Number(price)
            // Even if we delcared var sum = 0, javascript still treats it as string, so we need to convert value in sum variable (which is a string) to number, so use Number() method in javascript - Number(sum) 
            sum = Number(sum) + Number(price)
        }).then(function(){
            // Since we have defined sum=0 at the start, when spec file runs, since javascript is asynchronous, we need to tell cypress to print sum AFTER the above loop is executed else since sum value is available, cy.log(sum) will be executed at the start BEFORE the loop is executed as sum value is available 
            // therefore we need to include 'cy.log(sum)' in .then(function){} ater the loop.
            // Cypress have intelligence to execute cypress steps in sequence but becuase steps in the above loop e.g split, trim are not cypress steps (they are jQuery steps), cypress step which is cy.log(sum) is executed before the loop if we don't include it under .then(function{}) - which means execute cy.log(sum) after the loop is executed
            cy.log(sum)
        })

        // STEP 2:
        // NOW, we need to grab the total displayed on the page & compare it to the sum of the product prices
        // cy.get('td h3 strong') ==> This will grab the total element
        // Since we can't do 'cy.get('td h3 strong').text()' given text() is a jquery method (non-cypress method), we need to resolve promise and then grab the text
        // Regrading the logic to split, grabing value at index 1 & trim, refer notes under STEP 1
        cy.get('td h3 strong').then(function(element){
            const total = element.text()
            var productstotal = total.split(" ")
            productstotal = productstotal[1].trim()
            // cy.log(productstotal)

        // STEP 3:
        // NOW, we need to compare the sum of products & the total price dislayed on the web page
        // Since we can compare 2 strings or 2 integers, given 'sum' is an integer, we need to convert productstotal from string to interger & then compare
        // Use assertion in Chai library
        // Chai Library Assertions: https://docs.cypress.io/guides/references/assertions#BDD-Assertions
        // Assertion Example: expect(42).to.equal(42)

        // THUMB RULE: If there logging commands or javascript commands, we need to include them in either in loop, 
        // or within .then(function(){}), because given the asynchronous nature of javascript, non cypress commands are not executed in sequence,
        // and the cypress commands which are ready e.g. cy.log(sum) are executed,
        // Also, non cypress commands 9e.g. trim, split etc.) i.e. javascript commands are not executed in sequence
        // Therefore, the following logic is included in this block
            productstotal = Number(productstotal)
            cy.log(productstotal)
            expect(sum).to.equal(productstotal)
        })

        // END OF THE SCENARIO

        // cy.get('.btn.btn-success').click()
        // Following line of code is the written (instead of the above line of code) using page objects
        checkoutPage.getCheckoutelement().click()

        // cy.get('#country').type('India')
        // Following line of code is the written (instead of the above line of code) using page objects
        purchasePage.getCountryfieldelement().type('India')

        // cy.get('.suggestions > ul > li > a').click()
        // Following line of code is the written (instead of the above line of code) using page objects
        purchasePage.getCountry().click()

        // Sometimes, cypress throws an error ‘Element is covered by another element’ e.g., when clicking the checkbox, cypress is unable to click the checkbox
        // Cypress also gives suggestion to use {force: true} in this case when clicking the element to force click
        // cy.get('#checkbox2').click({force: true})
        // Following line of code is the written (instead of the above line of code) using page objects
        purchasePage.getCheckboxelement().click({force: true})

        // cy.get('input[value="Purchase"]').click()
        // Following line of code is the written (instead of the above line of code) using page objects
        purchasePage.getPurchasebuttonelement().click()

        // Refer 'Cypress Notes.doc' point 9 for the error & why the following code can't be used to validate the success message
        // cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
        // const successmessage = cy.get('.alert').text() ==> text() method can't be used directly as its not a cypress method, 
        // so we need to resolve the promise and then use the text() method

        cy.get('.alert').then(function(element){

            const successmessage = element.text()

            // Assertions in Chai library
            // https://docs.cypress.io/guides/references/assertions#BDD-Assertions
            // We need to use 'expect(true).to.be.true' ==> write the condition in place of true, if condition is true, 
            // then the assertion will pass
            expect(successmessage.includes('Success')).to.be.true
        })
    })
})