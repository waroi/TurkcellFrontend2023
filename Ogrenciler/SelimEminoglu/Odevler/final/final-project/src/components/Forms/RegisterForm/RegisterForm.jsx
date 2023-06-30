import { useFormik } from "formik";
import { toast } from "react-toastify";
import {
  RegisterDiv,
  RegisterFormDiv,
  ErrorDiv,
  ErrorText,
} from "./styleRegisterForm";
import {
  FormH1,
  FormLabel,
  FormButton,
  Formİnput,
  İnputDiv,
} from "../LoginForm/styleLoginForm";
import { Link } from "react-router-dom";
import { registerSchema } from "../../../schemas/index";

function successPost(username) {
  toast.success(`Yeni kullanıcı eklendi: ${username}`, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    theme: "dark",
  });
}

function failPost(error) {
  toast.error(`Hata:${error}`, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    theme: "dark",
  });
}

function postUser(userpicture, username, password) {
  fetch("http://localhost:3001/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: self.crypto.randomUUID(),
      image: userpicture,
      username: username,
      password: password,
      isAdmin: false,
    }),
  })
    .then((response) => response.json())
    .then((result) => successPost(result.username))
    .catch((err) => failPost(err));
}

const onSubmit = async (values, actions) => {
  postUser(values.userpicture, values.username, values.password);

  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

function RegisterForm() {
  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        userpicture: "",
        username: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: registerSchema,
      onSubmit,
    });

  return (
    <RegisterDiv>
      <RegisterFormDiv onSubmit={handleSubmit}>
        <FormH1>Kayıt Ol</FormH1>
        <div>
          <FormLabel>Kullanıcı Resmi(opsiyonel)</FormLabel>
          <İnputDiv>
            <Formİnput
              id="userpicture"
              value={values.userpicture}
              onChange={handleChange}
              type="text"
              placeholder="Kullanıcı Resmini Giriniz"
            />
          </İnputDiv>
          {errors.userpicture && (
            <ErrorDiv>
              <img
                src="./src/assets/icons/u_exclamation-circle.svg"
                alt="icon"
              />
              <ErrorText>{errors.userpicture}</ErrorText>
            </ErrorDiv>
          )}
        </div>
        <div>
          <FormLabel>Kullanıcı Adı</FormLabel>
          <İnputDiv>
            <Formİnput
              id="username"
              value={values.username}
              onChange={handleChange}
              type="text"
              placeholder="Kullanıcı Adını Giriniz"
            />
          </İnputDiv>
          {errors.username && (
            <ErrorDiv>
              <img
                src="./src/assets/icons/u_exclamation-circle.svg"
                alt="icon"
              />
              <ErrorText>{errors.username}</ErrorText>
            </ErrorDiv>
          )}
        </div>
        <div>
          <FormLabel>Şifre</FormLabel>
          <İnputDiv>
            <Formİnput
              id="password"
              value={values.password}
              onChange={handleChange}
              type="password"
              placeholder="Şifrenizi Giriniz"
            />
          </İnputDiv>
          {errors.password && (
            <ErrorDiv>
              <img
                src="./src/assets/icons/u_exclamation-circle.svg"
                alt="icon"
              />
              <ErrorText>{errors.password}</ErrorText>
            </ErrorDiv>
          )}
        </div>
        <div>
          <FormLabel>Şifre(tekrar)</FormLabel>
          <İnputDiv>
            <Formİnput
              id="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              type="password"
              placeholder="Şifrenizi Tekrar Giriniz"
            />
          </İnputDiv>
          {errors.confirmPassword && (
            <ErrorDiv>
              <img
                src="./src/assets/icons/u_exclamation-circle.svg"
                alt="icon"
              />
              <ErrorText>{errors.confirmPassword}</ErrorText>
            </ErrorDiv>
          )}
        </div>
        <FormButton disabled={isSubmitting} type="submit">
          Kayıt Ol
        </FormButton>
        <Link to={"/"}>Anasayfaya Dön</Link>
      </RegisterFormDiv>
    </RegisterDiv>
  );
}

export default RegisterForm;
