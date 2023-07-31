import {
  AttachFile,
  EmojiEmotions,
  Mic,
  MoreVert,
  SearchRounded,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../firebase";
import { useStateValue } from "../StateProvider";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "./Chat.css";

function Chat() {
  const { roomId } = useParams();
  const [{ user }] = useStateValue();
  const [messages, setMessages] = useState([]);
  const [roomName, setRoomName] = useState("");
  const [input, setInput] = useState("");
  const sendMess = (e) => {
    e.preventDefault();
    db.collection("rooms").doc(roomId).collection("1").add({
      message: input,
      name: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snap) => setRoomName(snap.data().name));
      db.collection("rooms")
        .doc(roomId)
        .collection("1")
        .orderBy("timestamp", "desc")
        .onSnapshot((snap) => {
          setMessages(snap.docs.map((e) => e.data()));
        });
    }
  }, [roomId]);

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="header__info">
          <h3>{roomName}</h3>
          <p>
            last seen{" "}
            {new Date(messages[0]?.timestamp?.toDate()).toDateString()}
          </p>
        </div>
        <div className="header__icons">
          <IconButton>
            <SearchRounded />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {messages.map((e, i) => (
          <div
            key={i}
            className={`body__mess ${e.name === user.displayName && "user"}`}
          >
            <span className="name">{e.name}</span>
            <p>{e.message}</p>
            <span className="time">
              {new Date(e.timestamp?.toDate()).toLocaleString()}
            </span>
          </div>
        ))}
      </div>
      <div className="chat__footer">
        <EmojiEmotions />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="enter your message"
          />
          <button type="submit" onClick={sendMess}>
            Send
          </button>
        </form>
        <Mic />
      </div>
    </div>
  );
}

export default Chat;
