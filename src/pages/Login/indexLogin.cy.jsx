import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from './index'

describe('<Login />', () => {
  it('mounts', () => {


    const mockStore = configureStore();
    const store = mockStore({ userData: { token: "1231221" } });

    cy.mount(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    )
  })
})