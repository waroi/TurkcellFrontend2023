import { useParams } from "react-router-dom";
import ProductDetail from "../../components/ProductDetail/ProductDetail.jsx";

const ProductDetailView = () => {
    
  const { id } = useParams();
  return <ProductDetail id={id} />;
};

export default ProductDetailView;
