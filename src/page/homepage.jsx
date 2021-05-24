import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { TopContainer, BackgroundFilter, TitlesContainer, TitleText, TitleTextSignup } from "../pageStyles/homepage";
import { DiscordIcon } from "../components/DiscordLogo";

const Homepage = () => {
    return (
        <>
            <Navbar />
            <TopContainer>
                <BackgroundFilter>
                    <TitlesContainer>
                        <TitleText>
                            Seasonal Draft
                        </TitleText>
                        <TitleText>
                            Championship
                        </TitleText>
                        <TitleText>
                            Season 9
                        </TitleText>
                        <TitleTextSignup>
                            Season 9 in progress 
                        </TitleTextSignup>
                        <TitleTextSignup>
                            For more info
                        </TitleTextSignup>
                        <DiscordIcon />
                    </TitlesContainer>
                </BackgroundFilter>
                <Footer />
            </TopContainer>
        </>
    )
}

export default Homepage;