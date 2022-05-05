
//<reference type="cypress"/>

describe("UI Elements",function()
    {
        it("Verify types of locators",function()
        {
            cy.visit("https://demo.nopcommerce.com/");
            cy.get('#small-searchterms').type('Apple MacBook Pro 13-inch');
            cy.get('button[type=submit]').click();
            cy.title().should('eq','nopCommerce demo store. Search');
        })
    }

)
