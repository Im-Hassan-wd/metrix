import React from "react";
import { useLocation } from "react-router-dom";
import { Iconly } from "react-iconly";

// styles
import "./Navbar.css";
import Breadcrumb from "../breadcrumb/Breadcrumb";

export default function Navbar({ setMobileMenu, screenWidth }) {
  const location = useLocation();
  const path = location.pathname.substring(1);

  return (
    <nav className="navbar">
      <div className="main">
        {screenWidth <= 612 && (
          <button className="hamburger" onClick={() => setMobileMenu(true)}>
            <Iconly name="Filter" set="two-tone" />
          </button>
        )}
        <div className="route">{path ? path : "dashboard"}</div>

        <div className="profile-list">
          <div className="profile">
            <span>Nanny's shop</span>
            <img src="./assets/icon/chevron.svg" alt="exand" />
          </div>
          <Iconly name="Notification" set="bold" primaryColor="blue" />
          <img src="./assets/img/profile.png" alt="profile" />
        </div>
      </div>
      <div className="navigations">
        <Breadcrumb />
      </div>
    </nav>
  );
}
