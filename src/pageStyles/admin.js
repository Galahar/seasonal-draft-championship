import styled from "styled-components";
import { theme } from "../themes.js";

export const Background = styled.div`
    width: 100%;
    height: 95vh;
    background-color: ${theme.primaryLight};
    display: flex;
    flex-direction: column;
    align-items: center;
    page-break-inside: avoid;
`;

export const ContentContainer = styled.div`
    width: 1024px;
	display: flex;
	flex-direction: column;
	align-items: center;
    margin-top: 150px;
	padding-bottom: 40px;
	background-color: ${theme.primary};
	border: 2px solid ${theme.brown};
	@media screen and (max-width: 1024px) {
		width: 100%;
	}
`;

export const Dropdown = styled.select`
	width: 80%;
	height: 100%;
	color: ${theme.brown};
	background: ${theme.white};
	font-size: 20px;
	option {
		color: ${theme.brown};
		background: ${theme.white};
		display: flex;
		white-space: pre;
		min-height: 20px;
		padding: 0px 2px 1px;
		:hover {
			background-color: ${theme.highlight};
			color: ${theme.brown};
		}
	}
`;

export const Input = styled.input`
	width: 80%;
	height: 100%;
	color: ${theme.brown};
	background: ${theme.white};
	font-size: 20px;
`;

export const MenuContainer = styled.div`
	width: 90%;
	height: 40px;
	margin-top: 40px;
	display: flex;
	justify-content: center;
`;

export const Label = styled.p`
	width: 20%;
	height: 100%;
	font-size: 20px;
    font-weight: 600;
    line-height: 1px;
    color: ${theme.fadedText};
`;

export const Submit = styled.button`
	width: 200px;
	height: 100%;
	background: ${theme.highlight};
`;