// Objective of this test is to do hands on excercises on:
// 1) CHECKBOXES
// 2) DROPDOWNS (STATIC & DYNAMIC)
// 3) VISIBLE & INVISIBLE ELEMENTS
// 4) RADIO BUTTONS

describe('My Third Test Suite',function(){

it ('My Third Test Case',function(){

    // cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    // Instead of hard coding the website URL (as done above), define the URL in the 'cypress.config.js' file,
    // and call it using 'Cypress.env('url2')' ==> This will be replaced by the value for key 'url2' which is the URL
    cy.visit(Cypress.env('url2'))

    // 1) CHECKBOXES VALIDATIONS 

    // For selecting the checkbox, use check() method instead of click() method as check() method is more reliable than check() method for selecting the checkbox
    // For validating the behaviour of the web elements using assertions, use 'should.be'
    // e.g. if the checkbox is checked or unchecked, is the behavior of the checkbox, so use should('be.checked') to validate if the checkbox is checked
    // For validating the property of the web element using assertions, use 'should.have'
    // e.g. 'value' = 'option1' is the property of the checkbox element, so use should('have.value', 'option1')
    // When using the 2nd assertion, we can use 'and' instead of 'should' again
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')

    // Use uncheck() method to uncheck the checkbox
    // In order to validate if the checkbox is unchecked using assertion, use 'should('not.be.checked')'
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

    // If we have grab all the 3 checkboxes, use a common attribute e.g. type="checkbox" in this case
    // cy.get('input[type="checkbox"]') ==> This will return 3 checkboxes 
    // Then, to select the checkboxes, use check() method which also accepts 'value' attribute
    // <input id="checkBoxOption1" value="option1" name="checkBoxOption1" type="checkbox">
    // <input id="checkBoxOption2" value="option2" name="checkBoxOption2" type="checkbox">
    // <input id="checkBoxOption3" value="option3" name="checkBoxOption3" type="checkbox"></input>
    // Below code will select checkboxes with values 'option2' & 'option3'
    cy.get('input[type="checkbox"]').check(['option2','option3'])

    // 2) DROPDOWN VALIDATIONS 

    // 2a) STATIC DROPDOWN

    // There are 2 types of dropdowns:
    // 1) Where dropdown values are fixed, they are called 'static' dropdowns
    // 2) Where dropdown values are displayed based on the input text provided in the dropdown, they are called 'dynamic' dropdowns

    // For static dropdowns, the tag name will always be 'select'. Its an HTML rule.
    // cy.get('select') ==> This will select the dropdown 
    // select() method is used to select a value from the dropdown & select() method accepts 'value' attribute
    // <option value="option1">Option1</option>
    // <option value="option2">Option2</option>
    // <option value="option3">Option3</option>
    // Below code will select value 'Option2' from the dropdown
    // should('have.value','option2') ==> This will validate if 'Option2' is selected from the dropdown
    cy.get('select').select('option2').should('have.value','option2')

    // 2b) DYNAMIC DROPDOWN

    cy.get('#autocomplete').type('ind')

    // Following is the HTML code for the 3 elements when we type 'ind' in the dynamic dropdown
    // Idea here is to grab all elements (using common locator) in an array, apply loop, check if the element text mataches 'India' & then select the element
    // common locator for 3 elements is the tag names - we just have to traverse using tag names
    // always check in cypress test runner or in chropath if the elements are highlighted when we provide CSS selector
    // in this scenario, as dynamic dropdown elements will be hidden, use cypress test runner instead of chropath

    //<li class="ui-menu-item">
    //   <div id="ui-id-8" tabindex="-1" class="ui-menu-item-wrapper">British Indian Ocean Territory

    // <li class="ui-menu-item">
    //    <div id="ui-id-9" tabindex="-1" class="ui-menu-item-wrapper">India

    // <li class="ui-menu-item">
    //    <div id="ui-id-13" tabindex="-1" class="ui-menu-item-wrapper">Indonesia

    cy.get('li div').each(($el, index, $list) => {

        if ($el.text()==='India')
        {
            // As highlighted in 'Test2.js', when usng click() method, we need to resolve the promise for the element $el
            // if we just use $el.click(), it automatically strikethrough the click() method
            // for resolving promise for $el, use wrap method
            cy.wrap($el).click()
        }
})   
    // Apply assertion to check if the value selected is 'India' 
    cy.get('#autocomplete').should('have.value','India')

   
    // 3) CHECK 'VISIBLE' & 'INVISIBLE' ELEMENTS (APPLY ASSERTION) ON THE WEBPAGE

    // This will check if the field is visible ==> It should be visible
    cy.get('#displayed-text').should('be.visible')

    // This should click the 'Hide' button to hide the field
    cy.get('#hide-textbox').click()

    // This will check if the field is visible ==> It should not be visible now as we clicked the hide button in the previous step
    cy.get('#displayed-text').should('not.be.visible')

    // This should click the 'Show' button to show the field again on the webpage
    cy.get('#show-textbox').click()

    // This will check if the field is visible ==> It should be visible
    cy.get('#displayed-text').should('be.visible')

    // 4) RADIO BUTTONS

    // As all 3 radio buttons have most attributes in common, use the 'value' attribute which is unique
    // double quotes inside double quotes & single quotes inside single quotes are not allowed
    // so, write radio2 in double quotes i.e. "radio2"
    // or we can also write like cy.get("input[value='radio2']"")
    // similar to checkboxes, we can use 'check()' method to click the radio buttons as well
    // we can also use 'select' method but 'check()' method is more reliable for checkboxes & radio buttons
    // then apply assertion to validate if the radio button is checked
    cy.get('input[value="radio2"]').check().should('be.checked')
})
})