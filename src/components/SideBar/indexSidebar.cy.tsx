import { BrowserRouter as Router } from 'react-router-dom'; // Importe o Router
import configureStore from 'redux-mock-store'; // ou importe sua configuração de store real
import { mount } from 'cypress/react18';
import { Provider } from 'react-redux';
import { Sidebar } from './index'

describe('<Sidebar />', () => {
  it('renders', () => {
    const mockStore = configureStore();
    const store = mockStore({ userData: {token: "1231221"} });

  mount(
      <Provider store={store}>
        <Router>
          <Sidebar />
        </Router>
      </Provider>
    )
    cy.get("aside").should("have.class", "flex flex-col")
    cy.get("button").click()
    cy.wait(2000)
    cy.get("aside").should("have.class", "flex flex-col w-14")
    cy.get("button").click()

  })


})