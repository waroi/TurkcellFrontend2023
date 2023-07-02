import PropTypes from "prop-types";
import ProductCardStyle from "./ProductCardStyle";
import gift from "../../../assets/gift.png"

const ProductCard = ({ product, ourProductsText }) => {
  return (
    <ProductCardStyle>
      <div>
        <img src={product.image} alt={product.description} />
        <div className="ProductText">
          <h4 className="title">{product.title}</h4>
          <ul className="info">
            <li>
              Category: <b>{product.category}</b>
            </li>
            <li className="dot">•</li>
            <li>
              Rating: <b>{product.rating.rate}</b>
            </li>
          </ul>
          <div className="price">
            <h3>€{product.price.toFixed(2)}</h3>
          </div>
          {ourProductsText && (
            <div className="OurWrap">
              <img src={gift} alt="giftIcon" />
              <span className="promotion"> • {ourProductsText}</span>
            </div>
          )}
        </div>
      </div>
    </ProductCardStyle>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  ourProductsText: PropTypes.string,
};

export default ProductCard;
