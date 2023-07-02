import Header from "../components/Header/Header";
import NewClothes from "../components/NewClothes/NewClothes";
import BannerCreator from "../components/BannerCreator/BannerCreator";
import OurProducts from "../components/OurProducts/OurProducts";
import BestSellers from "../components/BestSellers/BestSellers";
import Blog from "../components/Blog/Blog";

const HomeView = () => {
	return (
		<>
			<Header />
			<NewClothes />
			<BannerCreator bckImg="banner2.svg" textAlign="end" bckClr="bannerBgSecondary" />
			<OurProducts />
			<BestSellers />
			<BannerCreator title="Adoption" bckImg="banner3.svg" />
			<Blog />
		</>
	);
};

export default HomeView;
