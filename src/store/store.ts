import { create } from "zustand";

interface GameState {
  score: number;
  increaseScore: (newScore: number) => void;
  resetScore: () => void;
}

export const useGameStore = create<GameState>((set) => ({
  score: 0,
  increaseScore: (newScore: number) =>
    set((state) => ({ score: state.score + newScore })),
  resetScore: () => set({ score: 0 }),
}));
