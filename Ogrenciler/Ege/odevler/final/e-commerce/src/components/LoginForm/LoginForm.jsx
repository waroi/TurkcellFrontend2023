import { useFormik } from 'formik';
import { loginSchema } from '../../schemas';
import PropTypes from "prop-types"
import Form from '../../styledComponents/StyledForm';
import ButtonPrimary from '../../styledComponents/ButtonPrimary';
import { Link } from 'react-router-dom';
import warningIcon from "../../assets/Circle_Warning.svg"

const LoginForm = ({ onLogin }) => {


    const initialValues = {
        email: '',
        password: '',
    };

    const onSubmit = (values) => {
        onLogin(values);
    };

    const { handleChange, handleSubmit, values, errors } =
        useFormik({
            initialValues,
            validationSchema: loginSchema,
            onSubmit
        });
    return (
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
                {errors.email && <div className="error"> <img src={warningIcon}></img> {errors.email}</div>}
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
                {errors.password && <div className="error"> <img src={warningIcon}></img> {errors.password}</div>}
            </div>

            <ButtonPrimary type="submit">Login</ButtonPrimary>
            <Link className="ms-3" to={"/signup"}>You do not have an account?</Link>
        </Form>
    )
}

LoginForm.propTypes = {
    onLogin: PropTypes.func.isRequired,
}

export default LoginForm

