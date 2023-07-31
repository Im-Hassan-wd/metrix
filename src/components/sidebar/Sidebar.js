import React from "react";
import { NavLink } from "react-router-dom";
// import { Iconly } from "react-iconly";

// css
import "./Sidebar.css";

// sidebar list items (data)
import { listItems, sidebarInfo } from "../../utils/SidebarData";

export default function Sidebar({ screenWidth, mobileMenu, setMobileMenu }) {
  return (
    <>
      {(mobileMenu || screenWidth > 512) && (
        <div className="sidebar">
          <div className="logo">
            <img src="./assets/icon/logo.svg" alt="logo" />
            <span>Metrix</span>
          </div>

          <ul>
            {listItems.map((item) => (
              <li onClick={() => setMobileMenu(false)} key={item.name}>
                <NavLink exact to={item.to}>
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>

          <ul className="info">
            {sidebarInfo.map((item) => (
              <li key={item.name}>
                <NavLink exact to={item.to}>
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
