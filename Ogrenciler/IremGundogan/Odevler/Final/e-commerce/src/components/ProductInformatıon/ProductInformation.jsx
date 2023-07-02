import PropTypes from "prop-types";
import ProductInformationStyle from "./ProductInformationStyle";
import ButtonPrimary from "../Button/ButtonStyle";
import ButtonOutline from "../ButtonSecondry/ButtonSecondaryStyle";
import { Link } from "react-router-dom";
import EditProducts from "../EditProducts/EditProducts";
import Breadcrumbs from "../BreadCrumbs/BreadCrumbsStyle";
import Share from "../../../assets/Share.svg";

const ProductInfo = ({
  product,
  handleCartClick,
  isAdmin,
  setProduct,
  toast,
}) => (
  <ProductInformationStyle className="my-5">
    <Breadcrumbs className="d-flex gap-2">
      <Link to={"/"}>Home</Link>
      {">"}
      <Link to={"/products"}>Products</Link>
      {">"}
      <span>{product.title}</span>
    </Breadcrumbs>
    <h2>{product.title}</h2>
    <h3>€{product.price}</h3>
    <div className="d-flex justify-content-center align-items-center gap-3 my-3">
      <ButtonPrimary onClick={handleCartClick} >Add To Cart</ButtonPrimary>
      <ButtonOutline>Chat with Monito</ButtonOutline>
      {isAdmin && product && (
        <EditProducts product={product} setProduct={setProduct} toast={toast} />
      )}
    </div>

    <div className="infoPre d-lg-none d-flex justify-content-between align-items-center">
      <div className="d-flex justify-content-between w-100">
        <h4>Information</h4>
        <div className="d-flex share">
          <img src={Share} />
          Share
        </div>
      </div>
    </div>
    <div className="infoContainer">
      <div className="row infoWrap">
        <div className="col-6 infoBox">
          <p>Category</p>
        </div>
        <div className="col-6 infoBox">
          <p>: {product.category}</p>
        </div>
      </div>
      <div className="row infoWrap">
        <div className="col-6 infoBox">
          <p>Rating</p>
        </div>
        <div className="col-6 infoBox">
          <p>: {product.rating?.rate} / 5</p>
        </div>
      </div>
      <div className="row infoWrap">
        <div className="col-6 infoBox">
          <p>Stock</p>
        </div>
        <div className="col-6 infoBox">
          <p>: {product.rating?.count}</p>
        </div>
      </div>
      <div className="row infoWrap">
        <div className="col-6 infoBox">
          <p>Description</p>
        </div>
        <div className="col-6 infoBox">
          <p>: {product.description}</p>
        </div>
      </div>
    </div>
  </ProductInformationStyle>
);

ProductInfo.propTypes = {
  product: PropTypes.object.isRequired,
  handleCartClick: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  setProduct: PropTypes.func.isRequired,
  toast: PropTypes.func.isRequired,
};

export default ProductInfo;
