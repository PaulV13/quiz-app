import { create } from "zustand";

export const useGameStore = create((set) => ({
  score: 0,
  increaseScore: (newScore) =>
    set((state) => ({ score: state.score + newScore })),
  resetScore: () => set({ score: 0 }),
}));
