import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const imageRules = /(https:\/\/)([^\s(["<,>/]*)(\/)[^\s[",><]*(.png|.jpg)(\?[^\s[",><]*)?/g

export const signupSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email must be submitted"),
    profileImage: yup
    .string()
    .required("Profile image must be submitted")
    .matches(imageRules, {message: "Please enter a valid image url"}),
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters")
    .required("Username must be submitted"),
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters")
    .matches(passwordRules, {
      message: "Please enter a valid password (At least one uppercase letter, one lowercase letter and one number)",
    })
    .required("Please enter a password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password doesn't match")
    .required("Please confirm your password"),
});


export const loginScheme = yup.object().shape({
  username: yup
    .string()
    .required("Username must be submitted"),
    password: yup
    .string()
    .required("Password must be submitted"),
});


export const productScheme = yup.object().shape({
  title: yup
  .string()
  .min(3, "Username must be at least 3 characters")
  .required("Title must be submitted"),
  image: yup
  .string()
  .required("Image must be submitted")
  .matches(imageRules, {
    message: "Please enter a valid image url",
  }),
  rate: yup
  .number()
  .min(0, "Rating must be at least 0")
  .max(5, "Rating must be at most 5")
  .required("Rating must be submitted"),
  count: yup
  .number()
  .min(0, "Stock must be at least 0")
  .required("Stock must be submitted"),
  description: yup
  .string()
  .min(3, "Description must be at least 3 characters")
  .required("Description must be submitted"),
  price: yup
  .number()
  .min(1, "Price must be at least 1$")
  .required("Price must be submitted"),
})