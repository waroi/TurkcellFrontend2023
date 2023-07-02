import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import ProductCard from "../ProductCard/ProductCard"
import OurProductStyle from "./OurProductStyle"
import ButtonSecondaryStyle from "../ButtonSecondry/ButtonSecondaryStyle"
import Container from "../Container/Container"

const ourProductsText = "Free Dress & Free Pants";

const displayOurProducts = (products) =>
  products.slice(9, 17).map((product) => (
    <Link
      key={product.id}
      className="toPageLink col-lg-3 "
      to={`/products/${product.id}`}
    >
      <ProductCard product={product} ourProductsText={ourProductsText} />
    </Link>
  ));

  

const OurProducts = ({ products }) => (
  <Container>
    <OurProductStyle>
      <div>
        <h4>Hard To Choose Right Products For Yourself ?</h4>
        <div className="d-flex justify-content-between">
          <h3>Our Products</h3>
          <ButtonSecondaryStyle>View More -</ButtonSecondaryStyle>
        </div>
      </div>
      <div className="row wrapper">{displayOurProducts(products)}</div>
    </OurProductStyle>
  </Container>
);


OurProducts.propTypes = {
  products: PropTypes.array.isRequired
}

export default OurProducts;
