import styled from "styled-components";

export const StyledImg = styled.img`
	height: 200px;
`;

export const StyledDiv = styled.div`
	padding: 20px 100px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;

`;

export const StyledCard = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	transition: all 0.5s ease-in-out;
	cursor: pointer;

	&:hover {
		transform: scale(1.1);
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
		
	}


	
`;