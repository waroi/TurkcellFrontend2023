import { MainTitle, MainSubTitle, MainContent, OBox } from "./HomeStyle";
import PlayCircle from "../../img/PlayCircle.png";

import Button from "../Button/Button";
const MainPageParagraph = () => {
  return (
    <div className="mb-5">
      <div>
        <OBox />
        <MainTitle>One More Shirt</MainTitle>
      </div>

      <MainSubTitle>Thousands More Fun!</MainSubTitle>
      <MainContent className="mt-4">
        One of the primary advantages of shopping on our e-commerce site is the
        unparalleled convenience it offers. No longer do you have to endure
        crowded malls or rush to beat store closing times.
      </MainContent>
      <div className="mt-4 d-flex">
        <div className="me-4">
          <Button
            title="View Intro"
            logo={PlayCircle}
            border="1.6px solid #003459"
            background={"transparent"}
            color={"#003459"}
          />
        </div>
        <div>
          <Button
            color={"#FDFDFD"}
            background={"#003459"}
            title="Explore Now"
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default MainPageParagraph;
