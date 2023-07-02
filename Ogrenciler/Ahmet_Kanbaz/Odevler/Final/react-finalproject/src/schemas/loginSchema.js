import * as yup from "yup";

const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W])[\w\W]{8,}$/;

const loginSchema = yup.object().shape({
  loginEmail: yup
  .string()
  .email('Geçerli bir e-posta adresi giriniz.')
  .required('E-Posta adresi boş bırakılamaz.'),
  loginPassword: yup
  .string()
  .min(8, 'Şifreniz en az 8 karakterli olmalıdır.')
  .matches(passwordRules, {
    message:
      "Şifreniz en az bir büyük ve küçük harf, rakam ve özel karakter içermelidir.",
  })
  .required('Şifre boş bırakılamaz.'),
});

export default loginSchema;
