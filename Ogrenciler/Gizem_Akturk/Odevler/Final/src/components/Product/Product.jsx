import PropTypes from "prop-types";
import { useSelector ,useDispatch} from "react-redux";
import { addProductToCartAction } from "../../redux/actions/cartActions";
import "./Product.scss";
import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  const handleOnClick = async () => {
    // check if user is logged in
    if (!userInfo) {
      alert("Please login to continue");
      return;     
    }

    dispatch(addProductToCartAction(product.id, 1));
  };

  return (
    <div className="product-card">
      <div className="frame">
        <Link to={`/products/${product.id}`}>
        <img alt="Image" src={product.image} />
        </Link>
      </div>
      <div className="w-100 text-left">
        <h6 style={{color:"#00171F"}}>{product.name}</h6>
          <div className="d-flex w-100">
            <div className="text-muted">{product.category}</div>
          </div>
          <div className="row align-items-center pt-2">
            <div className="col-6">
            <div className="" style={{color:"#00171F"}}>{product.price}$</div>
            </div>
            <div className="col-6">

            <button className="btn btn-primary btn-sm w-100" onClick={handleOnClick}>Add to cart</button>
            </div>
          </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
