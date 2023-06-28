import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import { addUser, loginUser } from "../../redux/actions/actions";
import { createUser, getUserByEmail, getUserByUsername } from "../../api/index";
import { signupSchema } from "../../schema";
import { Container, CustomForm, CustomTitle, StyledButton, StyledErrorMessage, StyledField } from "../SignUp/styled";
import { useEffect, useState } from "react";
import Toast from 'react-bootstrap/Toast';
import { Navigate } from "react-router-dom";

const SignupForm = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [processMessage, setProcessMessage] = useState("");
  const [shouldNavigate, setShouldNavigate] = useState(false);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  const initialValues = {
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  };



  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      dispatch(loginUser(JSON.parse(storedUser)));
    }
  }, [dispatch]);

const handleSubmit = async (values, { setSubmitting, resetForm }) => {
  try {
    setProcessMessage("Processing...");
    setTimeout(() => {
      setProcessMessage("");
    }, 5000)
    const existingUser = await checkUserExists(values.username, values.email);
    if (existingUser) {
      console.log("User already exists");
      setShowToast(true);
      setToastMessage("Email or Username already exists");
      setTimeout(() => {
        setShowToast(false);
      }, 3000)
      return;
    }

    // Create the new user
    const newUser = await createUser(values);
    dispatch(addUser(newUser));
    resetForm();
    setShowToast(true);
    setProcessMessage("Sign up successfully");
    setToastMessage("Navigating to Login page...");
    setTimeout(() => {
      setShowToast(false);
    }, 3000)
    setTimeout(() => {
      setShouldNavigate(true);
    }, 4500)
  } catch (error) {
    console.error("Error creating user:", error.message);
  } finally {
    setSubmitting(false);
  }
};

  const checkUserExists = async (username, email) => {
    try {
      const existingUserByUsername = await getUserByUsername(username);
      const existingUserByEmail = await getUserByEmail(email);

      return existingUserByUsername || existingUserByEmail;
    } catch (error) {
      console.error("Error checking user existence:", error.message);
      throw error;
    }
  };

  useEffect(() => {
    if (shouldNavigate) {
      setTimeout(() => {
        setShouldNavigate(false);
      }, 5000);
    }
  }, [shouldNavigate]);

  if (shouldNavigate) {
    return <Navigate to="/login" />;
  }

  return (
    <Container>
      <CustomTitle>Sign Up</CustomTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={signupSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit }) => (
          <CustomForm>
            <label>Email</label>
            <StyledField type="email" name="email" />
            <StyledErrorMessage name="email" component="div" />
            <label>Username</label>
            <StyledField type="text" name="username" />
            <StyledErrorMessage name="username" component="div" />
            <label>Password</label>
            <StyledField type="password" name="password" />
            <StyledErrorMessage name="password" component="div" />
            <label>Confirm Password</label>
            <StyledField type="password" name="confirmPassword" />
            <StyledErrorMessage name="confirmPassword" component="div" />
            {!currentUser ? (<StyledButton onClick={handleSubmit} type="submit">Sign Up</StyledButton>) : (<p className="text-center">Already logged in</p>)}
            <h5 style={{textAlign: "center"}}>{processMessage}</h5>
          </CustomForm>
        )}
      </Formik>
      <div style={{marginTop: "1rem"}}>
      <Toast show={showToast} onClose={() => setShowToast(false)}>
        <Toast.Header>
          <strong className="me-auto">Look Up!  </strong>
        </Toast.Header>
        <Toast.Body>{toastMessage}</Toast.Body>
      </Toast>
      </div>
    </Container>
  );
};

export default SignupForm;