
describe('Login', () => {

    beforeEach(() => {
        cy.visit('http://localhost:5173/')
        cy.get('input[name="username"]').type(Cypress.env('USERNAME'))
        cy.get('input[name="password"]').type(Cypress.env('PASSWORD'))
        cy.get('button[type="submit"]').click()
    })

    it("try to register a new drug without fields", () => {
        cy.get("a").contains("Register").click({ force: true })
        cy.get('button[type="submit"]').click()
        expect(cy.get('div').contains('required')
        )
    })

    it("try to register a new drug with date invalid", () => {
        cy.get("a").contains("Register").click({ force: true })
        cy.get('input[name="drug_name"]').type('PAREDRINE')
        cy.get("label").contains("Logic").click({ force: true })
        cy.get('input[name="units_per_package"]').type('10')
        cy.get('input[name="issued_on"]').type('2021-09-01')
        cy.get('input[name="expires_on"]').type('2021-08-01')
        cy.get('button[type="submit"]').click()
        cy.get('span').contains('Expires on must be greater than issued on')
    })

    it("validate informations", () => {
        cy.get("a").contains("Register").click({ force: true })
        cy.get('input[name="drug_name"]').type('PAREDRINE')
        cy.get("label").contains("Logic").click({ force: true })
        cy.get('input[name="units_per_package"]').type('10')
        cy.get('input[name="issued_on"]').type('2021-09-01')
        cy.get('input[name="expires_on"]').type('2021-10-01')
        cy.get('button[type="submit"]').click()
        cy.get('div').contains('Medication registered successfully')
    })




})