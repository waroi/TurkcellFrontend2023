import AdoptionBanner from "../../components/Banners/HomeBanners/AdoptionBanner/AdoptionBanner";
import HeroBanner from "../../components/Banners/HomeBanners/HeroBanner/HeroBanner";
import ReversedHero from "../../components/Banners/HomeBanners/ReversedHeroBanner/ReversedHero";
import Knowledge from "../../components/Knowledge/Knowledge";
import ProductsSetOne from "../../components/Products/ProductsSetOne/ProductsSetOne";
import ProductsSetTwo from "../../components/Products/ProductsSetTwo/ProductsSetTwo";
import Sellers from "../../components/Sellers/Sellers";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <ProductsSetOne />
      <ReversedHero />
      <ProductsSetTwo />
      <Sellers />
      <AdoptionBanner />
      <Knowledge />
    </div>
  );
};

export default Home;
