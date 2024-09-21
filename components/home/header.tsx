"use client";

import Link from "next/link";
import { ModeToggle } from "../mode-toggle";
import { Search, SearchTrigger } from "@/app/search/[key]/search";

export default function Header() {
  return (
    <header className="z-50 border-b sticky top-0 backdrop-blur bg-white/50 dark:bg-black/50">
      <div className="container">
        <div className="h-16 flex justify-between items-center">
          <div>
            <Logo />
          </div>
          <div className="flex gap-3">
            <SearchTrigger />
            <Search />
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}

const Logo = () => {
  return (
    <Link href="/" className="text-lg font-semibold uppercase">
      NEXT<span className="text-primary">JIKAN</span>
    </Link>
  );
};
