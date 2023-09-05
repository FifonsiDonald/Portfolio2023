import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <div>
        {props.icon}
      </div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}
