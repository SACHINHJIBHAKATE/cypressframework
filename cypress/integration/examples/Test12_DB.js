describe('My Twelth Test Suite',function(){

    it ('My Twelth Test Case',function(){

        // As sqlServer() method is a custom command, we need to resolve the promise
        // sqlServer() method returns the database rows in the form of array
        cy.sqlServer("Select * from Persons").then(function(dbdata)
        {
            // We can log the database data
            console.log(dbdata)

            //  console.log(dbdata[0][1]) ===> this should log 'Jerssey'
            console.log(dbdata[0][1])

            // PersonID    LastName   FirstName   City
            // 9535        Jerssey    Senat       Southway
            // 9538        Tom	      Renat       Jasway
            // 9538        Tom	      Renat       Jasway


        })

    })
})