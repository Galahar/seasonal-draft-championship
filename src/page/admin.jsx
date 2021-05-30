import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ContentContainer, Background, Dropdown, MenuContainer, Label, Input, Submit } from "../pageStyles/admin";

const getKeys = async () => {
};

const Admin = () => {
	function testFunction(e) {
		e.preventDefault();
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({"mapType": "SUMMONERS_RIFT","metadata": "","pickType": "TOURNAMENT_DRAFT","spectatorType": "ALL","teamSize": 5})
		};
		const count = 1;
		fetch("https://americas.api.riotgames.com/lol/tournament-stub/v4/codes?count="+count+"&tournamentId=6908&api_key=RGAPI-8475f21a-8233-4394-9d21-cf8bea97690d",requestOptions)
			.then(response => response.json())
			.then(data => console.log(data));
		return;
	}
    return (
        <>
            <Navbar />
			<Background>
				<ContentContainer>
					<MenuContainer>
						<Label>Map:</Label>
						<Dropdown id="map">
							<option value="SUMMONERS_RIFT">SUMMONERS_RIFT</option>
							<option value="TWISTED_TREELINE">TWISTED_TREELINE</option>
							<option value="HOWLING_ABYSS">HOWLING_ABYSS</option>
						</Dropdown>
					</MenuContainer>
					<MenuContainer>
						<Label>Pick Type:</Label>
						<Dropdown id="type">
							<option value="TOURNAMENT_DRAFT">TOURNAMENT_DRAFT</option>
							<option value="BLIND_PICK">BLIND_PICK</option>
							<option value="DRAFT_MODE">DRAFT_MODE</option>
							<option value="ALL_RANDOM">ALL_RANDOM</option>
						</Dropdown>
					</MenuContainer>
					<MenuContainer>
						<Label>Number of Games:</Label>
						<Input id="count" type="Number" min="1" max="7" />
					</MenuContainer>
					<MenuContainer>
						<Submit onClick={testFunction}>Generate</Submit>
					</MenuContainer>
				</ContentContainer>
				<ContentContainer id="output">
				</ContentContainer>							
			</Background>
			<Footer />
        </>
    )
}

export default Admin;