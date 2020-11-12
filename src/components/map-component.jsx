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

	setSelectedStore = (store) => {
		this.setState({
			selectedStore: store,
		});
		console.log(this.state.selectedStore.pos);
	};
	render() {
		const { storeData } = this.props;

		return (
			<LoadScript googleMapsApiKey="AIzaSyAkf5VW9uhw1UoTZcxTRvUwF1COqQtTvzs">
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
