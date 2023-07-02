import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { signupSchema } from "../../schemas";
import { Users } from "../../services/api";
import { useDispatch } from "react-redux";
import { setUsers } from "../../redux/slices/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignupForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = async (values) => {
    const newUser = {
      email: values.email,
      password: values.password,
      role: "user",
      image: values.image,
    };
    await Users.createOne(newUser);
    const users = await Users.getAll();
    dispatch(setUsers(users));
    toast.success("Signup successful");
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      image: "",
    },
    validationSchema: signupSchema,
    onSubmit: onSubmit,
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
              <h3 className="text-center font-weight-light my-4">Sign Up</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                  <input
                    className={`form-control ${
                      touched.image && errors.image ? "is-invalid" : ""
                    } ${touched.image && !errors.image ? "is-valid" : ""}`}
                    id="image"
                    type="text"
                    placeholder=" "
                    value={values.image}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="image">Image URL</label>
                  {touched.image && errors.image && (
                    <div className="invalid-feedback">{errors.image}</div>
                  )}
                </div>

                <div className="form-floating mb-3">
                  <input
                    className={`form-control ${
                      touched.email && errors.email ? "is-invalid" : ""
                    } ${touched.email && !errors.email ? "is-valid" : ""}`}
                    id="email"
                    type="email"
                    placeholder=" "
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="email">Email address</label>
                  {touched.email && errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
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
                    placeholder=" "
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="password">Password</label>
                  {touched.password && errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                <div className="form-floating mb-3">
                  <input
                    className={`form-control ${
                      touched.confirmPassword && errors.confirmPassword
                        ? "is-invalid"
                        : ""
                    } ${
                      touched.confirmPassword && !errors.confirmPassword
                        ? "is-valid"
                        : ""
                    }`}
                    id="confirmPassword"
                    type="password"
                    placeholder=" "
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  {touched.confirmPassword && errors.confirmPassword && (
                    <div className="invalid-feedback">
                      {errors.confirmPassword}
                    </div>
                  )}
                </div>
                <div className="d-flex align-items-center justify-content-between mt-4 mb-0 flex-wrap">
                  <Link className="small" to="/login">
                    Already have an account? Log in!
                  </Link>
                  <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={
                      !isValid ||
                      formik.isSubmitting ||
                      values.password !== values.confirmPassword ||
                      values.password === "" ||
                      values.confirmPassword === ""
                    }
                  >
                    Sign Up
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

export default SignupForm;
