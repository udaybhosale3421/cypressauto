describe('My Second Test Case',function()
{
    it('visit the site',function()
    {
        cy.visit('https://example.cypress.io')
        cy.contains('type').click()
        cy.url().should('includes','commands/actions')
        cy.get('.action-email').type('fake@email.com').should('have.value','fake@email.com')
    })
})