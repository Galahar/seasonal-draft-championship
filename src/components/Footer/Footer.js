import styled from 'styled-components';
import { theme } from "../../themes.js";
   
export const FooterContainer = styled.nav`
    background-color: ${theme.primary};
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 12;
    @media screen and (max-width: 1024px) {
        max-height: 200px;
    }
`;