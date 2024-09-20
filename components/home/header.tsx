import Link from "next/link";
import { ModeToggle } from "../mode-toggle";

export default function Header() {
  return (
    <header className="border-b">
      <div className="container">
        <div className="h-16 flex justify-between items-center">
          <div>
            <Logo />
          </div>
          <div>
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
