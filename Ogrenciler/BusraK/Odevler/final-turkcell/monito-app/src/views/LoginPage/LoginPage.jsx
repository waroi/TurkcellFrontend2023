import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FormContainer,
  Form,
  Title,
  FormGroup,
  Label,
  Input,
  ErrorMessage,
  ErrorIcon,
  SubmitButton,
} from "./LoginPageStyle";
import {
  loginSuccess,
  loginFailure,
  setUsername,
  setId,
} from "../../redux/slices/mainSlice";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await fetch(
          `http://localhost:3000/users?email=${values.email}&password=${values.password}`
        );
        const users = await response.json();

        if (users.length > 0) {
          const control = users[0];

          await fetch(`http://localhost:3000/users/${control.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...control, isLogin: true }),
          });

          dispatch(loginSuccess());
          dispatch(setId(control.id));
          dispatch(setUsername(control.username));

          toast.success("Successful login");

          setTimeout(() => {
            navigate(`/Home/${control.username}`);
          }, 1000);
        } else {
          dispatch(loginFailure("Invalid email or password"));
          toast.error("Invalid email or password");
        }
      } catch (error) {
        dispatch(loginFailure("An error occurred"));
        toast.error("An error occurred");
      }
    },
  });

  return (
    <FormContainer>
      <ToastContainer position="top-right" />
      <Form onSubmit={formik.handleSubmit}>
        <Title>Login</Title>

        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.touched.email && formik.errors.email ? "error-input" : ""
            }
          />
          {formik.touched.email && formik.errors.email && (
            <ErrorMessage>
              <ErrorIcon>
                <img src="../../src/assets/Icon/error-circle.png" alt="Hata" />
              </ErrorIcon>
              {formik.errors.email}
            </ErrorMessage>
          )}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.touched.password && formik.errors.password
                ? "error-input"
                : ""
            }
          />
          {formik.touched.password && formik.errors.password && (
            <ErrorMessage>
              <ErrorIcon>
                <img src="../../src/assets/Icon/error-circle.png" alt="Hata" />
              </ErrorIcon>
              {formik.errors.password}
            </ErrorMessage>
          )}
        </FormGroup>
        <div className="d-flex gap-4 button-group">
          <SubmitButton type="submit">Login</SubmitButton>

          <SubmitButton
            className="d-flex mx-auto justify-content-center align-items-center"
            onClick={() => navigate("/signup")}
          >
            click now sign up{" "}
          </SubmitButton>
        </div>
      </Form>
    </FormContainer>
  );
};

export default LoginPage;
