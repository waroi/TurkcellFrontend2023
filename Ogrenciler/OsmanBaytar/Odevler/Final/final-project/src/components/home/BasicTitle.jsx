import {
  BasicTitleH4,
  BasicTitleH2,
  BasicTitleButton,
  BasicTitleI,
} from "../../styles/BasicTitleStyle";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BasicTitle = () => {
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
    <div className="container mt-5">
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-6">
          <BasicTitleH4>What's New</BasicTitleH4>
          <BasicTitleH2>Take A Look At Some Of Our Products </BasicTitleH2>
        </div>
        <div className="col-lg-6">
          <BasicTitleButton onClick={goToProducts}>
            View more <BasicTitleI className="fa-solid fa-arrow-right" />
          </BasicTitleButton>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BasicTitle;
