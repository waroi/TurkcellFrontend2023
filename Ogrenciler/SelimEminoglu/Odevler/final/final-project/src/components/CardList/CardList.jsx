import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../../redux/slices/productList";
import {
  CardDiv,
  FlexCardDiv,
  CardİmgDiv,
  CardTextDiv,
  CardTitle,
  CardCategory,
  CardPrice,
  CardButtonDiv,
  CardGiftDiv,
  CardPointDiv,
  CardPoint,
  CardGiftText,
} from "./styleCardList";
import PropTypes from "prop-types";
import Button from "../Button/Button";

function CardList({ isEight }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  useEffect(() => {
    if (products.length > 0 && randomProducts.length == 0) {
      setRandomProducts(randomTwelveProduct(products));
    }
  }, [products, randomProducts]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function randomTwelveProduct(products) {
    const newArr = [];
    let randomİtem;
    for (let i = 0; i < 12; i++) {
      randomİtem = products[randomNumber(0, 19)];

      if (!newArr.some((item) => item.id == randomİtem.id)) {
        newArr.push(randomİtem);
      }
    }
    return newArr;
  }

  return (
    <FlexCardDiv>
      {isEight &&
        randomProducts.slice(0, 8).map((item) => (
          <CardDiv key={self.crypto.randomUUID()}>
            <CardİmgDiv image={item.image}></CardİmgDiv>

            <CardTextDiv>
              <CardTitle>{item.title}</CardTitle>
              <CardCategory>
                Category:{item.category}-Adet:{item.rating.count}
              </CardCategory>
              <CardPrice>{item.price} $</CardPrice>
            </CardTextDiv>
            <CardButtonDiv>
              <Button title="Sepete Ekle" />
            </CardButtonDiv>
          </CardDiv>
        ))}
      {!isEight &&
        randomProducts.slice(0, 4).map((item) => (
          <CardDiv key={self.crypto.randomUUID()}>
            <CardİmgDiv image={item.image}></CardİmgDiv>

            <CardTextDiv>
              <CardTitle>{item.title}</CardTitle>
              <CardCategory>
                Category:{item.category}-Adet:{item.rating.count}
              </CardCategory>
              <CardPrice>{item.price} $</CardPrice>
            </CardTextDiv>
            <CardGiftDiv>
              <img src="./src/assets/icons/gift_icon.svg" alt="logo" />
              <CardPointDiv>
                <CardPoint></CardPoint>
              </CardPointDiv>
              <CardGiftText>Free Toy & Free Shaker</CardGiftText>
            </CardGiftDiv>
            <CardButtonDiv>
              <Button title="Sepete Ekle" />
            </CardButtonDiv>
          </CardDiv>
        ))}
    </FlexCardDiv>
  );
}

CardList.proptypes = {
  isEight: PropTypes.bool,
};

CardList.defaultProptypes = {
  isEight: true,
};

export default CardList;
