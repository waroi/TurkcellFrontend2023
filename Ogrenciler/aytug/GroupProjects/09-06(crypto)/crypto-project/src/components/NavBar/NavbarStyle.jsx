import styled from "styled-components";

export const NavBarArea = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: #0d1421;
	padding: 1rem 1rem;
	border-bottom: 1px solid rgb(166, 176, 195);
	* {
		margin-bottom: 0;
	}
`;

export const HeaderArea = styled(NavBarArea)``;

export const NavBarSpan = styled.span`
	color: #4688ff;
`;
