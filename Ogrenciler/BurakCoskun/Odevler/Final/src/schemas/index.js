import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const signupSchema = yup.object().shape({
  email: yup
    .string()
    .email("Valid email required")
    .required("Email is required"),
  password: yup
    .string()
    .min(5, "Please enter at least 5 characters")
    .matches(passwordRules, {
      message: "Please enter at least 1 uppercase, 1 lowercase and 1 number",
    })
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Confirm password is required"),
  image: yup.string().required("Image is required"),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Valid email required")
    .required("Email is required"),
  password: yup
    .string()
    .min(5, "Please enter at least 5 characters")
    .matches(passwordRules, {
      message: "Please enter at least 1 uppercase, 1 lowercase and 1 number",
    })
    .required("Password is required"),
});
