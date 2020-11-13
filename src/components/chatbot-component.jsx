import React from "react";
import Chatbot from "react-chatbot-kit";
import config from "./chatbot/chatbot-config";
import MessageParser from "./chatbot/message-parser";
import ActionProvider from "./chatbot/action-provider";

//Chatbot component uses actionProvider to register responses. Message parser to interpret user input.
function ChatbotComponent() {
	return (
		<div>
			<Chatbot
				config={config}
				messageParser={MessageParser}
				actionProvider={ActionProvider}
			/>
		</div>
	);
}

export default ChatbotComponent;
