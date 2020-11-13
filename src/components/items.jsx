import React, { Component } from "react";
import Item from "./item";

class Items extends Component {
	render() {
		const { items, filterText, filterCates, onItemOpen } = this.props;
		return (
			<div className="col-md-9">
				<div className="row">
					{items
						.filter((item) => {
							//Only display items that has selected tags.
							return (
								(filterCates.length === 0
									? true
									: filterCates.filter((r) => item.cate.indexOf(r) < 0)
											.length === 0) &&
								(filterText === "" || filterText.match(/^ *$/) !== null
									? true
									: item.name.toLowerCase().indexOf(filterText.toLowerCase()) >=
									  0)
							);
						})
						.map((item) => (
							<Item key={item.id} item={item} onItemOpen={onItemOpen} />
						))}
				</div>
			</div>
		);
	}
}

export default Items;
