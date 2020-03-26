import React from "react";
import { Box, Text } from "rebass";

interface NumberMetricCardProps {
  metric: number;
  explainer: string;
}

const numberFormatter = new Intl.NumberFormat("fi-FI", {
  maximumSignificantDigits: 3,
});

const NumberMetricCard = ({ metric, explainer }: NumberMetricCardProps) => {
  return (
    <Box>
      <Text textAlign="center" fontSize={[5, 6]} color="text">
        {numberFormatter.format(metric)}
      </Text>

      <Text textAlign="center" fontSize={[2, 2, 2]} color="text">
        {explainer}
      </Text>
    </Box>
  );
};

export default NumberMetricCard;
