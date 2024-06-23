import getResponse from "./geminiAPI";

class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    this.actionProvider.getReply(message);
  }
}

export default MessageParser;
