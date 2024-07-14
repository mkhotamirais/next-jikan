"use client";

import { FaMagnifyingGlass } from "react-icons/fa6";
import { useAnim } from "../../store/useAnim";
import { useRouter } from "next/navigation";
import { useRef, useEffect } from "react";

export default function Search() {
  const { setPage, keyword, setKeyword, search, toggleSearch } = useAnim();
  const searchRef = useRef(null);

  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword) {
      router.push(`/search/${keyword}`);
    } else {
      router.push(`/`);
    }
    toggleSearch();
    setPage(1);
  };

  const handleFocus = () => {
    if (search) {
      searchRef.current.select();
    }
  };

  useEffect(() => {
    if (search) {
      searchRef.current.focus();
    }
  }, [search]);

  return (
    <form
      onSubmit={handleSubmit}
      className={`${
        search ? "scale-y-100" : "scale-y-0"
      } origin-top sm:scale-y-100 mx-3 fixed sm:static z-50 top-16 left-0 right-0 sm:bg-inherit sm:w-72 transition-all`}
    >
      <div className="flex mt-1 rounded-xl overflow-hidden bg-jikan-primary sm:bg-jikan-secondary">
        <input
          ref={search ? searchRef : null}
          type="search"
          className="bg-inherit w-full p-2 focus:outline-none"
          value={keyword}
          placeholder="Search here.."
          onChange={(e) => setKeyword(e.target.value)}
          onFocus={handleFocus}
        />
        <button type="submit" className="bg-jikan-accent w-12 flex items-center justify-center hover:opacity-80">
          <FaMagnifyingGlass />
        </button>
      </div>
    </form>
  );
}

export const SearchBtn = () => {
  const { toggleSearch } = useAnim();
  const handleClick = () => {
    toggleSearch();
  };

  return (
    <button onClick={handleClick} className="block sm:hidden text-jikan-accent">
      <FaMagnifyingGlass />
    </button>
  );
};
