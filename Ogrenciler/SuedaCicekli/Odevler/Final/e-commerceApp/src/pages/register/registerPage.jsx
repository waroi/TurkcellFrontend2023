import { Formik, Form, Field, ErrorMessage } from "formik";
import { basicSchema } from "../../schemas/index";
import './registerStyle.scss';
import RegisterImage from '../../assets/auth/registerImage.png'
import '../../style/style.scss'
import request from "../../utils/request.js";

const RegisterPage = () => {
  const saveUser = (values) => {
    console.log(values);
    request.postRequest("http://localhost:3000/users", values).then((res) => {
      console.log(res);
    });
  };

  const handleSubmit = (values) => {
    request.getRequest("http://localhost:3000/users").then((res) => {
      console.log(res);
      const user = res.find((user) => user.email === values.email);
      console.log(user);
      if (user) {
        alert("User already exists");
      } else {
        saveUser(values);
      }
    });
  }

  return (
    <div className="login-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="d-flex  col-12 col-lg-5 p-5 justfiy-content-center order-lg-0 order-1">
            <img src={RegisterImage} alt="" className="register-img" />
          </div>
          <div className="col-12 col-lg-7 col-sm-12 d-flex justify-content-center order-lg-1 order-0">
            <Formik
              initialValues={{
                email: "",
                password: "",
                confirmPassword: "",
              }}
              validationSchema={basicSchema}
              onSubmit={handleSubmit}
            >
              <Form className="d-flex row w-75 justify-content-center">
                <div className="d-flex mb-3 form-check justify-content-center">
                  <p className="fw-bold">Please fill out the form to register!</p>
                </div>
                <div className="mb-3">
                  <Field type="email" id="email" name="email" className="form-control" placeholder="Email address" />
                  <ErrorMessage name="email" component="div" className="form-error" />
                </div>
                <div className="mb-3">
                  <Field type="password" id="password" name="password" className="form-control" placeholder="Password" />
                  <ErrorMessage name="password" component="div" className="form-error" />
                </div>
                <div className="mb-3">
                  <Field type="password" id="confirmPassword" name="confirmPassword" className="form-control" placeholder="Confirm Password" />
                  <ErrorMessage name="confirmPassword" component="div" className="form-error" />
                </div>
                <div className="d-flex mb-3 form-check justify-content-center">
                  <p>
                    Yes, I have an account{"?  "}
                    <a href="/login" className="text-dark fw-bold">
                      Login
                    </a>
                  </p>
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-dark darkButton">
                    Submit
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
