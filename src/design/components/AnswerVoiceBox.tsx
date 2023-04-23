import React, { FC, useEffect, useState } from 'react';
// @ts-ignore
import testVoiceMessage from '../../assets/test-voice.mp3';

type Props = {
    message: any;
}
const AnswerVoiceBox:FC<Props> = ({message}) => {

  const [loading, setLoading] = useState(true);
  useEffect(()=> {
    setTimeout(()=> {
      setLoading(false);
    },4000);

    return ()=> {
      clearTimeout(4000)
    }
  },[]);

  if(loading) {
    return <></>
  }
  
  return (
    <div className='w-2/5 rounded-lg bg-gray-700 p-4'>
        <div className=' border-white border-b text-white my-2'>
            Answer
        </div>
         <div className="mt-2 max-w-xl text-sm text-white">
                <p>{message.answer}</p>
              </div>
              <div>
              <audio controls style={{border:'none, border-radius:0px'}}>
                      <source src={message?.answer!} />
                      Your browser does not support the audio element.
                    </audio>
              </div>
    </div>
  )
}

export default AnswerVoiceBox