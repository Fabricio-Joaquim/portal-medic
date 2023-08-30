import { Loading } from './'

describe('<Loading />', () => {
  it('renders', () => {

    cy.mount(<Loading />)
    cy.get('div').should('have.class', 'loader')
    
  })
})