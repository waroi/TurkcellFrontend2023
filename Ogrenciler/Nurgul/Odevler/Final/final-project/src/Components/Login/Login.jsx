import { useFormik } from "formik";
import { loginSchema } from "../../schemas";
import PropTypes from "prop-types";
import { Container, Form } from "../Style/styled-form";

const Login = ({ onLogin }) => {
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    onLogin(values);
  };

  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit,
  });
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={values.email}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            value={values.password}
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>

        <button type="submit">Login</button>
      </Form>
    </Container>
  );
};

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login;
