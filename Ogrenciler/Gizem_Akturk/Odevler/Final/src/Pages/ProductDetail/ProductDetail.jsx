import HeaderComponent from "../../components/Header/HeaderComponent";
import { useParams } from "react-router-dom";
import "./ProductDetail.scss";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getProduct } from "../../redux/actions/productActions";
import ButtonComponent from "../../components/Button/ButtonComponent";
import { addProductToCartAction } from "../../redux/actions/cartActions";
import { Footer } from "../../components/Footer/Footer";

const ProductDetail = () => {
  const fetchProduct = useSelector((state) => state.fetchProduct);
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin;
  const { product } = fetchProduct;
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

    const handleOnChange = (event) => {
    setQuantity(event.target.value);
    };

    const handleIncrement = () => {
        
    setQuantity(parseInt(quantity) + 1);
    };

    const handleDecrement = () => {
    if (quantity > 1) {
        setQuantity(quantity - 1);
    }
    };

    const handleAddToCart = () => {
     // check if user is logged in
     if (!userInfo) {
        alert("Please login to continue");
        return;     
      }
  
      dispatch(addProductToCartAction(id, quantity));
    };


  useEffect(() => {
    dispatch(getProduct(id));
  }, [id, dispatch]);
  return (
    <>
      <HeaderComponent />
      <div className="container">
        <div className="row p-4">
          <div className="col-6">
            <img src={product.image} alt="" width={560} height={476} />
          </div>
          <div className="col-6 details">
            <h4>{product.name}</h4>
            <h5>{product.price * quantity} $</h5>
            <div className="row">
              <div className="col-6 quantity">
                <button className="btn btn-outline-primary" onClick={handleIncrement}>+</button>
                <input type="text" className="form-control" value={quantity} onChange={handleOnChange} />
                <button className="btn btn-outline-primary" onClick={handleDecrement}>-</button>
              </div>
              <div className="col-6">
                <ButtonComponent title="Add to cart" filled={true}  onclick={handleAddToCart} />
              </div>
            </div>
            <div className="row mt-5">
                <div className="col-6 titles">
                    <p>Category</p>
                    <p>Description</p>

                </div>
                <div className="col-6 features">
                    <p>{product.category}</p>
                    <p>{product.description}</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
