import React, { Component } from "react";

class FilterCategory extends Component {
	onClickHandler(name) {
		let classes = "list-group-item btn";
		//Change category label to active/inactive.
		classes += this.props.filterCates.includes(name) ? " active" : "";
		return classes;
	}
	render() {
		const { name } = this.props;
		return (
			<li
				onClick={() => {
					this.props.onCateActivation(name);
					this.onClickHandler();
				}}
				className={this.onClickHandler(name)}
			>
				<a>
					<i className="fa fa-angle-right"></i> {name}
				</a>
			</li>
		);
	}
}

export default FilterCategory;
