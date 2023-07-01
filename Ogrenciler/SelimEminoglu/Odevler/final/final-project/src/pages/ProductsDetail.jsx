import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ProductListView from "../views/ProductList/ProductListView";

function ProductsDetail() {
  return (
    <div>
      <Navbar />
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
