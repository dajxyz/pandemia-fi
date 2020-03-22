import React from "react";
import Card from "../../components/card";
import "./tietopankki.css";

const Tietopankki: React.FunctionComponent = () => {
  return (
    <div className="tietopankki-page__grid-container">
      <div className="tietopankki-page__grid-item--large">
        <Card>
          <h1>Tietopankki</h1>
        </Card>
      </div>
    </div>
  );
};

export default Tietopankki;
