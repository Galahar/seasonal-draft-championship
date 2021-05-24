import React from "react";
import styled from "styled-components";
import DiscIcon from "../../assets/illustrations/Discord-Logo-White.png";
import { Link } from "react-router-dom";
import "./DiscLogo.css";

const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1px 0;
    @media screen and (max-height: 500px) {
        -webkit-transition: opacity 0.1s ease-in-out;
        -moz-transition: opacity 0.1s ease-in-out;
        -ms-transition: opacity 0.1s ease-in-out;
        -o-transition: opacity 0.1s ease-in-out;
        opacity: 0;
        pointer-events: none;
    }
`;

export function DiscordIcon(props) {
    return (
        <IconContainer>
            <Link to="/">
                <img className="img-resize-disc" src={DiscIcon} alt="Discord Logo"></img>
            </Link>
        </IconContainer>
    );
}