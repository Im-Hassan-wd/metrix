import React from "react";
import { useParams } from "react-router-dom";
import { Iconly } from "react-iconly";

// styles
import "./Navbar.css";

export default function Navbar({ setMobileMenu, screenWidth }) {
  //   console.log(useParams);
  return (
    <nav className="navbar">
      <div className="main">
        {screenWidth <= 512 && (
          <button className="hamburger" onClick={() => setMobileMenu(true)}>
            <Iconly name="Filter" set="two-tone" />
          </button>
        )}
        <div>Dashboard</div>

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
        <Iconly name="Home" set="bulk" primaryColor="blue" size={15} />
      </div>
    </nav>
  );
}
