import React, { Component } from "react";

class Item extends Component {
	render() {
		const { item } = this.props;
		return (
			<div className="col-md-4">
				<section
					className="card btn"
					onClick={() => this.props.onItemOpen(item)}
				>
					<div className="pro-img-box">
						<img className="card-img-top" src={item.url} alt={item.name} />
						<div className="card-body">
							<h5 className="card-title">{item.name}</h5>
							<p className="card-text">{item.desc}</p>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Item;
