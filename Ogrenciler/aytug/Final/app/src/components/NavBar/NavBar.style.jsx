import styled from "styled-components";
import * as S from "../styles";

export const NavBar = styled.nav``;

export const NavLi = styled.li``;

export const NavLink = styled(S.StyledLink)`
	border: none;
	background: none;
	color: ${(props) => props.theme.navLinkColor};
`;

export const SearchInput = styled.input`
	border: none;
	border-radius: 50px;
	padding: 12px 16px;
	background: ${(props) => props.theme.navbarSearchBg};
	color: ${(props) => props.theme.navbarSearchClr};
`;

export const UserButtons = styled.div`
	display: flex;
	gap: 1em;
`;

export const BasketLink = styled(S.StyledLink)`
	border: none;
`;

export const ProfileBtn = styled(S.StyledButton)`
	border: none;
`;

export const ExitBtn = styled(S.StyledButton)`
	background-color: #ff0000;
	border-radius: 8px;
`;
