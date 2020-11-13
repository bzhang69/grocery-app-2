import React from "react";

import "./start.css";

//Display buttons and keywords for users to choose. Pass actions accordingly to action provider and make responses.
const Start = (props) => {
	const options = [
		{ text: "Products", handler: props.actionProvider.handleProducts, id: 1 },
		{ text: "Stores", handler: props.actionProvider.handleStores, id: 2 },
		{ text: "Map", handler: props.actionProvider.handleMap, id: 3 },
		{ text: "Filter", handler: props.actionProvider.handleFilter, id: 4 },
	];

	const optionsMarkup = options.map((option) => (
		<button
			className="learning-option-button"
			key={option.id}
			onClick={option.handler}
		>
			{option.text}
		</button>
	));

	return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default Start;
