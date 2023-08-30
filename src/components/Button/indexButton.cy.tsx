import { mount } from 'cypress/react18';
import { Button } from './'

describe('<Button />', () => {
  it('renders', () => {
    mount(<Button>Exemplo</Button>)
    cy.get('button').should('have.text', 'Exemplo')
  })
})