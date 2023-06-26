import { useEffect, useState } from "react";
import { productRequest } from "../utils/Request";
import Slider from "../components/detail/Slider";
import { useParams } from "react-router-dom";
import DetailInfo from "../components/detail/DetailInfo";
import BasicTitle from "../components/home/BasicTitle";
import FourBoxes from "../components/home/FourBoxes";
import JustButton from "../components/home/JustButton";

const DetailView = () => {
  const [productsData, setProductsData] = useState([]);
  const [randomProducts, setRandomProducts] = useState([]);
  const [firstFourRandomProducts, setFirstFourRandomProducts] = useState([]);
  const [secondFourRandomProducts, setSecondFourRandomProducts] = useState([]);
  let productID = useParams().id;

  useEffect(() => {
    productRequest.get().then((data) => {
      setProductsData(data);
    });
  }, []);

  useEffect(() => {
    productRequest.get().then((data) => {
      setRandomProducts(
        data
          .filter((item) => item.id != productID)
          .sort(() => Math.random() - 0.5)
      );
    });
  }, []);

  useEffect(() => {
    setFirstFourRandomProducts(productsData.slice(0, 4));
    setSecondFourRandomProducts(productsData.slice(4, 8));
  }, [randomProducts]);

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-lg-6">
            {productsData.length > 0 && (
              <Slider data={productsData[productID - 1]} />
            )}
          </div>
          <div className="col-lg-6">
            {productsData.length > 0 && (
              <DetailInfo data={productsData[productID - 1]} />
            )}
          </div>
        </div>
      </div>
      <BasicTitle />
      <FourBoxes data={firstFourRandomProducts} />
      <JustButton />
      <BasicTitle />
      <FourBoxes data={secondFourRandomProducts} />
      <JustButton />
    </>
  );
};

export default DetailView;
