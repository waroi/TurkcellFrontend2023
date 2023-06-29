import {
  StaticOrderComponentMainContainer2,
  StaticOrderComponentContainer2,
  StaticOrderComponentHeader,
  StaticOrderComponentH1,
  StaticOrderComponentH2,
  StaticOrderComponentP,
  StaticOrderComponentButtonDark,
  StaticOrderComponentButtonLight,
  StaticOrderComponentSpan,
} from "../../styles/StaticOrderComponent";
import "../../styles/StaticOrderComponent2.css";

const StaticOrderComponent2 = () => {
  return (
    <StaticOrderComponentMainContainer2 className="container">
      <StaticOrderComponentContainer2 className="row">
        <StaticOrderComponentHeader className="col-lg-6">
          <StaticOrderComponentH1>
            Adoption
            <StaticOrderComponentSpan>
              <img src="../../../public/Vector.png" />
            </StaticOrderComponentSpan>
          </StaticOrderComponentH1>
          <StaticOrderComponentH2>
            We Need Help. So Do They.
          </StaticOrderComponentH2>
          <StaticOrderComponentP>
            Adopt a pet and give it a home, it will be love you back
            unconditionally.
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
            src="../../../public/human-dog2.png"
            className="img-fluid static-img2"
          />
        </div>
      </StaticOrderComponentContainer2>
    </StaticOrderComponentMainContainer2>
  );
};

export default StaticOrderComponent2;
