import { useRegisterMedication } from './Register/useRegisterMedication'
import { SideBar } from '../../components/SideBar'
import { InputText } from '../../components/TextInput'
import { Select } from '../../components/Select'
const RegisterMedication = () => {

  const { control, onSubmit } = useRegisterMedication()
  return (
    <>
    <SideBar />
    <form onSubmit={onSubmit}>
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
        label='Issued on'
      />
      <InputText
        placeholder="Expires on"
        name="expires_on"
        control={control}
        label='Expires on'
      />
      <InputText
        placeholder="Manufacturers"
        name="manufacturers"
        control={control}
        label='Manufacturers'
      />
      <Select
        label="Medicamento"
        name="medication"
        control={control}
        options={[
          { label: 'Dipirona', value: 'dipirona' },
          { label: 'Paracetamol', value: 'paracetamol' },
          { label: 'Ibuprofeno', value: 'ibuprofeno' }
        ]}
      />
      <button type="submit">Register</button>
    </form>
    </>
  )
}
export default RegisterMedication