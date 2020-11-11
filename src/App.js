import React, { Component } from "react";
import "./App.css";

class App extends Component {
	state = {};
	render() {
		return (
			<div className="primary">
				<label>Name</label>
				<input type="text" name="name" />
			</div>
		);
	}
}

export default App;
