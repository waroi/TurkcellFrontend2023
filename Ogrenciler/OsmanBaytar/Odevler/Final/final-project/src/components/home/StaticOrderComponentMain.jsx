import {
  StaticOrderComponentContainer,
  StaticOrderComponentHeader,
  StaticOrderComponentH1,
  StaticOrderComponentH2,
  StaticOrderComponentP,
  StaticOrderComponentButtonDark,
  StaticOrderComponentButtonLight,
  StaticOrderMainComponentMainContainer,
} from "../../styles/StaticOrderComponent";
import "../../styles/StaticOrderComponent.css";

const StaticOrderComponentMain = () => {
  return (
    <StaticOrderMainComponentMainContainer>
      <div className="container">
        <div className="row">
          <StaticOrderComponentHeader className="col-lg-6">
            <StaticOrderComponentH1>Free Delivery</StaticOrderComponentH1>
            <StaticOrderComponentH2>
              Worldwide delivery on all.
            </StaticOrderComponentH2>
            <StaticOrderComponentP>
              Authorit tively morph next-generation innov tion with extensive
              models.
            </StaticOrderComponentP>
            <div className="d-flex flex-row gap-3 mt-5">
              <StaticOrderComponentButtonDark>
                Explore Now
              </StaticOrderComponentButtonDark>
              <StaticOrderComponentButtonLight>
                View Intro
              </StaticOrderComponentButtonLight>
            </div>
          </StaticOrderComponentHeader>
          <div className="col-lg-6">
            <img
              src="../../../public/human-dog.png"
              className="img-fluid static-img"
            />
          </div>
        </div>
      </div>
    </StaticOrderMainComponentMainContainer>
  );
};

export default StaticOrderComponentMain;
