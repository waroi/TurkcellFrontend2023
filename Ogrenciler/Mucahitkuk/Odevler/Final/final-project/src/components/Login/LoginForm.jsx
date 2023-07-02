import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { loginUser as loginUserAction } from "../../redux/actions/actions";
import { loginUser } from "../../api/index";
import { loginScheme } from "../../schema";
import {
  Container,
  CustomForm,
  CustomTitle,
  StyledButton,
  StyledErrorMessage,
  StyledField,
} from "../SignUp/styled";
import { Toast } from "react-bootstrap";
import { useState, useEffect } from "react";
import LogoutButton from "../Logout/LogoutButton";

const LoginForm = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [processMessage, setProcessMessage] = useState("");
  const [isLoginDisabled, setIsLoginDisabled] = useState(false);
  const dispatch = useDispatch();

  const initialValues = {
    username: "",
    password: "",
  };
  

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      setProcessMessage("Logging in...");
      const user = await loginUser(values);
      if (user) {
        dispatch(loginUserAction(user));
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        resetForm();
        setProcessMessage("Logged in successfully");
        setShowToast(true);
        setToastMessage("Please wait while we redirect you");
        setTimeout(() => {
          window.location.href = "/";
        }, 4000);
      }
    } catch (error) {
      setShowToast(true);
      setProcessMessage("Logged in failed");
      setToastMessage("Username or password is incorrect");
      setTimeout(() => {
        setShowToast(false);
      }, 3500);
    } finally {
      setSubmitting(false);
      setTimeout(() => {
        setProcessMessage("");
      }, 5000);
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      dispatch(loginUserAction(JSON.parse(storedUser)));
      setIsLoginDisabled(false);
    } else {
      dispatch(loginUserAction(null));
      setIsLoginDisabled(true);
    }
  }, []);

  return (
    <Container>
      <CustomTitle>Login</CustomTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={loginScheme}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit }) => (
          <CustomForm onSubmit={handleSubmit}>
            <label>Username</label>
            <StyledField type="text" name="username" />
            <StyledErrorMessage name="username" component="div" />
            <label>Password</label>
            <StyledField type="password" name="password" />
            <StyledErrorMessage name="password" component="div" />
            <StyledButton type="submit" disabled={!isLoginDisabled}>
              Login
            </StyledButton>
            {isLoginDisabled ? null : <LogoutButton />}
            <h5 style={{ textAlign: "center" }}>{processMessage}</h5>
          </CustomForm>
        )}
      </Formik>
      <div style={{ marginTop: "1rem" }}>
        <Toast show={showToast} onClose={() => setShowToast(false)}>
          <Toast.Header>
            <strong className="me-auto">Look Up!</strong>
          </Toast.Header>
          <Toast.Body>{toastMessage}</Toast.Body>
        </Toast>
      </div>
    </Container>
  );
};

export default LoginForm;
