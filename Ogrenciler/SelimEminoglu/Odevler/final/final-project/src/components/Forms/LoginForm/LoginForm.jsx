import {
  LoginDiv,
  FormDiv,
  FormLabel,
  İnputDiv,
  Formİnput,
} from "./styleLoginForm";

function LoginForm() {
  return (
    <LoginDiv>
      <FormDiv>
        <div>
          <FormLabel>Kullanıcı Adı</FormLabel>
          <input type="text" placeholder="Kullanıcı Adını Giriniz" />
        </div>
        <div>
          <FormLabel>Şifre</FormLabel>
          <İnputDiv>
            <Formİnput type="text" placeholder="Şifrenizi Giriniz" />
            <img src="./src/assets/icons/u_eye-slash.svg" alt="icon" />
          </İnputDiv>
        </div>
        <button>Giriş Yap</button>
      </FormDiv>
    </LoginDiv>
  );
}

export default LoginForm;
