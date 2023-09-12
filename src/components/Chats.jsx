import React, { useContext, useState, useEffect } from 'react'
import { doc, onSnapshot } from "firebase/firestore";
import {db} from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Chats = () => {
  return (
    <div className='chats'>
        <div className='userChat'>
        <img src='https://images.pexels.com/photos/1007066/pexels-photo-1007066.jpeg?auto=compress&cs=tinysrgb&w=800' alt=''/>
        <div className="userChatInfo">
          <span>Alan</span>
          <p>Hello</p>
        </div>
      </div>
      <div className='userChat'>
        <img src='https://images.pexels.com/photos/1007066/pexels-photo-1007066.jpeg?auto=compress&cs=tinysrgb&w=800' alt=''/>
        <div className="userChatInfo">
          <span>Alan</span>
          <p>Hello</p>
        </div>
      </div>
      <div className='userChat'>
        <img src='https://images.pexels.com/photos/1007066/pexels-photo-1007066.jpeg?auto=compress&cs=tinysrgb&w=800' alt=''/>
        <div className="userChatInfo">
          <span>Alan</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  )
}

export default Chats