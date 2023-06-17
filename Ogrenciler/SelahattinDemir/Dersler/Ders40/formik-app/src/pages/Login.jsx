/* eslint-disable no-unreachable */
import { Form, Formik } from "formik";
import CustomInput from "../components/CustomInput";
import CustomCheckbox from "../components/CustomCheckbox";
import { loginSchema } from "../schemas";
import { Link } from "react-router-dom";

function Login() {
  const handleSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{ username: "", password: "", isAccepted: false }}
        onSubmit={handleSubmit}
        validationSchema={loginSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <CustomInput
              label="Email"
              name="email"
              type="text"
              placeholder="Kullanıcı Adınızı Giriniz"
            />
            <CustomInput
              label="Şifre"
              name="password"
              type="password"
              placeholder="Şifrenizi Giriniz"
            />
            <CustomCheckbox type="checkbox" name="isAccepted" />
            <button disabled={isSubmitting} type="submit">
              Giriş Yap
            </button>
            <Link className="formLink" to="/">
              Kayıt Ol
            </Link>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Login;
