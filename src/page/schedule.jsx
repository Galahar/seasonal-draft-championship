import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { ContentContainer, Background, MenuContainer, Text, List } from "../pageStyles/schedule";

axios.defaults.baseURL = 'https://38.34.36.153:80';

class Schedule extends Component {
	constructor(props) {
		super(props);
		this.state = {
			gameList: []
		};
	}
	
	componentDidMount() {
		this.refreshList();
	}
	
	refreshList = () => {
		axios
			.get("/api/games/")
			.then((res) => this.setState({ gameList: res.data }))
			.catch((err) => console.log(err));
	};
	
	renderItems = () => {
		return this.state.gameList.map((item) => (
			<List
				key={item.id}
				className=""
			>
				<Text>
				{item.team1+" vs "+item.team2+": "+item.date}
				<br></br>
				{item.tournamentCodes}
				</Text>
			</List>
		));
	  };

	render() {
		return (
			<>
				<Navbar />
				<Background>
					<ContentContainer>
						<MenuContainer>
							<ul>
								{this.renderItems()}
							</ul>
						</MenuContainer>
					</ContentContainer>						
				</Background>
				<Footer />
			</>
		)
	}
}

export default Schedule;