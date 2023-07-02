import { RightBrownBox, RightPrimaryBox, RightImageWrapper } from "./HomeStyle";
import mainModel from "../../img/modelmain.png";
const MainPagePicture = () => {
  return (
    <div>
      <RightImageWrapper className="position-relative">
        <img className="mainRightImage" src={mainModel} alt="human" />
      </RightImageWrapper>
      <div style={{ position: "relative" }}>
        <RightPrimaryBox />
        <RightBrownBox />
      </div>
    </div>
  );
};

export default MainPagePicture;
