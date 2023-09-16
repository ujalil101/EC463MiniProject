import React, { useContext, useState, useEffect} from "react";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Search = () => {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);
  const [err, setErr] = useState(false);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const searchUsers = async () => {
      if (username.trim() === "") {
        setUsers([]); // Clear the user list when the search input is empty
        return;
      }

     
      const q = query(
        collection(db, "users"),
        where("displayName", ">=", username),
        where("displayName", "<", username + "\uf8ff")
      );

      try {
        const querySnapshot = await getDocs(q);
        const foundUsers = [];
        querySnapshot.forEach((doc) => {
          foundUsers.push(doc.data());
        });
        setUsers(foundUsers);
      } catch (err) {
        setErr(true);
        setUsers([]);
      }
    };

    searchUsers();
  }, [username]);

  const handleSelect = async (selectedUser) => {
    const combinedId =
      currentUser.uid > selectedUser.uid
        ? currentUser.uid + selectedUser.uid
        : selectedUser.uid + currentUser.uid;

    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        // Create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        // Create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: selectedUser.uid,
            displayName: selectedUser.displayName,
            photoURL: selectedUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", selectedUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}

    // Reset the input and user list
    setUsername("");
    setUsers([]);
    setErr(false);
  };

  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Find a user"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      {err && <span>User not found!</span>}
      {users.length > 0 && (
        <div className="userList">
          {users.map((user) => (
            <div
              className="userChat"
              key={user.uid}
              onClick={() => handleSelect(user)}
            >
              <img src={user.photoURL} alt="" />
              <div className="userChatInfo">
                <span>{user.displayName}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;