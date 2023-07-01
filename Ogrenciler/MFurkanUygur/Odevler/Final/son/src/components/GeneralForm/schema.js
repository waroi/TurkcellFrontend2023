import * as yup from "yup";
// const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// const passwordRules = /^.{2,}$/
// export const SignupSchema = yup.object().shape({
//     userName: yup
//         .string()
//         .min(3, "Kullanıcı adı minunmum 3 karakter uzunluğunda olmadılır")
//         .required("Kullanıcı adı zorunludur"),
//     userSurname: yup
//         .string()
//         .email("Geçerli bir email giriniz")
//         .required("Email girmek zorunludur"),
//     // age: yup
//     //     .number()
//     //     .positive("Lütfen pozitif bir yaş giriniz")
//     //     .integer("Lütfen yaşınızı tam sayı olarak giriniz")
//     //     .required("Yaş girmek zorunludur"),
//     password: yup
//         .string()
//         .min(5, "Lütfen minumun 2 karakter giriniz")
//         .matches(passwordRules, {
//             message: "Lütfen en az 1 büyük harf 1 küçük harf ve 1 sayı giriniz",
//         })
//         .required("Şifre girmek zorunludur"),
//     confirmPassword: yup
//         .string()
//         .oneOf([yup.ref("password")], "Şifreler eşleşmiyor")
//         .required("Tekrar şifre girmek zorunludur"),
// });

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
    .min(2, "Parola en az 2 karakter olmalıdır.")
    .required("Parola zorunludur."),
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
    .required("Ürün ismi girmek zorunludur.")
    .matches(/^[A-Za-z]+$/, "Yalnızca harf girmeniz gerekmektedir."),
  editAmount: yup.string()
    .required("Fiyat bilgisi girmek zorunlu")
    .matches(/^[0-9]+$/, "Sayı girmeniz gerekli."),

  editDesc: yup.string()
    .min(2, "Karakter sayısı az")
    .required("Açıklama metni zorunludur"),
  editCat: yup.string()
    .required("Bir kategori seçiniz"),
  editImg: yup.string()
    .required("URL girmek zorunludur.")
    .matches(/^http/, "URL http ile başlamalıdır."),
  editRate: yup.string()
    .required("Puan giriniz")
    .matches(/^[0-9]+$/, "Sayı girmeniz gerekli."),
  editCount: yup.string()
    .required("Stok girmek zorunlu")
    .matches(/^[0-9]+$/, "Sayı girmeniz gerekli."),
});

