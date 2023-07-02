import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CartCard = ({ product, handleRemove, handleQuantity }) => {
  const [quantity, setQuantity] = useState(product.quantity);
  const navigate = useNavigate();

  const handleIncrement = () => {
    if (quantity < product.rating.count) {
      setQuantity((prevQuantity) => prevQuantity + 1);
      handleQuantity(product.id, quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      handleQuantity(product.id, quantity - 1);
    }
  };

  const handleInputChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (
      !isNaN(newQuantity) &&
      newQuantity >= 1 &&
      newQuantity <= product.rating.count
    ) {
      setQuantity(newQuantity);
      handleQuantity(product.id, newQuantity);
    } else if (newQuantity > product.rating.count) {
      setQuantity(product.rating.count);
      handleQuantity(product.id, product.rating.count);
    } else {
      setQuantity(1);
      handleQuantity(product.id, 1);
    }
  };

  return (
    <div className="row cartCard">
      <div className="col-12">
        <div className="row">
          <div className="col-12 col-lg-2 text-center mb-3 mb-lg-0">
            <img
              src={product.image}
              alt="Product"
              className="img-fluid rounded"
              onClick={() => navigate(`/product-detail/${product.id}`)}
            />
          </div>
          <div className="col-12 col-lg-10 d-flex align-items-center">
            <div className="row justify-content-between w-100">
              <div className="col-12 col-lg-6">
                <h3 onClick={() => navigate(`/product-detail/${product.id}`)}>
                  {product.title}
                </h3>
                <p>Price: ${product.price}</p>
              </div>
              <div className="col-12 col-lg-6">
                <div className="row">
                  <div className="col-12 col-lg-8 d-flex gx-5">
                    <button
                      className="btn btn-primary"
                      disabled={quantity <= 1}
                      onClick={handleDecrement}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      className="form-control mx-3 w-100 text-center"
                      value={
                        quantity <= product.rating.count
                          ? quantity
                          : product.rating.count
                      }
                      onChange={handleInputChange}
                    />
                    <button
                      className="btn btn-primary"
                      disabled={quantity >= product.rating.count}
                      onClick={handleIncrement}
                    >
                      +
                    </button>
                  </div>
                  <div className="col-12 col-lg-4 mt-3 mt-lg-0">
                    <button
                      className="btn btn-danger text-white w-100"
                      onClick={() => handleRemove(product.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

CartCard.propTypes = {
  product: PropTypes.object.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleQuantity: PropTypes.func.isRequired,
};

export default CartCard;
