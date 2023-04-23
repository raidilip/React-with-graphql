import * as React from "react";
import { useVoiceRecorder } from "use-voice-recorder";
import { useState } from "react";
import { Recorder } from "../components/Recorder";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";

const VoiceRecordingPage = () => {
  const [records, updateRecords] = useState<any[]>([]);
 

//   const addAudioElement = (blob: any) => {
//     const url = URL.createObjectURL(blob);
//     updateRecords([...records, url])
//     const audio = document.createElement("audio");
//     audio.src = url;
//     audio.controls = true;
//     document.body.appendChild(audio);

//     console.log(blob);
//   };

const recorderControls = useAudioRecorder()
const addAudioElement = (blob: any) => {
  const url = URL.createObjectURL(blob);
  const audio = document.createElement("audio");
  audio.src = url;
  audio.controls = true;
  document.body.appendChild(audio);
};

  return (
    <div>
      <h1>Voices:</h1>
      <div>
        {/* <h3>On air: {isRecording ? 'on' : 'off'}</h3> */}
        {/* <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button> */}
      </div>
      <div>
        <h1>Records:</h1>
        {/* {records.map((data, idx) => (
          <div key={idx}>
            <audio src={data} controls preload={'metadata'} />
          </div>
        ))} */}

<AudioRecorder 
onRecordingComplete={(blob) => {
    const url = URL.createObjectURL(blob);
    updateRecords([...records,url]);
    addAudioElement(blob)
}}
recorderControls={recorderControls}
 />
 <div>
    {
        records?.map((item)=> {
            return (
                <div className="flex items-center">
                <audio controls>
                  <source src={item} />
                  Your browser does not support the audio element.
                </audio>
              </div>
            )
        })
    }
 
 </div>
      </div>
    </div>
  )
};

export default VoiceRecordingPage;