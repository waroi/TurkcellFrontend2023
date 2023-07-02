import * as S from "./Register.style";
import Section from "../Section/Section";
import { createNewUser } from "../../services/userService";
import { useFormik } from "formik";
import { basicSchema } from "../../schemas";
import { FormikError } from "../styles";

const Register = () => {
	const formik = useFormik({
		initialValues: {
			username: "",
			firstname: "",
			lastname: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
		validationSchema: basicSchema,
		onSubmit: async (values) => {
			console.log("KAYIT BAŞLADI");
			try {
				const { username, firstname, lastname, email, password, confirmPassword } = values;
				if (password !== confirmPassword) {
					throw new Error("Your passwords don't match.");
				}
				await createNewUser({ username, name: { firstname, lastname }, email, password });
				formik.resetForm();
			} catch (error) {
				console.error(error);
			}
		},
	});

	return (
		<Section>
			<S.RegisterContainer>
				<S.RegisterForm onSubmit={formik.handleSubmit}>
					<S.RegisterTitle>Register</S.RegisterTitle>
					<S.RegisterInput
						type="text"
						name="username"
						placeholder="Username"
						value={formik.values.username}
						onChange={formik.handleChange}
						className={formik.errors.username ? "input-error" : ""}
					/>
					{formik.errors.username && <FormikError>{formik.errors.username}</FormikError>}
					<S.RegisterInput
						type="text"
						name="firstname"
						placeholder="Firstname"
						value={formik.values.firstname}
						onChange={formik.handleChange}
						className={formik.errors.firstname ? "input-error" : ""}
					/>
					{formik.errors.firstname && <FormikError>{formik.errors.firstname}</FormikError>}
					<S.RegisterInput
						type="text"
						name="lastname"
						placeholder="Lastname"
						value={formik.values.lastname}
						onChange={formik.handleChange}
						className={formik.errors.lastname ? "input-error" : ""}
					/>
					{formik.errors.lastname && <FormikError>{formik.errors.lastname}</FormikError>}
					<S.RegisterInput
						type="email"
						name="email"
						placeholder="Email"
						value={formik.values.email}
						onChange={formik.handleChange}
						className={formik.errors.email ? "input-error" : ""}
					/>
					{formik.errors.email && <FormikError>{formik.errors.email}</FormikError>}
					<S.RegisterInput
						type="password"
						name="password"
						placeholder="Password"
						value={formik.values.password}
						onChange={formik.handleChange}
						className={formik.errors.password ? "input-error" : ""}
					/>
					{formik.errors.password && <FormikError>{formik.errors.password}</FormikError>}
					<S.RegisterInput
						type="password"
						name="confirmPassword"
						placeholder="Confirm Password"
						value={formik.values.confirmPassword}
						onChange={formik.handleChange}
						className={formik.errors.confirmPassword ? "input-error" : ""}
					/>
					{formik.errors.confirmPassword && <FormikError>{formik.errors.password}</FormikError>}
					<S.RegisterButton type="submit" disabled={formik.isSubmitting}>
						Register
					</S.RegisterButton>
					<S.RegisterLink to="/login">Already have an account?</S.RegisterLink>
					<S.RegisterLink>Forgot Password?</S.RegisterLink>
				</S.RegisterForm>
			</S.RegisterContainer>
		</Section>
	);
};

export default Register;
