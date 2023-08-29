import { useRegisterMedication } from './viewModel/useRegisterMedication'
import { InputText } from '@components/TextInput'
import CheckboxList from '@components/Checkbox'

const RegisterMedication = () => {

  const {
    control,
    onSubmit,
    manufactureOptions,
    errors,
  } = useRegisterMedication()

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <InputText
            placeholder="Name of the drug"
            name="drug_name"
            control={control}
            label='Name of the drug'
          />
          <InputText
            placeholder="Units per package"
            name="units_per_package"
            control={control}
            label='Units per package'
          />
          <InputText
            placeholder="Issued on"
            name="issued_on"
            control={control}
            type='date'
            label='Issued on'
          />
          <InputText
            placeholder="Expires on"
            name="expires_on"
            type='date'
            control={control}
            label='Expires on'
          />
          <CheckboxList
            manufactureOptions={manufactureOptions}
            control={control}
            name='manufacturers'
            error={errors?.manufacturers?.root?.message as string}
          />

        </div>
        <button type="submit">Register</button>
      </form>
    </>
  )
}
export default RegisterMedication