import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setUserCart,
  updateCartItemQuantity,
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

  const handleQuantityChange = (item, newQuantity) => {
    const updatedItem = { ...item, quantity: newQuantity };
    dispatch(updateCartItemQuantity(updatedItem));

    // Update quantity in the JSON server
    fetch(`http://localhost:3000/users/${userId}/cart/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity: newQuantity }),
    })
      .then((res) => res.json())
      .then((updatedItem) => {
        const updatedCart = userCart.map((cartItem) =>
          cartItem.id === updatedItem.id ? updatedItem : cartItem
        );
        dispatch(setUserCart(updatedCart));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCartItems = () => {
    fetch(`http://localhost:3000/users?id=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        dispatch(setUserCart(data[0].cart));
        setCartItems(data[0].cart);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCartItems();
  }, []);

  console.log(userCart);

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
                    <button
                      onClick={() =>
                        handleQuantityChange(item, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <span> Quantity: {item.quantity}</span>
                    <button
                      onClick={() =>
                        handleQuantityChange(item, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                    <button>
                      <BsFillTrashFill className="text-danger" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <h5>Total: ${total}</h5>
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
