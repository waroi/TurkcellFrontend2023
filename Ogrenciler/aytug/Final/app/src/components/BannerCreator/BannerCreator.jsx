import Section from "../Section/Section";
import arrowRight from "../../assets/icons/arrow-right.svg";
import * as S from "./BannerCreator.style";
import PropTypes from "prop-types";
import { StyledButton } from "../styles";

const BannerCreator = ({
	img = "/src/assets/images/header-banner.png",
	title = "Where Shopping",
	subtitle = "Meets Satisfaction!",
	desc = "Experience Retail Therapy at Its Finest. Discover a Universe of Trendy Products, Irresistible Deals, and/nUnforgettable Shopping Experiences!",
	btnText1 = "View Intro",
	btnText2 = "Explore Now",
	bckImg = "",
	bckClr = "bannerBgPrimary",
	textAlign = "start",
}) => {
	return (
		<Section>
			<S.BannerContainer bckclr={bckClr} bckimg={bckImg}>
				<S.BannerImg src={img} alt="broken-banner.jpg" />
				<S.BannerTextArea textalign={textAlign}>
					<S.BannerTitle>{title}</S.BannerTitle>
					<S.BannerSubtitle>{subtitle}</S.BannerSubtitle>
					<S.BannerDesc>{desc}</S.BannerDesc>
					<S.BannerBtns textalign={textAlign}>
						<StyledButton type="primary">
							{btnText1} <img src={arrowRight} />
						</StyledButton>
						<StyledButton>{btnText2}</StyledButton>
					</S.BannerBtns>
				</S.BannerTextArea>
			</S.BannerContainer>
		</Section>
	);
};

BannerCreator.propTypes = {
	img: PropTypes.string,
	title: PropTypes.string,
	subtitle: PropTypes.string,
	desc: PropTypes.string,
	btnText1: PropTypes.string,
	btnText2: PropTypes.string,
	bckImg: PropTypes.string,
	bckClr: PropTypes.string,
	textAlign: PropTypes.string,
};

export default BannerCreator;
