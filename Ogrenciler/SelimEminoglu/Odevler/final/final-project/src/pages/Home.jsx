import Headline from "../components/Headline/Headline";
import Navbar from "../components/Navbar/Navbar";
import ProductListView from "../views/ProductList/ProductListView";

function Home() {
  return (
    <div>
      <Navbar />
      <Headline />
      <ProductListView
        h2Text="Yeni Gelişmeler"
        h3Text="Güncel Gelişmeleri Takip Edin"
      />
    </div>
  );
}

export default Home;
