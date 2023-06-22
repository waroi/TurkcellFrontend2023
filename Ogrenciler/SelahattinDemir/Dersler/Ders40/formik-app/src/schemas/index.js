import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const loginSchema = yup.object().shape({
  email: yup.string().email("Geçerli bir email giriniz").required(),
  password: yup
    .string()
    .min(6, "Lütfen minumun 6 karakter giriniz")
    .max(12)
    .matches(passwordRules, {
      message: "Lütfen en az 1 büyük harf 1 küçük harf ve 1 sayı giriniz",
    })
    .required(),
  isAccepted: yup.boolean().oneOf([true], "Kullanım koşullarını kabul ediniz"),
});

export const registerSchema = yup.object().shape({
  username: yup
    .string("")
    .min(3, "Kullanıcı adı minimum 3 karakter uzunluğunda olmalıdır")
    .max(50)
    .required(),
  email: yup.string().email("Geçerli bir email giriniz").required(),
  password: yup
    .string()
    .min(6, "Lütfen minumun 6 karakter giriniz")
    .max(12)
    .matches(passwordRules, {
      message: "Lütfen en az 1 büyük harf 1 küçük harf ve 1 sayı giriniz",
    })
    .required("Şifre girmek zorunludur"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Şifreler eşleşmiyor")
    .required("Tekrar şifre girmek zorunludur"),
});
