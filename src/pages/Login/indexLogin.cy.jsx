import { mount } from 'cypress/react18'
import Login from './index'

describe('<Login />', () => {
  it('mounts', () => {
    // see: https://on.cypress.io/mounting-react
    mount(<Login />)
  })
})