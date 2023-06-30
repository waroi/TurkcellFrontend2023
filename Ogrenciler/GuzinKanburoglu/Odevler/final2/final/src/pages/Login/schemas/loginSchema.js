import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const validationSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required').matches(passwordRules, {
        message: "Lütfen en az 1 büyük harf 1 küçük harf ve 1 sayı giriniz"
      })
});