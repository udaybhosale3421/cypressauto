describe("Third Test Suit",function()
{
    it("Click on sign On",function()
    {
        cy.visit("https://demo.guru99.com/test/newtours/index.php");
        cy.get('a[href="login.php"]').click();

        cy.title().should('be.eq','Sign-on: Mercury Tours');
    })

    it("Click login",function()
    {
        cy.visit("https://demo.guru99.com/test/newtours/login.php");
        cy.get('input[name="userName"]').clear().type("MyTour");
        cy.get('input[name="password"]').clear().type("MyPassword");
        cy.get('input[type="submit"]').click();
        cy.title().should('be.eq','Login: Mercury Tours');
        cy.get('font[face="Arial, Helvetica, sans-serif"]>b').contains(' Thank you for Loggin. ');
    })
})