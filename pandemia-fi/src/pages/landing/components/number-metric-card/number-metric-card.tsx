import React from "react";
import { Box, Text } from "rebass";
import "./number-metric-card.css";

interface NumberMetricCardProps {
  metric: number;
  explainer: string;
}

const numberFormatter = new Intl.NumberFormat("fi-FI", {
  maximumSignificantDigits: 3
});

const NumberMetricCard = ({ metric, explainer }: NumberMetricCardProps) => {
  return (
    <Box
      className="number-metric-card"
    >
      <Text
        className="number-metric-card__metric"
        textAlign="center"
        fontSize={[5, 6]}
        color="text"
      >
        {numberFormatter.format(metric)}
      </Text>

      <Text
        className="number-metric-card__explainer"
        textAlign="center"
        fontSize={[2, 2, 2]}
        color="text"
      >
        {explainer}
      </Text>
    </Box>
  );
};

export default NumberMetricCard;
