import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/slice/productsSlice";
import HerroBanner from "../components/HerroBanner/HerroBanner";
import NewsSection from "../components/NewsSection/NewsSection";
import BannerMiddle from "../components/BannerMiddle/BannerMiddle";
import ProductsSection from "../components/ProductsSection/ProductsSection";
import SellersSection from "../components/SellersSection/SellersSection";
import BannerBottom from "../components/BannerBottom/BannerBottom";
import KnowledgeSection from "../components/KnowledgeSection/KnowledgeSection";

const HomeView = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <HerroBanner />
      <div className="container">
        <NewsSection products={products} />
        <BannerMiddle />
        <ProductsSection products={products} />
        <SellersSection />
        <BannerBottom />
        <KnowledgeSection />
      </div>
    </>
  );
};

export default HomeView;
