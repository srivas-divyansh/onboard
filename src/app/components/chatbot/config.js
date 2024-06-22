import { createChatBotMessage } from "react-chatbot-kit";
import React from "react";
import MyAvatar from "../avatar";

const config = {
  initialMessages: [createChatBotMessage(`Hey!!`)],
  botName: "OnBoard Bot",
  customStyles: {
    botMessageBox: { backgroundColor: "#DD7A29" },
    chatButton: { backgroundColor: "#DD7a29" },
  },
  customComponents: {
    botAvatar: (props) => <MyAvatar {...props} />,
  },
};

export default config;
