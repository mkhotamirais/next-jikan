"use client";

import { FadeLoader } from "react-spinners";

export default function LoaderFade() {
  return (
    <div className="z-500 absolute inset-0 top-16 flex items-center justify-center bg-black/10">
      <FadeLoader color="hsl(var(--primary))" />
    </div>
  );
}
