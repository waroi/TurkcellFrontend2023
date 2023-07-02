import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Nav from '../../components/navbar/nav';
import { TitleLogin, Login, Button} from "./loginstyled";


const LoginForm = () => {
  const [loggedInUsername, setLoggedInUsername] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setLoggedInUsername(values.username);
    setIsFormSubmitted(true);
    setSubmitting(false);
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = 'Kullanıcı adı boş bırakılamaz';
    }

    if (!values.password) {
      errors.password = 'Şifre boş bırakılamaz';
    }

    return errors;
  };

  return (
    <div>
      <Nav loggedInUsername={loggedInUsername} showCartIcon={isFormSubmitted} />
      {!isFormSubmitted ? (
        <Login>
          <TitleLogin>Login</TitleLogin>
          <Formik
            initialValues={{ username: '', password: '' }}
            validate={validateForm}
            onSubmit={handleSubmit}
          >
            <Form>
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

              <Button type="submit" className="btn btn-primary">
                Giriş Yap
              </Button>
            </Form>
          </Formik>
        </Login>
      ) : (
        <>
          <TitleLogin>Hoş Geldiniz {loggedInUsername}, İyi Alışverişler</TitleLogin>
          <Button href="/products">Alışverişe Başla!</Button>
        </>
      )}
    </div>
  );
};

export default LoginForm;
