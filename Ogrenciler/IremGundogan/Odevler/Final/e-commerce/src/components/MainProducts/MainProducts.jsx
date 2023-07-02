/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import StyleMainProducts from "./MainProductsStyle";
import ButtonSecondaryStyle from "../../components/ButtonSecondry/ButtonSecondaryStyle";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import PropTypes from "prop-types";
import Container from "../Container/Container";

const ProductLink = ({ product }) => (
  <Link
    key={product.id}
    className="col-lg-3  col-6"
    to={`/products/${product.id}`}
  >
    <ProductCard  product={product} />
  </Link>
);

const MainProducts = ({ products }) => (
  <Container>
    <StyleMainProducts>
      <div className="productsHeader">
        <div>
          <h4>Whats new ?</h4>
          <h3>Take A Look At Some Of Our Products</h3>
        </div>
        <ButtonSecondaryStyle className="button">
          View More
        </ButtonSecondaryStyle>
      </div>
      <div className="row wrapper">
        {[...products].slice(0, 8).map((product) => (
          <ProductLink product={product} />
        ))}
      </div>
      <div className="btn w-100  my-3">
        <ButtonSecondaryStyle className="w-100 justify-content-center  ">
          View More
        </ButtonSecondaryStyle>
      </div>
    </StyleMainProducts>
  </Container>
);

MainProducts.propTypes = {
  products: PropTypes.array.isRequired,
};

export default MainProducts;
