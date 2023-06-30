import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validationSchema } from './schemas/loginSchema';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login,logout } from '../../redux/slices/Login';
const Login = () => {
  const [users, setUsers] = useState([]); // State to store users data
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

  useEffect(() => {
   getUsers().then((data)=>setUsers(data))
  }, []);

  async function getUsers(){
    const response = await fetch(`http://localhost:3000/users`);
    const users = await response.json();
    return users;
}

  const initialValues = {
    email: '',
    password: ''
  };

  const handleSubmit = (values) => {
    const { email, password } = values;

    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
        console.log('isLoggedIn before update:', isLoggedIn);
      dispatch(login());
      console.log('isLoggedIn after update:', isLoggedIn);
      toast.success('Login successful!', {
        position: toast.POSITION.TOP_CENTER
      });
    } else {
       dispatch(logout());
      toast.error('Invalid email or password!', {
        position: toast.POSITION.TOP_CENTER
      });
    }
  };

//   useEffect(() => {
//     console.log(isLoggedIn);
//   }, [isLoggedIn]);

  return (
    <div>
      <h2>Login</h2>
      <ToastContainer />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
        <div>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
