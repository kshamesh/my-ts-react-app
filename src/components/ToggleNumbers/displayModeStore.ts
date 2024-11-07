// stores/displayModeStore.ts
import { create } from "zustand";

type DisplayMode = "default" | "millions" | "thousands";

interface DisplayModeStore {
  displayMode: DisplayMode;
  setDisplayMode: (mode: DisplayMode) => void;
}

export const useDisplayModeStore = create<DisplayModeStore>((set) => ({
  displayMode: "default",
  setDisplayMode: (mode: DisplayMode) => set({ displayMode: mode }),
}));
