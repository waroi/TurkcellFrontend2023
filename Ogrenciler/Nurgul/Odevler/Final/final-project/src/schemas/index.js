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
    .number()
    .typeError("Please enter a valid age.")
    .integer("Please enter a valid age.")
    .positive("Please enter a valid age.")
    .required("Please enter your age."),
  password: yup
    .string()
    .min(5, "Please enter a minimum of 5 characters")
    .matches(passwordRules, {
      message:
        "Please enter at least 1 uppercase letter, 1 lowercase letter and 1 number",
    })
    .required("Password is required"),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match.")
    .required("Please repeat your password."),
  image: yup.string().url("Invalid profile image URL"),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});
