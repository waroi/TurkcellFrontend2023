import styled from "styled-components";

export const Weather = styled.button`
	background-image: ${(props) => props.weatherStatus};
`;
