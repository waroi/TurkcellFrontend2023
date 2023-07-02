import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import CartItem from "../../components/CartItem/CartItem";
import CartBuy from "../../components/CartBuy/CartBuy";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartViewStyle from "./CartViewStyle";
import Container from "../../components/Container/Container";
import { setCartLength } from "../../redux/slices/cartLengthSlice";

const CartView = () => {
  const user = useSelector((state) => state.user.user);
  const [cart, setCart] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/carts/${user.id}`)
      .then((response) => setCart(response.data.cart));
  }, [user.id]);

  useEffect(() => {
    updateCart();
  }, []);

  const updateCart = async () => {
    const productResponse = await axios.get("http://localhost:3000/products");
    const products = productResponse.data;

    const cartResponse = await axios.get(
      `http://localhost:3000/carts/${user.id}`
    );
    const cartData = cartResponse.data.cart;

    const updatedCart = cartData.map((cartItem) => {
      const product = products.find(
        (product) => product.id === cartItem.productId
      );
      if (product) {
        const updatedStock = Math.min(product.rating?.count, cartItem.count);
        return { ...cartItem, count: updatedStock };
      }

      return cartItem;
    });

    setCart(updatedCart.filter((cartItem) => cartItem.count > 0));
    await axios.put(`http://localhost:3000/carts/${user.id}`, {
      id: user.id,
      cart: updatedCart.filter((cartItem) => cartItem.count > 0),
    });
    const newCart = await axios.get(`http://localhost:3000/carts/${user.id}`);
    dispatch(setCartLength(newCart.data.cart.length));
  };

  const handleBuy = async (e) => {
    e.preventDefault();
    const productResponse = await axios.get("http://localhost:3000/products");
    const products = productResponse.data;

    const shouldUpdate = cart.some(
      (cartItem) =>
        products.find((product) => product.id == cartItem.productId).rating
          .count < cartItem.count
    );

    if (shouldUpdate) {
      toast.warn("There is an update in your cart");
      updateCart();
    } else {
      for (const cartProduct of cart) {
        const currProduct = await axios.get(
          `http://localhost:3000/products/${cartProduct.productId}`
        );
        const newData = {
          ...currProduct.data,
          rating: {
            rate: currProduct.data.rating.rate,
            count: currProduct.data.rating?.count - cartProduct.count,
          },
        };
        await axios.put(
          `http://localhost:3000/products/${cartProduct.productId}`,
          newData
        );
        setCart([]);
        await axios.put(`http://localhost:3000/carts/${user.id}`, {
          id: user.id,
          cart: [],
        });
        dispatch(setCartLength(0));
      }
    }
  };

  return (
    <Container>
      <CartViewStyle>
        <div>
          {cart.length > 0 ? (
            cart.map((el, i) => (
              <CartItem key={i} cartItem={el} setCart={setCart} toast={toast} />
            ))
          ) : (
            <h2>Cart is empty</h2>
          )}
          <div className="d-flex justify-content-end">
            <CartBuy disabled={cart.length == 0} handleBuy={handleBuy} />
          </div>
        </div>
      </CartViewStyle>
      <ToastContainer />
    </Container>
  );
};

export default CartView;
