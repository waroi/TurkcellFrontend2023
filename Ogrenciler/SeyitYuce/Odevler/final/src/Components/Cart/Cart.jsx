import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setUserCart,
} from "../../redux/slices/cartSlice";
import { Link } from "react-router-dom";
import { BsFillTrashFill } from "react-icons/bs";

const Cart = () => {
  const user = useSelector((state) => state.user);
  const userId = useSelector((state) => state.user[0]?.id);
  const dispatch = useDispatch();
  const userCart = useSelector((state) => state.cart);
  const [cartItems, setCartItems] = useState(userCart);
  const total = userCart
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  const updateCartItemQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) {
      return;
    }
    const item = userCart.find((item) => item.id === itemId);

    if (item.stock && newQuantity > item.stock) {
      toast.error(
        `Cannot add more than available stock, stock available:${item.stock}`,
        {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
      return;
    }
    const updatedCart = userCart.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    fetch(`http://localhost:3000/users/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cart: updatedCart }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(setUserCart(updatedCart));
        toast.success("Item quantity updated successfully", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        getCartItems();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const decreaseQuantity = (itemId) => {
    const item = userCart.find((item) => item.id === itemId);
    if (item.quantity === 1) {
      const confirmed = window.confirm(
        "Are you sure you want to delete the item from the cart?"
      );
      if (confirmed) {
        deleteCartItem(itemId);
      } else {
        toast.error("Item deletion cancelled", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        return;
      }
    } else if (item.quantity > 1) {
      const newQuantity = item.quantity - 1;
      updateCartItemQuantity(itemId, newQuantity);
    }
  };

  const increaseQuantity = (itemId) => {
    const item = userCart.find((item) => item.id === itemId);
    const newQuantity = item.quantity + 1;
    updateCartItemQuantity(itemId, newQuantity);
  };
  const emptyCartAndDecreaseStocks = () => {
    userCart.forEach((item) => {
      fetch(`http://localhost:4000/products/${item.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          stock: item.stock - item.quantity,
        }),
      })
        .then((res) => res.json())
        .catch((err) => {
          console.log(err);
        });
    });

    fetch(`http://localhost:3000/users/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cart: [] }),
    })
      .then((res) => res.json())
      .then(() => {
        dispatch(emptyCart());
        setCartItems([]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCartItems = () => {
    fetch(`http://localhost:3000/users?id=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setUserCart(data[0].cart));
        setCartItems(data[0].cart);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCartItems();
  }, [userCart]);

  return (
    <div>
      {user && user[0]?.id ? (
        <div>
          <h2>Cart</h2>
          <div className="card mb-3 gap-5">
            {userCart.map((item) => (
              <div key={item.id} className="d-flex">
                <div>
                  <img src={item.image} alt="" width={"100px"} />
                </div>
                <div>
                  <p>{item.name}</p>
                  <p>Price: ${item.price * item.quantity}</p>
                  <div>
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <input
                      className="w-75"
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        updateCartItemQuantity(
                          item.id,
                          parseInt(e.target.value)
                        )
                      }
                      min={1}
                    />{" "}
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                    <button>
                      <BsFillTrashFill className="text-danger" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="d-flex justify-content-between">
              <h5>Total: ${total}</h5>
              <button
                className="btn btn-success"
                onClick={emptyCartAndDecreaseStocks}
              >
                Buy All
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {" "}
          Please <Link to="/login"> login </Link> first
        </div>
      )}
    </div>
  );
};

export default Cart;
