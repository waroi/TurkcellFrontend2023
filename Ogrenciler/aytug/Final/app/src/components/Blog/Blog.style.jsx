import styled from "styled-components";

export const ArticleContainer = styled.div`
	display: grid;
	grid-direction: row;
	grid-template-columns: repeat(3, 1fr);
	justify-items: center;
	align-items: center;
	/* template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
`;
