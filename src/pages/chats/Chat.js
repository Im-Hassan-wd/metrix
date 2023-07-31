import React from "react";
import "./Chat.css";
import SearchBar from "./SearchBar";
import { chats } from "../../utils/ChatData";
import Message from "./Message";

export default function Chat() {
  return (
    <div className="conversations">
      <div className="head">
        <h4>Conversations with Customers</h4>
        <button className="btn">New message</button>
      </div>
      <div className="main">
        <div className="chats">
          <div className="chats-head">
            <p>Contacts</p>
            <div className="chats-length">34</div>
          </div>
          <SearchBar />
          <ul>
            {chats.map((chat) => (
              <li key={chat.id}>
                <img src={chat.thumbnail} alt={chat.name} />
                <div>
                  <p className="name">{chat.name}</p>
                  <p className="content">{chat.content}</p>
                </div>
                <div>
                  <p className="date">{chat.date}</p>
                  <p className="status">{chat.status}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="messages">
          <div className="user-details">
            {/* <div> */}
            <img src="./assets/img/person-1.png" alt="avatar" />
            <div>
              <p className="name">Hassan Warwick</p>
              <span className="status">online</span>
              <span className="date">12:00pm</span>
            </div>
            <div>
              <p className="content">New</p>
            </div>
          </div>
          {/* </div> */}
          <div className="message">
            <Message />
          </div>
        </div>
      </div>
    </div>
  );
}
