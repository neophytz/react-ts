import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { RenderIf } from '../util/RenderIf';
import { translate } from '../service/translate.service';

export const Dictaphone = () => {
  const [translatedSentence, setTranslatedSentence] = useState<string>("");

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  useEffect(() => {
    // this method can be used for real-time translation.
    if(transcript.length > 0){
      // console.log('you can translate me...')
    }
  }, [transcript])

  const reset = () => {
    resetTranscript()
    setTranslatedSentence("")
  }

  const googleTranslate = async () => {
    const res = await translate(transcript)
    setTranslatedSentence(res.data.translations[0].translatedText as string)
  } 

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  
  return (
    <div className='d-flex justify-content-center flex-column'>
      <div className='display-3 text-center mb-4'>{listening ? <MicOnIcon /> : <MicMuteIcon />}</div>

      <div className='d-flex justify-content-center'>
        <button className='mx-2 shadow-none btn btn-danger px-4' onClick={() => SpeechRecognition.stopListening()}>Stop</button>
        <button className='mx-2 shadow-none btn btn-success px-4' onClick={() => {reset(); SpeechRecognition.startListening()}}>Start</button>
        <button className='mx-2 shadow-none btn btn-warning px-4' onClick={() => reset()}>Reset</button>
      </div>

      <RenderIf condition={transcript.length > 0} component={
        <p className='px-3 py-2 bg-light text-dark text-center mt-3 rounded'>{transcript}</p>
      } />

      <RenderIf condition={transcript.length > 0 && !listening && translatedSentence.length === 0} component={
        <div className='mt-2 d-flex justify-content-end'>
          <button className='btn btn-primary px-4' onClick={() => googleTranslate()}>Tanslate</button>
        </div>
      } />

      <RenderIf condition={translatedSentence.length > 0} component={
        <div>
          <div className='my-3 display-6 text-center'>
            <DownIcon />
          </div>
          <div className='text-center p-3 bg-light text-dark rounded'>
            {translatedSentence}
          </div>
        </div>
      } />

    </div>
  );
};

const MicOnStyle = {height: 200, width: 200, backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url('https://cdn.dribbble.com/users/2058104/screenshots/4257296/media/c2f88aac5ea370fcc2daab786ff276c7.gif')`, backgroundRepeat: 'no-repeat' }

export const MicOnIcon = () => {
  return (
    <div className='rounded mx-auto bg-light' style={MicOnStyle}></div>
  )
}

export const MicMuteIcon = () => {
  return (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
      <line x1="1" y1="1" x2="23" y2="23"></line>
      <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path>
      <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path>
      <line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>
    </svg>
  )
}

export const DownIcon = () => {
  return (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M4.646 9.646a.5.5 0 01.708 0L8 12.293l2.646-2.647a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 010-.708z" clipRule="evenodd"></path>
      <path fill-rule="evenodd" d="M8 2.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V3a.5.5 0 01.5-.5z" clip-rule="evenodd"></path>
    </svg>
  )
}
