import { useParams } from "react-router-dom";
import { ProductDetail } from "../components/ProductsDetailComponents/ProductsDetailContent";

const ProductDetailPage = () => {
  const { productId } = useParams();
  console.log(productId)

  return (
    <div>
      <h1>Detail Page</h1>
      <ProductDetail productId={productId} />
    </div>
  );
}

export default ProductDetailPage;