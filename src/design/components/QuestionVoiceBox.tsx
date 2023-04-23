import React, { FC, useState } from 'react';
// @ts-ignore
import testVoiceMessage from '../../assets/test-voice.mp3';
import { useEffect } from 'react';

type Props = {
    message?: any;
    question: any;
    text?: string;
}
const QuestionVoiceBox:FC<Props> = ({message,question,text}) => {

  
  const [loading, setLoading] = useState(true);
  useEffect(()=> {
    setTimeout(()=> {
      setLoading(false);
    },10000);

    return ()=> {
      clearTimeout(10000)
    }
  },[]);

  if(loading) {
    return <></>
  }

  return (
    <div className='w-2/5 rounded-lg bg-primary p-4'>
        <div className='text-xs' style={{color: "#A3CDFE"}}>Interviewer asked</div>
        <div className=' border-white border-b text-white my-2'>
        {text}
        </div>
         <div className="mt-2 max-w-xl text-sm text-white">
                {/* <p>{text}</p> */}
              </div>
              <div>
              <audio controls style={{border:'none, border-radius:0px'}}>
                      <source src={question!} />
                      Your browser does not support the audio element.
                    </audio>
              </div>
    </div>
  )
}

export default QuestionVoiceBox