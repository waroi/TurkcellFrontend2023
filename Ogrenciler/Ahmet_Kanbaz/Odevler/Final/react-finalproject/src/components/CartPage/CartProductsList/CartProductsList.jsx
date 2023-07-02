import SingleCartProduct from "../SingleCartProduct/SingleCartProduct";
import { useSelector } from "react-redux";

const CartProductsList = () => {
  const loginUserCart = useSelector((state) => state.cart.cart);
  return (
    <div className="border p-3 rounded-4">
      <h4 className="fw-bold">Products</h4>
      {loginUserCart.length > 0 ? (
        loginUserCart.map((product) => (
          <SingleCartProduct key={product.id} product={product} />
        ))
      ) : (
        <div className="d-flex justify-content-center">
          <h5 className="fw-bold">Sepetinizde ürün bulunmamaktadır.</h5>
        </div>
      )}
    </div>
  );
};

export default CartProductsList;
