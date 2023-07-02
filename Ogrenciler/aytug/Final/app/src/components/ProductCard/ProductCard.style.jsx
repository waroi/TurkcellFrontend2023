import styled from "styled-components";
import * as C from "../Card/Card.style";
import * as S from "../styles";

export const CardLink = styled(C.CardLink)``;

export const Card = styled(C.Card)``;

export const CardImage = styled(C.CardImage)``;

export const CardBody = styled(C.CardBody)``;

export const CardTitle = styled(C.CardTitle)``;

export const ProductDetailsArea = styled(S.ListHorizontal)`
	margin: 0 0 4px;
`;

export const ProductDetail = styled.li`
	margin-right: 10px;
	font-size: 12px;
`;

export const ProductPriceArea = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const ProductPrice = styled.p`
	font-weight: bold;
	font-size: 14px;
	margin: 0;
`;

export const ProductOffer = styled.div`
	background-color: ${(props) => props.theme.cardBgPrimary};
	margin: 10px 0 0;
	padding: 10px;
	display: flex;
	align-items: center;
	width: 100%;
	border-radius: 8px;
	justify-content: space-around;
`;

export const AddToCart = styled(S.StyledButton)`
	background: none;
	color: green;
	margin: 0;
	padding: 0;
	font-size: 24px;
	border: none;
	color: ${(props) => (props.productcount > 0 ? "green" : "grey")};
	cursor: ${(props) => (props.productcount > 0 ? "pointer" : "not-allowed")};
`;
