import React from 'react'
import Add from '../image/image.png'
import Cam from '../image/video-camera.png'
import More from '../image/more.png'
import Messages from './Messages'
import Input from './Input'
const chat = () => {
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>Alan</span>
        <div className='chatIcons'>
          <img src={Add} alt ="" />
          <img src={Cam} alt ="" />
          <img src={More} alt ="" />
        </div>
       
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default chat