import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const Schema = yup.object().shape({
  firstName: yup.string().required("Boş Bırakmayınız"),
  lastName: yup.string().required("Boş Bırakmayınız"),
  email: yup
    .string()
    .email("Geçerli Bir Mail Girin")
    .required("Boş Bırakmayınız"),
  age: yup
    .number()
    .positive("Pozitif Sayı Giriniz")
    .integer("Tam sayı Giriniz")
    .required("Boş Bırakmayınız"),
  password: yup
    .string()
    .min(5, "En az 5 karakter giriniz")
    .matches(passwordRules, {
      message: "Lütfen en az 1 büyük harf,1 küçük harf ve 1 sayı giriniz",
    })
    .required("Boş Bırakmayınız"),
});
