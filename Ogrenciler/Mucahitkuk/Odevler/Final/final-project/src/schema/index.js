import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const signupSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email must be submitted"),
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