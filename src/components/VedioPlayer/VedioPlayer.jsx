import React, { useRef } from 'react'
import './VedioPlayer.css'
import college_video from '../../assets/College-video.mp4'

const VedioPlayer = ({playState, setPlayState}) => {

    const player = useRef(null)
    const closePlayer = (e) => {
        if(e.target === player.current){
            setPlayState(false);
        }
    }

  return (
    <div className={`vedioPlayer ${playState?'':'hide'}`} ref = {player} onClick={closePlayer}>
        <video src={college_video} autoPlay muted controls></video>
    </div>
  )
}

export default VedioPlayer