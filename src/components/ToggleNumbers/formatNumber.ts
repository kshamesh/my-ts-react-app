import { NumberMode } from "./numberModeStore";

export const formatNumber = (value: number, mode: NumberMode): string => {
  switch (mode) {
    case NumberMode.Millions:
      return `${(value / 1_000_000).toFixed(2)}M`;
    case NumberMode.Thousands:
      return `${(value / 1_000).toFixed(2)}K`;
    default:
      return value.toString();
  }
};
