// components/ValueRenderer.tsx
import React from "react";
import { useNumberModeStore } from "./numberModeStore";
import { formatNumber } from "./formatNumber";

interface NumberValueRendererProps {
  value: number;
}

const NumberValueRenderer: React.FC<NumberValueRendererProps> = ({ value }) => {
  const { numberMode } = useNumberModeStore();
  return <span>{formatNumber(value, numberMode)}</span>;
};

export default NumberValueRenderer;
