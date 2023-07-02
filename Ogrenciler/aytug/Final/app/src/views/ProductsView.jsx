import ProductWrapper from "../components/ProductWrapper/ProductWrapper";
import BannerCreator from "../components/BannerCreator/BannerCreator";

const ProductsView = () => {
	return (
		<>
			<BannerCreator bckImg="productbanner.svg" textAlign="end" bckClr="productBannerBg" textClr="" />
			<ProductWrapper />
		</>
	);
};

export default ProductsView;
