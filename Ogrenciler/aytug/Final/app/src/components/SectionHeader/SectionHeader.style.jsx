import styled from "styled-components";
import * as S from "../styles";

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 25px;
`;

export const HeaderDescription = styled.div`
	text-align: start;
`;

export const Title = styled.h4`
	font-size: 16px;
	font-weight: 500;
	color: ${(props) => props.theme.titlePrimary};
`;

export const SubTitle = styled.h3`
	font-size: 24px;
	font-weight: 700;
	line-height: 36px;
	color: ${(props) => props.theme.subtitlePrimary};
`;

export const SectionButton = styled(S.StyledLink)`
	margin: auto 0 auto auto;
`;
