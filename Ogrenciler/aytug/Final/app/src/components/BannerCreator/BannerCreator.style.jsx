import styled from "styled-components";

export const BannerContainer = styled.div`
	background-image: url("/src/assets/images/${(props) => props.bckimg}");
	height: 40vh;
	background-size: cover;
	border-radius: 20px;
	background-color: ${(props) => props.theme[props.bckclr]};
	padding: 60px 80px;
	display: grid;
	grid-template-columns: 1fr 1fr;
`;

export const BannerImg = styled.img`
	/* ------------------- BURAYA BAKILACAK --------------------*/
	width: 70%;
	height: 300px;
	margin: auto;
`;

export const BannerTextArea = styled.div`
	text-align: ${(props) => (props.textalign === "start" ? "start" : "end")};
	order: ${(props) => (props.textalign === "start" ? "-1" : "1")};
`;

export const BannerTitle = styled.h2`
	font-size: 52px;
	font-weight: 800;
	color: ${(props) => props.theme.bannerTextPrimary};
`;

export const BannerSubtitle = styled.h2`
	font-size: 36px;
	font-weight: 700;
	color: ${(props) => props.theme.bannerTextPrimary};
`;

export const BannerDesc = styled.p`
	font-size: 12px;
	line-height: 18px;
	color: ${(props) => props.theme.bannerTextSecondary};
	margin: 8px 0 24px;
`;

export const BannerBtns = styled.div`
	display: flex;
	justify-content: ${(props) => (props.textalign === "start" ? "start" : "end")};
	gap: 1em;
`;
