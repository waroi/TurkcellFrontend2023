import {
  ViewMoreH4,
  ViewMoreH2,
  ViewMoreButton,
} from "../Style/styled-viewmore";
import { useNavigate } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const ViewMore = () => {
  const navigate = useNavigate();
  const goToProducts = () => {
    navigate("/Products");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-6">
          <ViewMoreH4>What's New</ViewMoreH4>
          <ViewMoreH2>Take A Look At Some Of Our Products </ViewMoreH2>
        </div>
        <div className="col-lg-6">
          <ViewMoreButton onClick={goToProducts}>
            View more <FaAngleRight />
          </ViewMoreButton>
        </div>
      </div>
    </div>
  );
};

export default ViewMore;
