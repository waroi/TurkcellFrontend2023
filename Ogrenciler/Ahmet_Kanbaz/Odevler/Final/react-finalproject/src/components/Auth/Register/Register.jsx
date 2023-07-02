import { useNavigate } from "react-router-dom";
import logoMonito from "../../../assets/logoMonito.svg";
import { useFormik } from "formik";
import registerSchema from "../../../schemas/registerSchema";
import { Logo, RegisterBg } from "../AuthStyle";
import { useDispatch, useSelector } from "react-redux";
import { postNewUser } from "../../../utils/posts";
import Toast from "../../../common/Toast/Toast";
import { setUser, addNewUser } from "../../../redux/slices/usersSlice/userSlice";
import RegisterForm from "./RegisterForm/RegisterForm";
const Register = () => {
  const allUsers = useSelector((state) => state.user.allUsers);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      registerFirstName: "",
      registerLastName: "",
      registerEmail: "",
      registerPassword: "",
      confirmRegisterPassword: "",
    },
    validationSchema: registerSchema,
    onSubmit: async (values, bag) => {
      const newUser = {
        id: Date.now(),
        userName: values.registerFirstName,
        userSurname: values.registerLastName,
        userEmail: values.registerEmail,
        userPassword: values.registerPassword,
        isAdmin: false,
        cart: [],
      };
      const isUserExist = allUsers.find(
        (user) => user.userEmail === newUser.userEmail
      );
      if (isUserExist) {
        Toast({
          message:
            "Girmiş olduğunuz mail adresine ait daha önceden kurulmuş bir hesap bulunmaktadır.",
          type: "warning",
        });
        bag.setSubmitting(false);
        return;
      }
      const response = await postNewUser(newUser);
      if (response.status === 201) {
        Toast({
          message:
            "Kayıt işlemi başarıyla tamamlandı. Anasayfaya yönlendiriliyorsunuz.",
          type: "success",
        });
        dispatch(setUser(newUser));
        dispatch(addNewUser(newUser))
        localStorage.setItem("isLogin", JSON.stringify(newUser));
        navigate("/");
      } else {
        Toast({
          message:
            "Kayıt işlemi bazı sebeplerden dolayı başarısız oldu. Lütfen daha sonra tekrar deneyiniz.",
          type: "error",
        });
      }
      bag.resetForm();
    },
  });
  return (
    <div className="container py-5">
      <RegisterBg className="row justify-content-center align-items-center gap-3 p-5 rounded-3">
        <div className="col-lg-4 col-md-6 col-12">
          <div className="d-flex gap-3 mb-2">
            <Logo src={logoMonito} alt="" className="img-fluid w-25" />
            <h3>Yeni Kayıt Oluştur</h3>
          </div>
          <RegisterForm handleSubmit={handleSubmit} handleChange = {handleChange} handleBlur = {handleBlur} values = {values} isSubmitting = {isSubmitting} touched = {touched} errors = {errors} />
        </div>
        <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-center">
          <img
            src="https://www.gosanangelo.com/gcdn/media/2021/07/16/USATODAY/usatsports/man-packing-a-shipment-box.jpg?width=660&height=440&fit=crop&format=pjpg&auto=webp"
            alt=""
            className="img-fluid rounded-3"
          />
        </div>
      </RegisterBg>
    </div>
  );
};

export default Register;
