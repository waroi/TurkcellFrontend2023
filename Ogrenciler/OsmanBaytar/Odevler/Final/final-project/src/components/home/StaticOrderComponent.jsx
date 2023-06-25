import {
  StaticOrderComponentContainer,
  StaticOrderComponentHeader,
  StaticOrderComponentH1,
  StaticOrderComponentH2,
  StaticOrderComponentP,
  StaticOrderComponentButtonDark,
  StaticOrderComponentButtonLight,
} from "../../styles/StaticOrderComponent";
import "../../styles/StaticOrderComponent.css";

const StaticOrderComponent = ({ source, order }) => {
  return (
    <div className="container">
      <StaticOrderComponentContainer className="row">
        <StaticOrderComponentHeader className="col-lg-6" order={order}>
          <StaticOrderComponentH1>Free Delivery</StaticOrderComponentH1>
          <StaticOrderComponentH2>
            Worldwide delivery on all.
          </StaticOrderComponentH2>
          <StaticOrderComponentP>
            Authorit tively morph next-generation innov tion with extensive
            models.
          </StaticOrderComponentP>
          <div className="d-flex flex-row gap-3 mt-5">
            <StaticOrderComponentButtonDark order={order}>
              Explore Now
            </StaticOrderComponentButtonDark>
            <StaticOrderComponentButtonLight>
              View Intro
            </StaticOrderComponentButtonLight>
          </div>
        </StaticOrderComponentHeader>
        <div className="col-lg-6">
          <img src={source} className="img-fluid static-img" />
        </div>
      </StaticOrderComponentContainer>
    </div>
  );
};

export default StaticOrderComponent;
