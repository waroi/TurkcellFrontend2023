import Toast from "../common/Toast/Toast";
import { updateCart, addNewProduct4Cart } from "../utils/puts";

export const handleProductAdd2Cart = (
  singleProduct,
  loginUser,
  loginUserCart,
  dispatch
) => {
  if (singleProduct.rating.count == 0) {
    Toast({
      message: "Ürün stokta bulunmamaktadır.",
      type: "warning",
    });
  } else {
    const data = {
      ...singleProduct,
      quantity: 1,
    };

    const isProductExistInCart = loginUserCart.find(
      (product) => product.id == singleProduct.id
    );

    if (isProductExistInCart) {
      if (isProductExistInCart.quantity < singleProduct.rating?.count) {
        Toast({
          message:
            "Ürün zaten sepetinizde bulunmaktadır. Ürün adedi arttırıldı.",
          type: "success",
        });
        const updatedCart = loginUserCart.map((product) => {
          if (product.id == singleProduct.id) {
            return {
              ...product,
              quantity: product.quantity + 1,
            };
          }
          return product;
        });
        dispatch(updateCart(loginUser, updatedCart));
      } else {
        Toast({
          message: "Stokta yeterli ürün yok.",
          type: "warning",
        });
      }
    } else {
      Toast({
        message: "Ürün sepetinize eklendi.",
        type: "success",
      });
      dispatch(addNewProduct4Cart(loginUser, data));
    }
  }
};
