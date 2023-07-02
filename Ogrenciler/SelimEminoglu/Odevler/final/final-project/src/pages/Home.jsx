import Headline from "../components/Headline/Headline";
import MidAds from "../components/MidAds/MidAds";
import Navbar from "../components/Navbar/Navbar";
import ProductListView from "../views/ProductList/ProductListView";
import İconList from "../components/İconList/İconList";
import News from "../components/News/News";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Headline />
      <ProductListView
        h2Text="Whats new?"
        h3Text="Take a look at some of our pets"
        isEight={true}
      />
      <MidAds />
      <ProductListView
        h2Text="Hard to choose right products for your pets?"
        h3Text="Our Products"
        isEight={true}
        isGift={true}
      />
      <İconList />
      <MidAds
        istextright={false}
        backgroundcolor="#FFB775"
        image="./src/assets/images/ads_pic_2.png"
      />
      <News />
      <Footer />
    </div>
  );
}

export default Home;
