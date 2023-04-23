const Player: React.FC<{
    audioBlob: Blob
  }> = ({audioBlob}) => {
    const link = window.URL.createObjectURL(audioBlob)
    return <audio src={link} controls />
  };