import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { FiSend } from "react-icons/fi";
import { MdAttachFile } from "react-icons/md";
import * as uuid from "uuid";
import { Message } from "../types";
import WelcomeContent from "../design/components/WelcomeContent";
import QuestionVoiceBox from "../design/components/QuestionVoiceBox";
import AnswerVoiceBox from "../design/components/AnswerVoiceBox";
// @ts-ignore
import testVoiceMessage from '../assets/test-voice.mp3';

// @ts-ignore
import q1 from '../assets/question_audio/question_1.mp3';
// @ts-ignore
import q2 from '../assets/question_audio/question_2.mp3';
// @ts-ignore
import q3 from '../assets/question_audio/question_3.mp3';
// @ts-ignore
import q4 from '../assets/question_audio/question_4.mp3';
// @ts-ignore
import q5 from '../assets/question_audio/question_5.mp3';

import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import axios from "axios";
import FirstQuestionBox from "../design/components/FirstQuestionBox";
import ScoreCard from "../design/components/ScoreCard";
interface Props {
  messages: Message[];
  setMessages: Dispatch<SetStateAction<Message[]>>;
}

const API_BASE_URL = 'http://172.16.4.228:7777';

const InterviewerChat: React.FC<Props> = (props) => {
  const [input, setInput] = useState<string>("");
  const [file, setFile] = useState<File | undefined>(undefined);
  const [sessionId, setSessionId] = useState<string>();

  const [answerLoading, setAnswerLoading] = useState(true);
  const [questionLoading, setQuestionLoading] = useState(true);

  // Recording file,
  const [records, updateRecords] = useState<any[]>([]);

  // Questions list
  const [questions, setQuestions] = useState<any[]>([]);


  const chatElementRef = useRef<HTMLDivElement>(null);

  let audionFile = new Audio(testVoiceMessage);


  // Get the sessions.
  useEffect(()=>{
    axios({
      method: 'post',
      url: `${API_BASE_URL}/api/v1/session/create`,
      data: {
      }
    }).then((res)=> {
      console.log(res?.data?.data);
      setSessionId(res?.data?.data.id);
    }).catch(error => {
    });

    // props.setMessages([
    //   {
    //     id: uuid.v4(),
    //     text: input || "",
    //     // @ts-ignore
    //     file: q1,
    //     // @ts-ignore

    //     user: "Alice",
    //   },
    // ]);

  },[]);

  const recorderControls = useAudioRecorder()
const addAudioElement = (blob: any) => {
  console.log(blob);
  // const url = URL.createObjectURL(blob);
  // const audio = document.createElement("audio");
  // audio.src = url;
  // audio.controls = true;
  // document.body.appendChild(audio);

  const questionId = uuid.v4();
  const question = "How are you?";

  // Form data for payload
  let formData = new FormData();  

  const myFile = new File([blob], 'file1.mp3', {
    type: blob.type,
});

  console.log(myFile)
  console.log("session id",sessionId);

  formData.append('question', question);   //append the values with key, value pair
  
  formData.append("audio",blob);


  // here post the data
  axios({
    method: 'post',
    url: `${API_BASE_URL}/api/v1/chat/${sessionId}`,
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  }).then((res)=> {
    console.log(res.data);
  }).catch(error => {

  });
};

  const handleSubmit = (file: any) => {
    // e.preventDefault();

    // const file = blob
    if (!input && !file) return;

    setInput("");
    setFile(undefined);
    props.setMessages([
      ...props.messages,
      {
        id: uuid.v4(),
        text: input || "",
        // @ts-ignore
        file: q1,
        // @ts-ignore
        answer: file,
        user: "Alice",
      },
    ]);
    const chatElement = chatElementRef.current;
    if (chatElement) {
      chatElement.scrollTop = chatElement.scrollHeight;
    }
  };

  // V2 code
  const onHandleSubmit =(e: React.FormEvent<HTMLFormElement>) => {
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
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFile(file);
  };

  const getQuestions =(i: number) => {
    if(i===0) {
      const url = q2
      return url
    } else if( i===1) {
      const url = q3
      return url
    }else if( i===2) {
      const url = q4
      return url
    }
    else if( i===3) {
      const url = q5
      return url
    }
    // else if( i===4) {
    //   const url = q
    //   return url
    // }
  }

  const getQuestionText =(i: number) => {
    if(i===0) {
      const url = "What specific skills and experiences do you bring to the table that make you a good fit for our AI team?"
      return url
    } else if( i===1) {
      const url = "What inspired you to apply for this position?"
      return url
    }else if( i===2) {
      const url = "How do you stay up-to-date with the latest developments in Machine Learning?"
      return url
    }
    else if( i===3) {
      const url = "Where do you see yourself in 5 years?"
      return url
    }
  }
  return (
    <div className="w-full">
        
      <div
        ref={chatElementRef}
        className="divide-y divide-gray-200 overflow-y-scroll"
        style={{ height: "80vh" }}
      >
        <WelcomeContent/>

        
        <FirstQuestionBox  question={q1} text={"Hello, welcome to the Fusemachines interview. Can you please introduce yourself?"}/>
        {/* {
          (props?.messages.length <5)?
          ( */}
          <ul>
             
            {props.messages.map((message,i) => (
              <li key={message.id} className="px-4 py-4 sm:px-6">
                {/* <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">
                    {message.user}
                  </span>
                  
                </div> */}
                {/* <div className="flex items-center">
                      <audio controls>
                        <source src={testVoiceMessage!} />
                        Your browser does not support the audio element.
                      </audio>
                    </div> */}
                
                
                <div className="flex justify-end">
                  {
                    // @ts-ignore
                    message?.answer? <AnswerVoiceBox message={message}/>: null
                  }
                  
                </div>

               { (i !==4) ? (<QuestionVoiceBox message={message} question={getQuestions(i)}
                            text={getQuestionText(i)}/>) : null}

                
               
              </li>
            ))}
          </ul>
          {/* ): 
          null
        } */}

        {/* {
         
         (props?.messages.length ===6)?
        ( <div>
          Congratulation! you have scored 7 /10
          </div>): null
        }
         */}

       
      </div>
     


    

      {/* <form onSubmit={handleSubmit} className="mt-2">
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
      </form> */}
       <div className="mt-2">
        {
          (props?.messages.length <5)? 
          <AudioRecorder 
          onRecordingComplete={(blob) => {
              const url = URL.createObjectURL(blob);
              
              handleSubmit(url)
          }}
          recorderControls={recorderControls}
           />
           :null
        }
    
        {
          (props?.messages.length ===5)?
          <ScoreCard/>: null
        }
      </div>
    </div>
  );
};

export default InterviewerChat;
