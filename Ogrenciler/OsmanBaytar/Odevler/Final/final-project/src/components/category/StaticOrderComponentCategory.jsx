import {
  StaticOrderComponentContainer,
  StaticOrderComponentHeader,
  StaticOrderComponentH1,
  StaticOrderComponentH2,
  StaticOrderComponentP,
  StaticOrderComponentButtonDark,
  StaticOrderComponentButtonLight,
} from "../../styles/StaticOrderComponent";
import "../../styles/StaticOrderComponentCategory.css";

const StaticOrderComponentCategory = ({ order }) => {
  return (
    <div className="container">
      <StaticOrderComponentContainer className="row">
        <StaticOrderComponentHeader className="col-lg-6" order={order}>
          <StaticOrderComponentH1>One more friend</StaticOrderComponentH1>
          <StaticOrderComponentH2>Thousands more fun!</StaticOrderComponentH2>
          <StaticOrderComponentP>
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
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
          <img
            src="../../../public/dogs.png"
            className="img-fluid static-img"
          />
        </div>
      </StaticOrderComponentContainer>
    </div>
  );
};

export default StaticOrderComponentCategory;
