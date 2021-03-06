import React, { Component } from "react";
import {
	GoogleMap,
	LoadScript,
	Marker,
	InfoWindow,
} from "@react-google-maps/api";

class MapComponent extends Component {
	state = {
		center: {
			lat: 41.499321,
			lng: -81.694359,
		},
		selectedStore: null,
	};

	//Save the store information which is clicked on the map.
	setSelectedStore = (store) => {
		this.setState({
			selectedStore: store,
		});
	};
	render() {
		const { storeData } = this.props;
		//googleMapsApiKey is generated through google map api service with my personal account.
		return (
			<LoadScript googleMapsApiKey="">
				<GoogleMap
					mapContainerStyle={{
						width: "400px",
						height: "400px",
					}}
					center={this.state.center}
					zoom={10}
				>
					{storeData.map((store) => (
						<Marker
							onClick={() => {
								this.setSelectedStore(store);
							}}
							position={store.pos}
							key={store.id}
						/>
					))}
					{this.state.selectedStore && (
						<InfoWindow
							position={this.state.selectedStore.pos}
							onCloseClick={() => {
								this.setSelectedStore(null);
							}}
						>
							<div>
								<h6>{this.state.selectedStore.name}</h6>
								<div>{this.state.selectedStore.desc}</div>
							</div>
						</InfoWindow>
					)}
				</GoogleMap>
			</LoadScript>
		);
	}
}

export default MapComponent;
