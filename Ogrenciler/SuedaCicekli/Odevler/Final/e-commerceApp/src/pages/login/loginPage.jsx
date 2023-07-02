import { ErrorMessage, Field, Form, Formik } from "formik";
import LoginImage from '../../assets/auth/loginImage.png';
import '../../style/style.scss';
import request from "../../utils/request.js";
import './loginStyle.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = ({ location }) => {
  const handleSubmit = (values) => {
    checkUser(values);
    // Perform your desired submit actions
  }

  const checkUser = (values) => {
    request.getRequest("http://localhost:3000/sessions").then((res) => {
      console.log(res);
      const existingSession = res.find((session) => session.email === values.email);

      if (existingSession) {
        request.deleteRequest(`http://localhost:3000/sessions/${existingSession.id}`).then(() => {
          loginUser(values);
        });
      } else {
        loginUser(values);
      }
    });
  };

  const loginUser = (values) => {
    request.getRequest("http://localhost:3000/users").then((res) => {
      console.log(res);
      const user = res.find((user) => user.email === values.email);
      console.log(user);
      if (user && user.password === values.password) {
        const sessionData = {
          email: user.email,
          expire: Date.now() + 3600000, // Set expire to current time + 1 hour (in milliseconds)
        };

        request.postRequest("http://localhost:3000/sessions", sessionData).then((res) => {
          const storageUser = {
            id: user.id,
            email: user.email,
            expire: res.expire
          }
          localStorage.setItem("user", JSON.stringify(storageUser));
          toast.success("Login Successful", {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 2000 // Set the duration to 3000 milliseconds (3 seconds)
          });

          setTimeout(() => {
            if (location) {
              window.location.href = location
            } else {
              window.location.href = "/";
            }

          }, 2000); // Redirect after 3 seconds
        });

      } else {
        toast.error("Login Failed", { position: toast.POSITION.BOTTOM_RIGHT });
        localStorage.removeItem("user");
      }
    });
  };

  return (
    <div className='login-area'>
      <ToastContainer />
      <div className="container">
        <div className="row  align-items-center">
          <div className="col-12 col-lg-7 col-sm-12 d-flex justify-content-center">
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={handleSubmit}
            >
              <Form className='d-flex row w-75 justify-content-center'>
                <div className="d-flex mb-3 form-check justify-content-center">
                  <p className='fw-bold'>Welcome Back!</p>
                </div>
                <div className="mb-3">
                  <Field type="email" className="form-control" name="email" placeholder="Email address" />
                  <ErrorMessage name="email" component="div" className="form-error" />
                </div>
                <div className="mb-3">
                  <Field type="password" className="form-control" name="password" placeholder="Password" />
                  <ErrorMessage name="password" component="div" className="form-error" />
                </div>
                <div className="d-flex mb-3 form-check justify-content-center">
                  <p>Don't have an account? <a href="/register" className='text-dark fw-bold'>Register</a></p>
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-dark darkButton">Submit</button>
                </div>
              </Form>
            </Formik>
          </div>
          <div className="col-12 col-lg-5 p-5">
            <img src={LoginImage} alt="" className='register-img' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
