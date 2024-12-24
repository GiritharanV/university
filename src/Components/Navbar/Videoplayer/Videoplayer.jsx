import React, { useRef } from 'react'
import './Videoplayer.css'

const Videoplayer = ({playState,setPlayState}) => {

  const player = useRef(null);
  const closeplayer=(e)=>{
if(e.target === player.current){
  setPlayState(false)
}
  }
  return (
    <div className={`video-player ${playState?'':'hide'}`} ref={player} onClick={closeplayer}>
        <video src='../../src/assets/collegevdo2.mp4' autoPlay muted controls/>
      
    </div>
  )
}

export default Videoplayer
