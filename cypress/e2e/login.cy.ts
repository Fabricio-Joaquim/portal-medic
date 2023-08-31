
describe('Login', () => {

    beforeEach(() => {
        cy.visit('http://localhost:5173/')
    })

    it('invalid acess', () => {
        cy.get('input[name="username"]').type("usuarioError")
        cy.get('input[name="password"]').type("12345678")
        cy.get('button[type="submit"]').click()
        expect(cy.get('div').contains('Invalid')
        )
    })

    it('valid acess', () => {
        cy.get('input[name="username"]').type(Cypress.env('USERNAME'))
        cy.get('input[name="password"]').type(Cypress.env('PASSWORD'))
        cy.get('button[type="submit"]').click()
        expect(cy.get('div').contains('Logout'))
    })

})