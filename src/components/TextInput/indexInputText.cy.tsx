import { useForm } from 'react-hook-form';
import { InputText } from './index'
import { mount } from 'cypress/react18';

describe('<InputText />', () => {
  it('renders', () => {
    const { control } = useForm()

    mount(
      <>
        <InputText control={control} label='Exemplo' name='exemplo' placeholder='' />
      </>
    )
  })
})