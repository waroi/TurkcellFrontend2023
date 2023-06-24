import { useState, useEffect } from "react";
import { productRequest } from "../../utils/Request";
import ProductBox from "./ProductBox";
import { TotalProductsButton } from "../../styles/TotalProducts";

const TotalProducts = () => {
  const [productsData, setProductsData] = useState([]);
  const [isButton, setIsButton] = useState(false);
  const [buttonNumber, setButtonNumber] = useState(1);
  const [fakeProductsData, setFakeProductsData] = useState([]);
  console.count("counter");

  useEffect(() => {
    productRequest.get().then((data) => {
      setProductsData(data);
      setFakeProductsData(data);
    });
  }, []);

  useEffect(() => {
    if (productsData.length > 15) {
      setIsButton(true);
      setButtonNumber(2);
      setFakeProductsData(productsData.slice(0, 15));
    }
  }, [productsData]);

  function handleClick(e) {
    console.log(e.target.textContent);
    if (e.target.textContent == "1") {
      setFakeProductsData(productsData.slice(0, 15));
    } else if (e.target.textContent == "2") {
      setFakeProductsData(productsData.slice(15, 20));
    }
    console.log(fakeProductsData);
  }

  return (
    <>
      {fakeProductsData.map((product, index) => {
        return <ProductBox product={product} key={index} />;
      })}
      <div className="text-center mt-5">
        {isButton && (
          <div>
            {[...Array(buttonNumber)].map((item, index) => {
              return (
                <TotalProductsButton onClick={handleClick} key={index}>
                  {index + 1}
                </TotalProductsButton>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default TotalProducts;
