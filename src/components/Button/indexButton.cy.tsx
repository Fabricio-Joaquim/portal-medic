import { Button } from './'

describe('<Button />', () => {
  it('renders', () => {
    cy.mount(<Button>Exemplo</Button>)
    cy.get('button').should('have.text', 'Exemplo')
  })
})