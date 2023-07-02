import * as S from "./NotFound.style";
import Section from "../../components/Section/Section";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
  }
`;

const NotFound = () => {
	return (
		<>
			<GlobalStyle />
			<Section>
				<S.NFContainer>
					<S.NF404>404</S.NF404>
					<S.NFText>This page could not be found.</S.NFText>
				</S.NFContainer>
			</Section>
		</>
	);
};

export default NotFound;
