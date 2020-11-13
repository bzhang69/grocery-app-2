import React, { Component } from "react";

//This component haven't been completed yet.
class FilterPrice extends Component {
	state = {};
	render() {
		return (
			<section className="card">
				<header className="card-header">Price Range</header>
				<div className="card-body">
					<form>
						<div className="form-group">
							<input
								type="range"
								className="form-control-range"
								min="0"
								max="20"
							></input>
						</div>
					</form>
				</div>
			</section>
		);
	}
}

export default FilterPrice;
