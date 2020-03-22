import React from "react";
import Card from "../../components/card";
import "./about.css";

const About: React.FunctionComponent = () => {
  return (
    <div className="about-page__grid-container">
      <div className="about-page__grid-item--large">
        <Card>
          <h1>Tietoa meistä</h1>
        </Card>
      </div>
    </div>
  );
};

export default About;
