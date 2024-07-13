"use client";

import { useAnim } from "../../store/useAnim";

export default function Konten({ children }) {
  const { search, toggleSearch } = useAnim();
  const handleMouseEnter = () => {
    if (search) toggleSearch();
  };

  return (
    <main onMouseEnter={handleMouseEnter} className="p-4">
      {children}
    </main>
  );
}
