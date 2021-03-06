import React, { Component } from "react";
import NavBar from "../components/navbar";
import Items from "../components/items";
import Filters from "../components/filters";
import ItemsData from "../components/data/items-data.json";
import ItemDisplay from "../components/item-display";
import ChatbotComponent from "../components/chatbot-component";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaRobot } from "react-icons/fa";
import { Button } from "react-bootstrap";

//This is the application page. Filters and item list passes data to this parent component.
class AppPage extends Component {
	state = {
		filterText: "",
		filterCates: [],
		showModal: false,
		modalItem: {},
		showChatbot: false,
	};

	//Update the selected filter indexes.
	filterUpdate = (value) => {
		this.setState({
			filterText: value,
		});
	};

	//Set selected filter categories and its button element to active state.
	handleCateActivation = (value) => {
		let filterCates = this.state.filterCates;
		//Filter out the unselected categories.
		if (filterCates.includes(value)) {
			filterCates = filterCates.filter((c) => c !== value);
			this.setState({
				filterCates,
			});
		} else {
			filterCates.push(value);
			this.setState({
				filterCates,
			});
		}
	};

	//Show/hide clicked item modal.
	handleItemOpen = (item) => {
		this.setState({
			showModal: !this.state.showModal,
			modalItem: item,
		});
	};

	//Show/hide chatbot component.
	showChatbot = () => {
		this.setState({
			showChatbot: !this.state.showChatbot,
		});
	};

	render() {
		return (
			<React.Fragment>
				<header style={{ marginBottom: "50px" }}>
					<NavBar />
				</header>

				<main>
					<div className="container">
						<div className="row">
							<ItemDisplay
								showModal={this.state.showModal}
								onCloseItem={this.handleItemOpen}
								modalItem={this.state.modalItem}
							/>
							<Filters
								filterUpdate={this.filterUpdate}
								onCateActivation={this.handleCateActivation}
								filterCates={this.state.filterCates}
							/>
							<Items
								items={ItemsData}
								filterText={this.state.filterText}
								filterCates={this.state.filterCates}
								onItemOpen={this.handleItemOpen}
							/>
						</div>
					</div>
					<div className="chatbot">
						{!this.state.showChatbot && (
							<Button variant="primary" onClick={this.showChatbot}>
								<FaRobot color="white" size="30px" />
							</Button>
						)}

						{this.state.showChatbot && (
							<div>
								<Button
									variant="secondary"
									size="sm"
									onClick={this.showChatbot}
								>
									<AiOutlineCloseCircle color="white" size="20px" />
								</Button>
								<ChatbotComponent />
							</div>
						)}
					</div>
				</main>
			</React.Fragment>
		);
	}
}

export default AppPage;
