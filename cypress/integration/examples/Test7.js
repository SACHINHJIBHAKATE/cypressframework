// Objective of this test is to do hands on exercises for Advanced Automation feature such as how to handle web tables & extract desired text and how to retrieve the retrieve the text of the sibling element from the web table on the web page
// Refer 'Cypress.Notes' for additional details on top of the details covered in this spec file

describe('My Sixth Test Suite',function(){

    it ('My Sixth Test Case',function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // cy.get("table[name='courses'] tbody tr td:nth-child(2)") ==> This retrieves all the course elements from the Courses column
        // each element will then stored in $el, index will store index of that element & $list will store list of elements
        cy.get("table[name='courses'] tbody tr td:nth-child(2)").each(($el, index, $list) => {

            // When the loop iterates, we are comparing if the course name matches the stated course for which we need to retrieve the price
            if ($el.text()==='Master Selenium Automation in simple Python Language')
            {
                // once the course name matches & once we are in this loop, we need to retrieve the price siblin element (logic below)
                // cy.get("table[name='courses'] tbody tr td:nth-child(2)") ==> This retrieves all the course elements from the Courses column
                // eq(index) method then locates the elements (from the list of elements) using the index provided,
                // so this will locate the course element
                // next() method then is used to identify the next sibling element
                // Reference: https://docs.cypress.io/api/commands/next
                // after next(), we can't apply text() method like next().text() as text() is a jQuery method, 
                // so we need to resolve the promise first, then grab that into an element,
                // and then apply text() method to retrieve the text of the price element
                // then we can apply chai library assertion to check if the retrieved price is equal to 25 
                // Note: '.each(($el, index, $list)' doesn't work with cy.xpath hence we need identify elements using CSS selector

                cy.get("table[name='courses'] tbody tr td:nth-child(2)").eq(index).next().then(function(price_element)
                {
                    const price = price_element.text()
                    expect(price).to.equal('25')
                })

            }
        })    

    })
})