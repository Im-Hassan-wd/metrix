import React from "react";

export default function Message() {
  return (
    <div className="message">
      <div className="message-content">
        <p className="">Hello, I want to make enquiries about your product</p>
        <small>12:50 am</small>
      </div>
      <div className="message-content owner">
        <div className="">
          <p className="">Hello Janet, thank you for reaching out</p>
        </div>
        <small>
          12:55 am <span></span>
        </small>
      </div>
      <div className="message-content owner">
        <p className="">What do you need to know?</p>
        <small>
          12:55 am <span>c</span>
        </small>
      </div>
      <div className="message-content">
        <p className="">
          I want to know if the price is negotiable, i need about 2 Units
        </p>
        <small>12:57 am</small>
      </div>
    </div>
  );
}
