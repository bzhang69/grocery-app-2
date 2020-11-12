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
				<section className="nav">
					<div className="card-body">
						<div className="float-right">
							<ul className="pagination pagination-sm">
								<li className="page-item">
									<a className="page-link" href="#">
										1
									</a>
								</li>
								<li className="page-item">
									<a className="page-link" href="#">
										2
									</a>
								</li>
								<li className="page-item">
									<a className="page-link" href="#">
										3
									</a>
								</li>
								<li className="page-item">
									<a className="page-link" href="#">
										»
									</a>
								</li>
							</ul>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Items;
