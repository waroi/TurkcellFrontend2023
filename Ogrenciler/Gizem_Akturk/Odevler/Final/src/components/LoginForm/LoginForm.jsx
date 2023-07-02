import { useState } from "react";
import PropTypes from "prop-types";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/userActions";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./LoginForm.scss";

const LoginForm = ({ onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  
  const initialValues = {
    email: '',
    password: ''
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required')
  });



  

  const onSubmit = (values) => {
    setIsLoading(true); // Start loading
    const user = {
      email: values.email,
      password: values.password,
    };
    dispatch(login(user));
    onClose();
    setIsLoading(false);

  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  });

  LoginForm.propTypes = {
    onClose: PropTypes.func.isRequired,
  };

  return (
    <div className="login-popup">
      <div className="login-form">
        <h2>Login</h2>
         <form onSubmit={formik.handleSubmit}>
                <div>
                  <label htmlFor="email-address">Email address</label>
                  <input
                    id="email-address"
                    name="email"
                    type="mail"
                    required
                    placeholder="Email address"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div>{formik.errors.email}</div>
                  )}
                </div>
  
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    placeholder="Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  {formik.touched.password && formik.errors.password && (
                    <div>{formik.errors.password}</div>
                  )}
                </div>
  
          <button type="submit" disabled={isLoading}>
            {isLoading ? <LoadingSpinner /> : "Login"}
          </button>

          <button onClick={onClose}>Close</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
