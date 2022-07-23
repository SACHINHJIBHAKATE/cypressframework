class ProductsPage
{
    getCheckoutbuttonelement()
    {
        return cy.get('.nav-link.btn.btn-primary')
    }
}
export default ProductsPage;