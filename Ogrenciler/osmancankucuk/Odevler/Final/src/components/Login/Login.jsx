/* eslint-disable no-unused-vars */

import { useFormik } from "formik";

import { loginSchema } from "../../schemas";
import { Request } from "../../requests/request";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { SignInChoose, LoginWrapper } from "./LoginStyle";
import { FormStyle } from "../SignUp/SignUpStyle";
import { DarkBrownBox } from "./LoginStyle";
import { RoyalBlueBox } from "./LoginStyle";

import Button from "../Button/Button";
const Login = () => {
  const navigate = useNavigate();
  const request = new Request();

  const onSubmit = () => {
    let obj = {
      email: values.email,
      password: values.password,
    };
    request.signInUser(obj).then((res) => {
      if (res === true) {
        toast.success("Login Successfull!");
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 1500);
      }
      if (res === "incorrect-password") {
        toast.warn("You entered the wrong password!");
      }
      if (res === "no-user") {
        toast.warn("There is no registered user with that e-mail");
      }
    });
  };
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
    <LoginWrapper>
      <DarkBrownBox />
      <div className="h-100">
        <div className="container h-100 d-flex align-items-center ">
          <div className="col-7 mx-auto rounded-2 loginForm">
            <SignInChoose className="mb-2">
              <div className="text-center signTitle mt-2 mb-3 text-white pt-2">
                Sign In With
              </div>
              <div className="d-lg-flex px-3 mb-1">
                <div className="col-12 col-lg-4 marks  signChoose text-dark">
                  <i
                    style={{ color: "#dd4b39 " }}
                    className="fa-brands fa-google-plus-g fa-xl signMarks"
                  ></i>
                  <span> with Google</span>
                </div>
                <div className="col-12 col-lg-4 marks signChoose text-dark">
                  <i className="fa-brands fa-github fa-xl signMarks"></i>
                  <span> with Github</span>
                </div>
                <div className="col-12 col-lg-4 marks signChoose text-dark">
                  <i
                    style={{ color: "#1877F2" }}
                    className="fa-brands fa-facebook fa-xl signMarks"
                  ></i>
                  <span> with Facebook</span>
                </div>
              </div>
            </SignInChoose>
            <FormStyle style={{ backgroundColor: "#003459", border: "none" }}>
              <form onSubmit={handleSubmit}>
                <div className="form-group d-flex flex-column mb-3">
                  <label className="formTitle text-white" htmlFor="email">
                    Email address
                  </label>
                  <input
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    className={errors.email ? "input-error input" : "input"}
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter E-mail"
                  />
                  {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="form-group d-flex flex-column mb-3">
                  <label className="formTitle text-white" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    id="password"
                    className={errors.password ? "input-error input" : " input"}
                    placeholder="Password"
                  />
                  {errors.password && (
                    <p className="error">{errors.password}</p>
                  )}
                </div>
                <div className="d-flex justify-content-center">
                  <Button
                    disabled={isSubmitting}
                    type="submit"
                    className="btn btn-primary mt-3 w-25"
                    title="Sign Up !"
                    background={"#fdfdfd"}
                    border={"1px solid #fdfdfd"}
                    color={"#003459"}
                  />
                </div>
              </form>
            </FormStyle>
          </div>
          <ToastContainer />
        </div>
      </div>
      <RoyalBlueBox />
    </LoginWrapper>
  );
};

export default Login;
