import { useNavigate } from "react-router-dom";
import { JustButtonButton, JustButtonI } from "../../styles/JustButtonStyle";

const JustButton = () => {
  const navigate = useNavigate();
  const goToProducts = () => {
    navigate("/Products");
  };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-6 text-center">
          <JustButtonButton onClick={goToProducts}>
            View more
            <JustButtonI className="fa-solid fa-arrow-right" />
          </JustButtonButton>
        </div>
      </div>
    </div>
  );
};

export default JustButton;
