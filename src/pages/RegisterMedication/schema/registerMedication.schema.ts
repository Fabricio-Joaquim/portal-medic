import * as yup from 'yup';

export const registerMedicationSchema = yup.object().shape({
    drug_name: yup.string().required('Drug name is required'),
    units_per_package: yup.number().required('Units per package is required'),
    issued_on: yup.date().required('Issued on is required'),
    expires_on: yup.date().required('Expires on is required').min(yup.ref('issued_on'), 'Expires on must be greater than issued on'),
    manufacturers: yup.object().required("required").test('manufacturers', 'Manufacturers is required', (value) => {
        for (const key in value) {
            if (value[key as keyof typeof value]) {
                return true;
            }
        }
        return false;
    }
    ),
});
