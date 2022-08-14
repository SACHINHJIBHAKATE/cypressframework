// Objective of this test is to do hands on excercises using XPath:

describe('My First Test Suite - UPDATED',function(){

    it ('My First Test Case',function(){

        cy.visit("https://automationteststore.com/")

        cy.xpath("//a[text()='Contact Us']").click()

    })
})