import React from "react";
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
    <div className="number-metric-card">
      <div className="number-metric-card__metric">
        {numberFormatter.format(metric)}
      </div>
      <div className="number-metric-card__explainer">{explainer}</div>
    </div>
  );
};

export default NumberMetricCard;
