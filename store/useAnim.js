import { create } from "zustand";

export const useAnim = create((set) => ({
  keyword: "",
  search: false,
  page: 1,
  topAnime: null,
  searchResult: null,
  setKeyword: (keyword) => set({ keyword }),
  toggleSearch: () => set((state) => ({ search: !state.search })),
  setPage: (page) => set({ page }),
  setTopAnime: (topAnime) => set({ topAnime }),
  setSearchResult: (searchResult) => set({ searchResult }),
}));
