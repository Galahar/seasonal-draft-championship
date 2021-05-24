import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../themes.js";

export const Nav = styled.nav`
    background-color: ${theme.primary};
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 12;
    position: fixed;
    top: 0;
    border-bottom: 2px solid ${theme.brown};
    @media screen and (max-width: 1024px) {
        max-height: 100px;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    min-height: 70px;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 1024px) {
        display: none;
    }
`;

export const TopOfNavMenu = styled.div`
    display: flex;
    width: 100%;
    height: 40px;
    justify-content: space-between;
    @media screen and (max-width: 1024px) {
        display: none;
    }
`;

export const TopLeftText = styled.p`
    font-size: 90%;
    font-weight: 600;
    line-height: 1px;
    color: ${theme.fadedText};
`;

export const TopRightTextContainer = styled.div`
    display: flex;
    height: 30px;
    padding-right: 35px;
`;

export const TopRightTextChildOne = styled.div`
    display: flex;
    width: 100%;
    height: 30px;
    border-right: 1px solid ${theme.brown};
    padding: 0 10px;
`;

export const TopRightTextChildTwo = styled.div`
    display: flex;
    width: 100%;
    height: 30px;
    padding: 0 10px;
`;

export const TopRightText = styled(Link)`
    font-size: 90%;
    font-weight: 700;
    text-decoration: none;
    padding-top: 3px;
    color: ${theme.fadedText};
`;

export const BottomOfNavMenu = styled.div`
    display: flex;
    width: 100%;
    height: 60px;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 1024px) {
        display: none;
    }
    font-size: 17px;
    font-weight: 600;
    border-top: 1px solid ${theme.brown};
`;

export const MobileNavMenu = styled.div`
    display: flex;
    align-items: center;
    @media screen and (min-width: 1024px) {
        display: none;
    }
`;

export const NavLink = styled(Link)`
    height: 40px;
    color: ${theme.brownLight};
    text-transform: uppercase;
    font-size: 17px;
    padding: 0 40px;
    padding-top: 16px;
    letter-spacing: .1em;
    text-decoration: none;
    :hover {
        padding-bottom: 2px;
        border-top: 3px solid ${theme.highlight};
	}
    &.active {
        padding-bottom: 2px;
        border-top: 3px solid ${theme.highlight};
    }
`;