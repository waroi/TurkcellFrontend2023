import styled from "styled-components";
import * as P from "../ProductCard/ProductCard.style";
import * as C from "../Card/Card.style";
import * as S from "../styles";

export const CardLink = styled(P.CardLink)``;

export const Card = styled(C.Card)`
	display: grid;
	grid-template-columns: 2fr 4fr 1fr;
`;

export const CardImage = styled(P.CardImage)``;

export const CardBody = styled(P.CardBody)``;

export const ItemTitle = styled(P.CardTitle)``;

export const ItemPrice = styled(P.ProductPrice)``;

export const CardActions = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const ItemQuantityArea = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	border-radius: 20px;
`;

export const ItemQuantity = styled.input`
	min-width: 60px;
	max-width: 80px;
	background: white;
	color: black;
	height: 60px;
	margin: 0;
	padding: 20px;
	text-align: center;
	font-size: 1.2rem;
	/* border: 1px solid ${(props) => props.theme.btnBorderPrimary}; */
	border-radius: 5px;
	border: none;
`;

export const QuantityButton = styled(S.StyledButton)`
	padding: 0.5em 1em;
	border-radius: 5px;
	border: none;
`;

export const DeleteItemButton = styled(S.StyledButton)`
	color: white;
	background-color: red;
`;
