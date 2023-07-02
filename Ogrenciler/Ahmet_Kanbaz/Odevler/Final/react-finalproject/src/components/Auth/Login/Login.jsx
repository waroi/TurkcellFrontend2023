import { Link, useNavigate } from "react-router-dom";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import logoMonito from "../../../assets/logoMonito.svg";
import loginSchema from "../../../schemas/loginSchema";
import { useFormik } from "formik";
import { MdError } from "react-icons/md";
import { Logo, InputDiv } from "../AuthStyle";
import Button from "../../../common/Button/Button";
import Toast from "../../../common/Toast/Toast";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../redux/slices/usersSlice/userSlice";
import { setCart } from "../../../redux/slices/cartSlice/cartSlice";
import { fetchLoginUser } from "../../../utils/request";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allUsers = useSelector((state) => state.user.allUsers);
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    touched,
    errors,
    isSubmitting,
  } = useFormik({
    initialValues: {
      loginEmail: "",
      loginPassword: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values, bag) => {
      const isEmailPasswordExist = allUsers.find(
        (user) =>
          user.userEmail === values.loginEmail &&
          user.userPassword === values.loginPassword
      );

      if (isEmailPasswordExist) {
        Toast({
          message: "Giriş Başarılı.",
          type: "success",
        });
        dispatch(setUser(isEmailPasswordExist));
        navigate("/");
        const response = await fetchLoginUser(isEmailPasswordExist.id);
        dispatch(setCart(response.cart));
        localStorage.setItem("isLogin", JSON.stringify(response));
        
      } else {
        Toast({
          message:
            "Girdiğiniz bilgiler hatalıdır. Lütfen girmiş olduğunuz bilgileri kontrol ediniz.",
          type: "error",
        });
        bag.setSubmitting(false);
      }
      bag.resetForm();
    },
  });

  return (
    <div className="container py-5">
      <div className="row justify-content-center align-items-center bg-body-tertiary p-5 mt-5 rounded-3 gap-3">
        <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-center mb-4 mb-lg-0">
          <img
            src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt=""
            className="img-fluid rounded"
          />
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div>
            <div className="d-flex gap-4 mb-4 mb-lg-2">
              <Logo src={logoMonito} alt="" className="img-fluid w-25" />
              <h2 className="text-center">Giriş Yap</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <InputDiv className="position-relative">
                <label htmlFor="loginEmail"></label>
                <input
                  type="email"
                  id="loginEmail"
                  name="loginEmail"
                  placeholder="E-Posta Adresiniz..."
                  className="form-control shadow-none border-secondary"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.loginEmail}
                  disabled={isSubmitting}
                />
                {touched.loginEmail && errors.loginEmail && (
                  <div className="text-danger errorMessage position-absolute top-100 start-0">
                    <MdError /> {errors.loginEmail}
                  </div>
                )}
              </InputDiv>

              <InputDiv className="position-relative">
                <label htmlFor="loginPassword"></label>
                <input
                  type="password"
                  id="loginPassword"
                  name="loginPassword"
                  placeholder="Şifreniz..."
                  className="form-control shadow-none border-secondary"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.loginPassword}
                  disabled={isSubmitting}
                />
                {touched.loginPassword && errors.loginPassword && (
                  <div className="text-danger errorMessage position-absolute start-0 top-100">
                    <MdError /> {errors.loginPassword}
                  </div>
                )}
              </InputDiv>
              <div className="d-flex justify-content-end align-items-center mt-4 mb-2">
                <Link
                  to="/forgot-password"
                  className="text-decoration-none text-black fst-bold"
                >
                  Şifremi Unuttum
                </Link>
              </div>
              <div className="d-flex justify-content-end align-items-center">
                <Button
                  disabled={isSubmitting}
                  type="submit"
                  padding=".5rem 1.75rem"
                  buttonText="Giriş Yap"
                  color="#FDFDFD"
                  backgroundcolor="#003459"
                />
              </div>
            </form>
            <div className="my-4">
              <p className="fst-italic text-center">
                Sosyal Medya İle Giriş Yap
              </p>
              <div className="d-flex justify-content-center gap-2">
                <button
                  type="button"
                  className="btn btn-outline-primary d-flex justify-content-center align-items-center"
                >
                  <BsFacebook />
                </button>
                <button
                  type="button"
                  className="btn btn-outline-info d-flex justify-content-center align-items-center"
                >
                  <FcGoogle />
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary d-flex justify-content-center align-items-center"
                >
                  <BsTwitter />
                </button>
              </div>
            </div>
            <div className="d-flex justify-content-center gap-3">
              <p className="fst-italic align-self-center">Hesabınız Yok Mu?</p>
              <Link
                to="/auth/register"
                className="text-decoration-none fst-normal"
              >
                Kayıt Ol
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
