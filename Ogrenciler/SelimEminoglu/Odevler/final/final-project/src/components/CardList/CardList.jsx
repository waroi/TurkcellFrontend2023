import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../../redux/slices/productList";
import { fetchCart } from "../../redux/slices/cartsList";
import { toast } from "react-toastify";
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
  UpdateButton,
  AddCartButton,
} from "./styleCardList";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function successPost() {
  toast.success(`Sepete Eklendi`, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    theme: "dark",
  });
}

function failPost(error) {
  toast.error(`Hata:${error}`, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    theme: "dark",
  });
}

function warningPost() {
  toast.warning(`Giriş Yapınız!!`, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    theme: "dark",
  });
}

function CardList({ isEight, isGift }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);

  const carts = useSelector((state) => state.cart.carts);
  const loadingCart = useSelector((state) => state.cart.loading);
  const errorCart = useSelector((state) => state.cart.error);

  const [randomProducts, setRandomProducts] = useState([]);
  const isActiveUser = useSelector((state) => state.user.isActiveUser);
  const activeUser = useSelector((state) => state.user.activeUser);

  useEffect(() => {
    dispatch(fetchProduct());
    dispatch(fetchCart());
  }, [dispatch]);

  useEffect(() => {
    if (products.length > 0 && randomProducts.length == 0) {
      setRandomProducts(randomTwelveProduct(products));
    }
  }, [products, randomProducts]);

  if (loading) {
    return <div>Yükleniyor...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (loadingCart) {
    return <div>Yükleniyor...</div>;
  }

  if (errorCart) {
    return <div>Error: {error}</div>;
  }

  function sendProduct(product) {
    carts.map((item) => {
      console.log(item);
    });

    products.map((item) => {
      if (item.id === product.id) {
        if (item.rating.count > 1) {
          let sendBody = {
            userId: activeUser.id,
            products: { ...item, rating: { ...item.rating, count: 1 } },
          };

          fetch("http://localhost:3001/carts", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(sendBody),
          })
            .then(() => {
              successPost();
            })
            .catch((err) => {
              failPost(err);
            });
        }
      }
    });
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
            <Link to={isActiveUser ? `/products/${item.id}` : "/login"}>
              <CardİmgDiv image={item.image}></CardİmgDiv>
            </Link>
            <CardTextDiv>
              <CardTitle>{item.title}</CardTitle>
              <CardCategory>
                Category:{item.category}-Adet:{item.rating.count}
              </CardCategory>
              <CardPrice>{item.price} $</CardPrice>
            </CardTextDiv>
            {isGift && (
              <CardGiftDiv>
                <img src="./src/assets/icons/gift_icon.svg" alt="logo" />
                <CardPointDiv>
                  <CardPoint></CardPoint>
                </CardPointDiv>
                <CardGiftText>Free Toy & Free Shaker</CardGiftText>
              </CardGiftDiv>
            )}
            <CardButtonDiv>
              <AddCartButton
                onClick={
                  isActiveUser ? () => sendProduct(item) : () => warningPost()
                }
              >
                Sepete Ekle
              </AddCartButton>
            </CardButtonDiv>
            {activeUser.isAdmin && (
              <CardButtonDiv>
                <UpdateButton>Güncelle</UpdateButton>
              </CardButtonDiv>
            )}
          </CardDiv>
        ))}
      {!isEight &&
        randomProducts.slice(0, 4).map((item) => (
          <CardDiv key={self.crypto.randomUUID()}>
            <Link to={isActiveUser ? `/products/${item.id}` : "/login"}>
              <CardİmgDiv image={item.image}></CardİmgDiv>
            </Link>
            <CardTextDiv>
              <CardTitle>{item.title}</CardTitle>
              <CardCategory>
                Category:{item.category}-Adet:{item.rating.count}
              </CardCategory>
              <CardPrice>{item.price} $</CardPrice>
            </CardTextDiv>
            <CardButtonDiv>
              <AddCartButton
                onClick={
                  isActiveUser ? () => sendProduct(item) : () => warningPost()
                }
              >
                Sepete Ekle
              </AddCartButton>
            </CardButtonDiv>
            {activeUser.isAdmin && (
              <CardButtonDiv>
                <UpdateButton>Güncelle</UpdateButton>
              </CardButtonDiv>
            )}
          </CardDiv>
        ))}
    </FlexCardDiv>
  );
}

CardList.proptypes = {
  isEight: PropTypes.bool,
  isGift: PropTypes.bool,
};

CardList.defaultProptypes = {
  isEight: true,
  isGift: false,
};

export default CardList;
