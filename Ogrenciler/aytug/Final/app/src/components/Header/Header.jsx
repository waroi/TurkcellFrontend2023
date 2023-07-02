import * as S from "./Header.style";
import arrowRight from "../../assets/icons/arrow-right.svg";

const Header = () => {
	return (
		<S.HeaderSection>
			<S.Section height="100%">
				<S.HeaderContainer>
					<div className="row justify-content-center mt-5">
						<div className="col-12 col-lg-5 mt-5">
							<S.HeaderTextArea>
								<S.HeaderText>Where Shopping</S.HeaderText>
								<S.HeaderTextSmall>Meets Satisfaction!</S.HeaderTextSmall>
								<S.HeaderDesc>
									Experience Retail Therapy at Its Finest. Discover a Universe of Trendy Products, Irresistible Deals,
									and Unforgettable Shopping Experiences!
								</S.HeaderDesc>
								<S.HeaderButtons>
									<S.HeaderButton type="primary">
										View Intro <img src={arrowRight} />
									</S.HeaderButton>
									<S.HeaderButton>Explore Now</S.HeaderButton>
								</S.HeaderButtons>
							</S.HeaderTextArea>
						</div>
						<div className="col-12 col-lg-4">
							<S.HeaderImg src="/src/assets/images/header-banner.png" />
						</div>
					</div>
				</S.HeaderContainer>
			</S.Section>
		</S.HeaderSection>
	);
};

export default Header;
