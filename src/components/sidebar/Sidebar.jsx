import {
  DonutLarge,
  Message,
  MoreVert,
  SearchRounded,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import db from "../firebase";
import { useStateValue } from "../StateProvider";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";

function Sidebar() {
  const [rooms, setRooms] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    db.collection("rooms")
      .orderBy("timestamp", "desc")
      .onSnapshot((snap) =>
        setRooms(
          snap.docs.map((e) => ({
            data: e.data(),
            id: e.id,
          }))
        )
      );
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src={user?.photoURL} />
        <div className="header__icons">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Message />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="search__info">
          <SearchRounded />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat newChat />
        {rooms.map((e) => (
          <SidebarChat key={e.id} val={e.data} id={e.id} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
