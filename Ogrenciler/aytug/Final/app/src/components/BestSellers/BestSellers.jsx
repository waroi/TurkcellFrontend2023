import SectionHeader from "../SectionHeader/SectionHeader";
import Section from "../Section/Section";
import * as S from "./BestSellers.style";
import * as B from "../../assets/images/brands/brands";

const BestSellers = () => {
	return (
		<Section>
			<SectionHeader subTitle="Proud To Be Part Of Pet Sellers" btnText="View all our sellers" to="/providers" />
			<S.Brands>
				<S.BrandImg src={B.kappa} alt="kappa" />
				<S.BrandImg src={B.bershka} alt="bershka" />
				<S.BrandImg src={B.adidas} alt="adidas" />
				<S.BrandImg src={B.calvin} alt="calvin" />
				<S.BrandImg src={B.columbia} alt="columbia" />
				<S.BrandImg src={B.diesel} alt="diesel" />
				<S.BrandImg src={B.lacoste} alt="lacoste" />
			</S.Brands>
		</Section>
	);
};

export default BestSellers;
