import React from "react";
import { NavLink } from "react-router-dom";
import { Iconly } from "react-iconly";

// css
import "./Sidebar.css";

// sidebar list items (data)
import { listItems } from "./Data";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="./assets/icon/logo.svg" alt="logo" />
        <span>Metrix</span>
      </div>

      <ul>
        {listItems.map((item) => (
          <li key={item.name}>
            <NavLink exact to={item.to}>
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      {/* <ul>
        <li>
          <Iconly name="Category" />
          <span>Contact support</span>
        </li>
      </ul> */}
    </div>
  );
}
