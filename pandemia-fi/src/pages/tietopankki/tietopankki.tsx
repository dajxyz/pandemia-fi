import React from "react";
import { Card, Heading, Text } from 'rebass';
import "./tietopankki.css";

const Tietopankki: React.FunctionComponent = () => {
  return (
    <div className="tietopankki-page__grid-container">
      <div className="tietopankki-page__grid-item--large">
        <Card>
          <Heading
            as="h1"
            fontSize={[ 4, 5 ]}
          >
            Tietopankki
          </Heading>
        </Card>
      </div>
    </div>
  );
};

export default Tietopankki;
