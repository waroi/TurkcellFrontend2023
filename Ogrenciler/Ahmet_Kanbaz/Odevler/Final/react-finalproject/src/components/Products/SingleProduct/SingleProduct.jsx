import { BsFillCartPlusFill } from "react-icons/bs";
import { SingleCard, ProductTitle, ProductPrice } from "./SingleProductStyle";
import PropTypes from "prop-types";
import { BsInfoCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Toast from "../../../common/Toast/Toast";
import Stars from "../../../common/Stars/Stars";
import {handleProductAdd2Cart} from '../../../helpers/addCartHelper'

const SingleProduct = ({ columnSize, singleProduct }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginUser = useSelector((state) => state.user.user);
  const loginUserCart = useSelector((state) => state.cart.cart);

  const toastNavigateDetail = () => {
    if (Object.keys(loginUser).length === 0) {
      navigate("/auth/login");
      Toast({
        message:
          "Ürünün detaylarını görüntüleyebilmek için lütfen giriş yapınız.",
        type: "warning",
      });
    } else {
      navigate(`/detailproduct/${singleProduct.id}`);
    }
  };

  const toastNavigateCart = () => {
    if (Object.keys(loginUser).length === 0) {
      navigate("/auth/login");
      Toast({
        message: "Ürünü sepetinize ekleyebilmeniz için lütfen giriş yapınız.",
        type: "warning",
      });
    } else {
      handleProductAdd2Cart(singleProduct, loginUser, loginUserCart, dispatch)
    }
  };
  return (
    <div className={columnSize}>
      {singleProduct && (
        <SingleCard className="card p-2 border-0 shadow-sm">
          <img
            src={singleProduct.image}
            className="card-img-top object-fit-contain"
            alt=""
          />
          <div className="card-body">
            <ProductTitle className="card-title text-truncate">
              {singleProduct.title}
            </ProductTitle>
            <p className="card-text text-truncate mb-1">
              {singleProduct.description}
            </p>
            <div className="d-flex justify-content-lg-between flex-wrap pb-2">
              <span className="d-flex align-items-center gap-1">
                Rating{" "}
                <Stars
                  fontSize=".85rem"
                  starCount={singleProduct.rating.rate}
                />
              </span>
              <span>Stok Adedi: {singleProduct.rating.count}</span>
            </div>
            <p className="mb-1 category text-capitalize">
              Kategori: {singleProduct.category}
            </p>
            <ProductPrice className="fw-bold mb-1 price">
              Fiyat: {singleProduct.price} VND
            </ProductPrice>
            <div className="d-flex justify-content-lg-evenly justify-content-between align-items-center">
              <BsFillCartPlusFill
                size={"1.5rem"}
                cursor={"pointer"}
                onClick={toastNavigateCart}
              />
              <BsInfoCircle
                size={"1.5rem"}
                cursor={"pointer"}
                color="#003459"
                onClick={toastNavigateDetail}
              />
            </div>
          </div>
        </SingleCard>
      )}
    </div>
  );
};

SingleProduct.propTypes = {
  columnSize: PropTypes.string,
  singleProduct: PropTypes.object,
};

export default SingleProduct;
