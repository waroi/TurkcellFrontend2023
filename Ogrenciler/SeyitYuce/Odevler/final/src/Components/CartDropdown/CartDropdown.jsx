import React from "react";
import { BiCartAlt } from "react-icons/bi";

const CartSidebar = () => {
  // Mock data for cart items
  const cartItems = [
    { id: 1, name: "Item 1", price: 10 },
    { id: 2, name: "Item 2", price: 15 },
    { id: 3, name: "Item 3", price: 20 },
  ];

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-sidebar">
      <button
        className="btn btn-primary cart-sidebar-toggle"
        type="button"
        data-bs-toggle="dropdown"
        data-bs-target="#cartSidebar"
        aria-controls="cartSidebar"
        aria-expanded="false"
      >
        <BiCartAlt />
        <span>{cartItems.length}</span>
      </button>

      <div className="dropdown-menu" id="cartSidebar">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="cartSidebarLabel">
            Cart
          </h5>
          <p>{cartItems.length} items</p>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul className="list-group">
              {cartItems.map((item) => (
                <li key={item.id} className="list-group-item">
                  {item.name} - ${item.price}
                </li>
              ))}
            </ul>
          )}

          {cartItems.length > 0 && (
            <div className="total-price">
              <strong>Total Price:</strong> ${totalPrice}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
