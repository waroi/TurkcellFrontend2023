import styled from "styled-components";
import { Link } from "react-router-dom";

export const ListHorizontal = styled.ul`
	list-decoration: none;
	padding: 0;
	margin: 0;
	display: flex;
`;

export const StyledInput = styled.input`
	border: 1px solid ${(props) => props.theme.footerSubInputBorder};
	border-radius: 8px;
	background-color: ${(props) => props.theme.footerSubFormBg};
	padding: 14px 28px;
	color: ${(props) => props.theme.inputTextColor};
	font-size: 14px;
	font-weight: 500;
	text-align: start;
	/* width: 100%; */
	/* margin-bottom: 10px; */
`;

export const StyledLink = styled(Link)`
	color: ${(props) => (props.type === "primary" ? props.theme.btnColorPrimary : props.theme.btnColorSecondary)};
	background-color: ${(props) => (props.type === "primary" ? props.theme.btnBgPrimary : props.theme.btnBgSecondary)};
	font-size: 16px;
	padding: 10px 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: ${(props) => props.borderradius || 50}px;
	font-weight: ${(props) => (props.type === "primary" ? "normal" : 500)};
	border: 1.25px solid ${(props) => props.theme.btnBorderPrimary};
	text-align: center;
	margin: 0 auto;
	cursor: pointer;
`;

export const StyledButton = styled.button`
	color: ${(props) => (props.type === "primary" ? props.theme.btnColorPrimary : props.theme.btnColorSecondary)};
	background-color: ${(props) => (props.type === "primary" ? props.theme.btnBgPrimary : props.theme.btnBgSecondary)};
	font-size: 16px;
	padding: 10px 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: ${(props) => props.borderradius || 50}px;
	font-weight: ${(props) => (props.type === "primary" ? "normal" : 500)};
	border: 1.25px solid ${(props) => props.theme.btnBorderPrimary};
	text-align: center;
	/* margin: 0 auto; */
	cursor: pointer;
`;

export const FormikError = styled.p`
	color: red;
	font-size: 14px;
	/* margin-top: 4px; */
	text-align: start;
`;
