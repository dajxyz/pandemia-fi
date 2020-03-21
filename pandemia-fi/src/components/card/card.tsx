import React from "react";
import "./card.css";

const Card: React.FunctionComponent = ({ children }) => {
  return <div className="card">{children}</div>;
};

export default Card;
