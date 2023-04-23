import React, { useState } from "react";
import { Message } from "../../types";
import InterviewerChat from "../../components/Interviewr";
const Interviewer: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  return <InterviewerChat messages={messages} setMessages={setMessages}/>;
};

export default Interviewer;
