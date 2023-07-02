import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const validationSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required')
        .matches(passwordRules, {
            message: "Lütfen en az 1 büyük harf 1 küçük harf ve 1 sayı giriniz"
        })
});