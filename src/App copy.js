import React, { Component } from "react";
import Axios from "axios";
import "./App.css";

class App extends Component {
	state = { storeName: "" };

	getSqlData = () => {
		Axios.get("http://localhost:3001/api/get").then((response) => {
			console.log(response);
		});
	};

	setStoreName = (value) => {
		this.setState({ storeName: value });
	};
	submitData = () => {
		console.log(this.state);
		Axios.post("http://localhost:3001/api/insert", {
			storeName: this.state.storeName,
		});
	};
	render() {
		return (
			<div className="form">
				<label>Name</label>
				<input
					type="text"
					name="storeName"
					onChange={(e) => {
						this.setStoreName(e.target.value);
					}}
				/>
				<button onClick={this.getSqlData}> submit</button>
			</div>
		);
	}
}

export default App;
