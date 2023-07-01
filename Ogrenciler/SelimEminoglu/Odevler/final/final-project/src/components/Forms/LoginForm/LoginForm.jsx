import { useSelector, useDispatch } from "react-redux";
import { activeUserEnter, setActiveUser } from "../../../redux/slices/userList";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { loginSchema } from "../../../schemas";
import { Link } from "react-router-dom";
import { ErrorDiv, ErrorText } from "../RegisterForm/styleRegisterForm";
import {
  LoginDiv,
  FormDiv,
  FormLabel,
  İnputDiv,
  Formİnput,
  FormButton,
  FormH1,
} from "./styleLoginForm";

function successPost(username) {
  toast.success(`Başarılı şekilde giriş yapıldı: ${username}`, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    theme: "dark",
  });
}

function warningPost(username) {
  toast.warning(`Kullanıcı Bulunamadı: ${username}`, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    theme: "dark",
  });
}

function failPost(error) {
  toast.error(`Hata:${error}`, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    theme: "dark",
  });
}

function LoginForm() {
  const dispatch = useDispatch();
  let activeUser = useSelector((state) => state.user.activeUser);

  const onSubmit = async (values, actions) => {
    fetchUsers(values.username, values.password);

    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    actions.resetForm();
  };

  function fetchUsers(username, password) {
    fetch("http://localhost:3001/users")
      .then((response) => response.json())
      .then((result) => {
        let foundUser = result.find(
          (user) => user.username === username && user.password === password
        );
        if (foundUser) {
          dispatch(setActiveUser(foundUser));
          successPost(foundUser.username);
          dispatch(activeUserEnter());
        } else {
          warningPost(username);
        }
      })
      .catch((err) => failPost(err));
  }

  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit,
    });

  return (
    <LoginDiv>
      <FormDiv onSubmit={handleSubmit}>
        <FormH1>Giriş Yap</FormH1>
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
        <FormButton disabled={isSubmitting} type="submit">
          Giriş Yap
        </FormButton>
        <Link to={"/"}>Anasayfaya Dön</Link>
      </FormDiv>
    </LoginDiv>
  );
}

export default LoginForm;
