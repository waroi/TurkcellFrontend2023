import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});
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
  profileImgUrl: yup
    .string()
    .url("Invalid profile image URL")
    .required("Please give an image URL"),
});

export const searchSchema = yup.object().shape({
  search: yup.string().required("Search term is required"),
});
export const validationSchema = yup.object().shape({
  title: yup
    .string()
    .min(2, "Title is too short.")
    .max(50, "Title is too long.")
    .required("Title is required"),
  price: yup
    .number()
    .min(0, "Price must be a positive number.")
    .required("Price is required"),
  description: yup
    .string()
    .min(10, "Description is too short.")
    .max(2000, "Description is too long.")
    .required("Description is required"),
  category: yup
    .string()
    .required("Category is required"),
  image: yup
    .string()
    .url("Must be a valid URL")
    .required("Image URL is required"),
  rating: yup.object().shape({
    rate: yup
      .number()
      .min(1, "Rate must be at least 1.")
      .max(5, "Rate must be at most 5.")
      .required("Rating rate is required"),
    count: yup
      .number()
      .min(0, "Count must be a positive number.")
      .required("Rating count is required"),
  }),
});
