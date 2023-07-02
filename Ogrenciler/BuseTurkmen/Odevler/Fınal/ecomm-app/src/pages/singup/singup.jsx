import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Nav from '../../components/navbar/nav';
import { TitleSign, Signup, Button} from "./signupstyled";

const SignUpForm = () => {
  const [registeredUsername, setRegisteredUsername] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const initialValues = {
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setRegisteredUsername(values.username);
    setIsFormSubmitted(true);
    setSubmitting(false);
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'E-posta adresi zorunludur';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Geçerli bir e-posta adresi girin';
    }

    if (!values.username) {
      errors.username = 'Kullanıcı adı zorunludur';
    }

    if (!values.password) {
      errors.password = 'Şifre zorunludur';
    } else if (values.password.length < 6) {
      errors.password = 'Şifre en az 6 karakter olmalıdır';
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = 'Şifre onayı zorunludur';
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = 'Şifreler eşleşmiyor';
    }

    return errors;
  };

  return (
    <div>
      <Nav />
      {!isFormSubmitted ? (
        <Signup>
          <TitleSign>Sign Up</TitleSign>
          <Formik
            initialValues={initialValues}
            validate={validateForm}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <Field type="email" name="email" className="form-control" />
                <ErrorMessage name="email" component="div" className="text-danger" />
              </div>

              <div className="form-group">
                <label htmlFor="username">Kullanıcı Adı:</label>
                <Field type="text" name="username" className="form-control" />
                <ErrorMessage name="username" component="div" className="text-danger" />
              </div>

              <div className="form-group">
                <label htmlFor="password">Şifre:</label>
                <Field type="password" name="password" className="form-control" />
                <ErrorMessage name="password" component="div" className="text-danger" />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Şifre Onayı:</label>
                <Field type="password" name="confirmPassword" className="form-control" />
                <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
              </div>

              <Button type="submit" className="btn btn-primary">Kayıt Ol</Button>
            </Form>
          </Formik>
        </ Signup>
      ) : (
        <>
          <TitleSign>Hoş Geldiniz {registeredUsername}, Giriş Yapabilirsiniz!</TitleSign>
          <Link to="/login">
            <Button type="submit" className="btn btn-primary">Giriş Yap</Button>
          </Link>
        </>
      )}
    </div>
  );
};

export default SignUpForm;
