// ActionProvider starter code
class ActionProvider {
	constructor(createChatBotMessage, setStateFunc, createClientMessage) {
		this.createChatBotMessage = createChatBotMessage;
		this.setState = setStateFunc;
		this.createClientMessage = createClientMessage;
	}

	//Update bot messages
	updateChatbotState(message) {
		this.setState((prevState) => ({
			...prevState,
			messages: [...prevState.messages, message],
		}));
	}

	greet = () => {
		const message = this.createChatBotMessage("Hello!");
		this.updateChatbotState(message);
	};

	handleProducts = () => {
		const message = this.createChatBotMessage(
			"You can view the listed products and click on them!"
		);
		this.updateChatbotState(message);
	};

	handleStores = () => {
		const message = this.createChatBotMessage(
			"After clicking on a product, you can view the stores that sells them on the map!"
		);
		this.updateChatbotState(message);
	};

	handleFilter = () => {
		const message = this.createChatBotMessage(
			"You can use the filter on your left to select categories to display or search keywords!"
		);
		this.updateChatbotState(message);
	};

	handleMap = () => {
		const message = this.createChatBotMessage(
			"You can click on the store markers on the Map to check out their information!"
		);
		this.updateChatbotState(message);
	};
}

export default ActionProvider;
