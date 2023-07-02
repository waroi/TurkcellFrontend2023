/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import RandomProductStyle from "./RandomProductStyle";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import Container from "../Container/Container";

const ProductLink = ({ product }) => (
  <Link
    key={product.id}
    className="col-lg-3 col-sm-6 col-6"
    to={`/products/${product.id}`}
  >
    <ProductCard product={product} />
  </Link>
);

const RandomProducts = ({ randomProducts }) => (
  <Container>
    <RandomProductStyle>
      <div className="productsHeader">
        <div>
          <h4>Whats new ?</h4>
          <h3>Take A Look At Some Of Our Products</h3>
        </div>
      </div>
      <div className="row wrapper">
        {[...randomProducts].slice(0, 8).map((product) => (
          <ProductLink product={product} />
        ))}
      </div>
    </RandomProductStyle>
  </Container>
);

RandomProducts.propTypes = {
  randomProducts: PropTypes.array.isRequired,
};

export default RandomProducts;
