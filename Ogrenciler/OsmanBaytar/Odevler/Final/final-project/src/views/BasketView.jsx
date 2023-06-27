import { useEffect, useState } from "react";
import BasketItem from "../components/basket/BasketItem";
import {
  BasketItemButtonRemove,
  BasketItemButtonComplete,
} from "../styles/BasketItem";
import { basketRequest } from "../utils/Request";

const BasketView = () => {
  const [basketData, setBasketData] = useState([]);

  useEffect(() => {
    basketRequest.get().then((data) => {
      setBasketData(data);
    });
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center">Your Basket</h1>
      <hr />
      {basketData.map((data, index) => (
        <BasketItem data={data} key={index} />
      ))}
      <div className="row justify-content-center gap-3">
        <BasketItemButtonRemove>Remove Basket</BasketItemButtonRemove>
        <BasketItemButtonComplete>Complete Order</BasketItemButtonComplete>
      </div>
    </div>
  );
};

export default BasketView;
