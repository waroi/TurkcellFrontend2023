import { updateCart } from "../utils/puts";
export const changeCountInCart = (loginUserCart, product, loginUser, value, dispatch) => {
  const updatedCart = loginUserCart.map((item) => {
    if (item.id == product.id) {
      return {
        ...item,
        quantity: value,
      };
    }
    return item;
  });
  dispatch(updateCart(loginUser, updatedCart));
}