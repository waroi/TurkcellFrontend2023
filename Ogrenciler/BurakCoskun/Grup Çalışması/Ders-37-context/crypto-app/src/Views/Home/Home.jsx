import Popular from "../../Components/Popular/Popular";
import { useEffect } from "react";
import { useCustomContext } from "../../context/Context";
import CarouselComponent from "../../Components/Carouselcomponent/CarouselComponent";

const Home = () => {
  const { setPage } = useCustomContext();
  useEffect(() => {
    setPage(0);
  }, [setPage]);
  return (
    <div>
      <CarouselComponent />
      <div className="py-5 px-3">
        <Popular />
      </div>
    </div>
  );
};

export default Home;
