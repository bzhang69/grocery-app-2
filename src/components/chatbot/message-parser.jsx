// MessageParser starter code
class MessageParser {
	constructor(actionProvider, state) {
		this.actionProvider = actionProvider;
		this.state = state;
	}

	parse(message) {
		const lowerCase = message.toLowerCase();
		if (lowerCase.includes("hello") || lowerCase.includes("hi")) {
			this.actionProvider.greet();
		}
		if (lowerCase.includes("product") || lowerCase.includes("item")) {
			this.actionProvider.handleProducts();
		}
		if (lowerCase.includes("store") || lowerCase.includes("shop")) {
			this.actionProvider.handleStores();
		}
		if (lowerCase.includes("map") || lowerCase.includes("location")) {
			this.actionProvider.handleMap();
		}
		if (lowerCase.includes("filter") || lowerCase.includes("search")) {
			this.actionProvider.handleFilter();
		}
	}
}

export default MessageParser;
