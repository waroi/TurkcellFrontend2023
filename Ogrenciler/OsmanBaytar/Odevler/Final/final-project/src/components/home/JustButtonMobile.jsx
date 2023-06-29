import { useNavigate } from "react-router-dom";
import {
  JustButtonButton,
  JustButtonI,
  JustButtonMobileContainer,
} from "../../styles/JustButtonStyle";

const JustButtonMobile = () => {
  const navigate = useNavigate();
  const goToProducts = () => {
    navigate("/Products");
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
    </JustButtonMobileContainer>
  );
};

export default JustButtonMobile;
