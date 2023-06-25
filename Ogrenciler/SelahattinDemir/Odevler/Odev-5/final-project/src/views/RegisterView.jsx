import { useFormik } from "formik";
import { registerSchema } from "../schemas";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Request from "../utils/Request";

function RegisterView() {
  const request = new Request("http://localhost:3004/users");

  const navigate = useNavigate();

  const checkExistingUser = async (email, username) => {
    // Mevcut kullanıcıları almak için bir istek gönderin veya veritabanına sorgu yapın
    // Örnek olarak, mevcut kullanıcıları almak için bir API çağrısı yapabilirsiniz
    const response = await request.get();

    // Email ve kullanıcı adı kontrolü yapın
    const existingUser = response.find(
      (user) => user.email === email || user.username === username
    );

    return existingUser;
  };

  const onSubmit = async (values, actions) => {
    try {
      // Mevcut kullanıcıları kontrol edin
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

      // Kayıt işlemini gerçekleştirin
      const response = await request.post({
        ...values,
        login: true,
        role: "user",
        status: 201,
        carts: [],
      });

      console.log(response);

      if (response.status === 201) {
        toast.success("Registration successful. You are logged in.");
        actions.resetForm();
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred. Please try again.");
    }

    actions.setSubmitting(false);
    navigate("/");
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
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="inputDiv">
          <label>Email</label>
          <input
            type="email"
            value={values.email}
            onChange={handleChange}
            id="email"
            placeholder="Enter your email"
            className={errors.email ? "input-error" : ""}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="inputDiv">
          <label>Username</label>
          <input
            type="string"
            value={values.username}
            onChange={handleChange}
            id="username"
            placeholder="Enter your username"
            className={errors.username ? "input-error" : ""}
          />
          {errors.username && <p className="error">{errors.username}</p>}
        </div>
        <div className="inputDiv">
          <label>Password</label>
          <input
            type="password"
            value={values.password}
            onChange={handleChange}
            id="password"
            placeholder="Enter your password"
            className={errors.password ? "input-error" : ""}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div className="inputDiv">
          <label>Password Repeat</label>
          <input
            type="password"
            value={values.confirmPassword}
            onChange={handleChange}
            id="confirmPassword"
            placeholder="Enter your password again"
            className={errors.confirmPassword ? "input-error" : ""}
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
