import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const signUpSchema = yup.object().shape({
  name: yup.string().required("Please enter your name."),
  lastname: yup.string().required("Please enter your last name."),
  email: yup
    .string()
    .email("Please enter a valid email address.")
    .required("Please enter your email address."),
  age: yup
    .number("Must be a number")
    .typeError("Please enter a valid age.")
    .integer("Please enter a valid age.")
    .positive("Please enter a valid age.")
    .required("Please enter your age."),
  password: yup
    .string()
    .min(5, "Lütfen minumun 5 karakter giriniz")
    .matches(passwordRules, {
      message: "Lütfen en az 1 büyük harf 1 küçük harf ve 1 sayı giriniz",
    })
    .required("Şifre girmek zorunludur"),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match.")
    .required("Please repeat your password."),
  profileImgUrl: yup
    .string()
    .url("Invalid profile image URL")
    .required("Please give an image URL"),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

export const validationSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  price: yup.number("Must be a number").required("Price is required"),
  description: yup.string().required("Description is required"),
  category: yup.string().required("Category is required"),
  image: yup.string().required("Image URL is required"),
  rate: yup
    .number("Must be a number")
    .min(0, "Rating rate must be greater than or equal to 0")
    .max(5, "Rating rate must be less than or equal to 5")
    .required("Rating rate is required"),
  count: yup.number("Must be a number").required("Rating count is required"),
});

export const cartItemSchema = yup.object().shape({
  demand: yup
    .number("Must be a number")
    .required("Demand is required")
    .min(1, "Demand must be at least 1"),
});
