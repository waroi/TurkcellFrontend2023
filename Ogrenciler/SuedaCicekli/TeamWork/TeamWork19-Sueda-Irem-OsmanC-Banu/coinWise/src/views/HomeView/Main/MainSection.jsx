import { Wrap, ExploreButton, MainTitle, BackgroundWrap } from "./MainSecStyle";
import background from "./backgroundLines.png";

const MainSection = () => {
  return (
    <div className="position-relative">
      <BackgroundWrap src={background} alt="" />
      <div className="container">
        <Wrap>
          <div className="d-flex flex-column justify-content-around h-75">
            <MainTitle>Navigate the Crypto Universe</MainTitle>
            <ExploreButton>Explore</ExploreButton>
          </div>
        </Wrap>
      </div>
    </div>
  );
};

export default MainSection;
