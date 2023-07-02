import { useParams } from "react-router-dom";
import { ProductDetail } from "../components/ProductsDetailComponents/ProductsDetailContent";

const ProductDetailPage = () => {
  const { productId } = useParams();

  return (
    <div>
      <ProductDetail productId={productId} />
    </div>
  );
}

export default ProductDetailPage;