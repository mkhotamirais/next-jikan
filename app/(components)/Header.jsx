import Link from "next/link";
import Search, { SearchBtn } from "./Search";

export default function Header() {
  return (
    <header className="z-50 h-16 bg-jikan-primary px-3 sticky top-0">
      <nav className="flex h-full items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-jikan-accent ">
          Next Jikan
        </Link>
        <div className="flex gap-4">
          <Search />
          <SearchBtn />
          <div>
            <Link href="">lain</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
