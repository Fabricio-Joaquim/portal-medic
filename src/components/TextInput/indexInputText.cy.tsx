import { useForm } from 'react-hook-form';
import { InputText } from './index'
import { controlMock } from './mock'
describe('<InputText />', () => {
  it('renders', () => {


    cy.mount(
      <>
        <InputText control={controlMock} label='Exemplo' name='exemplo' placeholder='' />
      </>
    )
  })
})