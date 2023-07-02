import * as S from "./Login.style";
import Section from "../Section/Section";
import { loginUser } from "../../services/userService";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/userSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onLogin = async (e) => {
		try {
			e.preventDefault();
			const { elements: els } = e.target;
			const username = els.username.value;
			const password = els.password.value;

			const user = await loginUser({ username, password });

			// await fetchUser({ username, password })(dispatch);

			if (user) {
				dispatch(setUser(user));
				toast.success("Successfully logged in!");
				return navigate("/");
			} else {
				toast.error("Incorrect username or password");
			}
		} catch (err) {
			toast.error(err.message);
		}
	};

	return (
		<Section>
			<S.LoginContainer>
				<S.LoginForm onSubmit={onLogin}>
					<S.LoginTitle>Login</S.LoginTitle>
					<S.LoginInput type="text" name="username" placeholder="Username" />
					<S.LoginInput type="password" name="password" placeholder="Password" />
					<S.LoginButton type="submit">Login</S.LoginButton>
					<S.LoginLink to="/register">Dont have an account?</S.LoginLink>
					<S.LoginLink>Forgot Password?</S.LoginLink>
				</S.LoginForm>
			</S.LoginContainer>
		</Section>
	);
};

export default Login;
