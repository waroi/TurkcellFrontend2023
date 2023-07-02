import styled from "styled-components";
import { ListHorizontal, StyledLink } from "../styles";

export const ProductContainer = styled.div`
	border: 0.66px solid ${(props) => props.theme.productDetailBorder};
	border-radius: 20px;
	padding: 22px;
`;

export const ProductImageArea = styled.div``;

export const ProductImage = styled.img`
	width: 100%;
	border-radius: 10px;
`;

export const ProductDetailsArea = styled.div``;

export const ProductBreadCrumbs = styled(ListHorizontal)`
	gap: 1em;
	margin: 1em 0;
`;

export const BreadCrumbsLink = styled(StyledLink)`
	color: black;
	flex-wrap: nowrap;
	padding: 0;
	background: none;
	border: none;
`;

export const ProductTitle = styled.h3`
	font-size: 24px;
	font-weight: 700;
	text-align: start;
`;

export const ProductPrice = styled.p`
	font-size: 24px;
	font-weight: 700;
	text-align: start;
`;

export const ProductButtonsArea = styled.div`
	display: flex;
	gap: 1em;
`;

export const ProductDetailList = styled.ul`
	margin: 20px 0;
	text-align: start;
	padding: 0;
`;

export const ProductDetailListItem = styled.li``;

export const ProductDetailListItemText = styled.p``;

export const ProductProp = styled.span`
	font-weight: bold;
`;
