import HomeTopView from "../views/HomeTopViews/HomeTopView";
import HomeBottomView from "../views/HomeBottomViews/HomeBottomView";
import { HomeContainer } from "../views/HomeTopViews/HomeTopStyle";

function Home() {


  return <HomeContainer className="container  bg-white px-5">
    < HomeTopView />
    <div className="bg-white p-2 mt-5 px-2">< HomeBottomView /></div>
  </HomeContainer>;
}

export default Home;
