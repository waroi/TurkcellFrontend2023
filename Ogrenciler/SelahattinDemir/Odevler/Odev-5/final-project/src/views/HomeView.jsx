import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/slice/productsSlice";
import NewsSection from "../components/NewsSection/NewsSection";
import ProductsSection from "../components/ProductsSection/ProductsSection";
import SellersSection from "../components/SellersSection/SellersSection";
import KnowledgeSection from "../components/KnowledgeSection/KnowledgeSection";

const HomeView = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="container">
      <NewsSection products={products} />
      <ProductsSection products={products} />
      <SellersSection />
      <KnowledgeSection />
    </div>
  );
};

export default HomeView;
