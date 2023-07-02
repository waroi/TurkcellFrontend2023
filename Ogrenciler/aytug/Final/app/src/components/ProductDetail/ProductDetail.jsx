import Section from "../Section/Section";
import * as S from "./ProductDetail.style";
import PropTypes from "prop-types";
import { capitalizeFirstChar } from "../../utils/wordFixer";
import { StyledButton } from "../styles";

const ProductDetail = ({ product }) => {
	return (
		<>
			{product && (
				<Section>
					<S.ProductContainer className="row">
						<S.ProductImageArea className="col-lg-6">
							<S.ProductImage src={product.image} />
						</S.ProductImageArea>
						<S.ProductDetailsArea className="col-lg-6">
							<S.ProductBreadCrumbs>
								<S.BreadCrumbsLink to="/">Home</S.BreadCrumbsLink>
								<S.BreadCrumbsLink to="/products">{capitalizeFirstChar(product.category)}</S.BreadCrumbsLink>
								<S.BreadCrumbsLink>{capitalizeFirstChar(product.title).slice(0, 40)}</S.BreadCrumbsLink>
							</S.ProductBreadCrumbs>
							<S.ProductTitle>{capitalizeFirstChar(product.title)}</S.ProductTitle>
							<S.ProductPrice>
								₺ {product.price} / Stock : {product.rating.count}
							</S.ProductPrice>
							<S.ProductButtonsArea>
								<StyledButton>Contact Us</StyledButton>
								<StyledButton type="primary">Chat with Monito</StyledButton>
							</S.ProductButtonsArea>
							<S.ProductDetailList>
								<S.ProductDetailListItem>
									<S.ProductDetailListItemText>
										<S.ProductProp>Name : </S.ProductProp>
										{product.title}
									</S.ProductDetailListItemText>
								</S.ProductDetailListItem>
								<S.ProductDetailListItem>
									<S.ProductDetailListItemText>
										<S.ProductProp>Category : </S.ProductProp> {product.category}
									</S.ProductDetailListItemText>
								</S.ProductDetailListItem>
								<S.ProductDetailListItem>
									<S.ProductDetailListItemText>
										<S.ProductProp>Description : </S.ProductProp> {product.description}
									</S.ProductDetailListItemText>
								</S.ProductDetailListItem>
								<S.ProductDetailListItem>
									<S.ProductDetailListItemText>
										<S.ProductProp>Rating : </S.ProductProp> {product.rating.rate}
									</S.ProductDetailListItemText>
								</S.ProductDetailListItem>
								<S.ProductDetailListItem>
									<S.ProductDetailListItemText>
										<S.ProductProp>Reviews : </S.ProductProp> {product.rating.count}
									</S.ProductDetailListItemText>
								</S.ProductDetailListItem>
							</S.ProductDetailList>
						</S.ProductDetailsArea>
					</S.ProductContainer>
				</Section>
			)}
		</>
	);
};

ProductDetail.propTypes = {
	product: PropTypes.object,
};

export default ProductDetail;
