import * as yup from 'yup';

export const validationSignUp = () => yup.object().shape({
  username: yup
    .string()
    .required(),
  email: yup
    .string()
    .email()
    .required(),
  password1: yup
    .string()
    .min(6)
    .required(),
  password2: yup
    .string()
    .min(6)
    .required()
    .oneOf([yup.ref('password1')], 'Passwords do not match'),
});
