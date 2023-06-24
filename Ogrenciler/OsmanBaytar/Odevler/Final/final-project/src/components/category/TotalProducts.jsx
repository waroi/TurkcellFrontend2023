import { useState, useEffect } from "react";
import { productRequest } from "../../utils/Request";
import ProductBox from "./ProductBox";

const TotalProducts = () => {
  const [productsData, setProductsData] = useState([]);
  const [isButton, setIsButton] = useState(false);
  console.count("counter");

  useEffect(() => {
    productRequest.get().then((data) => {
      console.log(data);
      setProductsData(data);
    });
  }, []);

  useEffect(() => {
    if (productsData.length > 15) {
      setIsButton(true);
    }
  }, [productsData]);

  return (
    <>
      {productsData.map((product, index) => {
        return <ProductBox product={product} key={index} />;
      })}
    </>
  );
};

export default TotalProducts;
