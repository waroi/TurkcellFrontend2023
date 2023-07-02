import {
  BasicTitleH4,
  BasicTitleH2,
  BasicTitleButton,
  BasicTitleI,
} from "../../styles/BasicTitleStyle";
import { useNavigate } from "react-router-dom";

const BasicTitle2 = () => {
  const navigate = useNavigate();
  const goToProducts = () => {
    navigate("/Products");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-6">
          <BasicTitleH4>You already know ?</BasicTitleH4>
          <BasicTitleH2>Useful pet knowledge</BasicTitleH2>
        </div>
        <div className="col-lg-6">
          <BasicTitleButton onClick={goToProducts}>
            View more <BasicTitleI className="fa-solid fa-arrow-right" />
          </BasicTitleButton>
        </div>
      </div>
    </div>
  );
};

export default BasicTitle2;
