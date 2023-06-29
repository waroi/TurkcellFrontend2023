import {
  BasicTitleH4,
  BasicTitleH2,
  BasicTitleButton,
  BasicTitleI,
  BasicTitleMobileContainer,
} from "../../styles/BasicTitleStyle";
import { useNavigate } from "react-router-dom";

const BasicTitleMobile = () => {
  const navigate = useNavigate();
  const goToProducts = () => {
    navigate("/Products");
  };

  return (
    <BasicTitleMobileContainer className="container mt-5">
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-6">
          <BasicTitleH4>
            Hard to choose right products for your pets?
          </BasicTitleH4>
          <BasicTitleH2>Our Products</BasicTitleH2>
        </div>
        <div className="col-lg-6">
          <BasicTitleButton onClick={goToProducts}>
            View more <BasicTitleI className="fa-solid fa-arrow-right" />
          </BasicTitleButton>
        </div>
      </div>
    </BasicTitleMobileContainer>
  );
};

export default BasicTitleMobile;
