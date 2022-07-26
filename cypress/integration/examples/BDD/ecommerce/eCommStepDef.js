
// We also need to import Given When Then packages from the sub plugin 'steps' under 'cypress-cucumber-preprocessor' plugin, so include the below statement within the feature file.
import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps"

// We need to import the page objects classes (HomePage, ProductsPage, CheckoutPage & PurchasePage), so we can call the HomePage, ProductsPage, CheckoutPage & PurchasePage class methods from this test spec
import HomePage from '../../../../support/pageObjects/HomePage'
import ProductsPage from '../../../../support/pageObjects/ProductsPage'
import CheckoutPage from '../../../../support/pageObjects/CheckoutPage'
import PurchasePage from '../../../../support/pageObjects/PurchasePage'

// Create objects of the page objects classes (HomePage, ProductsPage, CheckoutPage & PurchasePage), so we can call the methods of the those class using the object.method name       
const homePage = new HomePage()
const productsPage = new ProductsPage()
const checkoutPage = new CheckoutPage()
const purchasePage = new PurchasePage()

// If the function doesn't have a name (anonymous function), we can also write the statement like below. 
// => is called fat operator (Note: When using Mocha Hooks, we can't use the fat operator => & therefore we have to use function())
// Given('customer launch the Ecommerce website', ()=> 
// This code launches the Ecommerce website
Given('customer launch the Ecommerce website', function()
{
    cy.visit(Cypress.env('url3'))
})

// This code populates the name, select the gender & select the Shop link on the HomePage
When('the customer populates the basic details on the Home Page', function()
{
    homePage.getNamefield().type(this.data.name)
    homePage.getGenderdropdown().select(this.data.gender)
    homePage.getShopelement().click()
})

// This code selects the products & select 'Checkout' button on the Products Page
And('And selects the products from the ProductsPage', function()
{
    this.data.product.forEach(element => {
            
        cy.selectProduct(element) 
    })

    productsPage.getCheckoutbuttonelement().click()
})

// This code selects the 'Checkout' button on the Checkout Page
And('confirm checkout from the CheckoutPage', function()
{
    checkoutPage.getCheckoutelement().click()
})

// This code selects the country, select the terms & conditions checkbox 
// & select 'Purchase' button on the Purchase Page
And('And confirms purchase from the PurchasePage', function()
{
    purchasePage.getCountryfieldelement().type('India')
    purchasePage.getCountry().click()
    purchasePage.getCheckboxelement().click({force: true})
    purchasePage.getPurchasebuttonelement().click()
})

// This code validates the success message to ensure the products purchase is successful
Then('products purchase is successful', function()
{
    cy.get('.alert').then(function(element){

        const successmessage = element.text()
        expect(successmessage.includes('Success')).to.be.true
    })
})