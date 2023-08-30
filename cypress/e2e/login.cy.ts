
describe('Login', () => {
    it('invalid acess', () => {
        cy.visit('http://localhost:3000/')
        cy.get('input[name="username"]').type("usuarioError")
        cy.get('input[name="password"]').type("12345678")
        cy.get('button[type="submit"]').click()
        cy.get('div').contains('Invalid')
    })

    it('valid acess', () => {
        cy.visit('http://localhost:3000/')
        cy.get('input[name="username"]').type(Cypress.env('USERNAME'))
        cy.get('input[name="password"]').type(Cypress.env('PASSWORD'))
        cy.get('button[type="submit"]').click()
        cy.get('div').contains('Logout')
    })

})