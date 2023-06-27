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
import { productRequest } from "../../utils/Request";
import { addBasketCount } from "../../redux/slices/basketAddSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";

const BasketItem = (props) => {
  const [isView, setIsView] = useState(true);
  const [productData, setProductData] = useState([]);
  const [productId, setProductId] = useState(0);
  const navigate = useNavigate();
  console.log(props.complete);
  const basketNumber = useSelector((state) => state.basketAdd.count);

  const countInput = useRef();

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
  console.log(data);
  // console.log(data.id);

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
    }
  }, [props.complete]);

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
