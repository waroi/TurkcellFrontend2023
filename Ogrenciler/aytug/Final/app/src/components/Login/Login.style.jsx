import styled from "styled-components";
import * as S from "../styles";

export const LoginContainer = styled.div``;
export const LoginForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1em;
`;
export const LoginTitle = styled.h1``;
export const LoginInput = styled(S.StyledInput)`
	padding: 14px 28px;
`;
export const LoginButton = styled(S.StyledButton)`
	width: 25%;
	margin: auto;
`;
export const LoginLink = styled(S.StyledLink)`
	color: black;
	background: none;
	border: none;
`;
