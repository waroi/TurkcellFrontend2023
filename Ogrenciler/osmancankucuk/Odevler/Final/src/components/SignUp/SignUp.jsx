import { useFormik } from "formik";
import { signUpSchema } from "../../schemas";

import { Request } from "../../requests/request";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FormStyle, SignUpWrap } from "./SignUpStyle";
import Button from "../Button/Button";

const SignUp = () => {
  const request = new Request();
  const onSubmit = () => {
    let obj = {
      name: values.name,
      surname: values.surname,
      email: values.email,
      password: values.password,
    };
    request.signUpUser(obj).then((res) => {
      if (res === false) {
        toast.info("This email has already registered!");
      } else {
        toast.success("SignUp Successfull!");
      }
    });
  };
  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        name: "",
        surname: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: signUpSchema,
      onSubmit,
    });
  return (
    <div>
      <SignUpWrap className="container ">
        <h1 className="text-center fw-bold mb-3">
          Join the Community: Sign Up Today!
        </h1>
        <FormStyle className="w-50">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group d-flex flex-column mb-3">
              <label className="formTitle ">Name</label>
              <input
                type="text"
                value={values.name}
                onChange={handleChange}
                className={errors.name ? "input-error input" : "input"}
                placeholder="Name"
                id="name"
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="form-group d-flex flex-column mb-3">
              <label className="formTitle ">Surname</label>
              <input
                type="text"
                value={values.surname}
                onChange={handleChange}
                className={errors.surname ? "input-error input" : "input"}
                placeholder="Surname"
                id="surname"
              />
              {errors.surname && <p className="error">{errors.surname}</p>}
            </div>
            <div className="form-group d-flex flex-column mb-3">
              <label className="formTitle " htmlFor="email">
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
              <label className="formTitle" htmlFor="password">
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
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div className="form-group d-flex flex-column mb-3">
              <label className="formTitle " htmlFor="confirmPassword">
                Password Again
              </label>
              <input
                type="password"
                value={values.confirmPassword}
                onChange={handleChange}
                id="confirmPassword"
                className={
                  errors.confirmPassword ? "input-error input" : "input"
                }
                placeholder="Password Again"
              />
              {errors.confirmPassword && (
                <p className="error">{errors.confirmPassword}</p>
              )}
            </div>

            <Button
              disabled={isSubmitting}
              type="submit"
              className="btn btn-primary mt-3 w-25"
              title="Sign Up !"
              background={"#003459"}
              color={"#fdfdfd"}
            />
          </form>
        </FormStyle>
      </SignUpWrap>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
