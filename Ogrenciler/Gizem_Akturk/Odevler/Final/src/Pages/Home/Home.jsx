import HeaderComponent from "../../components/Header/HeaderComponent";
import backgroundImage from "../../assets/banner.svg";
import banner2 from "../../assets/banner-2.svg";
import "./Home.scss";
import ButtonComponent from "../../components/Button/ButtonComponent";
import { BannerContent } from "../../components/BannerContent/BannerContent";
import { ProductCard } from "../../components/Product/Product";
import { BannerContent2 } from "../../components/BannerContent/BannerContent2";
import { Sellers } from "../../components/Sellers/Sellers";
import { Footer } from "../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../redux/actions/productActions";

const Home = () => {

  const fetchProduct = useSelector(state => state.fetchProducts);
  const { products } = fetchProduct;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <div
        className="banner"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <HeaderComponent />
        <BannerContent />
      </div>
      <div className="container mt-5 ms-10 text-left">
        <p>What`s new?</p>
        <div className="row d-flex align-items-center">
          <div className="col-6">
            <h5 className="text-primary">Take a look at our Products</h5>
          </div>
          <div className="col-6 justify-content-end d-flex">
            <ButtonComponent title="More" link="products" outline={true} />
          </div>
        </div>
      </div>
      <div className="container mt-5 ms-10 d-grid products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}

      </div>
      <div
        className="container mt-5 banner-2"
        style={{ backgroundImage: `url(${banner2})` }}
      >
        <BannerContent2 />
      </div>
      <div className="container mt-5 ms-10 text-left">
        <div className="row d-flex align-items-center">
          <div className="col-6">
            <span>Proud to be part of</span>{" "}
            <h5 className="text-primary">Gizem Commerce</h5>
          </div>
          <div className="col-6 justify-content-end d-flex">
            <ButtonComponent title="Sellers" link="products" outline={true} />
          </div>
        </div>
        <Sellers />
      </div>
      <Footer />
    </>
  );
};

export default Home;
