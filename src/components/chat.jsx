import Cam from '../image/video-camera.png';
import More from '../image/more.png';
import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {

  const { data } = useContext(ChatContext);

  

  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>{data.user?.displayName}</span>
        <div className='chatIcons'>

          <img src={Cam} alt='' class="FT"/>
          <img src={More} alt='' />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
