import React from "react";
import { Iconly } from "react-iconly";

import { summary } from "../../../utils/summaryData";

export default function Card() {
  return (
    <>
      {summary.map((summ, i) => (
        <div className={`card card-${i + 1}`} key={summ.id}>
          <div className="card-head">
            {summ.icon}
            <p>
              <small>{summ.date}</small>
              <i className="fi fi-rr-angle-small-down"></i>
            </p>
          </div>
          <div className="card-body">
            {summ.overview.map((item) => (
              <div key={item.label}>
                <p>{item.label}</p>
                <h3>{item.value} </h3>
                {item?.percentage && (
                  <small className="action">+{item?.percentage}%</small>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
