import React from "react";
import { NumberMode, useNumberModeStore } from "./numberModeStore";

const NumberModeSwitcher: React.FC = () => {
  const { numberMode, setNumberMode } = useNumberModeStore();

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <button
        onClick={() => setNumberMode(NumberMode.Default)}
        disabled={numberMode === NumberMode.Default}
      >
        Default
      </button>
      <button
        onClick={() => setNumberMode(NumberMode.Millions)}
        disabled={numberMode === NumberMode.Millions}
      >
        Millions
      </button>
      <button
        onClick={() => setNumberMode(NumberMode.Thousands)}
        disabled={numberMode === NumberMode.Thousands}
      >
        Thousands
      </button>
    </div>
  );
};

export default NumberModeSwitcher;
