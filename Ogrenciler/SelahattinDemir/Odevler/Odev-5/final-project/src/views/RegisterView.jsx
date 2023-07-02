import { useFormik } from "formik";
import { registerSchema } from "../schemas";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "../redux/slice/loginSlice";
import Request from "../utils/Request";

function RegisterView() {
  const request = new Request("http://localhost:3004/users");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkExistingUser = async (email, username) => {
    const response = await request.get();

    // Check email and username
    const existingUser = response.find(
      (user) => user.email === email || user.username === username
    );
    return existingUser;
  };

  const onSubmit = async (values, actions) => {
    try {
      // Check existing users
      const existingUser = await checkExistingUser(
        values.email,
        values.username
      );

      if (existingUser) {
        toast.error(
          "Email or username already exists. Please choose a different one."
        );
        actions.setSubmitting(false);
        actions.resetForm();
        return;
      }

      const response = await request.post({
        ...values,
        login: true,
        role: "user",
        status: 201,
        carts: [],
      });

      if (response.status === 201) {
        toast.success("Registration successful. You are logged in.");
        actions.resetForm();
        dispatch(login(response));
        localStorage.setItem("user", JSON.stringify(response));
        navigate("/");
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }

    actions.setSubmitting(false);
  };

  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: registerSchema,
      onSubmit,
    });

  return (
    <div>
      <h1 className="text-center form-title">Register</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="inputDiv">
          <label className="form-label">Email</label>
          <input
            type="email"
            value={values.email}
            onChange={handleChange}
            id="email"
            placeholder="Enter your email"
            className={(errors.username ? "input-error" : "", "form-input")}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="inputDiv">
          <label className="form-label">Username</label>
          <input
            type="string"
            value={values.username}
            onChange={handleChange}
            id="username"
            placeholder="Enter your username"
            className={(errors.username ? "input-error" : "", "form-input")}
          />
          {errors.username && <p className="error">{errors.username}</p>}
        </div>
        <div className="inputDiv">
          <label className="form-label">Password</label>
          <input
            type="password"
            value={values.password}
            onChange={handleChange}
            id="password"
            placeholder="Enter your password"
            className={(errors.username ? "input-error" : "", "form-input")}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div className="inputDiv">
          <label className="form-label">Password Repeat</label>
          <input
            type="password"
            value={values.confirmPassword}
            onChange={handleChange}
            id="confirmPassword"
            placeholder="Enter your password again"
            className={(errors.username ? "input-error" : "", "form-input")}
          />
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}
        </div>
        <div className="d-flex align-items-center justify-content-evenly">
          <button className="formLink" disabled={isSubmitting} type="submit">
            Signup
          </button>
          <Link className="formLink" to="/login">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}

export default RegisterView;
