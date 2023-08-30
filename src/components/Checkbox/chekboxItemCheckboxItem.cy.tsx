import { CheckboxItem } from './chekboxItem'
import { useForm } from 'react-hook-form'
import { mount } from 'cypress/react18'

describe('<CheckboxItem />', () => {
  it('renders', () => {
    const { control } = useForm()
    mount(<CheckboxItem control={control} label='exe' name='exe' />)
  })
})