import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import InformationCard from "../InformationCard/InformationCard";
import ProductCarousel from "../ProductCarousel/ProductCarousel";
import { addToCart } from "../../redux/slices/cartSlice";
import { Carts } from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetailCard = ({ product }) => {
  const user = useSelector((state) => state.user.user);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const [isCartUpdated, setCartUpdated] = useState(false);

  useEffect(() => {
    if (isCartUpdated) {
      Carts.createOne(cart)
        .then(() => {
          setCartUpdated(false);
        })
        .catch((error) => {
          console.log("Error creating cart:", error);
        });
    }
  }, [isCartUpdated, cart]);

  const handleAddToCart = () => {
    dispatch(addToCart({ userId: user.id, productId: product.id }));
    setCartUpdated(true);
    toast.success("Product added to cart");
  };

  return (
    product && (
      <div className="row py-3 productdetailcard">
        <ToastContainer position="bottom-right" />
        <div className="col-lg-7 p-0 mb-5">
          <ProductCarousel image={product.image} />
        </div>
        <div className="col-lg-5">
          <h4 className="fw-bold">{product.title}</h4>
          <p className="text-primary fw-bold mb-3 fs-5">$ {product.price}</p>
          <div className="d-flex flex-wrap aligh-items-center">
            <Button
              text="Add to Cart"
              bgColor="primary"
              onClick={handleAddToCart}
            />
            {user.role === "admin" && (
              <div
                className="btn btn-outline-primary rounded-pill px-4 py-2 ms-3"
                data-bs-toggle="modal"
                data-bs-target="#editModal"
              >
                Edit Product
              </div>
            )}
          </div>
          <div className="d-flex flex-row align-items-center justify-content-between mt-5 mb-3">
            <p className="text-dark fw-bold fs-3 m-0">Information</p>
            <p className="text-primary fw-bold m-0">
              {" "}
              <img
                src="/icons/Share_Android.png"
                alt="share"
                className="me-1"
              />{" "}
              Share
            </p>
          </div>
          <InformationCard product={product} />
        </div>
      </div>
    )
  );
};

ProductDetailCard.propTypes = {
  product: PropTypes.object,
};

export default ProductDetailCard;
