import styled from "styled-components";
import { StyledButton } from "../styles";
import * as S from "../styles";
import { SectionStyled } from "../Section/Section.style";

export const FooterSection = styled(SectionStyled)`
	margin: 0;
	padding: 3em 7em;
`;

export const FooterContainer = styled.footer`
	background-color: ${(props) => props.theme.footerBg};
	padding: 80px 0 0;
	border-radius: 40px 40px 0 0;
`;

export const FooterBanner = styled.div`
	padding: 32px;
	background-color: ${(props) => props.theme.footerBannerBg};
	border-radius: 16px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const FooterBannerTitle = styled.h2`
	font-size: 24px;
	font-weight: 700;
	color: ${(props) => props.theme.footerBannerText};
	text-align: start;
	margin: 0;
	padding: 0;
`;

export const FooterBannerSub = styled.div``;

export const SubForm = styled.form`
	background-color: ${(props) => props.theme.footerSubFormBg};
	border-radius: 14px;
	padding: 12px;
`;

export const SubFormInput = styled.input`
	border: 1px solid ${(props) => props.theme.footerSubInputBorder};
	border-radius: 8px;
	background-color: ${(props) => props.theme.footerSubFormBg};
	padding: 14px 28px;
`;

export const SubFormButton = styled.div`
	display: flex;
	align-items: center;
`;

export const SubBtn = styled(StyledButton)`
	border-radius: 10px;
	padding: 0 30px;
	width: 100%;
`;

export const FooterLinks = styled.div`
	justify-content: space-between;
	padding: 40px 0;
`;

export const FooterPages = styled(S.ListHorizontal)`
	justify-content: space-between;
`;

export const FooterPage = styled.li``;

export const FooterLink = styled.a`
	color: ${(props) => props.theme.footerLinkClr};
	font-size: 16px;
	font-weight: 500;
	cursor: pointer;
`;

export const FooterSocials = styled(S.ListHorizontal)`
	justify-content: space-between;
`;

export const FooterSocial = styled(FooterPage)``;

export const FooterSocialLink = styled(FooterLink)``;

export const FooterCopyright = styled(FooterLinks)`
	padding: 40px 0 0 0;
`;

export const FooterCopyrightText = styled.p`
	color: ${(props) => props.theme.footerCopyText};
`;

export const FooterLogo = styled.img``;

export const FooterCopyrightLinks = styled(S.ListHorizontal)`
	justify-content: space-between;
`;

export const FooterCopyrightLink = styled.li`
	color: ${(props) => props.theme.footerCopyText};
`;
