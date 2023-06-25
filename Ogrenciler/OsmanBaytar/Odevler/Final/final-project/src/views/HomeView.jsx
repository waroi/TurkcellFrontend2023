import StaticOrderComponent from "../components/home/StaticOrderComponent";
import StaticThreeBoxes from "../components/home/StaticThreeBoxes";
import { useEffect, useState } from "react";
import { productRequest } from "../utils/Request";
import FourBoxes from "../components/home/FourBoxes";
import BasicTitle from "../components/home/BasicTitle";
import JustButton from "../components/home/JustButton";

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
      <BasicTitle />
      <FourBoxes data={firstFourRandomProducts} />
      <FourBoxes data={secondFourRandomProducts} />
      <JustButton />
      <StaticOrderComponent source={"../../public/human-dog.png"} order={2} />
      <BasicTitle />
      <FourBoxes data={thirdFourRandomProducts} />
      <FourBoxes data={fourthFourRandomProducts} />
      <JustButton />
      <StaticOrderComponent source={"../../public/human-dog.png"} />
      <StaticThreeBoxes />
    </>
  );
};

export default HomeView;
