import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import request from "../../utils/request";
import ProductBannerView from "../../view/Product/ProductBannerView/ProductBannerView";
import CartUIView from "../../view/Product/CartUIView/CartUIView";
import Footer from "../../components/footer/footer";
import LoginPage from "../login/loginPage";
import { setProductsList } from "../../redux/features/productSlice";

const ProductPage = () => {
  const products = useSelector((state) => state.products.products);
  const isLoading = useSelector((state) => state.products.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    request
      .getRequest("http://localhost:3000/products")
      .then((res) => {
        dispatch(setProductsList(res));
      })
      .catch((error) => {
        console.error("API request error:", error);
      });
  }, [dispatch]);

  const user = JSON.parse(localStorage.getItem("user"));
  const isUserExpired = user && user.expiration < Date.now();

  return (
    <div>
      {user && !isUserExpired ? (
        <>
          <ProductBannerView />
          <CartUIView products={products} isLoading={isLoading} />
          <Footer />
        </>
      ) : (
        <div className="container ">
          <div className="mt-5 py-5">
            <LoginPage location="/product" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
