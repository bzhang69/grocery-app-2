import React, { Component } from "react";
import NavBar from "../components/navbar";
import Items from "../components/items";
import Filters from "../components/filters";
import ItemsData from "../components/data/items-data.json";
import ItemDisplay from "../components/item-display";

class AppPage extends Component {
	state = {
		filterText: "",
		filterCates: [],
		showModal: false,
		modalItem: {},
	};

	filterUpdate = (value) => {
		this.setState({
			filterText: value,
		});
	};

	handleCateActivation = (value) => {
		let filterCates = this.state.filterCates;
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

	handleItemOpen = (item) => {
		this.setState({
			showModal: !this.state.showModal,
			modalItem: item,
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
				</main>
			</React.Fragment>
		);
	}
}

export default AppPage;
