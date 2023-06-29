import React, { useEffect } from "react";
import { BiCartAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserCart } from "../../redux/slices/cartSlice";

const CartSidebar = () => {
  const user = useSelector((state) => state.user);
  const userId = user && user[0]?.id;
  // console.log(user, userId);
  const dispatch = useDispatch();
  const userCart = useSelector((state) => state.user[0]?.cart);

  const getCartItems = () => {
    fetch(`http://localhost:3000/users?id=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data[0].cart.map((item) => item.price));
        dispatch(setUserCart(data[0].cart));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCartItems();
  }, [userCart]);

  return (
    <>
      {user && user[0].id ? (
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <BiCartAlt />
          </button>
          {userCart &&
            userCart.map((item) => (
              <div
                key={item.id}
                className="dropdown-menu "
                style={{ height: "80vh", overflowY: "scroll" }}
              >
                <img src={item.image} alt="" width={"40%"} />
                <p>{item.name}</p>
                <div className="d-flex justify-content-around">
                  <span>Price: ${item.price}</span>
                  <span>Quantity: {item.quantity}</span>
                </div>
                <button>Clear Cart</button>
                <Link to="/cart">Go to Cart</Link>
              </div>
            ))}
        </div>
      ) : (
        <>
          <Link className="btn" type="button" to={"/login"}>
            Login
          </Link>
        </>
      )}
    </>
  );
};

export default CartSidebar;
