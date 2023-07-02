import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ProductListView from "../views/ProductList/ProductListView";
import { useParams } from "react-router-dom";
import DetailTable from "../components/DetailTable/DetailTable";

function ProductsDetail() {
  const { id } = useParams();
  return (
    <div>
      <Navbar />
      <DetailTable id={id} />
      <ProductListView
        h2Text="Whats new?"
        h3Text="See more puppies"
        isButton={false}
        isEight={false}
      />
      <Footer isBottomLine={false} />
    </div>
  );
}

export default ProductsDetail;
