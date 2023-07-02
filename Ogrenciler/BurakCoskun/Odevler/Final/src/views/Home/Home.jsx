import Banner from "../../components/Banner/Banner";
import Hero from "../../components/Hero/Hero";
import NewProducts from "../../components/NewProducts/NewProducts";
import UsefulKnowledges from "../../components/UsefulKnowledges/UsefulKnowledges";
import OurProducts from "../../components/OurProducts/OurProducts";
import Sponsors from "../../components/Sponsors/Sponsors";
import SponsorBanner from "../../components/SponsorBanner/SponsorBanner";
import { useSelector } from "react-redux";

const Home = () => {
  const products = useSelector((state) => state.product.products);
  return (
    <>
      <Hero />
      <NewProducts products={products} length={8} />
      <Banner />
      <OurProducts />
      <Sponsors />
      <SponsorBanner />
      <UsefulKnowledges />
    </>
  );
};

export default Home;
