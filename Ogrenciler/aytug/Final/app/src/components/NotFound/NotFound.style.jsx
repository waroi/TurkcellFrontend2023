import styled from "styled-components";

export const NFContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

export const NFText = styled.p`
	margin: 0;
	font-size: 14px;
	font-weight: 500;
	color: ${(props) => props.theme.spanTextSecondary};
`;

export const NF404 = styled(NFText)`
	margin: 0 20px 0 0;
	padding: 0 23px 0 0;
	font-size: 24px;
	border-right: 0.66px solid ${(props) => props.theme.notFoundBorder};
`;
