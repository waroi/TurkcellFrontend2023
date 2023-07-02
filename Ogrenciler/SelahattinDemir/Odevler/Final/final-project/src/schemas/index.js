import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Please enter a minimum of 6 characters")
    .matches(passwordRules, {
      message:
        "Please enter at least 1 uppercase letter, 1 lowercase letter and 1 number",
    })
    .required("Password is required"),
  isAccepted: yup.boolean().oneOf([true], "Accept the terms of use"),
});

export const registerSchema = yup.object().shape({
  username: yup
    .string("")
    .min(3, "Username must be at least 3 characters long")
    .required("Username is required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Please enter a minimum of 6 characters")
    .matches(passwordRules, {
      message:
        "Please enter at least 1 uppercase letter, 1 lowercase letter and 1 number",
    })
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], " Passwords must match")
    .required("Confirm Password is required"),
});

export const editProductSchema = yup.object().shape({
  image: yup
    .string()
    .url("Please enter a valid URL")
    .required("Image URL is required"),
  title: yup.string().required("Title is required"),
  price: yup.number().required("Price is required"),
  category: yup.string().required("Category is required"),
  rate: yup.number().min(0).max(5),
  stock: yup.number(),
  description: yup.string().required("Description is required"),
});
