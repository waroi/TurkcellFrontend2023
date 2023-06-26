import Headline from "../components/Headline/Headline";
import MidAds from "../components/MidAds/MidAds";
import Navbar from "../components/Navbar/Navbar";
import ProductListView from "../views/ProductList/ProductListView";
import İconList from "../components/İconList/İconList";

function Home() {
  return (
    <div>
      <Navbar />
      <Headline />
      <ProductListView
        h2Text="Yeni Gelişmeler"
        h3Text="Güncel Gelişmeleri Takip Edin"
      />
      <MidAds />
      <ProductListView h2Text="Ne Tür Birşey Arıyorsun?" h3Text="Ürünlerimiz" />
      <İconList />
      <MidAds istextright={false} backgroundcolor="#FFB775" />
    </div>
  );
}

export default Home;
