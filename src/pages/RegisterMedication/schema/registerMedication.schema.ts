import * as yup from 'yup';

export const registerMedicationSchema = yup.object().shape({
    drug_name: yup.string().required('Drug name is required'),
    units_per_package: yup.number().required('Units per package is required'),
    issued_on: yup.string().required('Issued on is required'),
    expires_on: yup.string().required('Expires on is required'),
    manufacturers: yup.array().of(yup.string().required()).required('Manufacturers is required'),
});
