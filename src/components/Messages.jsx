import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import Message from "./Message";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      if (doc.exists()) {
        setMessages(doc.data().messages);
      } else {
        setMessages([]); // Set messages to an empty array if the document doesn't exist
      }
    });
    return () => {
      unSub();
    };
  }, [data.chatId]);

  console.log(messages);

  return (
    <div className='messages'>
      {messages &&
        messages.map((m) => (
          <Message message={m} key={m.id} />
        ))}
    </div>
  );
};

export default Messages;
