import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { loginSchema } from "../../schemas";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.user.users);

  const onSubmit = async (values, actions) => {
    const user = users.find((user) => user.email === values.email);
    if (!user) {
      actions.setFieldError("email", "User not found");
      actions.setFieldError("password", "User not found");
      return;
    }
    if (user.password !== values.password) {
      actions.setFieldError("password", "Email or Incorrect password");
      return;
    }
    toast.success("Login successful");
    setTimeout(() => {
      dispatch(setUser(user));
      navigate("/");
    }, 2000);
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit,
  });

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
  } = formik;

  return (
    <div className="container p-5 my-5">
      <ToastContainer position="bottom-right" />
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card shadow-lg border-0 rounded-lg mt-5">
            <div className="card-header">
              <h3 className="text-center font-weight-light my-4">Login</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                  <input
                    className={`form-control ${
                      touched.email && errors.email ? "is-invalid" : ""
                    } ${touched.email && !errors.email ? "is-valid" : ""}`}
                    id="email"
                    type="email"
                    placeholder="Enter email address"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="email">Email address</label>
                  {touched.email && errors.email && (
                    <div className="invalid-feedback">
                      <img
                        className="mb-1"
                        src="/icons/exclamation-circle.svg"
                        alt="exclamation-circle"
                      />{" "}
                      {errors.email}
                    </div>
                  )}
                </div>
                <div className="form-floating mb-3">
                  <input
                    className={`form-control ${
                      touched.password && errors.password ? "is-invalid" : ""
                    } ${
                      touched.password && !errors.password ? "is-valid" : ""
                    }`}
                    id="password"
                    type="password"
                    placeholder="Enter password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="password">Password</label>
                  {touched.password && errors.password && (
                    <div className="invalid-feedback">
                      <img
                        className="mb-1"
                        src="/icons/exclamation-circle.svg"
                        alt="exclamation-circle"
                      />{" "}
                      {errors.password}
                    </div>
                  )}
                </div>
                <div className="d-flex flex-wrap align-items-center justify-content-between mt-4 mb-0">
                  <Link className="small" to="/signup">
                    Need an account? Sign up!
                  </Link>
                  <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={
                      !isValid ||
                      formik.isSubmitting ||
                      values.email === "" ||
                      values.password === ""
                    }
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
