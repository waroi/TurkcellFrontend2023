import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import CartItemStyle from "./CartItemStyle";
import ButtonSecondaryStyle from "../ButtonSecondry/ButtonSecondaryStyle";
import { setCartLength } from "../../redux/slices/cartLengthSlice";

const CartItem = ({ cartItem, setCart, toast }) => {
  const user = useSelector((state) => state.user.user);
  const cartLength = useSelector((state) => state.cartLength);
  const dispatch = useDispatch();

  const formSchema = Yup.object().shape({
    count: Yup.number()
      .required("Count is required")
      .min(1, "Count must be at least 1"),
  });

  const onSubmit = async (values) => {
    const newCount = parseInt(values.count, 10);

    if (newCount >= 1) {
      const productResponse = await axios.get(
        `http://localhost:3000/products/${cartItem.productId}`
      );
      const product = productResponse.data;
      const cartResponse = await axios.get(
        `http://localhost:3000/carts/${user.id}`
      );
      const cart = cartResponse.data.cart;

      if (newCount <= product.rating?.count) {
        const newProduct = {
          productId: cartItem.productId,
          title: cartItem.title,
          price: cartItem.price,
          image: cartItem.image,
          count: newCount,
        };

        const newCart = cart.map((cartItem) =>
          cartItem.productId === newProduct.productId ? newProduct : cartItem
        );
        setCart(newCart);
        await axios.put(`http://localhost:3000/carts/${user.id}`, {
          id: user.id,
          cart: newCart,
        });
      } else {
        toast.error("The count exceeds the available stock.");
      }
    } else {
      toast.error("The count must be at least 1.");
    }
  };

  const { values, handleChange, handleSubmit, errors, setFieldValue } =
    useFormik({
      initialValues: {
        count: cartItem.count,
      },
      validationSchema: formSchema,
      onSubmit,
    });

  const deleteCartItem = async (e) => {
    e.preventDefault();

    const cartResponse = await axios.get(
      `http://localhost:3000/carts/${user.id}`
    );
    const cart = cartResponse.data.cart;
    const newCart = cart.filter(
      (inCart) => inCart.productId != cartItem.productId
    );
    setCart(newCart);
    axios.put(`http://localhost:3000/carts/${user.id}`, {
      id: user.id,
      cart: newCart,
    });
    dispatch(setCartLength(cartLength - 1));
  };

  const incrementCart = async (e) => {
    e.preventDefault();
  
    const productResponse = await axios.get(
      `http://localhost:3000/products/${cartItem.productId}`
    );

    const product = productResponse.data;
    const cartResponse = await axios.get(
      `http://localhost:3000/carts/${user.id}`
    );
    const cart = cartResponse.data.cart;

    if (cartItem.count < product.rating?.count) {
      const newCount = values.count + 1;
      setFieldValue("count", newCount);

      const newProduct = {
        productId: cartItem.productId,
        title: cartItem.title,
        price: cartItem.price,
        image: cartItem.image,
        count: newCount,
      };

      const newCart = cart.map((cartItem) => {
        if (newProduct.productId == cartItem.productId) return newProduct;
        return cartItem;
      });
    
      setCart(newCart);

      await axios.put(`http://localhost:3000/carts/${user.id}`, {
        id: user.id,
        cart: newCart,
      });

    } else toast.error("You have hit the stock limit");
  };

  const decrementCart = async (e) => {
    e.preventDefault();

    const cartResponse = await axios.get(
      `http://localhost:3000/carts/${user.id}`
    );
    const cart = cartResponse.data.cart;

    if (cartItem.count > 1) {
      const newCount = values.count - 1;

      setFieldValue("count", newCount);

      const newProduct = {
        productId: cartItem.productId,
        title: cartItem.title,
        price: cartItem.price,
        image: cartItem.image,
        count: newCount,
      };

      const newCart = cart.map((cartItem) => {
        if (newProduct.productId == cartItem.productId) return newProduct;
        return cartItem;
      });

      setCart(newCart);

      await axios.put(`http://localhost:3000/carts/${user.id}`, {
        id: user.id,
        cart: newCart,
      });
      
    }
  };

  return (
    <CartItemStyle>
      <div className="d-flex justify-content-evenly align-items-center">
        <div className="info d-flex w-75 align-items-center">
          <div className="CartImg">
            <img src={cartItem.image} alt="" />
          </div>
          <h4 className="text-center">
            {cartItem.title} - €{cartItem.price}
          </h4>
        </div>
        <div className="amount d-flex justify-content-evenly align-items-center">
          <button onClick={decrementCart} className="decrement">
            -
          </button>
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              name="count"
              id="count"
              value={values.count}
              onChange={handleChange}
              readOnly
            />
            {errors.count && <div className="error">{errors.count}</div>}
          </form>
          <button onClick={incrementCart} className="increment">
            +
          </button>
        </div>
        <div className="price w-50">
          <h5>Total Amount:</h5>
          <div>€{(cartItem.price * cartItem.count).toFixed(2)}</div>
        </div>

        <ButtonSecondaryStyle className="deleteBtn" onClick={deleteCartItem}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            <path
              d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
              fill="#ff0000"
            />
          </svg>
        </ButtonSecondaryStyle>
      </div>
    </CartItemStyle>
  );
};

CartItem.propTypes = {
  cartItem: PropTypes.object.isRequired,
  setCart: PropTypes.func.isRequired,
  toast: PropTypes.func,
};

export default CartItem;
