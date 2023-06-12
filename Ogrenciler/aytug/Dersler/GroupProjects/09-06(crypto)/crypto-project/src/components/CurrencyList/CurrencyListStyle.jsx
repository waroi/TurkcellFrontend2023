import styled from "styled-components";

export const Td = styled.td`
	background-color: ${(props) => props.theme.background};
	text-align: end;
	cursor: pointer;
	border-bottom: 1px solid ${(props) => props.theme.border};
	padding: 1rem;
	/* color: ${({ value }) => (value !== undefined && value > 0 ? "green" : "red")}; */
	color: ${(props) => props.theme.text};

	&:hover {
		background-color: ${(props) => props.theme.hover};
	}
`;

export const Th = styled.th`
	text-align: end;
	cursor: pointer;
`;
