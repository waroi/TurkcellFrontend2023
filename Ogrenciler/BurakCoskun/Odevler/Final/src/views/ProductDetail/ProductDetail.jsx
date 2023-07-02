import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import NewProducts from "../../components/NewProducts/NewProducts";
import ProductDetailCard from "../../components/ProductDetailCard/ProductDetailCard";
import { useEffect } from "react";
import EditProductModal from "../../components/EditProductModal/EditProductModal";

const ProductDetail = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.product.products);
  const product = products.find((product) => product.id === parseInt(id));
  const randomProducts = products
    .filter((product) => product.id !== parseInt(id))
    .sort(() => Math.random() - 0.5);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-5 mt-5 container-lg ">
      <EditProductModal product={product} />
      <ProductDetailCard product={product} />
      <NewProducts products={randomProducts} length={4} />
      <NewProducts products={randomProducts.slice(4)} length={4} />
    </div>
  );
};

export default ProductDetail;
