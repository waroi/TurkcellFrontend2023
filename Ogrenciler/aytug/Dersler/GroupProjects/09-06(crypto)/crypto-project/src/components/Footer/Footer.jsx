import { FooterLi, FooterUl, FooterLinkHeader, FooterLink, FooterImage } from "./FooterStyle";

const Footer = () => {
	return (
		<div className="row mt-5 py-3 px-4">
			<div className="col-6 text-start">
				<img src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_1.svg?_=7934c0e" alt="" />
			</div>
			<div className="col-6">
				<div className="row text-start">
					<div className="col-3">
						<FooterUl>
							<FooterLinkHeader>Products</FooterLinkHeader>
							<FooterLi>
								<FooterLink>Blockchain Explorer</FooterLink>
							</FooterLi>
							<FooterLi>
								<FooterLink>Crypto API</FooterLink>
							</FooterLi>
							<FooterLi>
								<FooterLink>Crypto Indices</FooterLink>
							</FooterLi>
							<FooterLi>
								<FooterLink>Doodles</FooterLink>
							</FooterLi>
							<FooterLi>
								<FooterLink>Jobs Board</FooterLink>
							</FooterLi>
							<FooterLi>
								<FooterLink>Sitemap</FooterLink>
							</FooterLi>
						</FooterUl>
					</div>
					<div className="col-3">
						<FooterUl>
							<FooterLinkHeader>Company</FooterLinkHeader>
							<FooterLi>
								<FooterLink>About Us</FooterLink>
							</FooterLi>
							<FooterLi>
								<FooterLink>Terms of Uses</FooterLink>
							</FooterLi>
							<FooterLi>
								<FooterLink>Privacy Policy</FooterLink>
							</FooterLi>
							<FooterLi>
								<FooterLink>Cookie Preferences</FooterLink>
							</FooterLi>
							<FooterLi>
								<FooterLink>Community Rules</FooterLink>
							</FooterLi>
							<FooterLi>
								<FooterLink>Disclimer</FooterLink>
							</FooterLi>
							<FooterLi>
								<FooterLink>Methodology</FooterLink>
							</FooterLi>
							<FooterLi>
								<FooterLink>Careers</FooterLink>
							</FooterLi>
						</FooterUl>
					</div>
					<div className="col-3">
						<FooterUl>
							<FooterLinkHeader>Support</FooterLinkHeader>
							<FooterLi>
								<FooterLink>Request Form</FooterLink>
							</FooterLi>
							<FooterLi>
								<FooterLink>Contact Support</FooterLink>
							</FooterLi>
							<FooterLi>
								<FooterLink>FAQ</FooterLink>
							</FooterLi>
							<FooterLi>
								<FooterLink>Glossary</FooterLink>
							</FooterLi>
						</FooterUl>
					</div>
					<div className="col-3">
						<FooterUl>
							<FooterLinkHeader>Socials</FooterLinkHeader>
							<FooterLi>
								<FooterLink>Facebook</FooterLink>
							</FooterLi>
							<FooterLi>
								<FooterLink>Twitter</FooterLink>
							</FooterLi>
							<FooterLi>
								<FooterLink>Telegram</FooterLink>
							</FooterLi>
							<FooterLi>
								<FooterLink>Instagram</FooterLink>
							</FooterLi>
							<FooterLi>
								<FooterLink>Interactive Chat</FooterLink>
							</FooterLi>
						</FooterUl>
					</div>
				</div>
			</div>
			<div className="col-12 d-flex justify-content-between mt-5">
				<div className="copyright">
					<p>© 2023 CoinMarketCap. All rights reserved</p>
				</div>
				<div className="app-area">
					<FooterImage
						src="https://s2.coinmarketcap.com/static/cloud/img/app_store_badge_black_1.svg?_=7934c0e"
						alt=""
					/>
					<FooterImage src="https://s2.coinmarketcap.com/static/cloud/img/google_play_badge_1.png?_=7934c0e" alt="" />
					<FooterImage src="https://s2.coinmarketcap.com/static/cloud/img/qr-code-button.svg?_=7934c0e" alt="" />
				</div>
			</div>
		</div>
	);
};

export default Footer;
