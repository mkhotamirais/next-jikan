import { create } from "zustand";

type SearchState = {
  cari: boolean;
  showCari: () => void;
  hideCari: () => void;
  keyword: string;
  setKeyword: (keyword: string) => void;
  page: number;
  setPage: (page: number) => void;
};

export const useJikan = create<SearchState>((set) => ({
  cari: false,
  showCari: () => set({ cari: true }),
  hideCari: () => set({ cari: false }),
  keyword: "",
  setKeyword: (keyword) => set({ keyword }),
  page: 1,
  setPage: (page) => set({ page }),
}));
