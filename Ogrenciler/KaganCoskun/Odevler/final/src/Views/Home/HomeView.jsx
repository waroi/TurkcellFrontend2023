/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import ProductCard from "../../components/Shared/ProductCard/ProductCard";
import { getAllProducts } from "../../services/requests";
import SwiperCard from "../../components/Swiper/SwiperCard";
import Banner from "../../components/Banner/Banner";
import styles from "./homeView.module.css";
import Loading from "../../components/Loading/Loading";
import PageBanner from "../../components/PageBanner/PageBanner";

const HomeView = () => {
  const [products, setProducts] = useState([]);
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    getAllProducts()
      .then((res) => setProducts(res))
      .then(() => setIsLoad(false));
  }, []);

  return (
    <>
      <Banner />
      <div className={`row g-3 ${styles["page-content"]}`}>
        {isLoad && (
          <div className="text-center vh-100">
            <Loading />
          </div>
        )}
        <div className="row g-3">
          {products.slice(0,8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          <PageBanner />
          <SwiperCard
            cards={products
              .sort(function (a, b) {
                return Math.random() - 0.5;
              })
              .slice(0, 10)}
            setWindow={true}
          />
        </div>
      </div>
    </>
  );
};

export default HomeView;
