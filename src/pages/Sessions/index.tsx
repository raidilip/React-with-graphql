import React, { useState } from "react";
import Chat from "../../components/Chat";
import { Message } from "../../types";

const Sessions: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  return <Chat messages={messages} setMessages={setMessages}/>;
};

export default Sessions;
