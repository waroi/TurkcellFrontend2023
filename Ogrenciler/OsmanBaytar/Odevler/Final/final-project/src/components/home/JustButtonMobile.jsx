import { useNavigate } from "react-router-dom";
import {
  JustButtonButton,
  JustButtonI,
  JustButtonMobileContainer,
} from "../../styles/JustButtonStyle";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const JustButtonMobile = () => {
  const currentUser = useSelector((state) => state.login.login);
  const navigate = useNavigate();

  function warningToast() {
    toast.warning("Log in required", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  const goToProducts = () => {
    if (currentUser != "") {
      navigate("/Products");
    } else if (currentUser.length == 0) {
      warningToast();
    }
  };
  return (
    <JustButtonMobileContainer className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-6 text-center">
          <JustButtonButton onClick={goToProducts}>
            View more
            <JustButtonI className="fa-solid fa-arrow-right" />
          </JustButtonButton>
        </div>
      </div>
      <ToastContainer />
    </JustButtonMobileContainer>
  );
};

export default JustButtonMobile;
