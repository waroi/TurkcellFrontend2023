import {
  HomeAddContainer,
  HomeAddTitle,
  HomeAddSubTitle,
  HomeAddContent,
  HomeAddLeft,
  HomeAddRight,
} from "./HomeStyle";
import Button from "../Button/Button";
import womanBanner from "../../img/womanBanner.png";
import playCircle from "../../img/PLayCircle.png";
const HomeAddBanner = () => {
  return (
    <div className="container my-5">
      <HomeAddContainer>
        <HomeAddLeft>
          <img
            className="womanImage img-fluid"
            src={womanBanner}
            alt="girl-and-dog"
          />
        </HomeAddLeft>
        <HomeAddRight style={{ position: "relative", zIndex: "5" }}>
          <div className="addRightWrap pt-3">
            <HomeAddTitle>One more shirt</HomeAddTitle>
            <HomeAddSubTitle>Thousands More Fun!</HomeAddSubTitle>
            <HomeAddContent className="ps-5 py-3 d-flex justify-content-end">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
              enim quia nemo omnis nam impedit quisquam aliquid rerum cupiditate
              Lorem, ipsum.!
            </HomeAddContent>
            <div className="d-flex justify-content-end gap-3">
              <Button
                color={"#003459"}
                logo={playCircle}
                border={"1px solid #003459"}
                title={"View Intro"}
                background={"transparent"}
              />
              <Button
                color={"#fdfdfd"}
                background={"#003459"}
                title={"Explore Now"}
              />
            </div>
          </div>
        </HomeAddRight>
      </HomeAddContainer>
    </div>
  );
};

export default HomeAddBanner;
