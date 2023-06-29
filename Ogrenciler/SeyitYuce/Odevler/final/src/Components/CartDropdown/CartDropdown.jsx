import React from "react";
import { BiCartAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CartSidebar = () => {
  const user = useSelector((state) => state.user);
  const userId = user[0].id;
  // Mock data for cart items
  const cartItems = [
    { id: 1, name: "Item 1", price: 10 },
    { id: 2, name: "Item 2", price: 15 },
    { id: 3, name: "Item 3", price: 20 },
  ];

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="dropdown">
      {/* <Link to="/products"> */}
      <button
        className="btn btn-primary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <BiCartAlt />
        <span>{cartItems.length}</span>
      </button>
      {/* </Link> */}
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="#">
            Action
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Another action
          </a>
        </li>
        <li>
          <Link className="dropdown-item" to="/cart">
            Something else here
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default CartSidebar;
