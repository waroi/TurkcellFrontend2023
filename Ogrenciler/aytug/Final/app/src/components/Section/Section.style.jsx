import styled from "styled-components";

export const SectionStyled = styled.section`
	margin: 60px 0;
	height: ${(props) => (props.height ? props.height : "auto")};
`;
