import Headline from "../components/Headline/Headline";
import Navbar from "../components/Navbar/Navbar";
import ProductListView from "../views/ProductList/ProductListView";

function Home() {
  return (
    <div>
      <Navbar />
      <Headline />
      <ProductListView />
    </div>
  );
}

export default Home;
