//Following is how we create a class in javascript
class HomePage
{
    getNamefield()
    {
        return cy.get('input[name="name"]:nth-child(2)')
    }

    getGenderdropdown()
    {
        return cy.get('select')
    }

    getTwowaydatabindingfield()
    {
        return cy.get('input[name="name"]:nth-child(1)')
    }

    getEntrepreneurRadiobutton()
    {
        return cy.get('#inlineRadio3')
    }

    getShopelement()
    {
        return cy.get('a[href="/angularpractice/shop"]')
    }

}
    // In order for other files e.g. test specs to access this class, we need to export this class
    // Since page object classes we need to create, therefore we need to provide export & import,
    // For fixtures & commands.js, we dont need to export & import as they are by default provided by cypress
    export default HomePage;

