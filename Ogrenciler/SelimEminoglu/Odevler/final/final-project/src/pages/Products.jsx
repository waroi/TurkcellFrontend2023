import AllList from "../views/AllList/AllList";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import ProductAds from "../components/ProductAds/ProductAds";

function Products() {
  return (
    <div>
      <Navbar />
      <ProductAds />
      <AllList />
      <Footer />
    </div>
  );
}

export default Products;
