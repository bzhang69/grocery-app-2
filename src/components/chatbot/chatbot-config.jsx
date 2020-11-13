import { createChatBotMessage } from "react-chatbot-kit";
import Start from "./start";

const config = {
	initialMessages: [
		createChatBotMessage(`Hello! Welcome! May I help you?`, {
			widget: "start",
		}),
	],
	botName: "Grocery Helper",
	customStyles: {
		botMessageBox: {
			backgroundColor: "#376B7E",
		},
		chatButton: {
			backgroundColor: "#376B7E",
		},
	},
	widgets: [
		{
			widgetName: "start",
			widgetFunc: (props) => <Start {...props} />,
		},
	],
};

export default config;
