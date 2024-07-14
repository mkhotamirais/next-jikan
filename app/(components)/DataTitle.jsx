import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function DataTitle({ children, href }) {
  return (
    <div className="flex justify-between items-center mb-2">
      <h1 className="text-2xl font-bold">{children}</h1>
      {href && (
        <Link href={href} className="text-jikan-accent flex items-center gap-2 min-w-max">
          See all
          <FaArrowRight />
        </Link>
      )}
    </div>
  );
}
