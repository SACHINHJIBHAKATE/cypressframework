Feature: Ecommerce website automation
    End to End Ecommerce website automation

    Scenario: Purchase products from the Ecommerce website
        Given customer launch the Ecommerce website
        When the customer populates the basic details on the HomePage
        And selects the products from the ProductsPage
        And confirm checkout from the CheckoutPage
        And confirms purchase from the PurchasePage
        Then products purchase is successful
 