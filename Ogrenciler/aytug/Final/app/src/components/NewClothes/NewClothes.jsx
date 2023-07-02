import ProductContainer from "../ProductContainer/ProductContainer";
import SectionHeader from "../SectionHeader/SectionHeader";
import Section from "../Section/Section";

const NewClothes = () => {
	return (
		<Section>
			<SectionHeader title="Whats new?" subTitle="Take A Look At Some Of Our Clothes" to="/products" />
			<ProductContainer categoryWildcard="clothing" />
		</Section>
	);
};

export default NewClothes;
