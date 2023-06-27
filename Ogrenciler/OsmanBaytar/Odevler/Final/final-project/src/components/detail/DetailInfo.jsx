import {
  DetailInfoBox,
  DetailInfoTitle,
  DetailInfoPrice,
  DetailInfoSubBox,
  DetailInfoSubDiv,
  DetailInfoSubTitle,
} from "../../styles/DetailInfoStyle";
import {
  StaticOrderComponentButtonDark,
  StaticOrderComponentButtonLight,
} from "../../styles/StaticOrderComponent";
import { basketRequest } from "../../utils/Request";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";

const DetailInfo = (props) => {
  const [basketData, setBasketData] = useState({});
  const currentUser = useSelector((state) => state.login.login);
  const navigate = useNavigate();
  const [isOkey, setIsOkey] = useState(false);

  useEffect(() => {
    basketRequest.get().then((data) => {
      setBasketData(data);
    });
  }, []);
  console.log(currentUser);
  console.log(basketData.length);
  console.log(props.data);

  function checkBasket() {
    setIsOkey(true);
    if (currentUser.length !== 0) {
      for (let i = 0; i < basketData.length; i++) {
        if (basketData[i].title == props.data.title) {
          setIsOkey(false);
        }
      }
    }
  }

  useEffect(() => {
    if (isOkey == true) {
      addBasket();
    }
  }, [isOkey]);

  function addBasket() {
    basketRequest.post({
      id: basketData.length + 1,
      username: currentUser.username,
      title: props.data.title,
      price: props.data.price,
      category: props.data.category,
      description: props.data.description,
      image: props.data.image,
      rate: props.data.rate,
      count: props.data.count,
    });
  }

  // function goToBasket() {
  //   navigate("/Basket");
  // }

  // function buyNow() {
  //   basketRequest.post({
  //     id: basketData.length + 1,
  //     username: currentUser.username,
  //     title: props.data.title,
  //     price: props.data.price,
  //     category: props.data.category,
  //     description: props.data.description,
  //     image: props.data.image,
  //     rate: props.data.rate,
  //     count: props.data.count,
  //   });
  //   goToBasket();
  // }

  return (
    <DetailInfoBox className="p-5">
      <DetailInfoTitle>{props.data.title}</DetailInfoTitle>
      <DetailInfoPrice>${props.data.price}</DetailInfoPrice>
      <div className="d-flex justify-content-center align-items-center gap-3">
        <StaticOrderComponentButtonDark onClick={checkBasket}>
          ADD TO CART
        </StaticOrderComponentButtonDark>
        {/* <StaticOrderComponentButtonLight onClick={buyNow}>
          BUY NOW
        </StaticOrderComponentButtonLight> */}
      </div>

      <DetailInfoSubBox className="row">
        <DetailInfoSubDiv className="col-6">
          <DetailInfoSubTitle>Category</DetailInfoSubTitle>
        </DetailInfoSubDiv>
        <DetailInfoSubDiv className="col-6">
          <DetailInfoSubTitle>{props.data.category}</DetailInfoSubTitle>
        </DetailInfoSubDiv>
      </DetailInfoSubBox>
      <DetailInfoSubBox className="row">
        <DetailInfoSubDiv className="col-6">
          <DetailInfoSubTitle>Rating</DetailInfoSubTitle>
        </DetailInfoSubDiv>
        <DetailInfoSubDiv className="col-6">
          <DetailInfoSubTitle>{props.data.rate}/5</DetailInfoSubTitle>
        </DetailInfoSubDiv>
      </DetailInfoSubBox>
      <DetailInfoSubBox className="row">
        <DetailInfoSubDiv className="col-6">
          <DetailInfoSubTitle>Stock</DetailInfoSubTitle>
        </DetailInfoSubDiv>
        <DetailInfoSubDiv className="col-6">
          <DetailInfoSubTitle>{props.data.count}</DetailInfoSubTitle>
        </DetailInfoSubDiv>
      </DetailInfoSubBox>
      <DetailInfoSubBox>
        <DetailInfoSubTitle>{props.data.description}</DetailInfoSubTitle>
      </DetailInfoSubBox>
    </DetailInfoBox>
  );
};

export default DetailInfo;
