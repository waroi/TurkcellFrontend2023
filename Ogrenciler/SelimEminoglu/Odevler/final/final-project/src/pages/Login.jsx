import { useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import LoginForm from "../components/Forms/LoginForm/LoginForm";

function Login() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <LoginForm />
      <Footer />
    </div>
  );
}

export default Login;
