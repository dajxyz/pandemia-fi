import React from "react";
import Card from "../../components/card";
import "./uutishuone.css";

const Uutishuone: React.FunctionComponent = () => {
  return (
    <div className="uutishuone-page__grid-container">
      <div className="uutishuone-page__grid-item--large">
        <Card>
          <h1>Uutishuone</h1>
        </Card>
      </div>
      <div className="uutishuone-page__grid-item">
        <Card>
          Placeholder text
        </Card>
      </div>
    </div>
  );
};

export default Uutishuone;
