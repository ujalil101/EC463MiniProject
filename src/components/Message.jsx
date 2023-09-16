import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();
  const [showTimestamp, setShowTimestamp] = useState(false);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  const formatTimestamp = (timestamp) => {
    try {
      // Format the timestamp directly as it is stored in Firestore
      const date = new Date(timestamp);

      // Format the date and time
      return date.toLocaleString();
    } catch (error) {
      console.error("Error parsing time:", error);
      return "Invalid Timestamp";
    }
  };

  const toggleTimestamp = () => {
    setShowTimestamp(!showTimestamp);
  };

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
      onClick={toggleTimestamp}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        {showTimestamp && (
          <span>{formatTimestamp(message.date.toDate())}</span>
        )}
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
