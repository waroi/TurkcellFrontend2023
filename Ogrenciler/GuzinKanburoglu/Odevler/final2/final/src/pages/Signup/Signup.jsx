import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { validationSchema } from './schemas/SignupSchema';

const Signup = () => {
  const initialValues = {
    username: '',
    email: '',
    password: ''
  };

  const handleSubmit = async (values) => {
    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      if (response.ok) {
        toast.success('Sign-up successful');
        // Perform any actions upon successful sign-up
      } else {
        throw new Error('Sign-up failed');
      }
    } catch (error) {
      console.error('Error occurred while signing up', error);
    }
  };

  return (
    <div>
      <h2>Sign up</h2>
      <ToastContainer />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="username">Username</label>
            <Field type="text" id="username" name="username" />
            <ErrorMessage name="username" component="div" />
          </div>
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
          <button type="submit">Sign up</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Signup;
