Feature: Ecommerce website automation
    End to End Ecommerce website automation

    @Regression
    Scenario: Purchase products from the Ecommerce website
        Given customer launch the Ecommerce website
        When customer populates the basic details on the HomePage
        And selects the products from the ProductsPage
        And confirms checkout from the CheckoutPage
        And confirms purchase from the PurchasePage
        Then products purchase is successful

    @Smoke
    Scenario: Launch the Ecommerce website & populate basic details
        Given customer launch the Ecommerce website
        When customer populates the basic details on the HomePage
 