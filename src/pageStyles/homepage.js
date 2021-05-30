import styled from "styled-components";
import BackgroundImg from "../assets/illustrations/background-image.jpg";
import { theme } from "../themes.js";

export const TopContainer = styled.div`
    width: 100%;
    height: 95vh;
    background-image: url(${BackgroundImg});
    background-position: center center;
    background-repeat: no-repeat;
/*     background-attachment: fixed; */
    background-size: cover;
    background-color: ${theme.primaryLight};
    @media screen and (max-width: 1280px) {
        height: 700px;
    }
    @media screen and (max-width: 1024px) {
        height: 800px;
    }
`;

export const BackgroundFilter = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(55, 55, 55, 0.6);
    display: flex;
    flex-direction: column;
    align-items: center;
    page-break-inside: avoid;
`;

export const TitlesContainer = styled.div`
    width: 50%;
    height: 65%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 200px;
    @media screen and (max-width: 1024px) {
        margin-top: 250px;
    }
`;

export const TitleText = styled.h1`
    margin-top: 0;
    margin-bottom: 0;
    font-size: 80px;    
    white-space: nowrap;
    color: ${theme.white};
    text-shadow: 1px 1px 0 black, 1px 1px 0 black, 3px 3px 0 black;
    @media screen and (max-width: 1680px) {
        font-size: 75px;
        text-shadow: 1px 1px 0 black, 1px 1px 0 black, 3px 3px 0 black;
    }
    @media screen and (max-width: 1480px) {
        font-size: 70px;
        text-shadow: 1px 1px 0 black, 1px 1px 0 black, 3px 3px 0 black;
    }
    @media screen and (max-width: 1280px) {
        font-size: 65px;
        text-shadow: 1px 1px 0 black, 1px 1px 0 black, 3px 3px 0 black;
    }
    @media screen and (max-width: 1024px) {
        font-size: 50px;
        text-shadow: 1px 1px 0 black, 1px 1px 0 black, 2px 2px 0 black;
    }
`;

export const TitleTextSignup = styled.h1`
    margin-top: 40px;
    margin-bottom: 0;
    font-size: 1.5vw;
    white-space: nowrap;
    color: ${theme.white};
    text-shadow: 1px 1px 0 black, 1px 1px 0 black, 2px 2px 0 black;
    @media screen and (max-width: 1680px) {
        text-shadow: 1px 1px 0 black, 1px 1px 0 black, 2px 2px 0 black;
    }
    @media screen and (max-width: 1480px) {
        text-shadow: 1px 1px 0 black, 1px 1px 0 black, 2px 2px 0 black;
    }
    @media screen and (max-width: 1280px) {
        text-shadow: 1px 1px 0 black, 1px 1px 0 black, 2px 2px 0 black;
    }
    @media screen and (max-width: 1024px) {
        font-size: 5vw;
        text-shadow: 1px 1px 0 black, 1px 1px 0 black, 1px 1px 0 black;
    }
    @media screen and (max-height: 500px) {
        -webkit-transition: opacity 0.1s ease-in-out;
        -moz-transition: opacity 0.1s ease-in-out;
        -ms-transition: opacity 0.1s ease-in-out;
        -o-transition: opacity 0.1s ease-in-out;
        opacity: 0;
        pointer-events: none;
    }
`;