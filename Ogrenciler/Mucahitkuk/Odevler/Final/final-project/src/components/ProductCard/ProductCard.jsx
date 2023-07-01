import PropTypes from "prop-types";
import { StyledCard, StyledCardImage } from "./styled";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <StyledCard style={{ width: "20rem", padding: "10px" }}>
      <Link className="d-flex" to={`/productsdetail/${product.id}`}>
        {product.rating.count == 0 ? (
          <StyledCardImage
            varant="top"
            src={product.image}
            style={{ filter: "grayscale(1)" }}
          />
        ) : (
          <StyledCardImage variant="top" src={product.image} />
        )}
      </Link>
      <Card.Body>
        <Link to={`/productsdetail/${product.id}`}>
          <Card.Title
            style={{ fontSize: "16px", fontWeight: "bold", color: "#00171F" }}
          >
            {product.title}
          </Card.Title>
        </Link>
        <div>
          <p className="text-secondary">Category: {product.category}</p>
          {product.rating.count <= 0 ? (
            <p className="text-secondary">Stock: Out of stock</p>
          ) : (
            <p className="text-secondary">Stock: {product.rating.count}</p>
          )}
          <p className="text-primary">Price: {product.price}$</p>
        </div>
      </Card.Body>
    </StyledCard>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      count: PropTypes.number.isRequired,
    }).isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
