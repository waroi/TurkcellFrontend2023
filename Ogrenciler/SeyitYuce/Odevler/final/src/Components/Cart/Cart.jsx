import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserCart } from "../../redux/slices/cartSlice";

const Cart = () => {
  const userId = useSelector((state) => state.user[0].id);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.user.cart);


  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <h2>Cart</h2>
      {/* {cart.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))} */}
    </div>
  );
};

export default Cart;
