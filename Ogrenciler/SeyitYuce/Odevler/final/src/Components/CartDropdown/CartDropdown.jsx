import React, { useEffect, useState } from "react";
import { BiCartAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserCart } from "../../redux/slices/cartSlice";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { BsFillTrashFill } from "react-icons/bs";
import { toast } from "react-toastify";

const CartSidebar = () => {
  const user = useSelector((state) => state.user);
  const userId = user && user[0]?.id;
  const dispatch = useDispatch();
  const userCart = useSelector((state) => state.cart);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);

  const getCartItems = () => {
    fetch(`http://localhost:3000/users?id=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setUserCart(data[0].cart));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteCart = () => {
    fetch(`http://localhost:3000/users/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cart: [] }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(setUserCart([]));
        toast.success("Cart deleted successfully", {
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

  const deleteCartItem = (itemId) => {
    const updatedCart = userCart.filter((item) => item.id !== itemId);
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
        toast.success("Item deleted successfully", {
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

  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <BiCartAlt />
        {userCart && userCart?.length}
      </Button>

      {user && user[0].id ? (
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {userCart.map((item) => (
              <div
                className="mb-3 row border border-dark rounded"
                key={item.id}
              >
                <div className="col-5 my-auto">
                  <img src={item.image} alt="" className="w-100 " />
                </div>
                <div className="col-7">
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <div className="d-flex gap-1 mb-3">
                    <button
                      className="btn-quantity"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      -
                    </button>
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
                    />

                    <button
                      className="btn-quantity"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteCartItem(item.id)}
                  >
                    <BsFillTrashFill />
                  </button>
                </div>
              </div>
            ))}
            <div className="d-flex justify-content-between">
              {userCart.length > 0 ? (
                <>
                  <Link to={"/cart"} className="btn btn-primary">
                    Proceed to Checkout
                  </Link>
                  <button className="btn btn-danger" onClick={deleteCart}>
                    Delete Cart
                  </button>
                </>
              ) : (
                <div>
                  <div>Cart is empty</div>
                  <div>
                    <button className="btn btn-primary" disabled>
                      Proceed to Checkout{" "}
                    </button>
                    <button className="btn btn-danger" disabled>
                      Delete Cart
                    </button>
                  </div>
                </div>
              )}
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      ) : (
        <>
          <Link className="btn" type="button" to={"/login"}>
            You are not logged in. Please <Link to="/login"> login </Link> first
          </Link>
        </>
      )}
    </>
  );
};

export default CartSidebar;
