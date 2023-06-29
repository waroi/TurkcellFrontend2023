import { RegisterDiv, RegisterFormDiv } from "./styleRegisterForm";
import {
  FormH1,
  FormLabel,
  FormButton,
  Formİnput,
  İnputDiv,
} from "../LoginForm/styleLoginForm";
import { Link } from "react-router-dom";

function RegisterForm() {
  return (
    <RegisterDiv>
      <RegisterFormDiv>
        <FormH1>Kayıt Ol</FormH1>
        <div>
          <FormLabel>Kullanıcı Resmi(opsiyonel)</FormLabel>
          <İnputDiv>
            <Formİnput type="text" placeholder="Kullanıcı Resmini Giriniz" />
          </İnputDiv>
        </div>
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
          </İnputDiv>
        </div>
        <div>
          <FormLabel>Şifre(tekrar)</FormLabel>
          <İnputDiv>
            <Formİnput type="password" placeholder="Şifrenizi Tekrar Giriniz" />
          </İnputDiv>
        </div>
        <FormButton>Kayıt Ol</FormButton>
        <Link to={"/"}>Anasayfaya Dön</Link>
      </RegisterFormDiv>
    </RegisterDiv>
  );
}

export default RegisterForm;
