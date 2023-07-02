import {
  StaticOrderComponentHeaderMain,
  StaticOrderComponentH1Main,
  StaticOrderComponentH2Main,
  StaticOrderComponentPMain,
  StaticOrderComponentButtonDarkMain,
  StaticOrderComponentButtonLightMain,
  StaticOrderMainComponentMainContainer,
} from "../../styles/StaticOrderComponentMain";
import "../../styles/StaticOrderComponentMain.css";

const StaticOrderComponentMain = () => {
  return (
    <StaticOrderMainComponentMainContainer>
      <div className="container">
        <div className="row">
          <StaticOrderComponentHeaderMain className="col-lg-6">
            <StaticOrderComponentH1Main>
              One more friend
            </StaticOrderComponentH1Main>
            <StaticOrderComponentH2Main>
              Thousands more fun!
            </StaticOrderComponentH2Main>
            <StaticOrderComponentPMain>
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </StaticOrderComponentPMain>
            <div className="d-flex flex-row gap-3 mt-5">
              <StaticOrderComponentButtonLightMain>
                View Intro
              </StaticOrderComponentButtonLightMain>
              <StaticOrderComponentButtonDarkMain>
                Explore Now
              </StaticOrderComponentButtonDarkMain>
            </div>
          </StaticOrderComponentHeaderMain>
          <div className="col-lg-6 text-center">
            <img
              src="../../../public/human-dog.png"
              className="img-fluid static-img-main"
            />
          </div>
        </div>
      </div>
    </StaticOrderMainComponentMainContainer>
  );
};

export default StaticOrderComponentMain;
