// components/DisplayModeSwitcher.tsx
import React from "react";
import { useDisplayModeStore } from "./displayModeStore";

const DisplayModeSwitcher: React.FC = () => {
  const { displayMode, setDisplayMode } = useDisplayModeStore();

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <button
        onClick={() => setDisplayMode("default")}
        disabled={displayMode === "default"}
      >
        Default
      </button>
      <button
        onClick={() => setDisplayMode("millions")}
        disabled={displayMode === "millions"}
      >
        Millions
      </button>
      <button
        onClick={() => setDisplayMode("thousands")}
        disabled={displayMode === "thousands"}
      >
        Thousands
      </button>
    </div>
  );
};

export default DisplayModeSwitcher;
