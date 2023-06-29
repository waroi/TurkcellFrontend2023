import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}$/;

export const footerSchema = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli bir email giriniz")
    .required("Email girmek zorunludur"),
});

export const loginSchema = yup.object().shape({
  username: yup.string().required("Kullanıcı Adı Zorunludur"),
  password: yup
    .string()
    .min(7, "Lütfen minimum 7 karakter giriniz")
    .matches(passwordRules, {
      message: "Lütfen en az 1 büyük harf, 1 küçük harf ve 1 sayı giriniz",
    })
    .required("Şifre Boş Bırakılamaz"),
});
