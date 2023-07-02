import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, gift }) => {
  const navigate = useNavigate();

  return (
    product && (
      <div
        className="card p-2 border-0 h-100 productsCard"
        onClick={() => navigate(`/product-detail/${product.id}`)}
      >
        <img
          src={product.image}
          className="rounded align-self-center img-fluid"
          alt="..."
        />
        <div className="card-body mt-3">
          <p className="card-title text-dark fw-bold">{product.title}</p>
          <span className="text-muted">
            Category: <strong>{product.category}</strong>
          </span>
          <p>
            Rating: <strong>{product.rating?.rate}/5</strong>
          </p>
          <p>
            <strong className="text-dark"> $ {product.price} </strong>
          </p>
        </div>

        {gift && (
          <div className="card-footer border-0 d-flex align-items-center text-center rounded justify-content-between py-2 mb-3">
            <img src="/icons/Gift.svg" alt="" />
            <div className="dot rounded-pill"></div>
            <p className="m-0">Free Toy & Free Shaker</p>
          </div>
        )}
      </div>
    )
  );
};

export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.object,
  gift: PropTypes.bool,
};
