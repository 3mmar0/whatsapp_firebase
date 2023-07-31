import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import db from "../firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "./SidebarChat.css";
import { Link } from "react-router-dom";

function SidebarChat({ newChat, val, id }) {
  const [seed, setSeed] = useState();
  const [messeges, setMessages] = useState([]);

  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("1")
        .orderBy("timestamp", "desc")
        .onSnapshot((snap) => setMessages(snap.docs.map((e) => e.data())));
    }
  }, [id]);
  // console.log(id);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const addNewChat = () => {
    const roomName = prompt("plz enter your room name!!");

    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
  };

  const side = {
    color: "black",
    textDecoration: "none",
  };

  return !newChat ? (
    <Link style={side} to={`/rooms/${id}`}>
      <div className="sidebarchat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebarchat__info">
          <h3>{val.name}</h3>
          <p>{messeges[0]?.message || ""}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div className="sidebarchat" onClick={addNewChat}>
      <h2>Add new Chat</h2>
    </div>
  );
}

export default SidebarChat;
