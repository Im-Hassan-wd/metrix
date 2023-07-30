import React from "react";
import { orders } from "../../../utils/OrderData";
export default function Order() {
  return (
    <div className="order">
      <h4>Recent orders</h4>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <img src={order.thumbnail} alt={order.name} />
            <div>
              <p className="name">{order.name}</p>
              <p className="price">{order.price}</p>
            </div>
            <div>
              <p className="date">{order.date}</p>
              <p className="status">{order.status}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
