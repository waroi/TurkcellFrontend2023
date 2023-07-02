import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{3,}$/;


export const SignupSchema = yup.object().shape({
  username: yup.string()
    .min(2, "Kullanıcı adı en az 2 karakter olmalıdır.")
    .required("Kullanıcı adı zorunludur."),
  surname: yup.string()
    .min(2, "Soyadı en az 2 karakter olmalıdır.")
    .required("Soyadı zorunludur."),
  profile: yup.string()
    .required("resim girmek zorunludur.")
    .matches(/^http/, "resim http ile başlamalıdır."),
  password: yup.string()
    .min(3, "Lütfen minumum 3 karakter giriniz")
    .matches(passwordRules, {
      message: "Lütfen en az 1 büyük harf 1 küçük harf ve 1 sayı giriniz",
    }),
  confirmPassword: yup.string()
    .oneOf([yup.ref("password")], "Parolalar eşleşmiyor.")
    .required("Parola doğrulaması zorunludur."),
});

export const LoginSchema = yup.object().shape({
  username: yup.string()
    .min(2, "Kullanıcı adı en az 2 karakter olmalıdır.")
    .required("Kullanıcı adı zorunludur."),
  surname: yup.string()
    .min(2, "Soyadı en az 2 karakter olmalıdır.")
    .required("Soyadı zorunludur."),

  password: yup.string()
    .min(2, "Parola en az 2 karakter olmalıdır.")

    .required("Parola zorunludur."),
  confirmPassword: yup.string()
    .oneOf([yup.ref("password")], "Parolalar eşleşmiyor.")
    .required("Parola doğrulaması zorunludur."),
});

export const EditSchema = yup.object().shape({
  editTitle: yup.string()
    .min(2, "Minimum 2 karakter gerekli.")
    .required("Ürün ismi girmek zorunludur."),
  editAmount: yup.number("Bir fiyat giriniz")
    .required("Fiyat bilgisi girmek zorunlu"),

  editDesc: yup.string()
    .min(2, "Karakter sayısı az")
    .required("Açıklama metni zorunludur"),
  editCat: yup.string()
    .required("Bir kategori seçiniz"),
  editImg: yup.string()
    .required("URL girmek zorunludur.")
    .matches(/^http/, "URL http ile başlamalıdır."),
  editRate: yup.number()
  .min(0, "Rating rate must be greater than or equal to 0")
  .max(5, "Rating rate must be less than or equal to 5")
  .required("Puan giriniz"),
  editCount: yup.string()
    .required("Stok girmek zorunlu")
    .matches(/^[0-9]+$/, "Sayı girmeniz gerekli."),
});

