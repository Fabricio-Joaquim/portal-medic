import { BrowserRouter } from 'react-router-dom'
import { mount } from 'cypress/react18';
import RegisterMedication from './'


describe('<RegisterMedication />', () => {
  it('renders', () => {
    mount(
      <BrowserRouter>
    <RegisterMedication />
      </BrowserRouter>
    )
  })
})