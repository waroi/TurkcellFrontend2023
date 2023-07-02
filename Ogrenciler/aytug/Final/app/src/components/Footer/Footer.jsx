import * as S from "./Footer.style";

const Footer = () => {
	return (
		<S.FooterContainer>
			<S.FooterSection>
				<S.FooterBanner className="row">
					<S.FooterBannerTitle className="col-lg-4">{`Register Now So You Don't Miss Our Programs`}</S.FooterBannerTitle>
					<S.FooterBannerSub className="col-lg-7">
						<S.SubForm className="row">
							<S.SubFormInput type="text" placeholder="Enter Your Email" className="col-lg-9" />
							<S.SubFormButton className="col-lg-3">
								<S.SubBtn>Subscribe Now</S.SubBtn>
							</S.SubFormButton>
						</S.SubForm>
					</S.FooterBannerSub>
				</S.FooterBanner>
				<S.FooterLinks className="row">
					<S.FooterPages className="col-lg-4">
						<S.FooterPage>
							<S.FooterLink>Home</S.FooterLink>
						</S.FooterPage>
						<S.FooterPage>
							<S.FooterLink>Category</S.FooterLink>
						</S.FooterPage>
						<S.FooterPage>
							<S.FooterLink>About</S.FooterLink>
						</S.FooterPage>
						<S.FooterPage>
							<S.FooterLink>Contact</S.FooterLink>
						</S.FooterPage>
					</S.FooterPages>
					<S.FooterSocials className="col-lg-2">
						<S.FooterSocial>
							<S.FooterSocialLink>
								<i className="bi bi-facebook"></i>
							</S.FooterSocialLink>
						</S.FooterSocial>
						<S.FooterSocial>
							<S.FooterSocialLink>
								<i className="bi bi-twitter"></i>
							</S.FooterSocialLink>
						</S.FooterSocial>
						<S.FooterSocial>
							<S.FooterSocialLink>
								<i className="bi bi-instagram"></i>
							</S.FooterSocialLink>
						</S.FooterSocial>
						<S.FooterSocial>
							<S.FooterSocialLink>
								<i className="bi bi-youtube"></i>
							</S.FooterSocialLink>
						</S.FooterSocial>
					</S.FooterSocials>
				</S.FooterLinks>
				<hr />
				<S.FooterCopyright className="row">
					<S.FooterCopyrightText className="col-3">© 2022 Monito. All rights reserved.</S.FooterCopyrightText>
					<S.FooterLogo className="col-2" src="/src/assets/images/logo.svg" alt="logo"></S.FooterLogo>
					<S.FooterCopyrightLinks className="col-3">
						<S.FooterCopyrightLink>Terms of Service</S.FooterCopyrightLink>
						<S.FooterCopyrightLink>Privacy Policy</S.FooterCopyrightLink>
					</S.FooterCopyrightLinks>
				</S.FooterCopyright>
			</S.FooterSection>
		</S.FooterContainer>
	);
};

export default Footer;
