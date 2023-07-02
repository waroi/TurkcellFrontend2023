import styled from "styled-components";

export const CardLink = styled.a`
	text-decoration: none;
	text-align: start;
	cursor: pointer;
	color: ${(props) => props.theme.textPrimary};
	width: 100%;
`;

export const Card = styled.div`
	background-color: ${(props) => props.theme.backgroundColorPrimary};
	padding: 8px;
	border-radius: 12px;
	box-shadow: 0 4px 28px -2px rgba(0, 0, 0, 0.08);
	height: ${(props) => props.height}px;
`;

export const CardImage = styled.img`
	width: 100%;
	height: 264px;
	/* height: 100%; */
	border-radius: 12px;
`;

export const CardBody = styled.div`
	display: flex;
	flex-direction: column;
	margin: 8px 0 12px;
	padding: 8px;
`;

export const CardTitle = styled.h4`
	font-size: 16px;
	font-weight: bold;
	margin: 0 0 5px;

	width: 100%;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;
