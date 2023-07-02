import HeaderComponent from "../../components/Header/HeaderComponent";
import { Footer } from "../../components/Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import {
  getCartAction,
  updateCartAction,
  removeProductFromCartAction,
  createOrderAction
} from "../../redux/actions/cartActions";
import { useEffect, useState } from "react";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [quantity, setQuantity] = useState({});
  const dispatch = useDispatch();

  const handleIncrement = (id) => {
    setQuantity({ ...quantity, [id]: parseInt(quantity[id]) + 1 });
  };

  const handleDecrement = (id) => {
    if (quantity[id] > 1) {
      setQuantity({ ...quantity, [id]: parseInt(quantity[id]) - 1 });
    }
  };

  const handleOnChange = (event, id) => {
    setQuantity({ ...quantity, [id]: parseInt(event.target.value) });
  };

  const handleApplyButton = () => {
    const newProducts = cart.cart.products.map((item) => {
      return { ...item, quantity: parseInt(quantity[item.productId]) };
    });

    const newCart = { ...cart.cart, products: newProducts };
    dispatch(updateCartAction(newCart));
  };

    const handleRemoveProduct = (id) => {
       dispatch(removeProductFromCartAction(id));
    };

    const handleOrder = () => {
        dispatch(createOrderAction());
    };

  useEffect(() => {
    dispatch(getCartAction());
  }, [dispatch]);

  useEffect(() => {
    const newQuantity = {};
    cart.cart.products.forEach((item) => {
      newQuantity[item.productId] = parseInt(item.quantity);
    });
    setQuantity(newQuantity);
  }, [cart.cart.products]);

  return (
    <>
      <HeaderComponent />
      <div className="container">
        <div className="row p-4">
          <div className="col-12">
            <h4>Cart</h4>
            <table className="table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {!cart.cart.products?.length == 0 ? cart.cart.products?.map((item) => (
                  <tr key={item.productId}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                    <td>{item.price * item.quantity}</td>
                    <td>
                      <div className="row ">
                        <div className="col-4 quantity">
                          <button
                            className="btn btn-outline-primary"
                            onClick={() => handleIncrement(item.productId)}
                          >
                            +
                          </button>
                          <input
                            type="text"
                            className="form-control"
                            value={quantity[item.productId] || item.quantity}
                            onChange={(e) => handleOnChange(e, item.productId)}
                          />
                          <button
                            className="btn btn-outline-primary"
                            onClick={() => handleDecrement(item.productId)}
                          >
                            -
                          </button>
                        </div>
                        <div className="col-4">
                          <button
                            className="btn btn-success"
                            onClick={handleApplyButton}
                          >
                            Apply
                          </button>
                        </div>
                        <div className="col-4">
                          <button className="btn btn-danger" onClick={() => handleRemoveProduct(item.productId)}>Remove</button>
                        </div>
                      </div>
                    </td>
                  </tr>
                )): <tr><td colSpan="5">No products in cart</td></tr>}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="3">Total</td>
                  <td>
                    {cart.cart.products.map(
                      (item) => item.price * item.quantity
                    )}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="col-12">
            <button className="btn btn-primary" onClick={handleOrder}>ORDER</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
