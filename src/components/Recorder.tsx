import { useVoiceRecorder } from "use-voice-recorder";

export const Recorder: React.FC<{
    onRecorded: (data: Blob) => void
  }> = ({onRecorded}) => {

    const {isRecording, stop, start} = useVoiceRecorder(onRecorded);
    
    return (
      <div>
        <div>
          On air: {isRecording ? 'on' : 'off'}
        </div>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
      </div>
    )
  };