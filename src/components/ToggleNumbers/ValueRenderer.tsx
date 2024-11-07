// components/ValueRenderer.tsx
import React from "react";
import { useDisplayModeStore } from "./displayModeStore";
import { formatNumber } from "./formatNumber";

interface ValueRendererProps {
  value: number;
}

const ValueRenderer: React.FC<ValueRendererProps> = ({ value }) => {
  const { displayMode } = useDisplayModeStore();
  return <span>{formatNumber(value, displayMode)}</span>;
};

export default ValueRenderer;
