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
      {(mobileMenu || screenWidth > 612) && (
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
                  {item?.count && <small>{item?.count}</small>}
                </NavLink>
              </li>
            ))}
          </ul>

          <ul className="info">
            {sidebarInfo.map((item) => (
              <li onClick={() => setMobileMenu(false)} key={item.name}>
                <NavLink exact to={item.to}>
                  {item.name.includes("Free") ||
                  item.name.includes("Contact") ? (
                    <img src={item.icon} alt={item.name} />
                  ) : (
                    <span>{item.icon}</span>
                  )}
                  <span>
                    {item.name}
                    {item.name.includes("Free") && (
                      <div>
                        <span>Upgrade your account</span>
                      </div>
                    )}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
