import { useRegisterMedication } from './viewModel/useRegisterMedication'
import { InputText } from '@components/TextInput'
import CheckboxList from '@components/Checkbox'
import { Button } from '@components/Button'

const RegisterMedication = () => {

  const {
    control,
    onSubmit,
    manufactureOptions,
    errors,
  } = useRegisterMedication()

  return (
    <>
      <h1 className='text-3xl md:text-5xl font-bold mb-7'>Register Medication</h1>
      <form onSubmit={onSubmit} className='lg:w-5/6 bg-slate-500 p-8 max-h-[50] overflow-y-hidden rounded-lg flex flex-col gap-5 items-center'>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
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
        <Button color='success' type='submit'>
          REGISTER
        </Button>
      </form>
    </>
  )
}
export default RegisterMedication