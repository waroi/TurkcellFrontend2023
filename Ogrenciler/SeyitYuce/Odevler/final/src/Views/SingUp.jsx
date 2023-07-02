import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUp = () => {
  const navigate = useNavigate();
  const uuid = self.crypto.randomUUID();
  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

  const SingUpErrorToast = () =>
    toast.error("Signing up failed", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      theme: "light",
    });

  const handleSubmit = (values) => {
    fetch(`http://localhost:3000/users?email=${values.email}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          toast.error(
            <div>
              Email already exists. Please <Link to="/login"> Login</Link>
            </div>,
            {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              theme: "light",
            }
          );
        } else {
          fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: uuid,
              username: values.username,
              email: values.email,
              password: values.password,
              cart: [],
              role: "user",
            }),
          })
            .then((response) => {
              if (response.status === 201) {
                document.getElementById("signupBtn").disabled = true;
                toast.success("User signed up successfully, redirecting", {
                  onSubmit: () => {},
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  onClose: () => {
                    navigate("/login");
                  },
                });
              } else {
                toast.error("Signing up failed", {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                });
              }
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        SingUpErrorToast();
      });
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(4, "Username must be at least 4 characters")
      .required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(
        passwordRules,
        "Password must contain at least one number and one uppercase and lowercase letter"
      )
      .required("Password is required"),
  });

  return (
    <div>
      <h2>Sign Up</h2>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label>Username:</label>
            <Field type="text" name="username" />
            <ErrorMessage
              name="username"
              component="div"
              className="error text-danger"
            />
          </div>
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
          <button type="submit" id="signupBtn">
            Sign Up
          </button>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </Form>
      </Formik>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
