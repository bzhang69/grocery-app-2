import React, { Component } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
	width: "400px",
	height: "400px",
};

const center = {
	lat: 41.499321,
	lng: -81.694359,
};

class MapComponent extends Component {
	render() {
		const { markerPos } = this.props;
		console.log(markerPos);
		return (
			<LoadScript googleMapsApiKey="AIzaSyCakVDrjELYKNT7SjRIvSl1YbgVMtm3u4o">
				<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
					{markerPos.map((pos) => (
						<Marker position={pos} key={markerPos.indexOf(pos)} />
					))}
					{/* Child components, such as markers, info windows, etc. */}
					<></>
				</GoogleMap>
			</LoadScript>
		);
	}
}

export default MapComponent;
