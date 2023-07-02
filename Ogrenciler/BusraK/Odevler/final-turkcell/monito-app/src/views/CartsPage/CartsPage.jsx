import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { removeItemsFromCart, updateCart } from "../../redux/slices/cartSlice";
import { setUsername, setLoginStatus } from "../../redux/slices/mainSlice";
import { Container } from "./CartsPageStyle.jsx";
import { setCartItemsCount } from "../../redux/slices/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import StButton from "../../components/Button/Button";
const CartsPage = () => {
  const { username } = useParams();
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.root.isLogin);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/carts?userId=${username}`
        );
        const cartData = await response.json();

        if (response.ok) {
          const cart = cartData.find((cart) => cart.userId === username);

          if (cart) {
            setCartItems(cart.items || []);
          } else {
            setCartItems([]);
          }
        } else {
          throw new Error("Failed to fetch cart items.");
        }
      } catch (error) {
        toast.error("Failed to fetch cart items.");
      }
    };

    fetchCartItems();
  }, [username]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/users?username=${username}`
        );
        if (response.ok) {
          const data = await response.json();
          if (data.length > 0) {
            const user = data[0];
            dispatch(setUsername(user.username));
            dispatch(setLoginStatus(user.isLogin));
          }
        } else {
          throw new Error("Failed to fetch user information");
        }
      } catch (error) {
        toast.error("Failed to fetch user information");
      }
    };

    const checkUserSession = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/users?isLogin=true`
        );
        if (response.ok) {
          const data = await response.json();
          if (data.length > 0) {
            const user = data[0];
            dispatch(setUsername(user.username));
            dispatch(setLoginStatus(true));
          }
        } else {
          throw new Error("Failed to check user session");
        }
      } catch (error) {
        toast.error("Failed to check user session");
      }
    };

    if (isLoggedIn && username === "") {
      fetchUser();
    } else if (!isLoggedIn) {
      checkUserSession();
    }
  }, [isLoggedIn, username, dispatch]);

  useEffect(() => {
    const calculateTotalPrice = () => {
      let totalPrice = 0;
      cartItems.forEach((item) => {
        totalPrice += item.price * item.quantity;
      });
      setTotalPrice(totalPrice);
    };

    calculateTotalPrice();
  }, [cartItems]);

  const handlePurchase = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/carts?userId=${username}`
      );
      const cartData = await response.json();

      if (response.ok) {
        const cart = cartData.find((cart) => cart.userId === username);

        if (cart) {
          const cartId = cart.id;
          const itemsToRemove = cart.items || [];

          dispatch(removeItemsFromCart(username));

          const removeResponse = await fetch(
            `http://localhost:3000/carts/${cartId}`,
            {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                items: [],
              }),
            }
          );

          if (!removeResponse.ok) {
            throw new Error("Failed to remove cart items.");
          }

          for (const item of itemsToRemove) {
            const { id, quantity } = item;

            const productResponse = await fetch(
              `http://localhost:3000/products/${id}`
            );
            const product = await productResponse.json();

            if (!productResponse.ok) {
              throw new Error(`Failed to fetch product with id ${id}.`);
            }
            const updatedCount = product.rating.count - quantity;

            const updateResponse = await fetch(
              `http://localhost:3000/products/${id}`,
              {
                method: "PATCH",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  rating: {
                    ...product.rating,
                    count: updatedCount,
                  },
                }),
              }
            );

            if (!updateResponse.ok) {
              throw new Error(`Failed to update product with id ${id}.`);
            }
          }

          setCartItems([]);
          setTotalPrice(0);
          dispatch(setCartItemsCount(0));
          dispatch(updateCart({ userId: username, items: [] }));
          toast.success("Items successfully removed from cart.");
        } else {
          toast.error("Failed to remove items from cart.");
        }
      } else {
        throw new Error("Failed to fetch cart items.");
      }
    } catch (error) {
      toast.error("Failed to remove items from cart.");
    }
    toast.success("Items successfully purchased.");
  };

  const handleIncrement = async (itemId) => {
    const productResponse = await fetch(
      `http://localhost:3000/products/${itemId}`
    );
    const product = await productResponse.json();

    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        if (item.quantity < product.rating.count) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
      }
      return item;
    });
    dispatch(setCartItemsCount(updatedCartItems.length));
    setCartItems(updatedCartItems);

    try {
      const response = await fetch(
        `http://localhost:3000/carts?userId=${username}`
      );
      const cartData = await response.json();

      if (response.ok) {
        const cart = cartData.find((cart) => cart.userId === username);

        if (cart) {
          const cartId = cart.id;

          const cartItemsToUpdate = cart.items.map((item) => {
            if (item.id === itemId) {
              const updatedQuantity =
                item.quantity < product.rating.count
                  ? item.quantity + 1
                  : item.quantity;
              return {
                ...item,
                quantity: updatedQuantity,
              };
            }
            return item;
          });

          const updateResponse = await fetch(
            `http://localhost:3000/carts/${cartId}`,
            {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                items: cartItemsToUpdate,
              }),
            }
          );

          if (!updateResponse.ok) {
            throw new Error(
              `Failed to update cart items for cart with id ${cartId}.`
            );
          }
        } else {
          toast.error("Failed to update cart items.");
        }
      } else {
        throw new Error("Failed to fetch cart items.");
      }
    } catch (error) {
      toast.error("Failed to update cart items.");
    }

    toast.success("Cart items updated (increment)  successfully.");
  };

  const handleDecrement = async (itemId) => {
    const productResponse = await fetch(
      `http://localhost:3000/products/${itemId}`
    );

    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        if (item.quantity > 0) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
      }
      return item;
    });
    dispatch(setCartItemsCount(updatedCartItems.length));
    setCartItems(updatedCartItems);

    try {
      const response = await fetch(
        `http://localhost:3000/carts?userId=${username}`
      );
      const cartData = await response.json();

      if (response.ok) {
        const cart = cartData.find((cart) => cart.userId === username);

        if (cart) {
          const cartId = cart.id;

          const cartItemsToUpdate = cart.items.map((item) => {
            if (item.id === itemId) {
              const updatedQuantity = item.quantity > 0 ? item.quantity - 1 : 0;
              return {
                ...item,
                quantity: updatedQuantity,
              };
            }
            return item;
          });

          const updateResponse = await fetch(
            `http://localhost:3000/carts/${cartId}`,
            {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                items: cartItemsToUpdate,
              }),
            }
          );

          if (!updateResponse.ok) {
            throw new Error(
              `Failed to update cart items for cart with id ${cartId}.`
            );
          }
        } else {
          toast.error("Failed to update cart items.");
        }
      } else {
        throw new Error("Failed to fetch cart items.");
      }
    } catch (error) {
      toast.error("Failed to update cart items.");
    }
    toast.success("Cart items updated (decrement) successfully.");
  };

  const handleQuantityChange = async (itemId, event) => {
    const quantity = parseInt(event.target.value);
    const productResponse = await fetch(
      `http://localhost:3000/products/${itemId}`
    );
    const product = await productResponse.json();

    if (!isNaN(quantity) && quantity >= 0 && quantity < product.rating.count) {
      const updatedCartItems = cartItems.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            quantity,
          };
        }
        return item;
      });
      setCartItems(updatedCartItems);
      dispatch(setCartItemsCount(updatedCartItems.length));

      try {
        const response = await fetch(
          `http://localhost:3000/carts?userId=${username}`
        );
        const cartData = await response.json();

        if (response.ok) {
          const cart = cartData.find((cart) => cart.userId === username);

          if (cart) {
            const cartId = cart.id;

            const cartItemsToUpdate = cart.items.map((item) => {
              if (item.id === itemId) {
                return {
                  ...item,
                  quantity,
                };
              }
              return item;
            });

            const updateResponse = await fetch(
              `http://localhost:3000/carts/${cartId}`,
              {
                method: "PATCH",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  items: cartItemsToUpdate,
                }),
              }
            );

            if (!updateResponse.ok) {
              throw new Error(
                `Failed to update cart items for cart with id ${cartId}.`
              );
            }
          } else {
            toast.error("Failed to update cart items.");
          }
        } else {
          throw new Error("Failed to fetch cart items.");
        }
      } catch (error) {
        toast.error("Failed to update cart items.");
      }
    }

    toast.success("Cart items updated successfully.");
  };

  const handleRemove = async (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);

    setCartItems(updatedCartItems);
    dispatch(setCartItemsCount(updatedCartItems.length));
    try {
      const response = await fetch(
        `http://localhost:3000/carts?userId=${username}`
      );
      const cartData = await response.json();

      if (response.ok) {
        const cart = cartData.find((cart) => cart.userId === username);

        if (cart) {
          const cartId = cart.id;

          const cartItemsToUpdate = cart.items.filter(
            (item) => item.id !== itemId
          );

          const updateResponse = await fetch(
            `http://localhost:3000/carts/${cartId}`,
            {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                items: cartItemsToUpdate,
              }),
            }
          );

          if (!updateResponse.ok) {
            throw new Error(
              `Failed to update cart items for cart with id ${cartId}.`
            );
          }
        } else {
          toast.error("Failed to update cart items.");
        }
      } else {
        throw new Error("Failed to fetch cart items.");
      }
    } catch (error) {
      toast.error("Failed to update cart items.");
    }

    toast.success("Cart items removed successfully.");
  };

  return (
    <Container className="pt-5 container">
      <ToastContainer />
      <h1 className="pt-5 text-start ms-5">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center">
          <h2 className="text-center">Your cart is empty</h2>
          <Link to="/products">
            <button className="btn btn-primary">Go to products</button>
          </Link>
        </div>
      ) : (
        <div className="d-flex row mx-auto ">
          <div>
            <div className="row p-4 g-0  ">
              <div className="col-md-2">Image</div>

              <div className="col-md-2">Price</div>
              <div className="col-md-2">Quantity</div>

              <div className="col-md-1">Total</div>
            </div>
          </div>
          <div>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="row g-0 gap-0 border-bottom p-2 pt-5 mt-3 border-top bg-light border-1 rounded-5"
              >
                <div className="col-md-2">
                  <img src={item.image} alt={item.title} className="w-25" />
                </div>

                <div className="col-md-2">{item.price}</div>
                <div className="col-md-2">
                  <div className="d-flex align-items-center justify-content-around p-5">
                    <button
                      className="bg-primary text-white border-0 rounded p-1 px-2 "
                      onClick={() => handleDecrement(item.id)}
                    >
                      -
                    </button>
                    <input
                      className="w-50 text-center border-1  rounded p-1 px-2 "
                      type="text"
                      min="0"
                      value={item.quantity}
                      onChange={(event) => handleQuantityChange(item.id, event)}
                    />
                    <button
                      className="bg-primary text-white border-0 rounded p-1 px-2 "
                      onClick={() => handleIncrement(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="col-md-1">{item.price * item.quantity}</div>
                <div className="col-md-3 d-flex justify-content-center p-5">
                  <StButton
                    type="dark-blue"
                    text="Remove"
                    onClick={() => handleRemove(item.id)}
                  ></StButton>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5">
            <h3>Total Price: {totalPrice} $</h3>
          </div>
          <div
            className="mt-5 d-flex justify-content-center
          p-3"
          >
            <StButton
              type="dark-blue"
              text=" Checkout"
              onClick={handlePurchase}
            />
          </div>
        </div>
      )}
    </Container>
  );
};

export default CartsPage;
