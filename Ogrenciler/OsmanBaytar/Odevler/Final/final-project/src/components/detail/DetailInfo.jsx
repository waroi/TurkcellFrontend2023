import {
  DetailInfoBox,
  DetailInfoTitle,
  DetailInfoPrice,
  DetailInfoSubBox,
  DetailInfoSubDiv,
  DetailInfoSubTitle,
} from "../../styles/DetailInfoStyle";
import { StaticOrderComponentButtonDark } from "../../styles/StaticOrderComponent";
import { basketRequest } from "../../utils/Request";
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addBasketCount } from "../../redux/slices/basketAddSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DetailInfo = (props) => {
  const [basketData, setBasketData] = useState({});
  const currentUser = useSelector((state) => state.login.login);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const basketNumber = useSelector((state) => state.basketAdd.count);

  const isLoggedIn = localStorage.getItem("login") ? true : false;

  const [isOkey, setIsOkey] = useState(false);
  const [isWarning, setIsWarning] = useState(false);
  const buttonDisabled = useRef();
  const [maxId, setMaxId] = useState(0);

  function warningToast() {
    toast.warning("Product has already added to basket!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  useEffect(() => {
    if (isLoggedIn) {
      buttonDisabled.current.disabled = false;
    } else {
      buttonDisabled.current.disabled = true;
    }
  }, [isLoggedIn]);

  useEffect(() => {
    basketRequest.get().then((data) => {
      setBasketData(data);
    });
  }, []);

  useEffect(() => {
    if (basketData.length > 0) {
      setMaxId(basketData[basketData.length - 1].id);
    }
  }, [basketData]);

  function checkBasket() {
    setIsOkey(true);
    setIsWarning(false);
    if (currentUser.length !== 0) {
      for (let i = 0; i < basketData.length; i++) {
        if (
          basketData[i].title == props.data.title &&
          basketData[i].username == currentUser.username
        ) {
          setIsOkey(false);
          setIsWarning(true);
        }
      }
    }
  }

  useEffect(() => {
    if (isOkey == true) {
      addBasket();
      navigate("/Basket");
      dispatch(addBasketCount(basketNumber + 1));
    }
  }, [isOkey]);

  useEffect(() => {
    if (isWarning == true) {
      warningToast();
    }
  }, [isWarning]);

  function addBasket() {
    basketRequest.post({
      id: maxId + 1,
      username: currentUser.username,
      title: props.data.title,
      price: props.data.price,
      category: props.data.category,
      description: props.data.description,
      image: props.data.image,
      rate: props.data.rate,
      count: props.data.count,
      sliderImages: props.data.sliderImages,
    });
  }

  return (
    <DetailInfoBox className="p-5">
      <DetailInfoTitle>{props.data.title}</DetailInfoTitle>
      <DetailInfoPrice>${props.data.price}</DetailInfoPrice>
      <div className="d-flex justify-content-center align-items-center gap-3">
        <StaticOrderComponentButtonDark
          ref={buttonDisabled}
          onClick={checkBasket}
        >
          ADD TO CART
        </StaticOrderComponentButtonDark>
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
      <ToastContainer />
    </DetailInfoBox>
  );
};

export default DetailInfo;
