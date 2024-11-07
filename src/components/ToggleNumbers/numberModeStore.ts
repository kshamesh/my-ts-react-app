import { create } from "zustand";

export enum NumberMode {
  Default,
  Millions,
  Thousands,
}

interface NumberModeStore {
  numberMode: NumberMode;
  setNumberMode: (mode: NumberMode) => void;
}

export const useNumberModeStore = create<NumberModeStore>((set) => ({
  numberMode: NumberMode.Default,
  setNumberMode: (mode: NumberMode) => set({ numberMode: mode }),
}));
