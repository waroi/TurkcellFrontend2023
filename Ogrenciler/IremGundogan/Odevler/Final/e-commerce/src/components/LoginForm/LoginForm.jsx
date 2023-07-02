import { useFormik } from "formik";
import { loginSchema } from "../../schemas";
import PropTypes from "prop-types";
import Form from "./LoginFormStyle";
import ButtonStyle from "../Button/ButtonStyle";
import Container from "../Container/Container";

const FormInput = ({ label, name, type, handleChange, value, error }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <input
      type={type}
      id={name}
      name={name}
      onChange={handleChange}
      value={value}
    />
    {error && <div className="error">{error}</div>}
  </div>
);

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
};

const LoginForm = ({ onLogin }) => {
  const initialValues = {
    email: "",
    password: "",
  };

  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: onLogin,
  });

  const formFields = [
    { label: "Email", name: "email", type: "email" },
    { label: "Password", name: "password", type: "password" },
  ];

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
      <h1 className="mb-4">Login Form</h1>
        {formFields.map((field) => (
          <FormInput
            className="input"
            key={field.name}
            handleChange={handleChange}
            value={values[field.name]}
            error={errors[field.name]}
            {...field}
          />
        ))}
        <ButtonStyle type="submit">Login</ButtonStyle>
      </Form>
    </Container>
  );
};

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginForm;
