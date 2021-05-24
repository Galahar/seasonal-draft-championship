import React from "react";
import { Nav, NavLink, NavMenu, TopOfNavMenu, TopLeftText, TopRightText, TopRightTextContainer, TopRightTextChildOne, TopRightTextChildTwo, BottomOfNavMenu, MobileNavMenu } from "./NavbarElements";
import { SDCIcon } from "../Logo";

const Navbar = () => {

    return (
        <>
            <Nav>
                <SDCIcon />
                <MobileNavMenu>
                </MobileNavMenu>
                <NavMenu>
                    <TopOfNavMenu >
                        <TopLeftText>
                            SDC Seasonal Draft Championship
                        </TopLeftText>
                        <TopRightTextContainer>
                            <TopRightTextChildOne>
                                <TopRightText to="/live" activeStyle>
                                    Rulebook
                                </TopRightText>
                            </TopRightTextChildOne>
                            <TopRightTextChildTwo>
                                <TopRightText to="/live" activeStyle>
                                    Login
                                </TopRightText>
                            </TopRightTextChildTwo>
                        </TopRightTextContainer>
                    </TopOfNavMenu>
                    <BottomOfNavMenu>
                        <NavLink to='/live' activeStyle>
                            Live
                        </NavLink>
                        <NavLink to='/schedule' activeStyle>
                            Schedule
                        </NavLink>
                        <NavLink to='/teams' activeStyle>
                            Teams
                        </NavLink>
                        <NavLink to='/standings' activeStyle>
                            Standings
                        </NavLink>
                        <NavLink to='/statistics' activeStyle>
                            Statistics
                        </NavLink>
                        <NavLink to='/about' activeStyle>
                            About
                        </NavLink>
                    </BottomOfNavMenu>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
