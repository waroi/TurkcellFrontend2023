import Navbar from "../../../components/Navbar/Navbar";
import { Wrap, ExploreButton, MainTitle } from "./MainSecStyle";
import Lines from "./backgroundLines.png";

const MainSection = () => {
  return (
    <div>
      <div className="container">
        <Wrap>
          <Navbar />
          <div>osman can</div>
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
