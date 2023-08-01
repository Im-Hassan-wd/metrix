import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./Breadcrumb.css";
import { Iconly } from "react-iconly";

const Breadcrumb = () => {
  const location = useLocation();
  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment !== "");

  return (
    <nav className="breadcrumb">
      <ul>
        <li>
          <Link to="/">
            <Iconly name="Home" set="bulk" primaryColor="blue" size={15} />
          </Link>
        </li>
        {pathSegments.map((segment, index) => {
          const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
          return (
            <li key={index}>
              <Link to={path}> / {segment}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
