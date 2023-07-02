import { useEffect } from "react";
import Footer from "../components/Footer/Footer";
import RegisterForm from "../components/Forms/RegisterForm/RegisterForm";
import Navbar from "../components/Navbar/Navbar";

function RegisterPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <RegisterForm />
      <Footer />
    </div>
  );
}

export default RegisterPage;
