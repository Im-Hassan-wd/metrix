import React from "react";
import { Iconly } from "react-iconly";

import { summary } from "../summaryData";

export default function Card() {
  return (
    <div className="cards">
      {summary.map((summ) => (
        <div className="card">
          <div className="card-head">
            {summ.icon}
            <p>
              <small>{summ.date}</small>
              <img src="./assets/icon/chevron.svg" alt="drop down" />
            </p>
          </div>
          <div className="card-body">
            {summ.overview.map((item) => (
              <div>
                <small>{item.label}</small>
                <h3>{item.value} </h3>
                {item?.percentage && (
                  <small className="action">+{item?.percentage}%</small>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
