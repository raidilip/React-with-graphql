import React, { useState } from "react";
import { Message } from "../types";
import DesignChat from "./components/Chat";

const DesignSession: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  return <DesignChat messages={messages} setMessages={setMessages}/>;
};

export default DesignSession;
