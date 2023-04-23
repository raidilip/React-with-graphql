import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { FiSend } from "react-icons/fi";
import { MdAttachFile } from "react-icons/md";
import * as uuid from "uuid";
import { Message } from "../types";

interface Props {
  messages: Message[];
  setMessages: Dispatch<SetStateAction<Message[]>>;
}

const Chat: React.FC<Props> = (props) => {
  const [input, setInput] = useState<string>("");
  const [file, setFile] = useState<File | undefined>(undefined);
  const chatElementRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input && !file) return;

    setInput("");
    setFile(undefined);
    props.setMessages([
      ...props.messages,
      {
        id: uuid.v4(),
        text: input || "",
        file: file,
        user: "Alice",
      },
    ]);
    const chatElement = chatElementRef.current;
    if (chatElement) {
      chatElement.scrollTop = chatElement.scrollHeight;
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFile(file);
  };

  return (
    <div className="w-full rounded-md shadow-md">
      <div
        ref={chatElementRef}
        className="divide-y divide-gray-200 overflow-y-scroll"
        style={{ height: "80vh" }}
      >
        <ul>
          {props.messages.map((message) => (
            <li key={message.id} className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">
                  {message.user}
                </span>
                {message.file && (
                  <div className="flex items-center">
                    <audio controls>
                      <source src={URL.createObjectURL(message.file!)} />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                )}
              </div>
              <div className="mt-2 max-w-xl text-sm text-gray-700">
                <p>{message.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <form onSubmit={handleSubmit} className="mt-2">
        <div className="flex items-center border rounded-md border-gray-400 px-3 py-2">
          <input
            type="text"
            value={input}
            onChange={handleInput}
            className="flex-1 appearance-none focus:outline-none focus:ring-0"
            placeholder="Type your message here..."
          />
          <label htmlFor="file-input" className="ml-2 cursor-pointer">
            <MdAttachFile size={20} />
          </label>
          <input
            id="file-input"
            type="file"
            accept=".mp3,audio/*"
            onChange={handleFileChange}
            className="hidden"
          />
          <button
            type="submit"
            className="ml-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <FiSend size={20} />
          </button>
        </div>
        {file && (
          <div className="mt-2">
            <span className="font-medium">{file.name}</span> ({file.size} bytes)
          </div>
        )}
      </form>
    </div>
  );
};

export default Chat;
