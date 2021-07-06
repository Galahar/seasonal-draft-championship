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

export const MenuContainer = styled.div`
	width: 90%;
	min-height: 40px;
	margin-top: 40px;
	display: flex;
	justify-content: center;
`;

export const Text = styled.p`
	width: 100%;
	font-size: 20px;
    font-weight: 600;
    color: ${theme.fadedText};
	display: flex;
	flex-wrap: wrap;
`;

export const List = styled.li`
	color: ${theme.fadedText};
	white-space: pre-line;
`;