import ProductContainer from "../ProductContainer/ProductContainer";
import SectionHeader from "../SectionHeader/SectionHeader";
import Section from "../Section/Section";

const OurProducts = () => {
	return (
		<Section>
			<SectionHeader
				title="Hard to choose right products for your electroincs?"
				subTitle="Our Products"
				to="/products"
			/>
			<ProductContainer categoryWildcard="electronics" />
		</Section>
	);
};

export default OurProducts;
