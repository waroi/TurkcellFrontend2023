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
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { productRequest } from "../../utils/Request";

const BasketItem = (props) => {
  const [isView, setIsView] = useState(true);
  const [productData, setProductData] = useState([]);
  const [productId, setProductId] = useState(0);
  const navigate = useNavigate();

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
  // console.log(data);
  // console.log(data.id);

  const dispatch = useDispatch();
  function removeBasket() {
    dispatch(deleteBasket(data.id));
    setIsView(false);
  }

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
              <BasketItemInput type="number" min="1" max={data.count} />
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
