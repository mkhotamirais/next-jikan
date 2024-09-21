import { create } from "zustand";

type SearchState = {
  cari: boolean;
  showCari: () => void;
  hideCari: () => void;
  key: string;
  setKey: (key: string) => void;
};

export const useJikan = create<SearchState>((set) => ({
  cari: false,
  showCari: () => set({ cari: true }),
  hideCari: () => set({ cari: false }),
  key: "",
  setKey: (key) => set({ key }),
}));
