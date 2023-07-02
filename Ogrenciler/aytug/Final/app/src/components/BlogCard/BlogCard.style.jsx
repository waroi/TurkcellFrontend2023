import styled from "styled-components";
import * as C from "../Card/Card.style";

export const CardLink = styled(C.CardLink)``;

export const Card = styled(C.Card)``;

export const CardImage = styled(C.CardImage)``;

export const CardBody = styled(C.CardBody)``;

export const CardTitle = styled(C.CardTitle)`
	margin: 0 0 6px;
`;

export const CardCategory = styled.span`
	border-radius: 28px;
	color: ${(props) => props.theme.spanTextSecondary};
	font-size: 10px;
	font-weight: 700;
	background-color: ${(props) => props.theme.spanBgPrimary};
	padding: 2px 10px;
	margin: 0 0 10px;
	width: fit-content;
`;

export const CardText = styled.p`
	color: ${(props) => props.theme.spanTextPrimary};
	margin: 0;
`;
