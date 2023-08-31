import * as yup from 'yup';

export const registerMedicationSchema = yup.object().shape({
    drug_name: yup.string()
        .required('Drug name is required')
        .typeError('Drug name is required'),
    units_per_package: yup.number()
        .required('Units per package is required')
        .typeError('Units per package is required'),
    issued_on: yup.date()
        .required('Issued on is required')
        .typeError('Issued on is required'),
    expires_on: yup.date()
        .required('Expires on is required')
        .typeError('Expires on is required')
        .test('expires_on', 'Expires on must be greater than issued on', function (value) {
            const { issued_on } = this.parent;
            if (issued_on && value) {
                return new Date(value) > new Date(issued_on);
            }
            return true;
        }),
    manufacturers: yup.object()
        .required("required")
        .test('manufacturers', 'Manufacturers is required', (value) => {
            for (const key in value) {
                if (value[key as keyof typeof value]) {
                    return true;
                }
            }
            return false;
        }
        ),
});
