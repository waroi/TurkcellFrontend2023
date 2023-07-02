import * as yup from "yup";

const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W])[\w\W]{8,}$/;

const registerSchema = yup.object().shape({
  registerFirstName: yup.string().required("Adınız boş olamaz."),
  registerLastName: yup.string().required("Soyadınız boş olamaz."),
  registerEmail: yup
    .string()
    .email("Geçerli bir e-posta adresi giriniz.")
    .required("E-Posta adresi boş bırakılamaz."),
  registerPassword: yup
    .string()
    .min(8, "Şifreniz en az 8 karakterli olmalıdır.")
    .matches(passwordRules, {
      message:
        "Şifreniz en az bir büyük ve küçük harf, rakam ve özel karakter içermelidir.",
    })
    .required("Şifre boş bırakılamaz."),
  confirmRegisterPassword: yup
    .string()
    .oneOf([yup.ref("registerPassword")], "Şifreler Eşleşmiyor.")
    .required("Şifre tekrarı boş bırakılamaz."),
});

export default registerSchema;
