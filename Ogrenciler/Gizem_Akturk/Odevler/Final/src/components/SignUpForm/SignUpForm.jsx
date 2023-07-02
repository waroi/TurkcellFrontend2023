import { useState } from "react";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as Yup from "yup";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { useDispatch } from "react-redux";
import { register } from "../../redux/actions/userActions";
import "../LoginForm/LoginForm.scss";

const SignUpForm = ({ onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsLoading(true); // Start loading
      dispatch(register(values));
      onClose();
      formik.resetForm();
      setIsLoading(false); // End loading
    },
  });

  SignUpForm.propTypes = {
    onClose: PropTypes.func.isRequired,
  };

  return (
    <div className="login-popup">
      <div className="login-form">
        <h2>SignUp</h2>
        <form onSubmit={formik.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="error">{formik.errors.name}</div>
            )}
          </label>
          <br />
          <label>
            Email:
            <input
              type="mail"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="error">{formik.errors.email}</div>
            )}
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="error">{formik.errors.password}</div>
            )}
          </label>
          <br />
          <button type="submit" disabled={isLoading}>
            {isLoading ? <LoadingSpinner /> : "Sign Up"}
          </button>

          <button onClick={onClose}>Close</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;