import { useEffect, useState } from "react";
import BasketItem from "../components/basket/BasketItem";
import { BasketItemButtonComplete } from "../styles/BasketItem";
import { basketRequest } from "../utils/Request";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

const BasketViewContainer = styled.div`
  min-height: 100vh;
`;

const BasketView = () => {
  const [basketData, setBasketData] = useState([]);
  const [uniqueBasketData, setUniqueBasketData] = useState([]);

  const [basketItemsView, setBasketItemsView] = useState(true);
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.login.login);

  function goToHome() {
    navigate("/");
  }

  useEffect(() => {
    basketRequest.get().then((data) => {
      setBasketData(data);
    });
  }, []);

  useEffect(() => {
    setUniqueBasketData([]);
    basketData.map((data, index) => {
      if (data.username == currentUser.username) {
        setUniqueBasketData((prev) => [...prev, data]);
      }
    });
  }, [basketData]);

  return (
    <BasketViewContainer className="container mt-5">
      <h1 className="text-center">Your Basket</h1>
      <hr />

      {basketItemsView &&
        uniqueBasketData.map((data, index) => (
          <BasketItem data={data} key={index} basket={basketData} />
        ))}

      {uniqueBasketData.length !== 0 ? (
        <div className="row justify-content-center gap-3"></div>
      ) : (
        <div className="text-center mt-5">
          <h1>Your basket is empty</h1>
          <BasketItemButtonComplete className="mx-auto" onClick={goToHome}>
            Go Home
          </BasketItemButtonComplete>
        </div>
      )}
    </BasketViewContainer>
  );
};

export default BasketView;
