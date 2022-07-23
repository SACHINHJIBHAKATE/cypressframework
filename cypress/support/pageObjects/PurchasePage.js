class PurchasePage
{
    getCountryfieldelement()
    {
        return cy.get('#country')
    }

    getCountry()
    {
        return cy.get('.suggestions > ul > li > a')
    }

    getPurchasebuttonelement()
    {
        return cy.get('input[value="Purchase"]')
    }

    getCheckboxelement()
    {
        return cy.get('#checkbox2')
    }
}
export default PurchasePage;