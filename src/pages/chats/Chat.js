import React from "react";
import { Iconly } from "react-iconly";
import { Link } from "react-router-dom";
// styles
import "./Chat.css";

// components
import SearchBar from "./SearchBar";
import Message from "./Message";

// utils
import { chats } from "../../utils/ChatData";

export default function Chat() {
  return (
    <div className="conversations">
      <div className="head">
        <h3>Conversations with Customers</h3>
        <button className="btn">New message</button>
      </div>
      <div className="main">
        <div className="chats">
          <div className="chats-head">
            <h4>Contacts</h4>
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
            <img src="./assets/img/person-1.png" alt="avatar" />
            <div>
              <p className="name">Hassan Warwick</p>
              <span className="status">
                <div className="dot"></div>online
              </span>
              <span className="date">12:00pm</span>
            </div>
            <div className="">
              <span className="">New customer</span>
              <Link to="/chats">view profile</Link>
              <div className="summary">
                <Iconly name="Bag" size={15} />
                <small>0</small>
                <small>order</small>
              </div>
            </div>
          </div>
          <div className="message">
            <Message />
          </div>
        </div>
      </div>
    </div>
  );
}
