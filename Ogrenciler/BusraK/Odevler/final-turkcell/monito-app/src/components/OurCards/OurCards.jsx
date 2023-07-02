import React, { useState, useEffect } from "react";
import {
  Title,
  Category,
  Price,
  ProductsNewContainer,
  Image,
  ProductsNewWrapper,
  Div,
} from "./OurCardsStyle";
import { useLocation } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateCart } from "../../redux/slices/cartSlice";
import { useParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OurCards = ({ limit }) => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search");
  const { username } = useParams();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.root.isLogin);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let apiUrl = `http://localhost:3000/products?_limit=${limit}`;

        if (searchQuery) {
          apiUrl += `&title_like=${searchQuery}`;
        }

        const response = await fetch(apiUrl);

        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          throw new Error("Product fetch failed");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, [limit, searchQuery]);

  const handleAddToCart = async (product) => {
    if (!isLoggedIn) {
      return;
    }

    const cartItem = {
      id: product.id,
      name: product.username,
      price: product.price,
      quantity: 1,
      stock: product.rating.count,
      image: product.image,
    };

    try {
      const response = await fetch(
        `http://localhost:3000/carts?userId=${username}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch cart items.");
      }

      const cartItems = await response.json();
      const existingCart = cartItems.find((cart) => cart.userId === username);

      if (existingCart) {
        const existingItem = existingCart.items.find(
          (item) => item.id === cartItem.id
        );

        if (existingItem) {
          const updatedItems = existingCart.items.map((item) => {
            if (item.id === cartItem.id) {
              if (item.quantity < cartItem.stock) {
                return { ...item, quantity: item.quantity + 1 };
              } else {
                alert("Stock is not enough");
              }
            }

            return item;
          });

          const updateResponse = await fetch(
            `http://localhost:3000/carts/${existingCart.id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                id: existingCart.id,
                userId: existingCart.userId,
                items: updatedItems,
              }),
            }
          );

          if (!updateResponse.ok) {
            throw new Error("Failed to update cart on the server.");
          }

          dispatch(updateCart({ userId: username, items: updatedItems }));
          toast.success("Item added to cart");
        } else {
          const updatedItems = [...existingCart.items, cartItem];

          const updateResponse = await fetch(
            `http://localhost:3000/carts/${existingCart.id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                id: existingCart.id,
                userId: existingCart.userId,
                items: updatedItems,
              }),
            }
          );

          if (!updateResponse.ok) {
            throw new Error("Failed to update cart on the server.");
          }

          dispatch(updateCart({ userId: username, items: updatedItems }));
          toast.success("Item added to cart");
        }
      } else {
        const createResponse = await fetch("http://localhost:3000/carts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: username,
            items: [cartItem],
          }),
        });

        if (!createResponse.ok) {
          throw new Error("Failed to create cart on the server.");
        }

        dispatch(addToCart({ userId: username, items: [cartItem] }));
        toast.success("Item added to cart");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <ToastContainer />
      <ProductsNewWrapper className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((product) => (
          <div key={product.id} className="col">
            <ProductsNewContainer>
              <Image src={product.image} className="card-img-top  h-100" />
              <div className="card-body ">
                <Title className="card-title">{product.title}</Title>
                <Category>
                  Genre : <p> {product.category}</p>
                </Category>
                <Category>
                  Rate: <p> {product.rating.rate}</p>
                  <Rating
                    style={{ maxWidth: 100 }}
                    value={product.rating.rate}
                    readOnly
                  />
                </Category>

                <Category>
                  Stock: <p>{product.rating.count}</p>
                </Category>

                <Price>Price: {product.price} $</Price>

                <Div className="d-flex justify-content-around">
                  <img
                    src="../../src/assets/Icon/gift.png"
                    alt="cart"
                    onClick={() => handleAddToCart(product)}
                    className="gift"
                  />
                  <img src="../../src/assets/Icon/dot.png" className="dot" />
                  <div>{product.category}</div>
                </Div>
              </div>
            </ProductsNewContainer>
          </div>
        ))}
      </ProductsNewWrapper>
    </>
  );
};

export default OurCards;
