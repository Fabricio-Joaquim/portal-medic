
describe("Testing if a home page", () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
    cy.get('input[name="username"]').type(Cypress.env('USERNAME'))
    cy.get('input[name="password"]').type(Cypress.env('PASSWORD'))
    cy.get('button[type="submit"]').click()
  })

  it("page has elements on the table", () => {
    cy.get('tr').should('have.length', 11)
  })

  it("sidebar has elements", () => {
    cy.get('div').contains('Logout')
    expect(cy.get('span').contains('Menu'))
  })

  it("realize a search of a drug", () => {
    cy.get('input[name="search"]').type('PAREDRINE')
    cy.get('button[name="button-search"]').click()
    expect(cy.get('tr').should('have.length', 2))
  })

  it("logout", () => {
    cy.get('div').contains('Logout').click({ force: true})
    expect(cy.get('input[name="username"]').should('be.visible'))
  })
})