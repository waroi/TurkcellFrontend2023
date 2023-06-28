import {
  BasketItemImage,
  BasketItemContainer,
  BasketItemTitle,
  BasketItemP,
  BasketItemButtonRemove,
  BasketItemInput,
  BasketItemSpan,
} from "../../styles/BasketItem";
import { deleteBasket } from "../../redux/slices/basketSlice";
import { useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { basketRequest, productRequest } from "../../utils/Request";
import { addBasketCount } from "../../redux/slices/basketAddSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";

const BasketItem = (props) => {
  const [isView, setIsView] = useState(true);
  const [productData, setProductData] = useState([]);
  const [productId, setProductId] = useState(0);
  const navigate = useNavigate();

  const basketNumber = useSelector((state) => state.basketAdd.count);

  const countInput = useRef();

  const [intersectedData, setIntersectedData] = useState([]);
  const [intersectedCount, setIntersectedCount] = useState(0);

  const currentUser = useSelector((state) => state.login.login);

  useEffect(() => {
    productRequest.get().then((data) => {
      setProductData(data);
    });
  }, []);

  useEffect(() => {
    {
      for (let i = 0; i < productData.length; i++) {
        if (productData[i].title == props.data.title) {
          setProductId(i + 1);
        }
      }
    }
  }, [productData]);

  function goToDetail() {
    navigate(`/Products/${productId}`);
  }

  const data = props.data;
  const basket = props.basket;
  // console.log(data);
  // console.log(productId);
  // console.log(basket);
  // console.log(data.id);

  useEffect(() => {
    setIntersectedCount(intersectedCount + 1);
    if (intersectedCount == 0) {
      basket.map((data, index) => {
        if (data.title == props.data.title) {
          intersectedData.push(data);
        }
      });
    }
  }, [basket]);
  console.log(intersectedData);

  const dispatch = useDispatch();

  function removeBasket() {
    dispatch(deleteBasket(data.id));
    setIsView(false);
    dispatch(addBasketCount(basketNumber + 1));
  }

  useEffect(() => {
    if (props.complete == true) {
      console.log(countInput?.current?.value);
      productRequest.put(productId, {
        id: productId,
        title: data.title,
        price: data.price,
        description: data.description,
        category: data.category,
        image: data.image,
        rate: data.rate,
        count: data.count - countInput?.current?.value,
        sliderImages: data.sliderImages,
      });
      dispatch(deleteBasket(data.id));

      intersectedData.map((data, index) => {
        if (data.username != currentUser.username) {
          basketRequest.put(data.id, {
            id: data.id,
            title: data.title,
            price: data.price,
            description: data.description,
            category: data.category,
            image: data.image,
            rate: data.rate,
            username: data.username,
            count: data.count - countInput?.current?.value,
            sliderImages: data.sliderImages,
          });
        }
      });
    }
  }, [props.complete]);

  // useEffect(() => {
  //   if (props.complete == true) {
  //     intersectedData.map((data, index) => {
  //       basketRequest.put(data.id, {
  //         id: data.id,
  //         title: data.title,
  //         price: data.price,
  //         description: data.description,
  //         category: data.category,
  //         image: data.image,
  //         username: data.username,
  //         count: data.count - countInput?.current?.value,
  //       });
  //     });
  //   }
  // }, [props.complete]);

  return (
    <>
      {isView && (
        <BasketItemContainer className="row p-3">
          <div className="col-lg-4">
            <BasketItemImage onClick={goToDetail} src={data.image} />
          </div>
          <div className="col-lg-8 my-auto">
            <BasketItemTitle>{data.title}</BasketItemTitle>
            <BasketItemP>Price: ${data.price}</BasketItemP>
            <BasketItemP>Category: {data.category}</BasketItemP>
            <BasketItemP>Stock: {data.count}</BasketItemP>
            <div>
              <BasketItemSpan className="me-3">Quantity:</BasketItemSpan>
              <BasketItemInput
                ref={countInput}
                type="number"
                min="1"
                max={data.count}
              />
            </div>

            <BasketItemButtonRemove onClick={removeBasket}>
              Remove
            </BasketItemButtonRemove>
          </div>
        </BasketItemContainer>
      )}
    </>
  );
};

export default BasketItem;
