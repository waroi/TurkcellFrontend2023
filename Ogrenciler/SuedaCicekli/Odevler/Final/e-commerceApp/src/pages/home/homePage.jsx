import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/footer/footer";
import { getProducts } from "../../redux/features/productSlice";
import AdvertView from "../../view/home/advertView/advertView";
import BannerView from "../../view/home/bannerView/banner";
import CardLookView from "../../view/home/cardLookView/cardLook";
import NewsView from "../../view/home/newsView/newsView";
import OrangeBanner from "../../view/home/orangeBannerView/orangeBanner";
import OurProductView from "../../view/home/ourProductView/ourProduct";
import SectionBannerView from "../../view/home/sectionBannerView/sectionBanner";

const HomePage = () => {
  const products = useSelector((state) => state.products.products);
  const isLoading = useSelector((state) => state.products.loading);
  const dispatch = useDispatch();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!isInitialized) {
      dispatch(getProducts());
    }
  }, [dispatch, isInitialized]);

  console.log(products);

  return (
    <div>
      <BannerView />
      <CardLookView products={products} />
      <SectionBannerView />
      <OurProductView products={products} />
      <AdvertView />
      <OrangeBanner />
      <NewsView />
      <Footer />
    </div>
  );
};

export default HomePage;
