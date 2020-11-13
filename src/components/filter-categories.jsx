import React, { Component } from "react";
import FilterCategory from "./filter-categorie";
import Categories from "./data/categories-data.json";

class FilterCategories extends Component {
	render() {
		const { onCateActivation, filterCates } = this.props;
		return (
			<section className="card">
				<header className="card-header">Category</header>
				<ul className="list-group list-group-flush">
					{
						//For each category in data, render a category button.
						Categories.map((cate) => (
							<FilterCategory
								key={cate.id}
								name={cate.name}
								onCateActivation={onCateActivation}
								filterCates={filterCates}
							/>
						))
					}
				</ul>
			</section>
		);
	}
}

export default FilterCategories;
