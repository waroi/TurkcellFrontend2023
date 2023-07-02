import { Form, Formik } from "formik";
import CustomInput from "../components/CustomInput/CustomInput";
import CustomCheckbox from "../components/CustomCheckbox/CustomCheckbox";
import { loginSchema } from "../schemas";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Request from "../utils/Request";
import { useDispatch } from "react-redux";
import { login } from "../redux/slice/loginSlice";

function LoginView() {
  const request = new Request("http://localhost:3004/users");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, actions) => {
    try {
      const response = await request.get();
      const existingUser = response.find(
        (user) =>
          user.email === values.email && user.password === values.password
      );

      if (existingUser) {
        toast.success("Login successful.");
        const user = {
          ...existingUser,
          login: true,
        };
        await request.put(existingUser.id, user);
        actions.resetForm();
        dispatch(login(user));
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/");
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }

    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    actions.resetForm();
  };

  return (
    <>
      <h1 className="text-center form-title">Login</h1>
      <Formik
        initialValues={{ username: "", password: "", isAccepted: false }}
        onSubmit={handleSubmit}
        validationSchema={loginSchema}
      >
        {({ isSubmitting }) => (
          <Form className="register-form">
            <CustomInput
              label="Email"
              name="email"
              type="text"
              placeholder="Enter your email"
            />
            <CustomInput
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
            />
            <CustomCheckbox type="checkbox" name="isAccepted" />
            <div className="d-flex align-items-center justify-content-evenly">
              <button
                className="formLink"
                disabled={isSubmitting}
                type="submit"
              >
                Login
              </button>
              <Link className="formLink" to="/register">
                Signup
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default LoginView;
