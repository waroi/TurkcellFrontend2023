import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
	username: yup.string().min(3, "Username must be at least 3 characters.").required("Username is required."),
	firstname: yup.string().min(3, "First name must be at least 3 characters.").required("First name is required."),
	lastname: yup.string().min(3, "Last name must be at least 3 characters.").required("Last name is required."),
	email: yup.string().email("Please enter a valid email address.").required("Email address is required."),
	password: yup
		.string()
		.min(5, "Please enter a minimum of 5 characters")
		.matches(passwordRules, {
			message: "Please enter at least 1 uppercase letter, 1 lowercase letter, and 1 digit.",
		})
		.required("Password is required."),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref("password")], "Passwords do not match.")
		.required("Confirm password is required."),
});
