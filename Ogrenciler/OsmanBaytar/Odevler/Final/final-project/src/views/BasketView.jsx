import { useEffect, useState } from "react";
import { productRequest } from "../utils/Request";
import BasketItem from "../components/basket/BasketItem";
import {
  BasketItemButtonRemove,
  BasketItemButtonComplete,
} from "../styles/BasketItem";

const BasketView = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    productRequest.get().then((data) => {
      setProductData(data.slice(0, 1));
    });
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center">Your Basket</h1>
      <hr />
      <BasketItem data={productData} />
      <div className="row justify-content-center gap-3">
        <BasketItemButtonRemove>Remove Basket</BasketItemButtonRemove>
        <BasketItemButtonComplete>Complete Order</BasketItemButtonComplete>
      </div>
    </div>
  );
};

export default BasketView;
