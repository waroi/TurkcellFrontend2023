import HomeTopView from "../views/HomeTopViews/HomeTopView";
import HomeBottomView from "../views/HomeBottomViews/HomeBottomView";
import { HomeContainer } from "../views/HomeTopViews/HomeTopStyle";
import HomeSliderViews from "../views/HomeSliderViews/HomeSliderViews";

function Home() {
  return (
    <HomeContainer className="container  bg-white px-5">
      <HomeTopView />
      <HomeSliderViews />
      <div className="bg-white p-2 mt-5 px-2">
        <HomeBottomView />
      </div>
    </HomeContainer>
  );
}

export default Home;
