// utils/formatNumber.ts
export const formatNumber = (
  value: number,
  mode: "default" | "millions" | "thousands"
): string => {
  switch (mode) {
    case "millions":
      return `${(value / 1_000_000).toFixed(2)}M`;
    case "thousands":
      return `${(value / 1_000).toFixed(2)}K`;
    default:
      return value.toString();
  }
};
