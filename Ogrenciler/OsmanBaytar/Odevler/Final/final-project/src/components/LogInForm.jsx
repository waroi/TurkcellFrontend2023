import { useFormik } from "formik";
import { loginSchema } from "../schemas";
import "../styles/SignUpForm.css";
import { addLogin } from "../redux/slices/loginSlice";
import { userRequest } from "../utils/Request";
import { useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

function LogInForm() {
  const currentEmail = useRef("");
  const currentPassword = useRef("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  function goToHome() {
    navigate("/");
  }

  function errorToast() {
    toast.error("Email or password is wrong!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  const [userData, setUserData] = useState([]);
  useEffect(() => {
    userRequest.get().then((data) => {
      setUserData(data);
    });
  }, []);

  function checkLogin() {
    userData.map((item) => {
      if (
        item.email === currentEmail.current.value &&
        item.password === currentPassword.current.value
      ) {
        localStorage.setItem(
          "login",
          !localStorage.getItem("login")
            ? JSON.stringify(item)
            : localStorage.getItem("login")
        );
        dispatch(addLogin(item));
        goToHome();
        setCount(count + 1);
      }
    });
    setCount(count + 1);
  }

  useEffect(() => {
    if (count === 1) {
      errorToast();
      setCount(0);
    }
  }, [count]);
  console.log(count);

  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit,
    });

  return (
    <form onSubmit={handleSubmit} className="signUpForm">
      <div className="inputDiv">
        <label>Email</label>
        <input
          type="email"
          value={values.email}
          onChange={handleChange}
          ref={currentEmail}
          id="email"
          placeholder="Type an email"
          className={errors.email ? "input-error" : ""}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div className="inputDiv">
        <label>Password</label>
        <input
          type="password"
          value={values.password}
          onChange={handleChange}
          ref={currentPassword}
          id="password"
          placeholder="Type a password"
          className={errors.password ? "input-error" : ""}
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>

      <button type="submit" disabled={isSubmitting} onClick={checkLogin}>
        Log In
      </button>
      <ToastContainer />
    </form>
  );
}

export default LogInForm;
