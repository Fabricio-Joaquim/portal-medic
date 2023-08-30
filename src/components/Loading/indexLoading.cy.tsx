import { mount } from 'cypress/react18';
import { Loading } from './'

describe('<Loading />', () => {
  it('renders', () => {

    mount(<Loading />)
    cy.get('div').should('have.class', 'loader')
    
  })
})