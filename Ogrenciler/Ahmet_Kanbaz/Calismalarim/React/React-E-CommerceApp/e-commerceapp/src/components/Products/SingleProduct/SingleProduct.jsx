import PropTypes from "prop-types";
import {useNavigate} from 'react-router-dom'
import './singleproduct.css'
const SingleProduct = ({ product }) => {
  const navigate = useNavigate();
  const productAttributes = {
    imageUrl: product.attributes["image-urls"][0],
    name: product.attributes["name"],
    description: product.attributes["description"],
    rating: product.attributes["rating"],
    saleText: product.attributes["sale-text"],
    originalPrice: product.attributes["original-price"],
    price: product.attributes['price']
  };

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 my-3">
      <div className="card p-1 border-0 singleProductCard" onClick={() => navigate(`/product/${product.id}`)}>
        <img src={productAttributes.imageUrl} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title text-truncate">{productAttributes.name}</h5>
          <p className="card-text text-truncate">
            {productAttributes.description}
          </p>
          <div className="d-flex justify-content-around align-items-center">
            <span>Rating: {productAttributes.rating}</span>
            {productAttributes.saleText ? (
              <div className="d-flex align-items-center gap-2">
                <span className="text-decoration-line-through opacity-50 ">
                  {productAttributes.originalPrice} ₺
                </span>
                <span className="fs-5">{productAttributes.price} ₺</span>
              </div>
            ) : (
              <span className="fs-5">{productAttributes.originalPrice} ₺</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

SingleProduct.propTypes = {
  product: PropTypes.object,
};

export default SingleProduct;
