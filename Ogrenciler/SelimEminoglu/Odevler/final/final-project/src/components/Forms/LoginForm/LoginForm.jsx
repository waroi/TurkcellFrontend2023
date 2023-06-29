import { Link } from "react-router-dom";
import {
  LoginDiv,
  FormDiv,
  FormLabel,
  İnputDiv,
  Formİnput,
  FormButton,
  FormH1,
} from "./styleLoginForm";

function LoginForm() {
  return (
    <LoginDiv>
      <FormDiv>
        <FormH1>Giriş Yap</FormH1>
        <div>
          <FormLabel>Kullanıcı Adı</FormLabel>
          <İnputDiv>
            <Formİnput type="text" placeholder="Kullanıcı Adını Giriniz" />
          </İnputDiv>
        </div>
        <div>
          <FormLabel>Şifre</FormLabel>
          <İnputDiv>
            <Formİnput type="password" placeholder="Şifrenizi Giriniz" />
            {/* <div>
              <img src="./src/assets/icons/u_eye-slash.svg" alt="icon" />
            </div> */}
          </İnputDiv>
        </div>
        <FormButton>Giriş Yap</FormButton>
        <Link to={"/"}>Anasayfaya Dön</Link>
      </FormDiv>
    </LoginDiv>
  );
}

export default LoginForm;
