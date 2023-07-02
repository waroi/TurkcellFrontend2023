import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const SignupSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a real E-mail")
    .required("E-mail Required!"),
  username: yup
    .string()
    .min(3, "Username must be longer than 3 characters.")
    .required("Username Required!"),
  password: yup
    .string()
    .min(5, "Please enter min 5 characters.")
    .matches(passwordRules, {
      message:
        "Password must be contains 1 Uppercase 1 Lowercase characters and 1 number.  ",
    })
    .required("Password Required!"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password did not confirmed!")
    .required("Password Confirm is Required."),
  image: yup
    .string()
});

export const LoginSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be longer than 3 characters.")
    .required("Username Required!"),
  password: yup
    .string()
    .min(5, "Please enter min 5 characters.")
    .required("Password Required!"),
});
export const SearchSchema = yup.object().shape({
  search: yup.string().min(3, "Min 3 characters required For search!").required('Search area must be contains min 3 characters')
})

export const editSchema = yup.object().shape({
  id: yup.number(),
  title:yup.string().max(100, "title can not be longer than 100 char"),
  price: yup.number(),
  description: yup.string().max(1000, "description is too longer"),
  category: yup.string(),
  image: yup.string(),
  rate: yup.string(),
  count: yup.string(),
})

export const addProductSchema = yup.object().shape({
  id: yup.number(),
  title:yup.string().max(100, "title can not be longer than 100 char"),
  price: yup.number(),
  description: yup.string().max(1000, "description is too longer"),
  category: yup.string(),
  image: yup.string(),
  rate: yup.string(),
  count: yup.string(),
})
