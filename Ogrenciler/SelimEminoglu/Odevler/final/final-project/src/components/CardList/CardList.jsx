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
} from "./styleCardList";

function CardList() {
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
      setRandomProducts(randomEightProduct(products));
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

  function randomEightProduct(products) {
    const newArr = [];
    let randomİtem;
    for (let i = 0; i < 8; i++) {
      randomİtem = products[randomNumber(0, 19)];
      newArr.push(randomİtem);
    }
    return newArr;
  }

  return (
    <FlexCardDiv>
      {randomProducts.map((item) => (
        <CardDiv key={self.crypto.randomUUID()}>
          <CardİmgDiv image={item.image}></CardİmgDiv>

          <CardTextDiv>
            <CardTitle>{item.title}</CardTitle>
            <CardCategory>
              Category:{item.category}-Adet:{item.rating.count}
            </CardCategory>
            <CardPrice>{item.price}</CardPrice>
          </CardTextDiv>
        </CardDiv>
      ))}
    </FlexCardDiv>
  );
}

export default CardList;
