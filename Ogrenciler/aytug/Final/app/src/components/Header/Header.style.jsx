import styled from "styled-components";
import { SectionStyled } from "../Section/Section.style";
import * as S from "../styles";

export const HeaderSection = styled.section`
	background-image: url("src/assets/images/banner.svg");
	width: 100vw;
	background-size: cover;
	height: 100vh;
	background-position-x: 0%;
	background-position-y: 0%;
	background-color: ${(props) => props.theme.headerBgPrimary};
	margin-top: -66px;
`;

export const Section = styled(SectionStyled)`
	margin: 0;
`;

export const HeaderContainer = styled.div`
	display: flex;
	flex-direction: column;
	text-align: start;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;

export const HeaderTextArea = styled.div``;

export const HeaderText = styled.h1`
	font-size: 60px;
	margin: 0 0 5px;
	font-weight: 900;
	color: ${(props) => props.theme.headerTitlePrimary};
`;

export const HeaderTextSmall = styled.h2`
	font-size: 46px;
	font-weight: 700;
	color: ${(props) => props.theme.headerTitlePrimary};
`;

export const HeaderDesc = styled.p`
	font-size: 16px;
	margin: 25px 0 35px;
	font-weight: 500;
	color: ${(props) => props.theme.headerDesc};
`;

export const HeaderImg = styled.img`
	width: 100%;
	margin: auto auto 0 0;
`;

export const HeaderButtons = styled.div`
	display: flex;
	justify-content: start;
`;

export const HeaderButton = styled(S.StyledButton)`
	margin: 0 10px 0 0;
`;
