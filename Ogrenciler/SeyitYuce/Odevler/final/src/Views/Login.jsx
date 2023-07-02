import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/slices/userSlice.js";
import Cookies from "js-cookie";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

  const handleFormSubmit = (values) => {
    fetch(
      `http://localhost:3000/users?email=${values.email}&password=${values.password}`
    )
      .then((response) => response.json())
      .then((userData) => {
        if (userData.length > 0) {
          document.getElementById("signinBtn").disabled = true;
          toast.success("User signed in successfully", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            theme: "light",
            onClose: () => {
              navigate("/");
              dispatch(setUser(userData));
            },
          });
          Cookies.set("user", JSON.stringify(userData), { expires: 7 });
        } else {
          toast.error("Invalid email or password", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            theme: "light",
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .matches(
        passwordRules,
        "Password must contain at least one number and one uppercase and lowercase letter"
      )
      .required("Password is required"),
  });

  return (
    <div>
      <h2>Sign In</h2>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        <Form>
          <div>
            <label>Email:</label>
            <Field type="text" name="email" />
            <ErrorMessage
              name="email"
              component="div"
              className="error text-danger"
            />
          </div>
          <div>
            <label>Password:</label>
            <Field type="password" name="password" />
            <ErrorMessage
              name="password"
              component="div"
              className="error text-danger"
            />
          </div>
          <button type="submit" id="signinBtn">
            Sign In
          </button>
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </Form>
      </Formik>
      <ToastContainer />
    </div>
  );
};

export default Login;
