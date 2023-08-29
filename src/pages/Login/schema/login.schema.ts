import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    username: yup.string().required("Username is required").min(5).max(40),
    password: yup.string().required("Password is required").min(8).max(40),  
});