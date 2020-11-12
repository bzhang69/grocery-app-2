import React, { Component } from "react";
import FilterCategories from "./filter-categories";
import FilterPrice from "./filter-price";

class Filters extends Component {
	filterUpdate() {
		const val = this.searchValue.value;
		this.props.filterUpdate(val);
	}

	render() {
		const { onCateActivation, filterCates } = this.props;
		return (
			<div className="col-md-3">
				<section className="card">
					<div className="card-body">
						<input
							ref={(value) => (this.searchValue = value)}
							onChange={this.filterUpdate.bind(this)}
							type="text"
							placeholder="Keyword Search"
							className="form-control"
						/>
					</div>
				</section>
				<FilterCategories
					onCateActivation={onCateActivation}
					filterCates={filterCates}
				/>
				<FilterPrice />
			</div>
		);
	}
}

export default Filters;
