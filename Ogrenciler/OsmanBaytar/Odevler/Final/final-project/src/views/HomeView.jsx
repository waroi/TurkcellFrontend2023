import StaticOrderComponent from "../components/home/StaticOrderComponent";
import StaticThreeBoxes from "../components/home/StaticThreeBoxes";
import StaticOrderComponent2 from "../components/home/StaticOrderComponent2";
import { useEffect, useState } from "react";
import { productRequest } from "../utils/Request";
import FourBoxes from "../components/home/FourBoxes";
import BasicTitle from "../components/home/BasicTitle";
import JustButton from "../components/home/JustButton";
import FourBoxesMobile from "../components/home/FourBoxesMobile";
import BasicTitleMobile from "../components/home/BasicTitleMobile";
import JustButtonMobile from "../components/home/JustButtonMobile";
import BasicTitle2 from "../components/home/BasicTitle2";
import StaticOrderComponentMain from "../components/home/StaticOrderComponentMain";
import Logos from "../components/home/Logos";

const HomeView = () => {
  const [randomProducts, setRandomProducts] = useState([]);
  const [firstFourRandomProducts, setFirstFourRandomProducts] = useState([]);
  const [secondFourRandomProducts, setSecondFourRandomProducts] = useState([]);
  const [thirdFourRandomProducts, setThirdFourRandomProducts] = useState([]);
  const [fourthFourRandomProducts, setFourthFourRandomProducts] = useState([]);

  useEffect(() => {
    productRequest.get().then((data) => {
      setRandomProducts(data.sort(() => Math.random() - 0.5));
    });
  }, []);

  useEffect(() => {
    setFirstFourRandomProducts(randomProducts.slice(0, 4));
    setSecondFourRandomProducts(randomProducts.slice(4, 8));
    setThirdFourRandomProducts(randomProducts.slice(8, 12));
    setFourthFourRandomProducts(randomProducts.slice(12, 16));
  }, [randomProducts]);

  return (
    <>
      <StaticOrderComponentMain />
      <BasicTitle />
      <FourBoxes data={firstFourRandomProducts} />
      <FourBoxes data={secondFourRandomProducts} />
      <JustButton />
      <StaticOrderComponent order={2} />
      <BasicTitleMobile />
      <FourBoxesMobile data={thirdFourRandomProducts} />
      <FourBoxesMobile data={fourthFourRandomProducts} />
      <JustButtonMobile />
      <Logos />
      <StaticOrderComponent2 />
      <BasicTitle2 />
      <StaticThreeBoxes />
      <JustButton />
    </>
  );
};

export default HomeView;
